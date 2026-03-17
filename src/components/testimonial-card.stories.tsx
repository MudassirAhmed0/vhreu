import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TestimonialCard from "./testimonial-card";

const meta: Meta<typeof TestimonialCard> = {
  title: "Components/TestimonialCard",
  component: TestimonialCard,
  argTypes: {
    name: { control: "text", table: { category: "Content" } },
    quote: { control: "text", table: { category: "Content" } },
    rating: { control: { type: "range", min: 1, max: 5, step: 1 }, table: { category: "Content" } },
    location: { control: "text", table: { category: "Content" } },
    dark: { control: "boolean", table: { category: "Layout" } },
    delay: { control: "number", table: { category: "Animation" } },
  },
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof TestimonialCard>;

const REVIEWS = [
  {
    name: "Markus Weber",
    quote: "Saved me from buying a car with a rolled-back odometer. The report showed 40,000 km more than what the seller claimed. Worth every cent.",
    rating: 5,
    location: "Munich, Germany",
  },
  {
    name: "Sophie Laurent",
    quote: "Quick and thorough. Found out the car I was looking at had been in a serious accident in Poland before being imported to France. Definitely avoided a bad deal.",
    rating: 5,
    location: "Lyon, France",
  },
  {
    name: "Pieter van Dijk",
    quote: "Used it for a second-hand BMW from a dealer. Everything checked out and I bought with confidence. Great service for the price.",
    rating: 4,
    location: "Amsterdam, Netherlands",
  },
];

/* ── Single card ── */
export const Basic: Story = {
  args: REVIEWS[0],
  decorators: [
    (Story) => (
      <div className="w-[340px] bg-surface p-6">
        <Story />
      </div>
    ),
  ],
};

/* ── 4 stars ── */
export const FourStars: Story = {
  args: REVIEWS[2],
  decorators: [
    (Story) => (
      <div className="w-[340px] bg-surface p-6">
        <Story />
      </div>
    ),
  ],
};

/* ── Dark ── */
export const Dark: Story = {
  args: { ...REVIEWS[1], dark: true },
  decorators: [
    (Story) => (
      <div className="w-[340px] p-6" style={{ background: "var(--hero-dark)" }}>
        <Story />
      </div>
    ),
  ],
};

/* ── 3 cards row ── */
export const ThreeCards: Story = {
  args: REVIEWS[0],
  render: () => (
    <div className="bg-surface px-8 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <TestimonialCard key={r.name} {...r} delay={0.1 + i * 0.04} />
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: { layout: "fullscreen" },
};

/* ── 3 cards dark ── */
export const ThreeCardsDark: Story = {
  args: REVIEWS[0],
  render: () => (
    <div className="px-8 py-16" style={{ background: "var(--hero-dark)" }}>
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <TestimonialCard key={r.name} {...r} dark delay={0.1 + i * 0.04} />
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: { layout: "fullscreen" },
};
