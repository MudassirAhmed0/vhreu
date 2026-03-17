import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SectionWrapper from "./section-wrapper";
import FaqAccordion from "./faq-accordion";
import DataTable from "./data-table";
import IconList from "./icon-list";

const meta: Meta<typeof SectionWrapper> = {
  title: "Sections/SectionWrapper",
  component: SectionWrapper,
  argTypes: {
    bg: {
      control: "select",
      options: ["white", "muted", "dark"],
      table: { category: "Layout" },
    },
    heading: { control: "text", table: { category: "Content" } },
    subtitle: { control: "text", table: { category: "Content" } },
    narrow: { control: "boolean", table: { category: "Layout" } },
    id: { control: "text", table: { category: "HTML" } },
    delay: { control: "number", table: { category: "Animation" } },
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SectionWrapper>;

/* ── White background with heading + subtitle ── */
export const White: Story = {
  args: {
    bg: "white",
    heading: "Why You Should Run a European VIN Number Check?",
    subtitle:
      "With over 52% of used vehicles in Europe having some form of hidden history, a VIN check is essential before any purchase.",
  },
  render: (args) => (
    <SectionWrapper {...args}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {["Reveal Hidden History", "Detect Odometer Fraud", "Check for Recalls"].map(
          (title) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/[0.07]" />
              <h3 className="mt-4 text-[17px] font-bold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-text-2">
                Placeholder description for this feature card.
              </p>
            </div>
          ),
        )}
      </div>
    </SectionWrapper>
  ),
};

/* ── Muted background ── */
export const Muted: Story = {
  args: {
    bg: "muted",
    heading: "Get EU VIN Check Report by Country",
    subtitle:
      "No matter where you are in Europe, our VIN check tool has you covered.",
  },
  render: (args) => (
    <SectionWrapper {...args}>
      <div className="flex flex-wrap justify-center gap-2">
        {[
          "Germany", "France", "Poland", "Italy", "Spain",
          "Netherlands", "Belgium", "Sweden", "Austria", "Denmark",
          "Norway", "Switzerland", "Ireland", "Portugal", "Greece",
        ].map((country) => (
          <span
            key={country}
            className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-text-2"
          >
            {country}
          </span>
        ))}
      </div>
    </SectionWrapper>
  ),
};

/* ── Dark background ── */
export const Dark: Story = {
  args: {
    bg: "dark",
    heading: "Trusted by Thousands Across Europe",
    subtitle:
      "Join over 50,000 buyers who have used our service to make informed vehicle purchases.",
  },
  render: (args) => (
    <SectionWrapper {...args}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {["Fast Reports", "Trusted Data", "24/7 Support"].map((title) => (
          <div
            key={title}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm"
          >
            <h3 className="text-[17px] font-bold text-white/90">{title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-white/40">
              Placeholder description for this card.
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  ),
};

/* ── Narrow — for FAQ, legal, focused content ── */
export const Narrow: Story = {
  args: {
    bg: "white",
    heading: "Frequently Asked Questions",
    narrow: true,
  },
  render: (args) => (
    <SectionWrapper {...args}>
      <FaqAccordion
        items={[
          {
            question: "What is the difference between free and paid VIN checks?",
            answer:
              "A free VIN check gives basic details like make, model, and year. A paid report includes full history, accidents, odometer data, and more.",
          },
          {
            question: "Is your VIN check reliable and accurate?",
            answer:
              "Yes, our VIN check pulls data from official European databases and is highly reliable.",
          },
          {
            question: "Where is the VIN number on a car?",
            answer:
              "The VIN can typically be found on the dashboard near the windshield, on the driver's door jamb, or in vehicle documents.",
          },
        ]}
      />
    </SectionWrapper>
  ),
};

/* ── With DataTable (competitor comparison) ── */
export const WithDataTable: Story = {
  args: {
    bg: "muted",
    heading: "Our Reports vs. Competitors",
  },
  render: (args) => (
    <SectionWrapper {...args}>
      <DataTable
        columns={[
          { key: "us", label: "VHR.eu", highlight: true },
          { key: "carfax", label: "Carfax" },
          { key: "autodna", label: "AutoDNA" },
        ]}
        rows={[
          { name: "Sales History", us: true, carfax: true, autodna: true },
          { name: "Accident Records", us: true, carfax: true, autodna: true },
          { name: "Auction Records", us: true, carfax: false, autodna: false },
          { name: "Mileage Verification", us: "Included", carfax: "Included", autodna: "Included" },
          { name: "Cost per report", us: "€4.99", carfax: "€39.99", autodna: "€19.90" },
        ]}
      />
    </SectionWrapper>
  ),
};

/* ── Heading only (no subtitle) ── */
export const HeadingOnly: Story = {
  args: {
    bg: "white",
    heading: "Run VIN Check Europe by Makes",
  },
  render: (args) => (
    <SectionWrapper {...args}>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {["Audi", "BMW", "Mercedes", "VW", "Porsche", "Volvo", "Fiat", "Peugeot", "Renault", "Jaguar"].map(
          (make) => (
            <div
              key={make}
              className="flex items-center justify-center rounded-xl border border-border bg-white px-4 py-5 text-sm font-semibold text-primary shadow-sm"
            >
              {make}
            </div>
          ),
        )}
      </div>
    </SectionWrapper>
  ),
};

/* ── No heading — raw wrapper only ── */
export const NoHeading: Story = {
  args: {
    bg: "muted",
  },
  render: (args) => (
    <SectionWrapper {...args}>
      <IconList
        items={[
          "1 in 3 used cars have a hidden problem",
          "Up to 30% of used cars in Europe have tampered odometers",
          "Around 20% of used cars in Germany have undisclosed damages",
          "Approximately 10% of vehicles have unresolved recall issues",
        ]}
        icon="triangle-alert"
        variant="danger"
      />
    </SectionWrapper>
  ),
};
