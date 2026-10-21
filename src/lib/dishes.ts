import type { StaticImageData } from "next/image";
import heroStand from "@/images/hero-stand.jpg";
import platter from "@/images/platter.jpg";
import tan from "@/images/tan.jpg";
import thickTan from "@/images/thick-tan.jpg";
import yukke from "@/images/yukke.jpg";
import hamburg from "@/images/hamburg.jpg";
import harami from "@/images/harami.jpg";
import nigiri from "@/images/nigiri.jpg";
import zabuton from "@/images/zabuton.jpg";
import akami from "@/images/akami.jpg";
import misuji from "@/images/misuji.jpg";
import tareLoin from "@/images/tare-loin.jpg";

export type Dish = {
  src: StaticImageData;
  /** 仮キャプション。正式なメニュー名・価格は後日差し替え */
  title: string;
  en: string;
  span?: "tall" | "wide";
};

/**
 * NOTE: メニュー名は写真から判断した仮のもの。
 * 正式なメニュー・価格が決まり次第、この配列を差し替える。
 */
/*
 * グリッド配置 (wide=2列, tall=2行, 他=1マス)。
 * 4列: 2W + 3T + 6S = 16マス = 4行ぴったり。2列 (モバイル) も grid-flow-dense で穴なし。
 */
export const dishes: Dish[] = [
  { src: platter, title: "漢方和牛 盛り合わせ", en: "Assorted Kampo Wagyu", span: "wide" },
  { src: thickTan, title: "厚切りタン", en: "Thick-cut Tongue", span: "tall" },
  { src: nigiri, title: "肉寿司", en: "Wagyu Nigiri" },
  { src: yukke, title: "ユッケ", en: "Yukke", span: "tall" },
  { src: tan, title: "タン", en: "Tongue" },
  { src: zabuton, title: "霜降り", en: "Marbled Cut", span: "tall" },
  { src: tareLoin, title: "ロース すき焼き風", en: "Loin, Sukiyaki Style", span: "wide" },
  { src: harami, title: "ハラミ", en: "Skirt" },
  { src: akami, title: "赤身", en: "Lean Cut" },
  { src: hamburg, title: "漢方和牛ハンバーグ", en: "Wagyu Hamburg" },
  { src: misuji, title: "赤身 希少部位", en: "Rare Lean Cut" },
];

export const heroImage = heroStand;
