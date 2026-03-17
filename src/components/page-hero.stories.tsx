import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PageHero from "./page-hero";
import VinSearchForm from "./vin-search-form";

/* ─── Extended args so non-technical users can toggle the form via controls ─── */
type HeroStoryProps = React.ComponentProps<typeof PageHero> & {
  showForm?: boolean;
  formButtonText?: string;
};

const meta: Meta<HeroStoryProps> = {
  title: "Navigation/PageHero",
  component: PageHero,
  argTypes: {
    variant: {
      control: "select",
      options: ["centered", "split", "stacked"],
      table: { category: "Layout" },
    },
    dark: {
      control: "boolean",
      table: { category: "Layout" },
    },
    tag: { control: "text", table: { category: "Content" } },
    title: { control: "text", table: { category: "Content" } },
    highlight: { control: "text", table: { category: "Content" } },
    subtitle: { control: "text", table: { category: "Content" } },
    bullets: { control: "object", table: { category: "Content" } },
    heroImage: {
      control: "text",
      description: "Image URL for split right side (580×660 @2x recommended)",
      table: { category: "Media" },
    },
    heroImageAlt: { control: "text", table: { category: "Media" } },
    backgroundImage: {
      control: "text",
      description: "Subtle watermark image (e.g. country flag SVG path)",
      table: { category: "Media" },
    },
    showForm: {
      control: "boolean",
      description: "Toggle VIN search form on/off",
      table: { category: "Form" },
    },
    formButtonText: {
      control: "text",
      description: "Button label on the VIN form",
      table: { category: "Form" },
      if: { arg: "showForm" },
    },
  },
  args: {
    dark: true,
    showForm: false,
    formButtonText: "Search VIN",
  },
  parameters: { layout: "fullscreen" },
  render: ({ showForm, formButtonText, ...heroProps }) => (
    <PageHero {...heroProps}>
      {showForm && (
        <VinSearchForm buttonText={formButtonText} dark={heroProps.dark} />
      )}
    </PageHero>
  ),
};

export default meta;
type Story = StoryObj<HeroStoryProps>;

/* ═══════════════════════════════════════════════════════════
   CENTERED
   Grand, architectural. Rings radiate. Text commands space.
   ═══════════════════════════════════════════════════════════ */

export const CenteredPricing: Story = {
  name: "Centered / Pricing",
  args: {
    variant: "centered",
    tag: "Flexible Plans",
    title: "Detailed Reports,",
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
    tag: "Trusted by 50,000+ Buyers",
    title: "Check Any European Vehicle's",
    highlight: "Full History Report",
    subtitle:
      "Check any European vehicle's history instantly. Access accident records, mileage verification, theft status, and more from 40+ countries.",
    bullets: ["40+ EU Countries", "Instant Results", "Official Records"],
    showForm: true,
  },
};

export const SplitWithImage: Story = {
  name: "Split / Hero Image",
  args: {
    variant: "split",
    tag: "Trusted by 50,000+ Buyers",
    title: "Check Any European Vehicle's",
    highlight: "Full History Report",
    subtitle:
      "Check any European vehicle's history instantly. Access accident records, mileage verification, theft status, and more from 40+ countries.",
    bullets: ["40+ EU Countries", "Instant Results", "Official Records"],
    heroImage: "https://placehold.co/580x660/0B2230/E85C3A?text=Report+Preview%0A580%C3%97660",
    heroImageAlt: "Sample vehicle history report showing specifications, auction records, and accident history",
  },
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
    showForm: true,
  },
};

export const SplitCountryFrance: Story = {
  name: "Split / Country (France)",
  args: {
    variant: "split",
    tag: "Country Report",
    title: "France VIN Check",
    highlight: "Historique du Véhicule",
    subtitle:
      "Access the full history of any vehicle registered in France. Import checks, accident records, and odometer verification from official databases.",
    bullets: ["SIV Database", "CT Records", "Import Checks"],
    showForm: true,
  },
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
    showForm: true,
  },
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
    showForm: true,
  },
  render: ({ showForm: _sf, formButtonText: _ft, ...heroProps }) => (
    <PageHero {...heroProps}>
      <div className="space-y-8">
        <VinSearchForm dark={heroProps.dark} />
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

export const StackedVehicleSpecs: Story = {
  name: "Stacked / Vehicle Specifications",
  args: {
    variant: "stacked",
    tag: "Original Spec Lookup",
    title: "Look Up Original",
    highlight: "Vehicle Specifications",
    subtitle:
      "Access the original manufacturer specifications for any vehicle. Get equipment details, optional packages, safety ratings, and more.",
    bullets: ["Full Specs", "Equipment Lists", "Safety Ratings"],
    showForm: true,
    formButtonText: "Check Vehicle",
  },
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
    showForm: true,
  },
};

/* ═══════════════════════════════════════════════════════════
   LIGHT VARIANTS
   ═══════════════════════════════════════════════════════════ */

export const SplitLight: Story = {
  name: "Split / Light",
  args: {
    variant: "split",
    tag: "Trusted by 50,000+ Buyers",
    title: "Check Any European Vehicle's",
    highlight: "Full History Report",
    subtitle:
      "Access accident records, mileage verification, theft status, and more from 40+ countries.",
    bullets: ["40+ EU Countries", "Instant Results", "Official Records"],
    dark: false,
    showForm: true,
  },
};

export const StackedLight: Story = {
  name: "Stacked / Light",
  args: {
    variant: "stacked",
    tag: "VIN Decoder",
    title: "Decode Any VIN with Our",
    highlight: "Instant Lookup Tool",
    subtitle:
      "Use our free VIN decoder to instantly retrieve detailed vehicle specifications, history, and manufacturing data.",
    bullets: ["Free VIN Decode", "Full History Report", "Instant Results"],
    dark: false,
    showForm: true,
  },
};
