import type { Metadata } from "next";
import Script from "next/script";
import { Geist_Mono } from "next/font/google";
import { Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VehicleHistory EU — European VIN Check & Vehicle Reports",
  description:
    "Get free VIN decoding and affordable European VIN check for reliable vehicle history - verify title and condition, accidents, auction records, actual mileage and more.",
  metadataBase: new URL("https://vehiclehistory.eu"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "VehicleHistory EU — European VIN Check & Vehicle Reports",
    description:
      "Get free VIN decoding and affordable European VIN check for reliable vehicle history - verify title and condition, accidents, auction records, actual mileage and more.",
    url: "https://vehiclehistory.eu",
    siteName: "VehicleHistory.EU",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VehicleHistory EU — European VIN Check & Vehicle Reports",
    description:
      "Get free VIN decoding and affordable European VIN check for reliable vehicle history.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Script id="scroll-reveal" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
(function(){
  if(window.matchMedia("(prefers-reduced-motion:reduce)").matches)return;
  var o=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting)return;
      var t=e.target;
      t.classList.remove("reveal-pending");
      if(t.hasAttribute("data-stagger"))t.setAttribute("data-visible","");
      o.unobserve(t);
    });
  },{rootMargin:"0px 0px -60px 0px"});
  document.querySelectorAll("[data-reveal],[data-stagger]").forEach(function(el){
    var r=el.getBoundingClientRect();
    if(r.top<window.innerHeight){el.classList.remove("reveal-pending");if(el.hasAttribute("data-stagger"))el.setAttribute("data-visible","");return;}
    el.classList.add("reveal-pending");
    o.observe(el);
  });
})();
`}} />
      </body>
    </html>
  );
}
