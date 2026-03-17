import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FeatureCard from "./feature-card";

const meta: Meta<typeof FeatureCard> = {
  title: "Components/FeatureCard/Callout",
  component: FeatureCard,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof FeatureCard>;

export const Light: Story = {
  args: {
    title: "Callout",
    variant: "callout",
    stat: "73%",
    text: "of cars imported to Europe between 2011 and 2021 had salvage titles.",
    source: "European Vehicle History Database, 2023",
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

export const Dark: Story = {
  args: {
    title: "Callout",
    variant: "callout",
    stat: "73%",
    text: "of cars imported to Europe between 2011 and 2021 had salvage titles.",
    source: "European Vehicle History Database, 2023",
    dark: true,
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

export const OdometerFraud: Story = {
  args: {
    title: "Callout",
    variant: "callout",
    stat: "30%",
    text: "of used cars sold in Europe have tampered odometers, costing buyers an estimated €5.6 billion annually.",
    source: "European Parliament Study, 2018",
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
