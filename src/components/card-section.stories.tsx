import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CardSection from "./card-section";
import FeatureCard from "./feature-card";

/* ── Sample icons ── */
const IconEye = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const IconShield = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);
const IconGauge = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconFile = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);
const IconAlert = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
);
const IconLock = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);
const IconZap = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);
const IconDatabase = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
  </svg>
);
const IconTool = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 5.1a2.121 2.121 0 01-3-3l5.1-5.1m0 0L4.16 8.93a2.122 2.122 0 010-3l1.06-1.06a2.122 2.122 0 013 0l8.25 8.25a2.122 2.122 0 010 3l-1.06 1.06a2.122 2.122 0 01-3 0z" />
  </svg>
);

/* ── Reason cards (WhyRunVinCheck data) ── */
const REASON_CARDS = [
  { icon: IconEye, title: "Reveal Hidden History", description: "1 in 3 used cars has a hidden problem. A European VIN check provides detailed information about a car's past." },
  { icon: IconShield, title: "Avoid Accidented Cars", description: "A car's accident history can reveal whether a car has undergone major repairs that might compromise its safety." },
  { icon: IconGauge, title: "Detect Odometer Fraud", description: "Odometer tampering is common with up to 30% of European used cars with tampered odometers." },
  { icon: IconFile, title: "Ensure Title Authenticity", description: "Verify that the vehicle's title is clean and free from salvage or rebuilt titles." },
  { icon: IconAlert, title: "Check for Open Recalls", description: "About 10% of vehicles on European roads have unresolved recall issues." },
  { icon: IconLock, title: "Avoid Buying Stolen Cars", description: "Check the VIN against international databases to confirm the vehicle hasn't been reported as stolen." },
];

/* ── Why Choose cards ── */
const WHY_CHOOSE_CARDS = [
  { icon: IconZap, title: "Fast and Reliable Reports", description: "Access your report instantly with a user-friendly experience and up-to-date information." },
  { icon: IconDatabase, title: "Trusted European Databases", description: "Our data comes directly from reliable sources across Europe, ensuring accuracy." },
  { icon: IconTool, title: "Easy-to-Use Tools", description: "Simply enter the VIN, and our system does the rest in seconds." },
];

