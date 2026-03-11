import Link from "next/link";
import VinSearchForm from "@/components/vin-search-form";
import FaqAccordion from "@/components/faq-accordion";
import {
  HERO,
  SAVE_MONEY,
  VIN_EXPLANATION,
  WHY_RUN_VIN_CHECK,
  HOW_TO_STEPS,
  WHY_NEED_LOOKUP,
  REPORT_CONTENTS,
  COMPETITOR_COMPARISON,
  WHY_CHOOSE,
  COUNTRIES_LIST,
  CAR_MAKES,
  BLOG_POSTS,
} from "@/lib/constants";

/* ─── ICON COMPONENTS ─── */
function IconEye() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}
function IconGauge() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function IconFile() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}
function IconAlert() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  );
}
function IconLock() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg className="h-5 w-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}
function IconX() {
  return (
    <svg className="h-5 w-5 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

const REASON_ICONS: Record<string, React.FC> = {
  eye: IconEye,
  shield: IconShield,
  gauge: IconGauge,
  file: IconFile,
  alert: IconAlert,
  lock: IconLock,
};

const STEP_ICONS: Record<string, JSX.Element> = {
  search: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
  mail: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  ),
  click: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
    </svg>
  ),
  document: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  check: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

const WHY_CHOOSE_ICONS: Record<string, JSX.Element> = {
  zap: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  database: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  ),
  tool: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 5.1a2.121 2.121 0 01-3-3l5.1-5.1m0 0L4.16 8.93a2.122 2.122 0 010-3l1.06-1.06a2.122 2.122 0 013 0l8.25 8.25a2.122 2.122 0 010 3l-1.06 1.06a2.122 2.122 0 01-3 0z" />
    </svg>
  ),
  wallet: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  ),
  globe: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  headset: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
  ),
};

const CATEGORY_COLORS: Record<string, string> = {
  blue: "border-blue-200 bg-blue-50",
  amber: "border-amber-200 bg-amber-50",
  green: "border-green-200 bg-green-50",
  purple: "border-purple-200 bg-purple-50",
  red: "border-red-200 bg-red-50",
};

const CATEGORY_ICON_COLORS: Record<string, string> = {
  blue: "text-blue-600",
  amber: "text-amber-600",
  green: "text-green-600",
  purple: "text-purple-600",
  red: "text-red-600",
};

