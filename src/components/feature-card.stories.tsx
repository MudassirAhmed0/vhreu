import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FeatureCard from "./feature-card";

/* ── Sample icons for stories ── */
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

const IconZap = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const IconGlobe = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

const meta: Meta<typeof FeatureCard> = {
  title: "Components/FeatureCard",
  component: FeatureCard,
  argTypes: {
    dark: {
      control: "boolean",
      table: { category: "Layout" },
    },
    delay: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
      table: { category: "Layout" },
    },
    accent: {
      control: "inline-radio",
      options: [undefined, "blue", "amber", "green", "purple", "red"],
      table: { category: "Layout" },
    },
    title: { control: "text", table: { category: "Content" } },
    description: { control: "text", table: { category: "Content" } },
    items: { control: "object", table: { category: "Content" } },
    icon: { table: { disable: true } },
  },
  args: {
    title: "Reveal Hidden History",
    description:
      "1 in 3 used cars has a hidden problem. A European VIN check provides detailed information about a car's past, including accidents, repairs, or ownership changes.",
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
type Story = StoryObj<typeof FeatureCard>;

export const Light: Story = {
  name: "Light",
};

export const Dark: Story = {
  name: "Dark",
  args: { dark: true },
};

export const WithDelay: Story = {
  name: "With Delay (0.3s)",
  args: { delay: 0.3 },
};

export const ShieldIcon: Story = {
  name: "Shield Icon",
  args: {
    icon: IconShield,
    title: "Avoid Accidented Cars",
    description:
      "A car's accident history can reveal whether a car has undergone major repairs that might compromise its safety or performance.",
  },
};

export const ZapIconDark: Story = {
  name: "Zap Icon (Dark)",
  args: {
    icon: IconZap,
    title: "Fast and Reliable Reports",
    description:
      "Access your report instantly with a user-friendly experience and up-to-date information.",
    dark: true,
  },
};

export const GlobeIconDark: Story = {
  name: "Globe Icon (Dark)",
  args: {
    icon: IconGlobe,
    title: "Multilingual Support",
    description: "Available in multiple languages to cater to all European users.",
    dark: true,
  },
};

/* ── Checklist variant stories ── */

export const ChecklistBuyers: Story = {
  name: "Checklist — Buyers (Amber)",
  args: {
    icon: undefined,
    description: undefined,
    title: "For Car Buyers",
    accent: "amber",
    items: [
      { bold: "Avoid Scams:", text: "Know the real story of the car before purchase." },
      { bold: "Check Ownership:", text: "Find out how many people owned the car." },
      { bold: "Accident Records:", text: "Ensure the vehicle wasn't severely damaged." },
      { bold: "Mileage Accuracy:", text: "Spot tampered odometers, avoid odometer fraud easily." },
      { bold: "Service Records:", text: "Confirm the car has been well-maintained." },
      { bold: "Theft History:", text: "Ensure the car isn't flagged as stolen." },
    ],
  },
};

export const ChecklistBlue: Story = {
  name: "Checklist — Vehicle Specs (Blue)",
  args: {
    icon: undefined,
    description: undefined,
    title: "Detailed Vehicle Specification",
    accent: "blue",
    items: [
      "General specification",
      "Number of doors and seats",
      "Body type",
      "Engine type",
      "Fuel type",
      "Displacement information",
      "Gearbox type",
    ],
  },
};

export const ChecklistGreen: Story = {
  name: "Checklist — Title & Condition (Green)",
  args: {
    icon: undefined,
    description: undefined,
    title: "Title and Condition",
    accent: "green",
    items: [
      "Title brand (clean, salvage, etc)",
      "Title Description",
      "Damage (Primary and secondary)",
    ],
  },
};

export const ChecklistRed: Story = {
  name: "Checklist — Theft Records (Red)",
  args: {
    icon: undefined,
    description: undefined,
    title: "Theft Records (Stolen Check)",
    accent: "red",
    items: [
      "Reported as Stolen",
      "Stolen Date",
      "Location",
      "License Plate",
      "Color",
    ],
  },
};

export const ChecklistDark: Story = {
  name: "Checklist — Dark (Blue)",
  args: {
    icon: undefined,
    description: undefined,
    title: "Detailed Vehicle Specification",
    accent: "blue",
    dark: true,
    items: [
      "General specification",
      "Number of doors and seats",
      "Body type",
      "Engine type",
      "Fuel type",
    ],
  },
};

export const ChecklistNoAccent: Story = {
  name: "Checklist — No Accent",
  args: {
    icon: undefined,
    description: undefined,
    title: "For Dealerships and Resellers",
    items: [
      { bold: "Build Trust:", text: "Show potential buyers the car's complete history." },
      { bold: "Highlight Value:", text: "Use car title and condition to increase appeal." },
      { bold: "Close Sales Faster:", text: "Provide detailed reports to eliminate buyer doubts." },
    ],
  },
};
