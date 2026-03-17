import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TrustBadges from "./trust-badges";

const meta: Meta<typeof TrustBadges> = {
  title: "Content/TrustBadges",
  component: TrustBadges,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof TrustBadges>;

export const Dark: Story = {
  args: { dark: true },
  decorators: [
    (Story) => (
      <div className="px-8 py-12" style={{ background: "var(--hero-dark)" }}>
        <Story />
      </div>
    ),
  ],
};

export const Light: Story = {
  args: { dark: false },
  decorators: [
    (Story) => (
      <div className="bg-surface px-8 py-12">
        <Story />
      </div>
    ),
  ],
};
