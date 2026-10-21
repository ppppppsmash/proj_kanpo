"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  /** 移動量 (px)。0 でフェードのみ */
  y?: number;
  once?: boolean;
};

const EASE = [0.16, 1, 0.3, 1] as const;

/** ビューポートに入ったら、下からゆっくり立ち上がる */
export function Reveal({
  delay = 0,
  y = 28,
  once = true,
  className,
  children,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 1.1, ease: EASE, delay }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** 画像用: マスクが開くように現れる */
export function RevealImage({
  delay = 0,
  className,
  children,
}: {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0.6 }}
      whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.4, ease: EASE, delay }}
      className={cn("will-change-[clip-path]", className)}
    >
      {children}
    </motion.div>
  );
}
