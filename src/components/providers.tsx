"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * スムーススクロール (Lenis) とモーション設定。
 * OS の「視差効果を減らす」が有効な場合は Lenis を無効化し、
 * motion のアニメーションも reducedMotion="user" で抑制する。
 */
export function Providers({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      {reduced ? (
        children
      ) : (
        <ReactLenis root options={{ lerp: 0.085, duration: 1.3, smoothWheel: true }}>
          {children}
        </ReactLenis>
      )}
    </MotionConfig>
  );
}
