import Image from "next/image";
import kounosuke from "@/images/kounosuke.jpg";
import { Reveal, RevealImage } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Producer() {
  return (
    <section id="producer" className="relative scroll-mt-20 py-28 md:py-40">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <RevealImage className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={kounosuke}
                alt="宮城の漢方和牛料理店「幸之助」の前に立つ生産者"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </RevealImage>
            <Reveal delay={0.2} className="mt-4 flex items-baseline justify-between text-[0.72rem] tracking-[0.2em] text-ash">
              <span>宮城県「幸之助」── 食のはじまり 漢方和牛料理</span>
              <span className="font-display uppercase tracking-[0.3em]">Miyagi</span>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <SectionHeading
              en="Producer"
              ja={["生産者の店へ、", "ようこそ。"]}
              lead="漢方和牛の生み親、関村清幸。廿年の試行錯誤の末に生まれた「牛のサプリメント」で育てる、生産者自らが投資した店です。"
            />
            <Reveal delay={0.15} className="mt-10 flex flex-col gap-6 text-[0.95rem] leading-[2.2] text-kinari-2">
              <p>
                東京・赤坂に「焼肉KAMPO」をオープンすることで、国内での認知拡大、そして海外展開も視野に入れ、宮城県畜産業の活性につなげたい。
              </p>
              <p>
                生産者だからこそ実現できる、抜群のコストパフォーマンス。自信をもって提供できるブランド和牛を、どうぞ心ゆくまで。
              </p>
            </Reveal>

            <Reveal delay={0.3} className="mt-14 border-l border-kin/50 pl-6">
              <p className="text-[1.3rem] leading-[1.9] tracking-[0.12em] sm:text-[1.5rem]">
                人間にいいものは、
                <br />
                牛にもいい。
              </p>
              <p className="font-display mt-3 text-[0.7rem] uppercase tracking-[0.4em] text-kin">
                Yakiniku Kampo
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
