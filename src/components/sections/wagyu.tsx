import Image from "next/image";
import zabuton from "@/images/zabuton.jpg";
import { Reveal, RevealImage } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { facts, herbs } from "@/lib/site";

export function Wagyu() {
  return (
    <section id="wagyu" className="relative scroll-mt-20 bg-sumi-2 py-28 md:py-40">
      <div className="hairline-kin absolute inset-x-0 top-0" />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* 上段: 見出し + 写真 */}
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <RevealImage className="relative aspect-[2/3] max-h-[34rem] overflow-hidden lg:max-h-none">
              <Image
                src={zabuton}
                alt="漢方和牛の霜降り"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </RevealImage>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7 lg:pl-10">
            <SectionHeading
              en="Kampo Wagyu"
              ja={["宮城の生産者が、", "二十年かけて", "辿り着いた牛。"]}
              lead="和牛同士を自然交配・自然分娩させ産まれた仔牛を、14種類の漢方をブレンドしたオリジナルの漢方飼料でじっくり育てています。"
            />
            <Reveal delay={0.15} className="mt-8 flex flex-col gap-6 text-[0.95rem] leading-[2.2] text-kinari-2">
              <p>
                生産数が少なく、1か月あたりの出荷頭数もわずか。都内にはあまり出回っていない、とても希少な銘柄です。
              </p>
              <p>
                特徴は、抜群の「旨味の濃さ」。柔らかい赤身と程よいサシが絶妙で、脂肪分はかなり低い温度で融けるため、さっぱりヘルシーに召し上がりいただけます。
              </p>
            </Reveal>

            {/* 数値 */}
            <Reveal delay={0.3} className="mt-14 grid grid-cols-3 divide-x divide-line border-y border-line">
              {facts.map((f) => (
                <div key={f.label} className="flex flex-col gap-1 px-3 py-7 first:pl-0 sm:px-6">
                  <span className="text-[0.72rem] tracking-[0.2em] text-ash">{f.label}</span>
                  <span className="font-display text-kin">
                    <span className="text-[2.2rem] leading-none sm:text-[3rem]">{f.value}</span>
                    <span className="ml-1 text-[0.95rem] tracking-[0.1em] font-serif text-kinari-2">
                      {f.unit}
                    </span>
                  </span>
                  <span className="text-[0.72rem] tracking-[0.1em] text-ash">{f.note}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>

        {/* 下段: 14種の漢方 */}
        <div className="mt-28 md:mt-40">
          <SectionHeading
            en="Fourteen Herbs"
            ja={["八年を掛けて、", "十四種の漢方配合を", "ついに公開。"]}
            align="center"
          />
          <Reveal delay={0.1} className="mx-auto mt-6 max-w-[34rem] text-center text-[0.9rem] leading-[2.1] text-kinari-2">
            「牛のサプリメント」と呼ぶ漢方飼料。人間にいいものは、牛にもいい。
          </Reveal>

          <ol className="mt-14 grid grid-cols-2 border-l border-t border-line sm:grid-cols-4 lg:grid-cols-7">
            {herbs.map((h, i) => (
              <Reveal
                key={h.no}
                delay={0.05 * (i % 7)}
                y={16}
                className="group relative flex aspect-square flex-col items-center justify-center gap-2 border-b border-r border-line p-3 transition-colors duration-700 hover:bg-kin/[0.06]"
              >
                <li className="contents">
                  <span className="font-display absolute left-3 top-2 text-[0.65rem] tracking-[0.2em] text-ash">
                    {String(h.no).padStart(2, "0")}
                  </span>
                  <span className="text-[1.25rem] font-medium tracking-[0.15em] sm:text-[1.35rem]">
                    {h.kanji}
                  </span>
                  <span className="text-[0.72rem] tracking-[0.2em] text-kinari-2">{h.name}</span>
                  <span className="text-[0.65rem] tracking-[0.15em] text-ash">{h.zh}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
