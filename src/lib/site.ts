/**
 * 店舗情報・コピーの一次情報。
 * 出典: file/横版【案内状】KANPO焼肉.pdf（表記は「KAMPO」に統一）
 */
export const site = {
  name: "焼肉KAMPO",
  nameEn: "YAKINIKU KAMPO",
  tagline: "人間にいいものは、牛にもいい。",
  description:
    "東京・赤坂、漢方和牛の生産者が営む焼肉店。14種類の漢方を配合した飼料で育てた希少な「漢方和牛」を、旨味を引き出す独自の熟成・カット・焼き方で味わう新ジャンル「UMAMI焼肉」。完全個室あり。",
  url: "https://yakiniku-kampo.com",
  tel: "03-5797-8637",
  telHref: "tel:0357978637",
  address: {
    postal: "107-0052",
    region: "東京都",
    locality: "港区",
    street: "赤坂2丁目8-13",
    building: "赤坂こういうビル101",
    full: "東京都港区赤坂2丁目8-13 赤坂こういうビル101",
  },
  access: [
    { line: "東京メトロ 南北線・銀座線", station: "溜池山王駅", exit: "11番出口", walk: "徒歩2分" },
    { line: "東京メトロ 千代田線", station: "赤坂駅", exit: "5a出口", walk: "徒歩5分" },
  ],
  hours: [
    { label: "ランチ", en: "Lunch", time: "11:30 – 14:30", note: "最終入店 14:00" },
    {
      label: "ディナー",
      en: "Dinner",
      time: "17:00 – 23:30",
      note: "最終入店 22:00 / ラストオーダー 22:30",
    },
  ],
  nav: [
    { href: "#concept", label: "コンセプト", en: "Concept" },
    { href: "#wagyu", label: "漢方和牛", en: "Kampo Wagyu" },
    { href: "#dishes", label: "お料理", en: "Dishes" },
    { href: "#space", label: "空間", en: "Space" },
    { href: "#producer", label: "生産者", en: "Producer" },
    { href: "#info", label: "店舗情報", en: "Information" },
  ],
} as const;

/** 八年を掛けて辿り着いた14種類の漢方配合（案内状より） */
export const herbs = [
  { no: 1, name: "えごま", kanji: "荏胡麻", zh: "紫苏叶" },
  { no: 2, name: "えごまの実", kanji: "荏胡麻の実", zh: "紫苏籽" },
  { no: 3, name: "こめぬか", kanji: "米糠", zh: "米糠" },
  { no: 4, name: "くわのは", kanji: "桑の葉", zh: "桑叶" },
  { no: 5, name: "そば", kanji: "蕎麦", zh: "荞麦" },
  { no: 6, name: "くこ", kanji: "枸杞", zh: "枸杞" },
  { no: 7, name: "ハブ茶", kanji: "波布茶", zh: "草决明" },
  { no: 8, name: "ろっかくれいし", kanji: "鹿角霊芝", zh: "鹿角灵芝" },
  { no: 9, name: "さんざし", kanji: "山査子", zh: "山楂" },
  { no: 10, name: "はとむぎ", kanji: "鳩麦", zh: "薏米" },
  { no: 11, name: "こんぶ", kanji: "昆布", zh: "海带" },
  { no: 12, name: "ステビア", kanji: "甜菊", zh: "甜叶菊" },
  { no: 13, name: "くまざさ", kanji: "熊笹", zh: "山白竹" },
  { no: 14, name: "なつめ", kanji: "棗", zh: "大枣" },
] as const;

/** 漢方和牛の数値的特徴（案内状より） */
export const facts = [
  {
    value: "1.5",
    unit: "倍",
    label: "アミノ酸",
    note: "黒毛和牛比",
  },
  {
    value: "2",
    unit: "倍以上",
    label: "グルタミン酸",
    note: "旨味のもと",
  },
  {
    value: "21.3",
    unit: "℃〜",
    label: "脂肪の融点",
    note: "21.3〜22.8℃で融ける",
  },
] as const;
