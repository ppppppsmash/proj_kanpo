import { Phone } from "lucide-react";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.address.full)}&z=17&hl=ja&output=embed`;

export function Info() {
  return (
    <section id="info" className="relative scroll-mt-20 bg-sumi-2 py-28 md:py-40">
      <div className="hairline-kin absolute inset-x-0 top-0" />
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading en="Information" ja="店舗情報・アクセス" />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <dl className="flex flex-col divide-y divide-line border-y border-line text-[0.92rem]">
              <Row label="店名">
                {site.name}
                <span className="font-display ml-3 text-[0.7rem] uppercase tracking-[0.3em] text-kin">
                  {site.nameEn}
                </span>
              </Row>
              <Row label="住所">
                〒{site.address.postal}
                <br />
                {site.address.region}
                {site.address.locality}
                {site.address.street}
                <br />
                {site.address.building}
              </Row>
              <Row label="アクセス">
                <ul className="flex flex-col gap-1">
                  {site.access.map((a) => (
                    <li key={a.station}>
                      {a.station} {a.exit}より{a.walk}
                      <span className="ml-2 text-[0.75rem] text-ash">{a.line}</span>
                    </li>
                  ))}
                </ul>
              </Row>
              <Row label="営業時間">
                <ul className="flex flex-col gap-2">
                  {site.hours.map((h) => (
                    <li key={h.label} className="flex flex-col">
                      <span>
                        <span className="mr-3 inline-block w-[4.5em] text-ash">{h.label}</span>
                        <span className="font-display tracking-[0.1em] text-[1.05rem]">{h.time}</span>
                      </span>
                      <span className="text-[0.75rem] text-ash">{h.note}</span>
                    </li>
                  ))}
                </ul>
              </Row>
              <Row label="ご予約">
                <a
                  href={site.telHref}
                  className="font-display inline-flex items-center gap-2 text-[1.3rem] tracking-[0.1em] hover:text-kin"
                >
                  <Phone className="size-4 text-kin" strokeWidth={1.5} />
                  {site.tel}
                </a>
              </Row>
            </dl>
            <div className="mt-8">
              <Button
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.full)}`}
                variant="outline"
                external
              >
                Google Maps
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden border border-line bg-sumi lg:aspect-auto lg:h-full lg:min-h-[32rem]">
              <iframe
                title="焼肉KAMPO 地図"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="map-dark absolute inset-0 h-full w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[6.5em_1fr] gap-4 py-5">
      <dt className="text-[0.78rem] tracking-[0.2em] text-ash">{label}</dt>
      <dd className="leading-[1.9] text-kinari">{children}</dd>
    </div>
  );
}
