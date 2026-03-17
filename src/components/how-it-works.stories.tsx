import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import HowItWorks from "./how-it-works";

const DEFAULT_STEPS = [
  { icon: "search", description: "Enter the 17-digit VIN into the search form." },
  { icon: "mail", description: "Provide your email so we can deliver your report securely." },
  { icon: "click", description: "Click the search button to start the process." },
  { icon: "document", description: "Review the detailed report with the vehicle's full history." },
  { icon: "check", description: "Make an informed decision before buying or selling." },
];

const meta: Meta<typeof HowItWorks> = {
  title: "Sections/HowItWorks",
  component: HowItWorks,
  argTypes: {
    dark: { control: "boolean", table: { category: "Layout" } },
    heading: { control: "text", table: { category: "Content" } },
    closingText: { control: "text", table: { category: "Content" } },
    steps: { control: "object", table: { category: "Content" } },
  },
  args: {
    heading: "How It Works",
    closingText: "It's that easy! Our tool ensures you have all the facts.",
    steps: DEFAULT_STEPS,
    dark: false,
  },
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof HowItWorks>;

export const Light: Story = { name: "Light (5 Steps)" };

export const Dark: Story = {
  name: "Dark (5 Steps)",
  args: { dark: true },
};

export const ThreeStepsCustom: Story = {
  name: "3 Steps (Compact)",
  args: {
    heading: "Get Your Report in 3 Steps",
    steps: DEFAULT_STEPS.slice(0, 3),
    closingText: undefined,
    dark: true,
  },
};

export const AlternateLabels: Story = {
  name: "Alternate Labels",
  args: {
    heading: "How to Check a German Vehicle",
    steps: [
      { icon: "search", description: "Enter the VIN of the German-registered vehicle." },
      { icon: "click", description: "Select Germany as the origin country." },
      { icon: "document", description: "Receive your TÜV records, accident history, and ownership data." },
    ],
    closingText: "Access official German vehicle databases including KBA and TÜV records.",
    dark: true,
  },
};
