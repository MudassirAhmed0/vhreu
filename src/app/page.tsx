import Link from "next/link";
import DynamicIcon from "@/components/shared/dynamic-icon";
import VinSearchForm from "@/components/vin-search-form";
import FaqAccordion from "@/components/faq-accordion";
import PageHero from "@/components/page-hero";
import HowItWorks from "@/components/how-it-works";
import CardSection from "@/components/card-section";
import Card from "@/components/card";
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
        <IconList items={SAVE_MONEY.warnings} icon="triangle-alert" variant="danger" />
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
                    className={`flex h-9 w-7 items-center justify-center rounded text-[13px] font-bold ${
                      i < 3 ? "bg-primary/10 text-primary" : i < 9 ? "bg-accent/15 text-accent-hover" : "bg-green/10 text-green"
                    }`}
                  >
                    {ch}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex justify-between text-[10px] font-semibold text-text-3">
                <span className="text-primary">WMI (1-3)</span>
                <span className="text-accent-hover">VDS (4-9)</span>
                <span className="text-green">VIS (10-17)</span>
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
        {WHY_RUN_VIN_CHECK.reasons.map((reason, i) => (
          <Card
            key={reason.title}
            icon={<DynamicIcon name={reason.icon as any} className="h-6 w-6" strokeWidth={1.5} />}
            title={reason.title}
            description={reason.description}
            delay={0.1 + i * 0.08}
          />
        ))}
      </CardSection>

      {/* ═══ HOW TO RUN ═══ */}
      <HowItWorks
        heading={HOW_TO_STEPS.heading}
        closingText={HOW_TO_STEPS.closing}
        steps={HOW_TO_STEPS.steps}
      />

      {/* ═══ WHY YOU NEED VIN LOOKUP (Buyers vs Dealers) ═══ */}
      <CardSection heading={WHY_NEED_LOOKUP.heading} bg="muted" columns={2}>
        <Card
          title={WHY_NEED_LOOKUP.buyers.title}
          items={WHY_NEED_LOOKUP.buyers.benefits}
          accent="amber"
          delay={0.1}
        />
        <Card
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
          <Card
            key={cat.title}
            title={cat.title}
            items={cat.items}
            accent={cat.color as "blue" | "amber" | "green" | "purple" | "red"}
            delay={0.1 + i * 0.08}
          />
        ))}
      </CardSection>

      {/* ═══ COMPETITOR COMPARISON ═══ */}
      <SectionWrapper bg="muted" heading={COMPETITOR_COMPARISON.heading}>
        <DataTable
          columns={[
            { key: "us", label: "VHR.eu", highlight: true },
            { key: "carfax", label: "Carfax" },
            { key: "autodna", label: "AutoDNA" },
          ]}
          rows={COMPETITOR_COMPARISON.features}
        />
      </SectionWrapper>

      {/* ═══ WHY CHOOSE US ═══ */}
      <CardSection
        heading={WHY_CHOOSE.heading}
        bg="white"
        columns={3}
      >
        {WHY_CHOOSE.features.map((feature, i) => (
          <Card
            key={feature.title}
            icon={<DynamicIcon name={feature.icon as any} className="h-7 w-7" strokeWidth={1.5} />}
            title={feature.title}
            description={feature.description}
            delay={0.1 + i * 0.08}
          />
        ))}
      </CardSection>

      {/* ═══ COUNTRIES ═══ */}
      <SectionWrapper
        bg="muted"
        heading="Get EU VIN Check Report by Country"
        subtitle="No matter where you are in Europe, our VIN check tool has you covered. We provide reports for vehicles across the following European countries:"
      >
        <div data-stagger className="flex flex-wrap justify-center gap-2">
          {COUNTRIES_LIST.map((country, i) => (
            <Link
              key={country}
              href="#"
              className="rounded-xl border border-border bg-white px-4 py-2 text-[14px] font-medium text-text-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white"
              style={{ "--stagger-index": i } as React.CSSProperties}
            >
              {country}
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* ═══ CAR MAKES ═══ */}
      <SectionWrapper
        bg="white"
        heading="Run VIN Check Europe by Makes"
        subtitle="Get detailed vehicle history reports for popular brands. Just choose your car brand and start your VIN check right away!"
      >
        <div data-stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {CAR_MAKES.map((make, i) => (
            <Link
              key={make}
              href="#"
              className="flex items-center justify-center rounded-xl border border-border bg-white px-4 py-5 text-[14px] font-semibold text-primary shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
              style={{ "--stagger-index": i } as React.CSSProperties}
            >
              {make}
            </Link>
          ))}
        </div>
      </SectionWrapper>

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
      <SectionWrapper bg="white" heading="Frequently Asked Questions" narrow>
        <FaqAccordion items={FAQS} />
      </SectionWrapper>
    </>
  );
}
