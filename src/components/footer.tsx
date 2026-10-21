import { Logo } from "@/components/logo";
import { CopyrightYear } from "@/components/copyright-year";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-sumi">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 py-16 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="text-[0.85rem] leading-[1.9] text-ash">{site.tagline}</p>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-[0.82rem] tracking-[0.12em] text-kinari-2 sm:grid-cols-3">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-kin">
              {item.label}
            </a>
          ))}
        </div>

        <address className="not-italic text-[0.82rem] leading-[2] text-ash">
          〒{site.address.postal}
          <br />
          {site.address.full}
          <br />
          <a href={site.telHref} className="text-kinari-2 hover:text-kin">
            TEL {site.tel}
          </a>
        </address>
      </div>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 pb-8 sm:px-8">
        <small className="font-display text-[0.7rem] tracking-[0.3em] text-ash">
          © <CopyrightYear /> {site.nameEn}
        </small>
        <small className="font-display text-[0.7rem] tracking-[0.3em] text-ash">
          AKASAKA, TOKYO
        </small>
      </div>
    </footer>
  );
}
