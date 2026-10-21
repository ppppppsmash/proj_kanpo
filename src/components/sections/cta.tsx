import Image from "next/image";
import tan from "@/images/tan.jpg";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function Cta() {
  return (
    <section className="relative isolate overflow-hidden py-32 md:py-44">
      <Image
        src={tan}
        alt=""
        fill
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sumi via-sumi/70 to-sumi" />
      <Reveal className="mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center sm:px-8">
        <span className="font-display text-[0.78rem] uppercase tracking-[0.5em] text-kin">
          Reservation
        </span>
        <h2 className="mt-6 text-[1.9rem] font-medium leading-[1.5] tracking-wide-jp sm:text-[2.6rem]">
          ご予約・お問い合わせ
        </h2>
        <p className="mt-5 max-w-[32rem] text-[0.92rem] leading-[2.1] text-kinari-2">
          ランチ・ディナーともにお電話にて承ります。個室のご利用、ご接待やご宴会のご相談もお気軽にどうぞ。
        </p>
        <a
          href={site.telHref}
          className="font-display mt-10 text-[2.4rem] tracking-[0.12em] transition-colors hover:text-kin sm:text-[3.4rem]"
        >
          {site.tel}
        </a>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={site.telHref} size="lg">
            電話で予約する
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
