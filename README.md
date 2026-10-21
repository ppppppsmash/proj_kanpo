# 焼肉KAMPO 公式サイト

東京・赤坂「焼肉KAMPO」(漢方和牛 / UMAMI焼肉) の公式ホームページ。

## スタック

| 役割 | ライブラリ |
| --- | --- |
| フレームワーク | Next.js 16 (App Router, Turbopack, Cache Components) / React 19 |
| スタイル | Tailwind CSS v4 (`src/app/globals.css` の `@theme` にトークン定義) |
| モーション | motion (Framer Motion) — 出現アニメーション、ヒーロー |
| スムーススクロール | lenis (`src/components/providers.tsx`、reduced-motion 時は無効) |
| UI プリミティブ | @base-ui-components/react — モバイルナビの Dialog |
| クラス合成 | clsx + tailwind-merge (`cn`)、class-variance-authority (Button) |
| アイコン | lucide-react |
| フォント | next/font: Shippori Mincho (和文) + Cormorant Garamond (欧文ラベル) |

## 構成

- `src/app/page.tsx` — 1 ページ構成 (Hero / Concept / 漢方和牛 / お料理 / 空間 / 生産者 / 店舗情報 / 予約 CTA)
- `src/lib/site.ts` — 店舗情報・14 種の漢方・数値などの一次データ (案内状 PDF が出典)
- `src/lib/dishes.ts` — 料理写真とキャプション (**キャプションは仮**。正式メニュー・価格が決まり次第差し替え)
- `src/images/` — `file/` の元写真をリサイズしたもの (static import で blur placeholder 付き)
- `file/` — クライアント提供の元素材 (PDF、写真、動画)

## 未対応 (後回し)

- ロゴ: 正式データ待ち。現在は `src/components/logo.tsx` の文字組み
- メニュー・価格ページ
- 多言語 (英語 / 中国語)
- 予約フォーム (現在は電話のみ)

## 開発

```bash
npm run dev    # http://localhost:3000
npm run build
npm run lint
```
