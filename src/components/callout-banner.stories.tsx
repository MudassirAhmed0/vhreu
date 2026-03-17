import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CalloutBanner from "./callout-banner";

const meta: Meta<typeof CalloutBanner> = {
  title: "Components/CalloutBanner",
  component: CalloutBanner,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof CalloutBanner>;

export const Light: Story = {
  args: {
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