const meta: Meta<typeof CardSection> = {
  title: "Components/CardSection",
  component: CardSection,
  argTypes: {
    bg: {
      control: "inline-radio",
      options: ["white", "muted", "dark"],
      table: { category: "Layout" },
    },
    columns: {
      control: "inline-radio",
      options: [2, 3, 4],
      table: { category: "Layout" },
    },
    heading: { control: "text", table: { category: "Content" } },
    subtitle: { control: "text", table: { category: "Content" } },
    cta: { control: "object", table: { category: "Actions" } },
    secondaryCta: { control: "object", table: { category: "Actions" } },
    children: { table: { disable: true } },
  },
  args: {
    heading: "Why You Should Run a European VIN Number Check?",
    subtitle:
      "With over 52% of used vehicles in Europe with hidden history, a VIN lookup helps you avoid financial traps.",
    bg: "white",
    columns: 3,
  },
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof CardSection>;

/* ── WHY RUN VIN CHECK (light, 3-col, 6 cards) ── */
export const WhyRunVinCheck: Story = {
  name: "Why Run VIN Check (Light)",
  args: {
    heading: "Why You Should Run a European VIN Number Check?",
    subtitle:
      "With over 52% of used vehicles in Europe with hidden history, a VIN lookup helps you avoid financial traps.",
    bg: "white",
    columns: 3,
    cta: { label: "Run a VIN check now!", href: "#hero" },
  },
  render: (args) => (
    <CardSection {...args}>
      {REASON_CARDS.map((card, i) => (
        <FeatureCard key={card.title} {...card} delay={0.1 + i * 0.08} />
      ))}
    </CardSection>
  ),
};

/* ── WHY CHOOSE US (muted bg, 3-col) ── */
export const WhyChooseUs: Story = {
  name: "Why Choose Us (Muted)",
  args: {
    heading: "Why Choose Our EU VIN Decoder?",
    bg: "muted",
    columns: 3,
    cta: { label: "Check VIN Now!", href: "#hero" },
    secondaryCta: { label: "View Sample Report", href: "/sample-report" },
  },
  render: (args) => (
    <CardSection {...args}>
      {WHY_CHOOSE_CARDS.map((card, i) => (
        <FeatureCard key={card.title} {...card} delay={0.1 + i * 0.08} />
      ))}
    </CardSection>
  ),
};

/* ── DARK VARIANT (3 cards) ── */
export const DarkVariant: Story = {
  name: "Dark (3 Cards)",
  args: {
    heading: "Why Choose Our EU VIN Decoder?",
    subtitle: "Industry-leading accuracy backed by official European databases.",
    bg: "dark",
    columns: 3,
    cta: { label: "Get Started", href: "#hero" },
  },
  render: (args) => (
    <CardSection {...args}>
      {WHY_CHOOSE_CARDS.map((card, i) => (
        <FeatureCard key={card.title} {...card} dark delay={0.1 + i * 0.08} />
      ))}
    </CardSection>
  ),
};

/* ── 2-COLUMN LAYOUT ── */
export const TwoColumns: Story = {
  name: "2-Column Layout",
  args: {
    heading: "Key Benefits",
    bg: "white",
    columns: 2,
  },
  render: (args) => (
    <CardSection {...args}>
      {REASON_CARDS.slice(0, 4).map((card, i) => (
        <FeatureCard key={card.title} {...card} delay={0.1 + i * 0.08} />
      ))}
    </CardSection>
  ),
};

/* ── 4-COLUMN LAYOUT ── */
export const FourColumns: Story = {
  name: "4-Column Layout",
  args: {
    heading: "Everything You Need",
    subtitle: "Comprehensive vehicle history at your fingertips.",
    bg: "muted",
    columns: 4,
  },
  render: (args) => (
    <CardSection {...args}>
      {REASON_CARDS.slice(0, 4).map((card, i) => (
        <FeatureCard key={card.title} {...card} delay={0.1 + i * 0.08} />
      ))}
    </CardSection>
  ),
};

/* ── WITH BOTH CTAs ── */
export const WithBothCTAs: Story = {
  name: "With Both CTAs",
  args: {
    heading: "Why You Should Run a VIN Check",
    bg: "white",
    columns: 3,
    cta: { label: "Check VIN Now!", href: "#hero" },
    secondaryCta: { label: "View Sample Report", href: "/sample-report" },
  },
  render: (args) => (
    <CardSection {...args}>
      {REASON_CARDS.map((card, i) => (
        <FeatureCard key={card.title} {...card} delay={0.1 + i * 0.08} />
      ))}
    </CardSection>
  ),
};

/* ══════════════════════════════════════════════════════════
   CHECKLIST VARIANT STORIES
   ══════════════════════════════════════════════════════════ */

/* ── Buyers vs Dealers data ── */
const BUYER_ITEMS = [
  { bold: "Avoid Scams:", text: "Know the real story of the car before purchase." },
  { bold: "Check Ownership:", text: "Find out how many people owned the car." },
  { bold: "Accident Records:", text: "Ensure the vehicle wasn't severely damaged." },
  { bold: "Mileage Accuracy:", text: "Spot tampered odometers, avoid odometer fraud easily." },
  { bold: "Service Records:", text: "Confirm the car has been well-maintained." },
  { bold: "Theft History:", text: "Ensure the car isn't flagged as stolen." },
];

const DEALER_ITEMS = [
  { bold: "Build Trust:", text: "Show potential buyers the car's complete history." },
  { bold: "Highlight Value:", text: "Use car title and condition to increase appeal." },
  { bold: "Close Sales Faster:", text: "Provide detailed reports to eliminate buyer doubts." },
  { bold: "Compliance:", text: "Ensure vehicles meet EU legal requirements for sale." },
  { bold: "Better resale value:", text: "Shows servicing, set fair, market-aligned prices." },
  { bold: "Boost reputation:", text: "Establish trustworthiness, attracting repeat customers." },
];

/* ── Report Contents data ── */
const REPORT_CATEGORIES: { title: string; accent: "blue" | "amber" | "green" | "purple" | "red"; items: string[] }[] = [
  {
    title: "Detailed Vehicle Specification",
    accent: "blue",
    items: ["General specification", "Number of doors and seats", "Body type", "Engine type", "Fuel type", "Displacement information", "Gearbox type"],
  },
  {
    title: "Auction Records",
    accent: "amber",
    items: ["Sales status and history", "Engine status (Runs and drives, engine starts, and car keys status)", "Auction type, date and location, type of seller"],
  },
  {
    title: "Title and Condition",
    accent: "green",
    items: ["Title brand (clean, salvage, etc)", "Title Description", "Damage (Primary and secondary)"],
  },
  {
    title: "Technical Specs",
    accent: "purple",
    items: ["Odometer on title", "Average estimated retail value", "Vehicle color", "Transmission", "Estimated repair cost", "Damage ratio"],
  },
  {
    title: "Theft Records (Stolen Check)",
    accent: "red",
    items: ["Reported as Stolen", "Stolen Date", "Location", "License Plate", "Color"],
  },
];

/* ── BUYERS VS DEALERS (2-col, muted bg, checklist) ── */
export const BuyersVsDealers: Story = {
  name: "Buyers vs Dealers (Checklist)",
  args: {
    heading: "Why You Need European VIN Lookup",
    bg: "muted",
    columns: 2,
  },
  render: (args) => (
    <CardSection {...args}>
      <FeatureCard title="For Car Buyers" items={BUYER_ITEMS} accent="amber" delay={0.1} />
      <FeatureCard title="For Dealerships and Resellers" items={DEALER_ITEMS} accent="amber" delay={0.18} />
    </CardSection>
  ),
};

/* ── REPORT CONTENTS (3-col, colored accents, checklist) ── */
export const ReportContents: Story = {
  name: "Report Contents (Category Colors)",
  args: {
    heading: "What Can You Learn from Europe Vehicle History Report",
    bg: "white",
    columns: 3,
    secondaryCta: { label: "Check Sample Report", href: "/sample-report" },
    cta: { label: "Check VIN Now!", href: "#hero" },
  },
  render: (args) => (
    <CardSection {...args}>
      {REPORT_CATEGORIES.map((cat, i) => (
        <FeatureCard
          key={cat.title}
          title={cat.title}
          items={cat.items}
          accent={cat.accent}
          delay={0.1 + i * 0.08}
        />
      ))}
    </CardSection>
  ),
};

/* ── DARK CHECKLIST ── */
export const DarkChecklist: Story = {
  name: "Dark Checklist (Blue Accent)",
  args: {
    heading: "What's Included in Your Report",
    bg: "dark",
    columns: 3,
  },
  render: (args) => (
    <CardSection {...args}>
      {REPORT_CATEGORIES.slice(0, 3).map((cat, i) => (
        <FeatureCard
          key={cat.title}
          title={cat.title}
          items={cat.items}
          accent={cat.accent}
          dark
          delay={0.1 + i * 0.08}
        />
      ))}
    </CardSection>
  ),
};
