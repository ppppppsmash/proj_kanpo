"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { heroImage } from "@/lib/dishes";
import { site } from "@/lib/site";
import { Button } from "@/components/button";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh items-end overflow-hidden">
      {/* 背景写真: ゆっくり寄っていく */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3.2, ease: EASE }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src={heroImage}
          alt="漢方和牛の盛り合わせ"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-[62%_center] md:object-center"
        />
      </motion.div>
      {/* 暗幕: 上は薄く、下は濃く */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sumi/55 via-sumi/10 to-sumi" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sumi/70 via-transparent to-transparent" />

      {/* 右端の縦書き */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: EASE, delay: 1.1 }}
        className="vertical-rl absolute right-6 top-28 hidden text-[0.85rem] tracking-[0.5em] text-kinari-2 md:block lg:right-10"
      >
        生産者の店へ、ようこそ
      </motion.p>

      <div className="mx-auto w-full max-w-[90rem] px-5 pb-16 pt-40 sm:px-8 md:pb-24">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-display block text-[0.78rem] uppercase tracking-[0.5em] text-kin"
        >
          Umami Yakiniku — Akasaka
        </motion.span>

        <h1 className="mt-6 max-w-[14em] text-[2.3rem] font-medium leading-[1.35] tracking-[0.08em] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.6rem]">
          {["溢れ出す旨味を、", "味わい尽くす。"].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.3, ease: EASE, delay: 0.7 + i * 0.15 }}
                className="block"
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 1.2 }}
          className="mt-7 max-w-[30rem] text-[0.95rem] leading-[2.1] text-kinari-2 md:text-base"
        >
          十四種の漢方を配合した飼料で育てた、宮城の希少な「漢方和牛」。
          その旨味を存分に引き出す、新ジャンルの焼肉です。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 1.45 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href={site.telHref} size="lg">
            ご予約 <span className="font-display tracking-[0.1em]">{site.tel}</span>
          </Button>
          <Button href="#concept" variant="outline" size="lg">
            Concept
          </Button>
        </motion.div>
      </div>

      {/* スクロール示唆 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="font-display text-[0.6rem] uppercase tracking-[0.4em] text-ash">
          Scroll
        </span>
        <span className="relative h-14 w-px overflow-hidden bg-line">
          <motion.span
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
            className="absolute inset-0 bg-kin"
          />
        </span>
      </motion.div>
    </section>
  );
}
