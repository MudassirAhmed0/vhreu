import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PageHero from "./page-hero";
import VinSearchForm from "./vin-search-form";

const meta: Meta<typeof PageHero> = {
  title: "Components/PageHero",
  component: PageHero,
  argTypes: {
    variant: { control: "select", options: ["centered", "split", "stacked"] },
    dark: { control: "boolean" },
  },
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof PageHero>;

/* ═══════════════════════════════════════════════════════════
   CENTERED
   Grand, architectural. Rings radiate. Text commands space.
   ═══════════════════════════════════════════════════════════ */

export const CenteredPricing: Story = {
  name: "Centered / Pricing",
  args: {
    variant: "centered",
    tag: "Flexible Plans",
    title: "Detailed Report at",
    highlight: "Affordable Pricing",
    subtitle:
      "Get comprehensive vehicle history reports with our flexible credit-based pricing. Choose the plan that fits your needs.",
  },
};

export const CenteredContact: Story = {
  name: "Centered / Contact",
  args: {
    variant: "centered",
    tag: "We're Here to Help",
    title: "Got any Questions?",
    highlight: "Contact Us",
    subtitle:
      "If you have any questions or need clarity on any area regarding vehicle history reports, our team is ready 24/7.",
    bullets: ["24/7 Live Chat", "Instant Response", "Multi-language Support"],
  },
};

export const CenteredFAQ: Story = {
  name: "Centered / FAQ (Light)",
  args: {
    variant: "centered",
    tag: "Help Center",
    title: "Frequently Asked",
    highlight: "Questions",
    subtitle:
      "Here are some questions most people ask about our VIN check service across Europe.",
    dark: false,
  },
};

export const CenteredBlog: Story = {
  name: "Centered / Blog",
  args: {
    variant: "centered",
    tag: "Insights & Guides",
    title: "Vehicle History",
    highlight: "Blog",
    subtitle:
      "Expert advice on buying used cars, understanding VIN reports, and navigating the European market.",
  },
};

/* ═══════════════════════════════════════════════════════════
   SPLIT
   Diagonal energy. Form elevated with glow frame.
   ═══════════════════════════════════════════════════════════ */

export const SplitHomepage: Story = {
  name: "Split / Homepage",
  args: {
    variant: "split",
    tag: "Trusted by 50,000+ buyers",
    title: "European VIN Check",
    highlight: "EU VIN Lookup",
    subtitle:
      "Check any European vehicle's history instantly. Access accident records, mileage verification, theft status, and more from 40+ countries.",
    bullets: ["40+ EU Countries", "Instant Results", "Official Records"],
  },
  render: (args) => (
    <PageHero {...args}>
      <VinSearchForm />
    </PageHero>
  ),
};

export const SplitCountry: Story = {
  name: "Split / Country (Germany)",
  args: {
    variant: "split",
    tag: "Country Report",
    title: "Germany VIN Check",
    highlight: "Deutsche Fahrzeughistorie",
    subtitle:
      "Run a comprehensive history check on any car registered in Germany. Access TUV records, accident history, and ownership data.",
    bullets: ["TUV Records", "KBA Database", "Accident History"],
    backgroundImage: "/flags/de.svg",
  },
  render: (args) => (
    <PageHero {...args}>
      <VinSearchForm />
    </PageHero>
  ),
};

export const SplitCountryFrance: Story = {
  name: "Split / Country (France)",
  args: {
    variant: "split",
    tag: "Country Report",
    title: "France VIN Check",
    highlight: "Historique du Vehicule",
    subtitle:
      "Access the full history of any vehicle registered in France. Import checks, accident records, and odometer verification from official databases.",
    bullets: ["SIV Database", "CT Records", "Import Checks"],
  },
  render: (args) => (
    <PageHero {...args}>
      <VinSearchForm />
    </PageHero>
  ),
};

/* ═══════════════════════════════════════════════════════════
   STACKED
   Technical precision. Reveal divider. Content flows down.
   ═══════════════════════════════════════════════════════════ */

export const StackedSampleReport: Story = {
  name: "Stacked / Sample Report",
  args: {
    variant: "stacked",
    tag: "See Before You Buy",
    title: "Get a peek at our",
    highlight: "Premium Reports",
    subtitle:
      "See exactly what information is included in our comprehensive vehicle history reports before you buy.",
  },
  render: (args) => (
    <PageHero {...args}>
      <VinSearchForm />
    </PageHero>
  ),
};

export const StackedBrandBMW: Story = {
  name: "Stacked / Brand (BMW)",
  args: {
    variant: "stacked",
    tag: "VIN Decoder",
    title: "Decode BMW VIN with Our",
    highlight: "Instant Lookup Tool",
    subtitle:
      "Use our free BMW VIN decoder to instantly retrieve detailed vehicle specifications, history, and manufacturing data.",
    bullets: ["Free VIN Decode", "Full History Report", "Instant Results"],
  },
  render: (args) => (
    <PageHero {...args}>
      <div className="space-y-8">
        <VinSearchForm />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { n: "50M+", label: "VINs Decoded" },
            { n: "200+", label: "BMW Models" },
            { n: "99.8%", label: "Accuracy" },
            { n: "24/7", label: "Availability" },
          ].map((s) => (
            <div
              key={s.label}
              className="group rounded-xl border border-white/[0.05] bg-white/[0.03] px-4 py-5 text-center backdrop-blur-sm transition-all duration-300 hover:border-accent/15 hover:bg-white/[0.06]"
            >
              <div className="text-2xl font-extrabold tracking-tight text-accent transition-transform duration-300 group-hover:scale-110">
                {s.n}
              </div>
              <div className="mt-1.5 text-[12px] font-medium uppercase tracking-wider text-white/35">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageHero>
  ),
};

export const StackedWindowSticker: Story = {
  name: "Stacked / Window Sticker",
  args: {
    variant: "stacked",
    tag: "Original Sticker Lookup",
    title: "Look Up a Vehicle's Original",
    highlight: "Window Sticker Online",
    subtitle:
      "Access the original manufacturer window sticker for any vehicle. Get MSRP, standard equipment, optional packages, and more.",
    bullets: ["MSRP Data", "Equipment Lists", "Safety Ratings"],
  },
  render: (args) => (
    <PageHero {...args}>
      <VinSearchForm buttonText="Check Vehicle" />
    </PageHero>
  ),
};

export const StackedBrandAudi: Story = {
  name: "Stacked / Brand (Audi)",
  args: {
    variant: "stacked",
    tag: "VIN Decoder",
    title: "Decode Audi VIN with Our",
    highlight: "Precision Lookup",
    subtitle:
      "Access complete Audi vehicle data — from Quattro drivetrain specs to MMI system details. Manufacturing plant, trim level, engine code, and full European history.",
    bullets: ["Quattro Specs", "Service History", "Euro NCAP Data"],
  },
  render: (args) => (
    <PageHero {...args}>
      <VinSearchForm />
    </PageHero>
  ),
};
