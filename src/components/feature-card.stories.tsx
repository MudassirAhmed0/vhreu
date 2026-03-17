import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FeatureCard from "./feature-card";
import { IconEye, IconShield, IconZap, IconGlobe } from "./__fixtures__/sample-icons";

const meta: Meta<typeof FeatureCard> = {
  title: "Components/FeatureCard",
  component: FeatureCard,
  argTypes: {
    dark: { control: "boolean", table: { category: "Layout" } },
    delay: { control: { type: "range", min: 0, max: 1, step: 0.1 }, table: { category: "Layout" } },
    accent: { control: "inline-radio", options: [undefined, "blue", "amber", "green", "purple", "red"], table: { category: "Layout" } },
    variant: { control: "inline-radio", options: ["icon", "checklist", "stat", "contact", "callout"], table: { category: "Layout" } },
    title: { control: "text", table: { category: "Content" } },
    description: { control: "text", table: { category: "Content" } },
    items: { control: "object", table: { category: "Content" } },
    icon: { table: { disable: true } },
  },
  args: {
    title: "Feature Title",
    description: "A brief description of this feature that explains its value to the user.",
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

export const Light: Story = { name: "Light" };

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
    description: "A car's accident history can reveal whether a car has undergone major repairs that might compromise its safety or performance.",
  },
};

export const ZapIconDark: Story = {
  name: "Zap Icon (Dark)",
  args: {
    icon: IconZap,
    title: "Fast and Reliable Reports",
    description: "Access your report instantly with a user-friendly experience and up-to-date information.",
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
