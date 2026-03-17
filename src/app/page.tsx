import Link from "next/link";
import VinSearchForm from "@/components/vin-search-form";
import FaqAccordion from "@/components/faq-accordion";
import PageHero from "@/components/page-hero";
import HowItWorks from "@/components/how-it-works";
import CardSection from "@/components/card-section";
import FeatureCard from "@/components/feature-card";
import SplitContent from "@/components/split-content";
import IconList from "@/components/icon-list";
import DataTable from "@/components/data-table";
import SectionWrapper from "@/components/section-wrapper";
import BlogCard from "@/components/blog-card";
import BlogGrid from "@/components/blog-grid";
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
  FAQS,
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

const REASON_ICONS: Record<string, React.FC> = {
  eye: IconEye,
  shield: IconShield,
  gauge: IconGauge,
  file: IconFile,
  alert: IconAlert,
  lock: IconLock,
};


const WHY_CHOOSE_ICONS: Record<string, React.ReactNode> = {
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


/* ─── MAIN PAGE ─── */
export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <PageHero
        variant="split"
        tag="Trusted by 50,000+ buyers"
        title="Check Any European Vehicle's"
        highlight="Full History Report"
        subtitle={HERO.subheading}
        bullets={HERO.trustBadges}
        heroImage="/report-preview.png"
        heroImageAlt="Sample vehicle history report preview"
      >
        <VinSearchForm />
      </PageHero>

      {/* ═══ SAVE MONEY ═══ */}
      <SplitContent
        heading={SAVE_MONEY.heading}
        description={SAVE_MONEY.description}
        bg="white"
        secondaryCta={{ label: "View Sample", href: "/sample-report" }}
        cta={{ label: "Check Vehicle History!", href: "#hero" }}
      >
        <IconList items={SAVE_MONEY.warnings} icon="warning" variant="danger" />
      </SplitContent>

      {/* ═══ WHAT IS A VIN ═══ */}
      <SplitContent
        heading={VIN_EXPLANATION.heading}
        description={VIN_EXPLANATION.paragraphs}
        bg="muted"
        reverse
        media={
          <div className="w-full max-w-md">
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <div className="mb-4 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-text-3">
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
              <div className="mt-4 flex justify-between text-[10px] font-semibold text-text-3">
                <span className="text-blue-600">WMI (1-3)</span>
                <span className="text-amber-600">VDS (4-9)</span>
                <span className="text-green-600">VIS (10-17)</span>
              </div>
            </div>
          </div>
        }
      />

      {/* ═══ WHY RUN VIN CHECK ═══ */}
      <CardSection
        heading={WHY_RUN_VIN_CHECK.heading}
        subtitle={WHY_RUN_VIN_CHECK.intro}
        bg="white"
        columns={3}
        cta={{ label: "Run a VIN check now!", href: "#hero" }}
      >
        {WHY_RUN_VIN_CHECK.reasons.map((reason, i) => {
          const Icon = REASON_ICONS[reason.icon];
          return (
            <FeatureCard
              key={reason.title}
              icon={Icon && <Icon />}
              title={reason.title}
              description={reason.description}
              delay={0.1 + i * 0.08}
            />
          );
        })}
      </CardSection>

      {/* ═══ HOW TO RUN ═══ */}
      <HowItWorks
        heading={HOW_TO_STEPS.heading}
        closingText={HOW_TO_STEPS.closing}
        steps={HOW_TO_STEPS.steps}
      />

      {/* ═══ WHY YOU NEED VIN LOOKUP (Buyers vs Dealers) ═══ */}
      <CardSection heading={WHY_NEED_LOOKUP.heading} bg="muted" columns={2}>
        <FeatureCard
          title={WHY_NEED_LOOKUP.buyers.title}
          items={WHY_NEED_LOOKUP.buyers.benefits}
          accent="amber"
          delay={0.1}
        />
        <FeatureCard
          title={WHY_NEED_LOOKUP.dealers.title}
          items={WHY_NEED_LOOKUP.dealers.benefits}
          accent="amber"
          delay={0.18}
        />
      </CardSection>

      {/* ═══ WHAT CAN YOU LEARN ═══ */}
      <CardSection
        heading={REPORT_CONTENTS.heading}
        bg="white"
        columns={3}
        secondaryCta={{ label: "Check Sample Report", href: "/sample-report" }}
        cta={{ label: "Check VIN Now!", href: "#hero" }}
      >
        {REPORT_CONTENTS.categories.map((cat, i) => (
          <FeatureCard
            key={cat.title}
            title={cat.title}
            items={cat.items}
            accent={cat.color as "blue" | "amber" | "green" | "purple" | "red"}
            delay={0.1 + i * 0.08}
          />
        ))}
      </CardSection>

      {/* ═══ COMPETITOR COMPARISON ═══ */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl">
            {COMPETITOR_COMPARISON.heading}
          </h2>
          <div className="mt-12">
            <DataTable
              columns={[
                { key: "us", label: "VHR.eu", highlight: true },
                { key: "carfax", label: "Carfax" },
                { key: "autodna", label: "AutoDNA" },
              ]}
              rows={COMPETITOR_COMPARISON.features}
            />
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <CardSection
        heading={WHY_CHOOSE.heading}
        bg="white"
        columns={3}
      >
        {WHY_CHOOSE.features.map((feature, i) => (
          <FeatureCard
            key={feature.title}
            icon={WHY_CHOOSE_ICONS[feature.icon]}
            title={feature.title}
            description={feature.description}
            delay={0.1 + i * 0.08}
          />
        ))}
      </CardSection>

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
                className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-5 text-sm font-semibold text-primary shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                {make}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BLOG ═══ */}
      <SectionWrapper bg="muted" heading="Blog">
        <BlogGrid moreHref="/blog">
          {BLOG_POSTS.map((post, i) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              slug={post.slug}
              image={post.image}
              author={post.author}
              date={post.date}
              excerpt={post.excerpt}
              delay={0.1 + i * 0.08}
            />
          ))}
        </BlogGrid>
      </SectionWrapper>

      {/* ═══ FAQ ═══ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-12">
            <FaqAccordion items={FAQS} />
          </div>
        </div>
      </section>
    </>
  );
}
