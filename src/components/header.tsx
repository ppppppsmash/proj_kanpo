"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Dialog } from "@base-ui-components/react/dialog";
import { useLenis } from "lenis/react";
import { Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => (e: React.MouseEvent) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;
    if (lenis) lenis.scrollTo(target, { offset: -72, duration: 1.6 });
    else target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-700 ease-out-quart",
        scrolled
          ? "border-b border-line bg-sumi/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[90rem] items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label={site.name} className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="メイン" className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={go(item.href)}
              className="group flex flex-col items-center gap-[2px] text-[0.8rem] tracking-[0.2em] text-kinari-2 transition-colors hover:text-kinari"
            >
              <span>{item.label}</span>
              <span className="h-px w-0 bg-kin transition-[width] duration-500 ease-out-quart group-hover:w-full" />
            </a>
          ))}
          <a
            href={site.telHref}
            className="ml-2 inline-flex h-10 items-center gap-2 border border-kin/60 px-5 text-[0.78rem] tracking-[0.22em] transition-colors duration-500 hover:border-kin hover:bg-kin/10"
          >
            <Phone className="size-3.5 text-kin" strokeWidth={1.5} />
            ご予約
          </a>
        </nav>

        {/* Mobile */}
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger
            aria-label="メニューを開く"
            className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
          >
            <span className="block h-px w-6 bg-kinari" />
            <span className="block h-px w-6 bg-kinari" />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Backdrop className="fixed inset-0 z-[70] bg-sumi/70 backdrop-blur-sm transition-opacity duration-500 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
            <Dialog.Popup className="fixed inset-y-0 right-0 z-[80] flex w-[min(88vw,24rem)] flex-col bg-sumi-2 px-8 pb-10 pt-6 outline-none transition-transform duration-600 ease-out-expo data-[ending-style]:translate-x-full data-[starting-style]:translate-x-full">
              <div className="flex h-12 items-center justify-between">
                <Dialog.Title className="sr-only">メニュー</Dialog.Title>
                <Logo compact />
                <Dialog.Close
                  aria-label="閉じる"
                  className="flex size-11 items-center justify-center text-kinari-2 hover:text-kinari"
                >
                  <X className="size-5" strokeWidth={1.25} />
                </Dialog.Close>
              </div>
              <nav aria-label="モバイルメニュー" className="mt-10 flex flex-col">
                {site.nav.map((item, i) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={go(item.href)}
                    style={{ transitionDelay: `${80 + i * 40}ms` }}
                    className="flex items-baseline justify-between border-b border-line py-5 text-[1.1rem] tracking-[0.2em]"
                  >
                    <span>{item.label}</span>
                    <span className="font-display text-[0.7rem] uppercase tracking-[0.3em] text-kin">
                      {item.en}
                    </span>
                  </a>
                ))}
              </nav>
              <a
                href={site.telHref}
                className="mt-auto inline-flex h-14 items-center justify-center gap-3 bg-shu text-[0.85rem] tracking-[0.3em]"
              >
                <Phone className="size-4" strokeWidth={1.5} />
                ご予約 {site.tel}
              </a>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
