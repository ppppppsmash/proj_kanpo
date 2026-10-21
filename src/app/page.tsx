import { Hero } from "@/components/sections/hero";
import { Concept } from "@/components/sections/concept";
import { Wagyu } from "@/components/sections/wagyu";
import { Dishes } from "@/components/sections/dishes";
import { Space } from "@/components/sections/space";
import { Producer } from "@/components/sections/producer";
import { Info } from "@/components/sections/info";
import { Cta } from "@/components/sections/cta";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  alternateName: site.nameEn,
  description: site.description,
  url: site.url,
  telephone: `+81-${site.tel.replace(/^0/, "")}`,
  servesCuisine: ["焼肉", "和牛", "Yakiniku"],
  address: {
    "@type": "PostalAddress",
    postalCode: site.address.postal,
    addressRegion: site.address.region,
    addressLocality: site.address.locality,
    streetAddress: `${site.address.street} ${site.address.building}`,
    addressCountry: "JP",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", opens: "11:30", closes: "14:30" },
    { "@type": "OpeningHoursSpecification", opens: "17:00", closes: "23:30" },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Concept />
      <Wagyu />
      <Dishes />
      <Space />
      <Producer />
      <Info />
      <Cta />
    </>
  );
}
