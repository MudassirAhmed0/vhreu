import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CardSection from "./card-section";
import FeatureCard from "./feature-card";
import {
  IconEye, IconShield, IconGauge, IconFile, IconAlert, IconLock,
  IconZap, IconDatabase, IconTool,
} from "./__fixtures__/sample-icons";
import { BUYER_ITEMS, DEALER_ITEMS, REPORT_CATEGORIES, FEATURES } from "./__fixtures__/sample-data";

/* ── Reason cards (icon variant data) ── */
const REASON_CARDS = [
  { icon: IconEye, ...FEATURES[0] },
  { icon: IconShield, ...FEATURES[1] },
  { icon: IconGauge, ...FEATURES[2] },
  { icon: IconFile, ...FEATURES[3] },
  { icon: IconAlert, ...FEATURES[4] },
  { icon: IconLock, ...FEATURES[5] },
];

const WHY_CHOOSE_CARDS = [
  { icon: IconZap, title: "Fast and Reliable Reports", description: "Access your report instantly with a user-friendly experience and up-to-date information." },
  { icon: IconDatabase, title: "Trusted European Databases", description: "Our data comes directly from reliable sources across Europe, ensuring accuracy." },
  { icon: IconTool, title: "Easy-to-Use Tools", description: "Simply enter the VIN, and our system does the rest in seconds." },
];

const meta: Meta<typeof CardSection> = {
  title: "Components/CardSection",
  component: CardSection,
  argTypes: {
    bg: { control: "inline-radio", options: ["white", "muted", "dark"], table: { category: "Layout" } },
    columns: { control: "inline-radio", options: [2, 3, 4], table: { category: "Layout" } },
    heading: { control: "text", table: { category: "Content" } },
    subtitle: { control: "text", table: { category: "Content" } },
    cta: { control: "object", table: { category: "Actions" } },
    secondaryCta: { control: "object", table: { category: "Actions" } },
    children: { table: { disable: true } },
  },
  args: {
    heading: "Section Heading",
    subtitle: "Section subtitle with supporting text.",
    bg: "white",
    columns: 3,
  },
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof CardSection>;

/* ── 6 cards, light, 3-col ── */
export const SixCardsLight: Story = {
  name: "6 Cards (Light)",
  args: {
    heading: "Why You Should Run a European VIN Number Check?",
    subtitle: "With over 52% of used vehicles in Europe with hidden history, a VIN lookup helps you avoid financial traps.",
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

/* ── Why Choose Us (muted) ── */
export const ThreeCardsMuted: Story = {
  name: "3 Cards (Muted)",
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

/* ── Dark ── */
export const ThreeCardsDark: Story = {
  name: "3 Cards (Dark)",
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

/* ── 2-Column ── */
export const TwoColumns: Story = {
  name: "2-Column Layout",
  args: { heading: "Key Benefits", bg: "white", columns: 2 },
  render: (args) => (
    <CardSection {...args}>
      {REASON_CARDS.slice(0, 4).map((card, i) => (
        <FeatureCard key={card.title} {...card} delay={0.1 + i * 0.08} />
      ))}
    </CardSection>
  ),
};

/* ── 4-Column ── */
export const FourColumns: Story = {
  name: "4-Column Layout",
  args: { heading: "Everything You Need", subtitle: "Comprehensive vehicle history at your fingertips.", bg: "muted", columns: 4 },
  render: (args) => (
    <CardSection {...args}>
      {REASON_CARDS.slice(0, 4).map((card, i) => (
        <FeatureCard key={card.title} {...card} delay={0.1 + i * 0.08} />
      ))}
    </CardSection>
  ),
};

/* ── With Both CTAs ── */
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

/* ── 2-col checklist ── */
export const TwoColumnChecklist: Story = {
  name: "2-Column Checklist",
  args: { heading: "Why You Need European VIN Lookup", bg: "muted", columns: 2 },
  render: (args) => (
    <CardSection {...args}>
      <FeatureCard title="For Car Buyers" items={BUYER_ITEMS} accent="amber" delay={0.1} />
      <FeatureCard title="For Dealerships and Resellers" items={DEALER_ITEMS} accent="amber" delay={0.18} />
    </CardSection>
  ),
};

/* ── Accented checklist (report categories) ── */
export const AccentedChecklist: Story = {
  name: "Accented Checklist (5 Colors)",
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

/* ── Dark checklist ── */
export const DarkChecklist: Story = {
  name: "Dark Checklist",
  args: { heading: "What's Included in Your Report", bg: "dark", columns: 3 },
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
