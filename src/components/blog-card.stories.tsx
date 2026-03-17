import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import BlogCard from "./blog-card";
import BlogGrid from "./blog-grid";

/* ═══════════════════════════════════════
   BlogCard Stories
   ═══════════════════════════════════════ */

const meta: Meta<typeof BlogCard> = {
  title: "Cards/BlogCard",
  component: BlogCard,
  argTypes: {
    title: { control: "text", table: { category: "Content" } },
    slug: { control: "text", table: { category: "Content" } },
    image: { control: "text", table: { category: "Content" } },
    author: { control: "text", table: { category: "Content" } },
    avatar: { control: "text", table: { category: "Content" } },
    date: { control: "text", table: { category: "Content" } },
    excerpt: { control: "text", table: { category: "Content" } },
    dark: { control: "boolean", table: { category: "Layout" } },
    delay: { control: "number", table: { category: "Animation" } },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof BlogCard>;

/* ── Light — with excerpt ── */
export const Light: Story = {
  args: {
    title: "What is the Best Used SUV to Buy in 2026?",
    slug: "what-is-the-best-used-suv-to-buy-in",
    author: "Adewale Peter",
    date: "Nov 30, 2024",
    excerpt:
      "You've decided it's time for an SUV, but the choices feel overwhelming. Here's our guide to the best used options across Europe.",
    dark: false,
  },
  decorators: [
    (Story) => (
      <div className="w-[380px] bg-surface p-6">
        <Story />
      </div>
    ),
  ],
};

/* ── Dark ── */
export const Dark: Story = {
  args: {
    title: "7 Best Electric Cars to Buy Used in 2024",
    slug: "best-used-electric-cars",
    author: "Adewale Peter",
    date: "Nov 27, 2024",
    excerpt:
      "Electric vehicles are becoming more affordable on the second-hand market. Here are the top picks.",
    dark: true,
  },
  decorators: [
    (Story) => (
      <div
        className="w-[380px] p-6"
        style={{ background: "var(--hero-dark)" }}
      >
        <Story />
      </div>
    ),
  ],
};

/* ── No excerpt ── */
export const NoExcerpt: Story = {
  args: {
    title: "Best Family SUVs for 2024",
    slug: "best-family-suv-2024",
    author: "Adewale Peter",
    date: "Nov 24, 2024",
    dark: false,
  },
  decorators: [
    (Story) => (
      <div className="w-[380px] bg-white p-6">
        <Story />
      </div>
    ),
  ],
};

/* ── Grid — 3 cards in BlogGrid ── */
export const Grid: Story = {
  args: {
    title: "",
    slug: "",
    author: "",
    date: "",
  },
  render: () => (
    <div className="bg-surface px-8 py-16">
      <div className="mx-auto max-w-5xl">
        <BlogGrid moreHref="/blog" moreLabel="More Posts">
          <BlogCard
            title="What is the Best Used SUV to Buy in 2026?"
            slug="what-is-the-best-used-suv-to-buy-in"
            author="Adewale Peter"
            date="Nov 30, 2024"
            excerpt="You've decided it's time for an SUV, but the choices feel overwhelming."
            delay={0.1}
          />
          <BlogCard
            title="7 Best Electric Cars to Buy Used in 2024"
            slug="best-used-electric-cars"
            author="Adewale Peter"
            date="Nov 27, 2024"
            excerpt="Electric vehicles are becoming more affordable on the second-hand market."
            delay={0.18}
          />
          <BlogCard
            title="Best Family SUVs for 2024"
            slug="best-family-suv-2024"
            author="Adewale Peter"
            date="Nov 24, 2024"
            excerpt="Finding the right family SUV means balancing space, safety, and value."
            delay={0.26}
          />
        </BlogGrid>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};

/* ── Grid Dark ── */
export const GridDark: Story = {
  args: {
    title: "",
    slug: "",
    author: "",
    date: "",
  },
  render: () => (
    <div className="px-8 py-16" style={{ background: "var(--hero-dark)" }}>
      <div className="mx-auto max-w-5xl">
        <BlogGrid moreHref="/blog" dark>
          <BlogCard
            title="What is the Best Used SUV to Buy in 2026?"
            slug="what-is-the-best-used-suv-to-buy-in"
            author="Adewale Peter"
            date="Nov 30, 2024"
            excerpt="You've decided it's time for an SUV, but the choices feel overwhelming."
            dark
            delay={0.1}
          />
          <BlogCard
            title="7 Best Electric Cars to Buy Used in 2024"
            slug="best-used-electric-cars"
            author="Adewale Peter"
            date="Nov 27, 2024"
            excerpt="Electric vehicles are becoming more affordable on the second-hand market."
            dark
            delay={0.18}
          />
          <BlogCard
            title="Best Family SUVs for 2024"
            slug="best-family-suv-2024"
            author="Adewale Peter"
            date="Nov 24, 2024"
            excerpt="Finding the right family SUV means balancing space, safety, and value."
            dark
            delay={0.26}
          />
        </BlogGrid>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
