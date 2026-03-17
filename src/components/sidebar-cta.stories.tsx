import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SidebarCTA from "./sidebar-cta";

const meta: Meta<typeof SidebarCTA> = {
  title: "Components/SidebarCTA",
  component: SidebarCTA,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof SidebarCTA>;

export const Light: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="w-[300px] bg-surface p-6">
        <Story />
      </div>
    ),
  ],
};

export const Dark: Story = {
  args: { dark: true },
  decorators: [
    (Story) => (
      <div className="w-[300px] p-6" style={{ background: "var(--hero-dark)" }}>
        <Story />
      </div>
    ),
  ],
};

export const Custom: Story = {
  args: {
    heading: "Check Before You Buy",
    description: "Our reports cover 40+ European countries with data from official registries.",
    ctaLabel: "Check VIN Now",
    ctaHref: "/#hero",
  },
  decorators: [
    (Story) => (
      <div className="w-[300px] bg-surface p-6">
        <Story />
      </div>
    ),
  ],
};
