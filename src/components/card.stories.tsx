import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Card from "./card";
import { IconEye, IconShield } from "./__fixtures__/sample-icons";

/* ══════════════════════════════════════════════════════════
   Card stories — all 5 variants in one file
   Use Storybook controls to swap icon/content, not stories.
   ══════════════════════════════════════════════════════════ */

const meta: Meta<typeof Card> = {
  title: "Cards/Card",
  component: Card,
  argTypes: {
    variant: { control: "inline-radio", options: ["icon", "checklist", "stat", "contact", "callout"], table: { category: "Variant" } },
    dark: { control: "boolean", table: { category: "Theme" } },
    delay: { control: { type: "range", min: 0, max: 1, step: 0.1 }, table: { category: "Animation" } },
    accent: { control: "inline-radio", options: [undefined, "blue", "amber", "green", "purple", "red"], table: { category: "Theme" } },
    title: { control: "text", table: { category: "Content" } },
    description: { control: "text", table: { category: "Content" } },
    stat: { control: "text", table: { category: "Content" } },
    label: { control: "text", table: { category: "Content" } },
    value: { control: "text", table: { category: "Content" } },
    text: { control: "text", table: { category: "Content" } },
    source: { control: "text", table: { category: "Content" } },
    items: { control: "object", table: { category: "Content" } },
    icon: { table: { disable: true } },
  },
  args: {
    title: "Feature Title",
    description: "A brief description of this feature.",
    icon: IconEye,
    dark: false,
    delay: 0,
  },
  parameters: { layout: "centered" },
  decorators: [
    (Story, context) => (
      <div
        className={`p-10 ${context.args.dark ? "bg-hero-dark" : "bg-surface"}`}
        style={{ minWidth: 340, maxWidth: 420 }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

/* ══════════════════════════════════════════════════════════
   ICON VARIANT
   ══════════════════════════════════════════════════════════ */

export const Light: Story = { name: "Icon — Light" };

export const Dark: Story = {
  name: "Icon — Dark",
  args: { dark: true },
};

export const WithDelay: Story = {
  name: "Icon — Animated",
  args: { icon: IconShield, title: "With Entrance Delay", delay: 0.3 },
};

/* ══════════════════════════════════════════════════════════
   CHECKLIST VARIANT
   ══════════════════════════════════════════════════════════ */

export const ChecklistAccented: Story = {
  name: "Checklist — Accented",
  args: {
    icon: undefined,
    description: undefined,
    title: "Vehicle Specification",
    accent: "blue",
    items: [
      "General specification",
      "Number of doors and seats",
      "Body type",
      "Engine type",
      "Fuel type",
    ],
  },
};

export const ChecklistBoldText: Story = {
  name: "Checklist — Bold + Text",
  args: {
    icon: undefined,
    description: undefined,
    title: "For Car Buyers",
    accent: "amber",
    items: [
      { bold: "Avoid Scams:", text: "Know the real story before purchase." },
      { bold: "Check Ownership:", text: "Find out how many people owned it." },
      { bold: "Accident Records:", text: "Ensure the vehicle wasn't damaged." },
    ],
  },
};

export const ChecklistDark: Story = {
  name: "Checklist — Dark",
  args: {
    icon: undefined,
    description: undefined,
    title: "Included in Report",
    accent: "green",
    dark: true,
    items: ["Title brand", "Damage history", "Repair cost estimate"],
  },
};

export const ChecklistPlain: Story = {
  name: "Checklist — No Accent",
  args: {
    icon: undefined,
    description: undefined,
    title: "Dealership Benefits",
    items: [
      { bold: "Build Trust:", text: "Show complete history." },
      { bold: "Close Faster:", text: "Eliminate buyer doubts." },
    ],
  },
};

/* ══════════════════════════════════════════════════════════
   STAT VARIANT
   ══════════════════════════════════════════════════════════ */

export const Stat: Story = {
  name: "Stat — Light",
  args: {
    icon: undefined,
    description: "1 in 3 used cars have a hidden problem buyers only discover after purchase.",
    title: "Hidden Problems",
    variant: "stat",
    stat: "1 in 3",
    label: "Hidden Problems",
  },
  decorators: [
    (Story) => (
      <div className="w-[300px] bg-surface p-6">
        <Story />
      </div>
    ),
  ],
};

export const StatDark: Story = {
  name: "Stat — Dark",
  args: {
    icon: undefined,
    description: "Up to 30% of used cars in Europe have tampered odometers.",
    title: "Odometer Fraud",
    variant: "stat",
    stat: "30%",
    label: "Odometer Fraud",
    dark: true,
  },
  decorators: [
    (Story) => (
      <div className="w-[300px] p-6" style={{ background: "var(--hero-dark)" }}>
        <Story />
      </div>
    ),
  ],
};

export const StatGrid: Story = {
  name: "Stat — Grid",
  args: { title: "", variant: "stat" },
  render: () => (
    <div className="bg-surface px-8 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { stat: "1 in 3", label: "Hidden Problems", description: "Hidden problems discovered after purchase." },
            { stat: "30%", label: "Odometer Fraud", description: "Tampered odometers hiding true mileage." },
            { stat: "697K", label: "Vehicle Thefts", description: "Average annual vehicle thefts in the EU." },
          ].map((s, i) => (
            <Card key={s.label} title={s.label} variant="stat" {...s} delay={0.1 + i * 0.04} />
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: { layout: "fullscreen" },
};

/* ══════════════════════════════════════════════════════════
   CONTACT VARIANT
   ══════════════════════════════════════════════════════════ */

const ChatIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const PhoneIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const EmailIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const Contact: Story = {
  name: "Contact — Light",
  args: {
    title: "Live Chat",
    variant: "contact",
    icon: ChatIcon,
    label: "Live Chat",
    value: "Chat with us 24/7",
    secondary: "Instant response",
    href: "#",
    description: undefined,
  },
  decorators: [
    (Story) => (
      <div className="w-[280px] bg-surface p-6">
        <Story />
      </div>
    ),
  ],
};

export const ContactDark: Story = {
  name: "Contact — Dark",
  args: {
    title: "Live Chat",
    variant: "contact",
    icon: ChatIcon,
    label: "Live Chat",
    value: "Chat with us 24/7",
    dark: true,
    description: undefined,
  },
  decorators: [
    (Story) => (
      <div className="w-[280px] p-6" style={{ background: "var(--hero-dark)" }}>
        <Story />
      </div>
    ),
  ],
};

export const ContactGrid: Story = {
  name: "Contact — Grid",
  args: { title: "", variant: "contact", value: "" },
  render: () => (
    <div className="bg-surface px-8 py-16">
      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
        <Card title="Chat" variant="contact" icon={ChatIcon} label="Live Chat" value="Chat with us 24/7" secondary="Instant response" href="#" delay={0.1} />
        <Card title="Phone" variant="contact" icon={PhoneIcon} label="Phone" value="(866)-300-0554" href="tel:+18663000554" delay={0.14} />
        <Card title="Email" variant="contact" icon={EmailIcon} label="Email" value="support@example.com" href="mailto:support@example.com" delay={0.18} />
      </div>
    </div>
  ),
  parameters: { layout: "fullscreen" },
};

/* ══════════════════════════════════════════════════════════
   CALLOUT VARIANT
   ══════════════════════════════════════════════════════════ */

export const Callout: Story = {
  name: "Callout — Light",
  args: {
    title: "Callout",
    variant: "callout",
    stat: "73%",
    text: "of imported vehicles had salvage titles according to recent data.",
    source: "Vehicle History Database, 2023",
    icon: undefined,
    description: undefined,
  },
  decorators: [
    (Story) => (
      <div className="bg-surface px-8 py-16">
        <div className="mx-auto max-w-3xl">
          <Story />
        </div>
      </div>
    ),
  ],
};

export const CalloutDark: Story = {
  name: "Callout — Dark",
  args: {
    title: "Callout",
    variant: "callout",
    stat: "30%",
    text: "of used cars sold have tampered odometers, costing buyers billions annually.",
    source: "Parliament Study, 2018",
    dark: true,
    icon: undefined,
    description: undefined,
  },
  decorators: [
    (Story) => (
      <div className="px-8 py-16" style={{ background: "var(--hero-dark)" }}>
        <div className="mx-auto max-w-3xl">
          <Story />
        </div>
      </div>
    ),
  ],
};
