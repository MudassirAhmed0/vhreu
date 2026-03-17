import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import StatCard from "./stat-card";

const meta: Meta<typeof StatCard> = {
  title: "Components/StatCard",
  component: StatCard,
  argTypes: {
    stat: { control: "text", table: { category: "Content" } },
    label: { control: "text", table: { category: "Content" } },
    description: { control: "text", table: { category: "Content" } },
    dark: { control: "boolean", table: { category: "Layout" } },
    delay: { control: "number", table: { category: "Animation" } },
  },
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof StatCard>;

const STATS = [
  {
    stat: "1 in 3",
    label: "Hidden Problems",
    description: "1 in 3 used cars have a hidden problem that buyers only discover after purchase.",
  },
  {
    stat: "30%",
    label: "Odometer Fraud",
    description: "Up to 30% of used cars in Europe have tampered odometers, hiding true mileage.",
  },
  {
    stat: "20%",
    label: "Undisclosed Damages",
    description: "Around 20% of used cars in Germany have undisclosed damages not reported to buyers.",
  },
  {
    stat: "10%",
    label: "Unresolved Recalls",
    description: "Approximately 10% of vehicles on European roads have unresolved recall issues.",
  },
  {
    stat: "697K",
    label: "Vehicle Thefts",
    description: "EU police recorded an average of 697,000 vehicle thefts per year between 2015–2017.",
  },
];

/* ── Single card ── */
export const Basic: Story = {
  args: STATS[0],
  decorators: [
    (Story) => (
      <div className="w-[300px] bg-surface p-6">
        <Story />
      </div>
    ),
  ],
};

/* ── Dark ── */
export const Dark: Story = {
  args: { ...STATS[1], dark: true },
  decorators: [
    (Story) => (
      <div className="w-[300px] p-6" style={{ background: "var(--hero-dark)" }}>
        <Story />
      </div>
    ),
  ],
};

/* ── Full grid — all 5 stats ── */
export const FullGrid: Story = {
  args: STATS[0],
  render: () => (
    <div className="bg-surface px-8 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((s, i) => (
            <StatCard key={s.label} {...s} delay={0.1 + i * 0.04} />
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: { layout: "fullscreen" },
};

/* ── Full grid dark ── */
export const FullGridDark: Story = {
  args: STATS[0],
  render: () => (
    <div className="px-8 py-16" style={{ background: "var(--hero-dark)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((s, i) => (
            <StatCard key={s.label} {...s} dark delay={0.1 + i * 0.04} />
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: { layout: "fullscreen" },
};
