import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Shippori_Mincho } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";

const shippori = Shippori_Mincho({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-shippori",
  display: "swap",
  preload: false,
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | 赤坂・漢方和牛のUMAMI焼肉`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: ["焼肉", "赤坂", "漢方和牛", "個室", "接待", "溜池山王", "和牛", "KAMPO"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: site.name,
    title: `${site.name} | 赤坂・漢方和牛のUMAMI焼肉`,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0c0b0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${shippori.variable} ${cormorant.variable} h-full`}>
      <body className="grain flex min-h-full flex-col">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
