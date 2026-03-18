import Link from "next/link";
import { SITE_NAME, NAV_LINKS, SAMPLE_REPORTS, FOOTER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-hero-dark text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-[11px] font-black text-hero-dark">
                VH
              </div>
              <span className="text-[15px] font-bold text-white">Vehicle History</span>
            </Link>
            <div className="mt-4 space-y-2 text-[13px] text-white/40">
              <p>{FOOTER.phone}</p>
              <p>{FOOTER.email}</p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.15em] text-accent">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.slice(1).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-white/40 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="text-[13px] text-white/40 transition-colors hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/members/login" className="text-[13px] text-white/40 transition-colors hover:text-white">
                  Login / Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Sample Reports */}
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.15em] text-accent">Sample Reports</h3>
            <ul className="mt-4 space-y-2.5">
              {SAMPLE_REPORTS.map((report) => (
                <li key={report}>
                  <Link href="/sample-report" className="text-[13px] text-white/40 transition-colors hover:text-white">
                    {report}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Decoder By Make */}
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.15em] text-accent">Decoder By Make</h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER.decoderByMake.map((make) => (
                <li key={make}>
                  <Link href="#" className="text-[13px] text-white/40 transition-colors hover:text-white">
                    {make}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.15em] text-accent">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[13px] text-white/40 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.06] pt-8 text-center">
          <p className="text-[13px] text-white/25">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
