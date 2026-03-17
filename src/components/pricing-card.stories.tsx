import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PricingCard from "./pricing-card";

const meta: Meta<typeof PricingCard> = {
  title: "Components/PricingCard",
  component: PricingCard,
  argTypes: {
    name: { control: "text", table: { category: "Content" } },
    price: { control: "number", table: { category: "Content" } },
    credits: { control: "number", table: { category: "Content" } },
    savings: { control: "text", table: { category: "Content" } },
    featured: { control: "boolean", table: { category: "Layout" } },
    dark: { control: "boolean", table: { category: "Layout" } },
    buttonText: { control: "text", table: { category: "Content" } },
    delay: { control: "number", table: { category: "Animation" } },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof PricingCard>;

/* ── Single card — basic tier ── */
export const Basic: Story = {
  args: {
    name: "Basic",
    price: 9.98,
    credits: 1,
  },
  decorators: [
    (Story) => (
      <div className="w-[320px] bg-surface p-6">
        <Story />
      </div>
    ),
  ],
};

/* ── Featured / popular ── */
export const Featured: Story = {
  args: {
    name: "Gold",
    price: 40,
    credits: 5,
    savings: "20%",
    featured: true,
  },
  decorators: [
    (Story) => (
      <div className="w-[320px] bg-surface p-6">
        <Story />
      </div>
    ),
  ],
};

/* ── Dark mode ── */
export const Dark: Story = {
  args: {
    name: "Platinum",
    price: 75,
    credits: 10,
    savings: "25%",
    dark: true,
  },
  decorators: [
    (Story) => (
      <div className="w-[320px] p-6" style={{ background: "var(--hero-dark)" }}>
        <Story />
      </div>
    ),
  ],
};

/* ── Dark featured ── */
export const DarkFeatured: Story = {
  args: {
    name: "Gold",
    price: 40,
    credits: 5,
    savings: "20%",
    featured: true,
    dark: true,
  },
  decorators: [
    (Story) => (
      <div className="w-[320px] p-6" style={{ background: "var(--hero-dark)" }}>
        <Story />
      </div>
    ),
  ],
};

/* ── Full grid — all 6 tiers ── */
export const FullGrid: Story = {
  args: { name: "", price: 0, credits: 0 },
  render: () => (
    <div className="bg-surface px-8 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PricingCard name="Basic" price={9.98} credits={1} delay={0.1} />
          <PricingCard name="Silver" price={17} credits={2} savings="15%" delay={0.14} />
          <PricingCard name="Gold" price={40} credits={5} savings="20%" featured delay={0.18} />
          <PricingCard name="Platinum" price={75} credits={10} savings="25%" delay={0.22} />
          <PricingCard name="Diamond" price={175} credits={25} savings="30%" delay={0.26} />
          <PricingCard name="Executive" price={300} credits={50} savings="40%" delay={0.3} />
        </div>
      </div>
    </div>
  ),
  parameters: { layout: "fullscreen" },
};

/* ── Dark grid ── */
export const FullGridDark: Story = {
  args: { name: "", price: 0, credits: 0 },
  render: () => (
    <div className="px-8 py-16" style={{ background: "var(--hero-dark)" }}>
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PricingCard name="Basic" price={9.98} credits={1} dark delay={0.1} />
          <PricingCard name="Silver" price={17} credits={2} savings="15%" dark delay={0.14} />
          <PricingCard name="Gold" price={40} credits={5} savings="20%" featured dark delay={0.18} />
          <PricingCard name="Platinum" price={75} credits={10} savings="25%" dark delay={0.22} />
          <PricingCard name="Diamond" price={175} credits={25} savings="30%" dark delay={0.26} />
          <PricingCard name="Executive" price={300} credits={50} savings="40%" dark delay={0.3} />
        </div>
      </div>
    </div>
  ),
  parameters: { layout: "fullscreen" },
};
