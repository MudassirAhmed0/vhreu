import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TrustSection from "./trust-section";

const meta: Meta<typeof TrustSection> = {
  title: "Sections/TrustSection",
  component: TrustSection,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof TrustSection>;

export const Light: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="bg-surface px-8 py-16">
        <div className="mx-auto max-w-5xl">
          <Story />
        </div>
      </div>
    ),
  ],
};

export const Dark: Story = {
  args: { dark: true },
  decorators: [
    (Story) => (
      <div className="px-8 py-16" style={{ background: "var(--hero-dark)" }}>
        <div className="mx-auto max-w-5xl">
          <Story />
        </div>
      </div>
    ),
  ],
};
