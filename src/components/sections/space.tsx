import Image from "next/image";
import roomArt from "@/images/room-art.jpg";
import roomScroll from "@/images/room-scroll.jpg";
import plaque from "@/images/plaque.jpg";
import { Reveal, RevealImage } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Space() {
  return (
    <section id="space" className="relative scroll-mt-20 bg-sumi-2 py-28 md:py-40">
      <div className="hairline-kin absolute inset-x-0 top-0" />
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              en="Space"
              ja={["完全個室に、", "美しい絵画と書を。"]}
              lead="エレガントな女性、知性豊かな経営者をイメージした店づくり。会食やご接待、大切な方との記念日に。"
            />
            <Reveal delay={0.15} className="mt-10 text-[0.95rem] leading-[2.2] text-kinari-2">
              <p>
                赤坂の喧騒から一歩離れた、落ち着いた空間。壁には書と絵画をあしらい、周囲を気にせずゆっくりと漢方和牛を味わっていただけます。
              </p>
            </Reveal>
            <Reveal delay={0.25} className="mt-10">
              <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 border-t border-line pt-6 text-[0.88rem] tracking-[0.1em]">
                <dt className="text-ash">個室</dt>
                <dd className="text-kinari-2">完全個室をご用意</dd>
                <dt className="text-ash">用途</dt>
                <dd className="text-kinari-2">接待・会食・記念日・ご家族のお集まり</dd>
                <dt className="text-ash">認定</dt>
                <dd className="text-kinari-2">あか毛和牛 取扱指定店</dd>
              </dl>
            </Reveal>
          </div>

          <div className="grid grid-cols-6 gap-3 lg:col-span-7">
            <RevealImage className="relative col-span-6 aspect-[4/3] overflow-hidden">
              <Image
                src={roomArt}
                alt="個室の書と絵画"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover"
              />
            </RevealImage>
            <RevealImage delay={0.15} className="relative col-span-3 aspect-[4/5] overflow-hidden">
              <Image
                src={roomScroll}
                alt="個室に掛けられた書"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 28vw, 50vw"
                className="object-cover"
              />
            </RevealImage>
            <RevealImage delay={0.3} className="relative col-span-3 aspect-[4/5] overflow-hidden">
              <Image
                src={plaque}
                alt="あか毛和牛取扱指定店の認定盾"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 28vw, 50vw"
                className="object-cover"
              />
            </RevealImage>
          </div>
        </div>
      </div>
    </section>
  );
}
