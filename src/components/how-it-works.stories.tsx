import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import HowItWorks from "./how-it-works";

const DEFAULT_STEPS = [
  { icon: "search", description: 'Enter the 17-digit VIN into the VIN search form at the top.' },
  { icon: "mail", description: "Provide your email and phone number so we can deliver your report securely." },
  { icon: "click", description: 'Click "Check Vehicle History" to start the process.' },
  { icon: "document", description: "Review the detailed report to understand the car's history, usage, and condition." },
  { icon: "check", description: "Make an informed decision before buying or selling the vehicle." },
];

const meta: Meta<typeof HowItWorks> = {
  title: "Components/HowItWorks",
  component: HowItWorks,
  argTypes: {
    dark: {
      control: "boolean",
      table: { category: "Layout" },
    },
    heading: { control: "text", table: { category: "Content" } },
    closingText: { control: "text", table: { category: "Content" } },
    steps: { control: "object", table: { category: "Content" } },
  },
  args: {
    heading: "How to Run a European VIN Check",
    closingText:
      "It's that easy! Whether you're a buyer or a seller, our tool ensures you have all the facts.",
    steps: DEFAULT_STEPS,
    dark: false,
  },
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof HowItWorks>;

export const Light: Story = {
  name: "Light",
};

export const Dark: Story = {
  name: "Dark",
  args: { dark: true },
};

export const ThreeSteps: Story = {
  name: "3 Steps (Compact)",
  args: {
    heading: "Get Your Report in 3 Steps",
    steps: DEFAULT_STEPS.slice(0, 3),
    closingText: undefined,
    dark: true,
  },
};

export const CountryVariant: Story = {
  name: "Country Page (Germany)",
  args: {
    heading: "How to Check a German Vehicle",
    steps: [
      { icon: "search", description: "Enter the VIN of the German-registered vehicle." },
      { icon: "click", description: "Select Germany as the origin country." },
      { icon: "document", description: "Receive your TÜV records, accident history, and ownership data." },
    ],
    closingText:
      "Access official German vehicle databases including KBA and TÜV records.",
    dark: true,
  },
};
