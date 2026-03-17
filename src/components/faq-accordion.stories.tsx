import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FaqAccordion from "./faq-accordion";

const GENERAL_FAQS = [
  {
    question: "What is the difference between free and paid VIN checks?",
    answer:
      "A free VIN check gives basic details like make, model, and year. Paid reports may include ownership history, accidents, theft records, mileage history and more.",
  },
  {
    question: "Is your VIN check reliable and accurate?",
    answer:
      "Yes, our VIN check is highly reliable and accurate. We source our data from multiple trusted databases and official records to ensure the information provided is up-to-date and comprehensive.",
  },
  {
    question: "Where is the VIN number on a car?",
    answer:
      "The VIN can typically be found on the driver's side dashboard visible through the windshield, inside the driver's side door jamb, on the engine block, and in the vehicle registration documents.",
  },
  {
    question: "What information does a European VIN number contain?",
    answer:
      "A European VIN number contains 17 characters: World Manufacturer Identifier (first 3), Vehicle descriptor section (4-9), and Vehicle identifier section (last 8). These reveal country of manufacture, brand, vehicle type, engine size, model year, and serial number.",
  },
  {
    question: "I don't have a VIN number, what can I do?",
    answer:
      "Check your vehicle registration or insurance documents, look for the VIN plate on your vehicle, contact your car dealer or the manufacturer, or check your car's service history.",
  },
];

const GERMANY_FAQS = [
  {
    question: "How do I check a German vehicle's history?",
    answer:
      "Enter the 17-character VIN from the Fahrzeugbrief or Zulassungsbescheinigung Teil II into our search tool. The report covers TÜV records, accident history, mileage verification, and ownership changes registered in Germany.",
  },
  {
    question: "Are TÜV inspection results included?",
    answer:
      "Yes, our reports include TÜV/DEKRA inspection history when available. This covers pass/fail status, recorded defects, and mileage at each inspection — critical for spotting odometer manipulation.",
  },
  {
    question: "Can I check a car imported from Germany to another EU country?",
    answer:
      "Absolutely. Our database covers cross-border vehicle histories. If a car was originally registered in Germany and later exported, we can still access its German records including service history and inspection data.",
  },
];

const PRICING_FAQS = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers via SEPA for European customers.",
  },
  {
    question: "Can I get a refund if the report has no data?",
    answer:
      "Yes. If our report returns no meaningful data for the VIN you entered, you are eligible for a full refund. Contact our support team within 30 days of purchase.",
  },
];

const meta: Meta<typeof FaqAccordion> = {
  title: "Content/FaqAccordion",
  component: FaqAccordion,
  argTypes: {
    dark: {
      control: "boolean",
      table: { category: "Layout" },
    },
    defaultOpen: {
      control: "boolean",
      table: { category: "Layout" },
    },
    items: { control: "object", table: { category: "Content" } },
  },
  args: {
    items: GENERAL_FAQS,
    dark: false,
    defaultOpen: true,
  },
  parameters: { layout: "centered" },
  decorators: [
    (Story, context) => (
      <div
        className={`w-full max-w-3xl p-6 ${context.args.dark ? "bg-hero-dark" : "bg-surface"}`}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FaqAccordion>;

/* ── Default (Homepage) ── */
export const Default: Story = {
  name: "Default (Homepage)",
};

/* ── All collapsed ── */
export const AllCollapsed: Story = {
  name: "All Collapsed",
  args: { defaultOpen: false },
};

/* ── Dark ── */
export const Dark: Story = {
  name: "Dark",
  args: { dark: true },
};

/* ── Country page (Germany) ── */
export const CountryPage: Story = {
  name: "Country Page (Germany)",
  args: { items: GERMANY_FAQS },
};

/* ── Pricing FAQs (short) ── */
export const PricingFaqs: Story = {
  name: "Pricing FAQs (2 items)",
  args: { items: PRICING_FAQS },
};

/* ── Dark — Country ── */
export const DarkCountry: Story = {
  name: "Dark — Country (Germany)",
  args: {
    items: GERMANY_FAQS,
    dark: true,
  },
};
