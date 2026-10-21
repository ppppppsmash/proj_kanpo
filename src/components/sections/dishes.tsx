import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { dishes } from "@/lib/dishes";
import { cn } from "@/lib/utils";

export function Dishes() {
  return (
    <section id="dishes" className="relative scroll-mt-20 py-28 md:py-40">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            en="Dishes"
            ja={["旨味を引き出す、", "独自の熟成とカット。"]}
            lead="熟成の仕方、カット、焼き方、調理法。すべては漢方和牛の旨味を最大限に引き出すために。"
          />
          <Reveal delay={0.2} className="shrink-0 text-[0.78rem] tracking-[0.2em] text-ash">
            ※ メニュー・価格は現在準備中です
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-flow-dense auto-rows-[13rem] grid-cols-2 gap-2 sm:auto-rows-[16rem] md:auto-rows-[15rem] md:grid-cols-4 md:gap-3 lg:auto-rows-[17rem]">
          {dishes.map((d, i) => (
            <Reveal
              key={d.title}
              delay={(i % 4) * 0.08}
              y={20}
              className={cn(
                "group relative overflow-hidden bg-sumi-2",
                d.span === "tall" && "row-span-2",
                d.span === "wide" && "col-span-2",
              )}
            >
              <li className="contents">
                <Image
                  src={d.src}
                  alt={d.title}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-[1800ms] ease-out-expo group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sumi/85 via-sumi/0 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-[2px] p-4">
                  <span className="text-[0.92rem] tracking-[0.15em]">{d.title}</span>
                  <span className="font-display text-[0.65rem] uppercase tracking-[0.3em] text-kin">
                    {d.en}
                  </span>
                </figcaption>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