/* ─── MAIN PAGE ─── */
export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-light to-primary">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              European VIN Check
              <span className="mt-2 block text-accent">EU VIN Lookup</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300">
              {HERO.subheading}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {HERO.trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
                >
                  <svg className="h-3.5 w-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
            <Link
              href="/sample-report"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent underline underline-offset-4 hover:text-white"
            >
              View Sample Report
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end">
            <VinSearchForm />
          </div>
        </div>
      </section>

      {/* ═══ SAVE MONEY ═══ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
                {SAVE_MONEY.heading}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {SAVE_MONEY.description}
              </p>
              <div className="mt-8 space-y-4">
                {SAVE_MONEY.warnings.map((warning) => (
                  <div
                    key={warning}
                    className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50 p-4"
                  >
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-danger" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-red-800">{warning}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/sample-report"
                  className="rounded-lg border-2 border-primary bg-transparent px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  View Sample
                </Link>
                <Link
                  href="#hero"
                  className="rounded-lg bg-accent px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-accent-hover"
                >
                  Check Vehicle History!
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-80 w-full max-w-md rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 p-8">
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <svg className="h-20 w-20 text-primary/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                  <p className="mt-4 text-sm text-slate-400">Vehicle problem illustration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT IS A VIN ═══ */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 flex justify-center lg:order-1">
              <div className="relative w-full max-w-md">
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-slate-400">
                    VIN Structure
                  </div>
                  <div className="flex justify-center gap-0.5 font-mono text-lg">
                    {["W","V","W","Z","Z","Z","3","C","Z","W","E","1","2","3","4","5","6"].map((ch, i) => (
                      <span
                        key={i}
                        className={`flex h-9 w-7 items-center justify-center rounded text-sm font-bold ${
                          i < 3 ? "bg-blue-100 text-blue-700" : i < 9 ? "bg-amber-100 text-amber-700" : "bg-green-100 text-green-700"
                        }`}
                      >
                        {ch}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between text-[10px] font-semibold text-slate-500">
                    <span className="text-blue-600">WMI (1-3)</span>
                    <span className="text-amber-600">VDS (4-9)</span>
                    <span className="text-green-600">VIS (10-17)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
                {VIN_EXPLANATION.heading}
              </h2>
              {VIN_EXPLANATION.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 text-lg leading-relaxed text-slate-600">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY RUN VIN CHECK ═══ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
              {WHY_RUN_VIN_CHECK.heading}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {WHY_RUN_VIN_CHECK.intro}
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_RUN_VIN_CHECK.reasons.map((reason) => {
              const Icon = REASON_ICONS[reason.icon];
              return (
                <div
                  key={reason.title}
                  className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    {Icon && <Icon />}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-primary">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{reason.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="#hero"
              className="inline-flex rounded-lg bg-accent px-8 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-accent-hover"
            >
              Run a VIN check now!
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ HOW TO RUN ═══ */}
      <section className="bg-accent-light py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl">
            {HOW_TO_STEPS.heading}
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {HOW_TO_STEPS.steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                {i < HOW_TO_STEPS.steps.length - 1 && (
                  <div className="absolute left-1/2 top-7 hidden h-0.5 w-full bg-primary/10 lg:block" />
                )}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                  {STEP_ICONS[step.icon]}
                </div>
                <span className="mt-1 text-xs font-bold text-primary/40">Step {i + 1}</span>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-lg text-center text-base text-slate-600">
            {HOW_TO_STEPS.closing}
          </p>
        </div>
      </section>

      {/* ═══ WHY YOU NEED VIN LOOKUP (Buyers vs Dealers) ═══ */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl">
            {WHY_NEED_LOOKUP.heading}
          </h2>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Buyers */}
            <div className="rounded-2xl border border-amber-200 bg-accent-light p-8">
              <h3 className="text-xl font-bold text-primary">{WHY_NEED_LOOKUP.buyers.title}</h3>
              <ul className="mt-6 space-y-4">
                {WHY_NEED_LOOKUP.buyers.benefits.map((b) => (
                  <li key={b.bold} className="flex items-start gap-3">
                    <IconCheck />
                    <span className="text-sm text-slate-700">
                      <strong className="font-semibold text-primary">{b.bold}</strong> {b.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Dealers */}
            <div className="rounded-2xl border border-amber-200 bg-accent-light p-8">
              <h3 className="text-xl font-bold text-primary">{WHY_NEED_LOOKUP.dealers.title}</h3>
              <ul className="mt-6 space-y-4">
                {WHY_NEED_LOOKUP.dealers.benefits.map((b) => (
                  <li key={b.bold} className="flex items-start gap-3">
                    <IconCheck />
                    <span className="text-sm text-slate-700">
                      <strong className="font-semibold text-primary">{b.bold}</strong> {b.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT CAN YOU LEARN ═══ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl">
            {REPORT_CONTENTS.heading}
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REPORT_CONTENTS.categories.map((cat) => (
              <div
                key={cat.title}
                className={`rounded-2xl border p-6 ${CATEGORY_COLORS[cat.color]}`}
              >
                <h3 className={`text-lg font-bold ${CATEGORY_ICON_COLORS[cat.color]}`}>
                  {cat.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <IconCheck />
                      <span className="text-sm text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/sample-report"
              className="rounded-lg border-2 border-primary px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Check Sample Report
            </Link>
            <Link
              href="#hero"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-accent-hover"
            >
              Check VIN Now!
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ COMPETITOR COMPARISON ═══ */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl">
            {COMPETITOR_COMPARISON.heading}
          </h2>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[600px] overflow-hidden rounded-2xl bg-white shadow-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-primary text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary">VHR.eu</span>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Carfax</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">AutoDNA</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITOR_COMPARISON.features.map((f, i) => (
                  <tr key={f.name} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-6 py-3.5 text-sm font-medium text-slate-700">{f.name}</td>
                    {[f.us, f.carfax, f.autodna].map((val, j) => (
                      <td key={j} className="px-6 py-3.5 text-center">
                        {val === true ? (
                          <span className="inline-flex"><IconCheck /></span>
                        ) : val === false ? (
                          <span className="inline-flex"><IconX /></span>
                        ) : (
                          <span className={`text-sm font-medium ${j === 0 ? "text-primary font-bold" : "text-slate-600"}`}>
                            {val}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl">
            {WHY_CHOOSE.heading}
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-accent hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-accent group-hover:text-primary">
                  {WHY_CHOOSE_ICONS[feature.icon]}
                </div>
                <h3 className="mt-4 text-lg font-bold text-primary">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COUNTRIES ═══ */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl">
            Get EU VIN Check Report by Country
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
            No matter where you are in Europe, our VIN check tool has you covered. We provide reports for vehicles across the following European countries:
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {COUNTRIES_LIST.map((country) => (
              <Link
                key={country}
                href="#"
                className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:border-primary hover:bg-primary hover:text-white"
              >
                {country}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CAR MAKES ═══ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl">
            Run VIN Check Europe by Makes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
            Get detailed vehicle history reports for popular brands. Just choose your car brand and start your VIN check right away!
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {CAR_MAKES.map((make) => (
              <Link
                key={make}
                href="#"
                className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-5 text-sm font-semibold text-primary shadow-sm transition-all hover:border-accent hover:shadow-md"
              >
                {make}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BLOG ═══ */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl">
            Blog
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg"
              >
                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 p-6">
                  <div className="flex h-full items-center justify-center text-4xl text-slate-300">
                    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
                    </svg>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-primary group-hover:text-primary-light">
                    {post.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <div className="h-5 w-5 rounded-full bg-primary/10" />
                      {post.author}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex rounded-lg bg-primary px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-light"
            >
              More Posts
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-12">
            <FaqAccordion />
          </div>
        </div>
      </section>
    </>
  );
}
