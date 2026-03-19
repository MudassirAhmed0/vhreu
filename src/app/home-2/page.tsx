import DynamicIcon from "@/components/shared/dynamic-icon";
import PageHero from "@/components/page-hero";
import VinSearchForm from "@/components/vin-search-form";
import SplitContent from "@/components/split-content";
import IconList from "@/components/icon-list";
import CardSection from "@/components/card-section";
import Card from "@/components/card";
import HowItWorks from "@/components/how-it-works";
import DataTable from "@/components/data-table";
import SectionWrapper from "@/components/section-wrapper";
import PillGrid from "@/components/pill-grid";
import LinkCardGrid from "@/components/link-card-grid";
import BlogGrid from "@/components/blog-grid";
import BlogCard from "@/components/blog-card";
import FaqAccordion from "@/components/faq-accordion";
import { HERO, SAVE_MONEY, VIN_EXPLANATION, WHY_RUN_VIN_CHECK, HOW_TO_STEPS, WHY_NEED_LOOKUP, REPORT_CONTENTS, COMPETITOR_COMPARISON, WHY_CHOOSE, COUNTRIES_LIST, CAR_MAKES, BLOG_POSTS, FAQS } from "@/lib/constants";

export default function Home2() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <PageHero
        variant="split"
        tag="Trusted by 50,000+ Buyers"
        title="European VIN Check"
        highlight="EU VIN Lookup"
        subtitle={HERO.subheading}
        bullets={HERO.trustBadges}
        heroImage="/report-preview.png"
        heroImageAlt="Sample vehicle history report preview"
        cta={{ label: "View Sample Report", href: "/sample-report" }}
        secondaryCta={{ label: "Pan-European Coverage", href: "/countries" }}
      >
        <VinSearchForm />
      </PageHero>

      {/* ═══ SAVE MONEY ═══ */}
      <SplitContent
        tag="Don't Get Burned"
        heading="Save Money and Avoid"
        highlight="Costly Mistakes"
        description={SAVE_MONEY.description}
        bg="white"
        secondaryCta={{ label: "View Sample", href: "/sample-report" }}
        cta={{ label: "Check Vehicle History!", href: "#hero" }}
      >
        <IconList items={SAVE_MONEY.warnings} icon="triangle-alert" variant="danger" />
      </SplitContent>

      {/* ═══ WHAT IS A VIN ═══ */}
      <SplitContent
        tag="Your Car's Fingerprint"
        heading="What is a"
        highlight="VIN Number?"
        description={VIN_EXPLANATION.paragraphs}
        bg="muted"
        reverse
      />

      {/* ═══ WHY RUN VIN CHECK ═══ */}
      <CardSection
        heading="Why You Should Run a"
        highlight="European VIN Check?"
        tag="Protect Your Investment"
        subtitle={WHY_RUN_VIN_CHECK.intro}
        bg="white"
        columns={3}
        cta={{ label: "Run a VIN check now!", href: "#hero" }}
      >
        {WHY_RUN_VIN_CHECK.reasons.map((reason, i) => (
          <Card
            key={reason.title}
            icon={<DynamicIcon name={reason.icon} className="h-6 w-6" strokeWidth={1.5} />}
            title={reason.title}
            description={reason.description}
            delay={0.1 + i * 0.08}
          />
        ))}
      </CardSection>

      {/* ═══ HOW TO RUN ═══ */}
      <HowItWorks
        tag="Quick & Simple"
        heading="How to Run a"
        highlight="European VIN Check"
        closingText={HOW_TO_STEPS.closing}
        steps={HOW_TO_STEPS.steps}
        dark
      />
      {/* ═══ WHY YOU NEED VIN LOOKUP ═══ */}
      <CardSection
        tag="Buyers & Dealers"
        heading="Why You Need"
        highlight="European VIN Lookup"
        bg="muted"
        columns={2}
      >
        <Card
          title={WHY_NEED_LOOKUP.buyers.title}
          items={WHY_NEED_LOOKUP.buyers.benefits}
          delay={0.1}
        />
        <Card
          title={WHY_NEED_LOOKUP.dealers.title}
          items={WHY_NEED_LOOKUP.dealers.benefits}
          delay={0.18}
        />
      </CardSection>
      {/* ═══ WHAT CAN YOU LEARN ═══ */}
      <CardSection
        tag="Full Transparency"
        heading="What Can You Learn from"
        highlight="Europe Vehicle History Report"
        bg="dark"
        columns={3}
        secondaryCta={{ label: "Check Sample Report", href: "/sample-report" }}
        cta={{ label: "Check VIN Now!", href: "#hero" }}
      >
        {REPORT_CONTENTS.categories.map((cat, i) => (
          <Card
            key={cat.title}
            title={cat.title}
            items={cat.items}
            dark
            delay={0.1 + i * 0.08}
          />
        ))}
      </CardSection>
      {/* ═══ COMPETITOR COMPARISON ═══ */}
      <SectionWrapper
        tag="See the Difference"
        heading="Our Reports vs."
        highlight="Competitors"
        bg="muted"
      >
        <DataTable
          rowLabel="Features"
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
        tag="The VHR Advantage"
        heading="Why Choose Our"
        highlight="EU VIN Decoder?"
        bg="white"
        columns={3}
        cta={{ label: "Check VIN Now!", href: "#hero" }}
      >
        {WHY_CHOOSE.features.map((feat, i) => (
          <Card
            key={feat.title}
            icon={<DynamicIcon name={feat.icon} className="h-6 w-6" strokeWidth={1.5} />}
            title={feat.title}
            description={feat.description}
            delay={0.1 + i * 0.08}
          />
        ))}
      </CardSection>
      {/* ═══ COUNTRY COVERAGE ═══ */}
      <SectionWrapper
        tag="Pan-European Coverage"
        heading="Get EU VIN Check Report by"
        highlight="Country"
        subtitle="No matter where you are in Europe, our VIN check tool has you covered. We provide reports for vehicles across the following European countries:"
        bg="muted"
      >
        <PillGrid
          items={COUNTRIES_LIST.map((c) => ({
            label: c,
            href: `/vin-check/${c.toLowerCase().replace(/\s+/g, "-")}`,
          }))}
          delay={0.2}
        />
      </SectionWrapper>
      {/* ═══ VIN CHECK BY MAKE ═══ */}
      <SectionWrapper
        tag="Decode Any Brand"
        heading="Run VIN Check Europe by"
        highlight="Makes"
        subtitle="Get detailed vehicle history reports for popular brands. Just choose your car brand and start your VIN check right away!"
        bg="white"
      >
        <LinkCardGrid
          items={CAR_MAKES.map((m) => ({
            label: m,
            href: `/vin-decoder/${m.toLowerCase().replace(/\s+/g, "-")}`,
          }))}
          columns={5}
          delay={0.2}
        />
      </SectionWrapper>
      {/* ═══ BLOG ═══ */}
      <SectionWrapper
        tag="From the Blog"
        heading="Latest"
        highlight="Articles"
        bg="muted"
      >
        <BlogGrid moreHref="/blog" moreLabel="More Posts">
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
      <SectionWrapper
        tag="Common Questions"
        heading="Frequently Asked"
        highlight="Questions"
        bg="muted"
        narrow
      >
        <FaqAccordion items={FAQS} />
      </SectionWrapper>
    </>
  );
}
