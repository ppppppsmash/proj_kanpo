import Image from "next/image";
import platter from "@/images/platter.jpg";
import nigiri from "@/images/nigiri.jpg";
import { Reveal, RevealImage } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Concept() {
  return (
    <section id="concept" className="relative scroll-mt-20 py-28 md:py-40">
      <div className="mx-auto grid w-full max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionHeading
            en="Concept"
            ja={["漢方和牛という、", "新しい旨味。"]}
            lead="『焼肉KAMPO』のメニューコンセプトは、溢れ出す極上の旨味を味わい尽くす、新ジャンル『UMAMI焼肉』。"
          />
          <Reveal delay={0.15} className="mt-10 flex flex-col gap-6 text-[0.95rem] leading-[2.2] text-kinari-2">
            <p>
              「漢方和牛」の旨味に着目し、存分に引き出すため、熟成の仕方やカット、焼き方、調理法などを独自に開発。「UMAMI焼肉」として、新ジャンルを打ち立てました。
            </p>
            <p>
              知られざる漢方和牛の旨味を、たくさんの人に楽しんでほしい。そして、“UMAMI焼肉”の真髄をとことん、堪能してほしい。
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-12">
            <ul className="flex flex-col divide-y divide-line border-y border-line text-[0.9rem] tracking-[0.1em]">
              {[
                "生産者が投資した店、抜群のコストパフォーマンス",
                "エレガントな女性、知性豊かな経営者をイメージした店づくり",
                "完全個室に、美しい絵画と書を",
              ].map((t) => (
                <li key={t} className="flex items-start gap-4 py-4">
                  <span aria-hidden className="mt-[0.85em] size-[5px] shrink-0 bg-shu" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="relative lg:col-span-7 lg:pl-8">
          <RevealImage className="relative aspect-[3/2] overflow-hidden">
            <Image
              src={platter}
              alt="漢方和牛 盛り合わせ"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
          </RevealImage>
          <RevealImage
            delay={0.25}
            className="relative -mt-16 ml-auto w-[62%] overflow-hidden border-[10px] border-sumi md:-mt-24 md:w-[55%]"
          >
            <div className="relative aspect-[3/2]">
              <Image
                src={nigiri}
                alt="漢方和牛の肉寿司"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 32vw, 60vw"
                className="object-cover"
              />
            </div>
          </RevealImage>
          <p className="vertical-rl absolute -left-2 top-6 hidden text-[0.78rem] tracking-[0.4em] text-ash lg:block">
            UMAMI 焼肉 ─ 新ジャンル
          </p>
        </div>
      </div>
    </section>
  );
}
