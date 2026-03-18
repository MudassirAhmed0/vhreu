import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import BlogGrid from "./blog-grid";
import BlogCard from "./blog-card";

const POSTS = [
  { title: "Understanding VIN Numbers", slug: "vin-numbers", image: "/placeholder.jpg", author: "Team VH", date: "Mar 2026", excerpt: "Everything you need to know about Vehicle Identification Numbers." },
  { title: "Odometer Fraud in Europe", slug: "odometer-fraud", image: "/placeholder.jpg", author: "Team VH", date: "Mar 2026", excerpt: "How to spot tampered odometers when buying a used car." },
  { title: "Best Used Cars to Buy", slug: "best-used-cars", image: "/placeholder.jpg", author: "Team VH", date: "Feb 2026", excerpt: "Our top picks for reliable used vehicles across Europe." },
];

const meta: Meta<typeof BlogGrid> = {
  title: "Blog/BlogGrid",
  component: BlogGrid,
  argTypes: {
    moreHref: { control: "text", table: { category: "Actions" } },
    moreLabel: { control: "text", table: { category: "Actions" } },
    dark: { control: "boolean", table: { category: "Theme" } },
  },
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof BlogGrid>;

export const Light: Story = {
  args: { moreHref: "/blog", moreLabel: "More Posts" },
  render: (args) => (
    <div className="bg-surface px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <BlogGrid {...args}>
          {POSTS.map((post, i) => (
            <BlogCard key={post.slug} {...post} delay={0.1 + i * 0.08} />
          ))}
        </BlogGrid>
      </div>
    </div>
  ),
};

export const Dark: Story = {
  args: { moreHref: "/blog", dark: true },
  render: (args) => (
    <div className="px-8 py-16" style={{ background: "var(--hero-dark)" }}>
      <div className="mx-auto max-w-7xl">
        <BlogGrid {...args}>
          {POSTS.map((post, i) => (
            <BlogCard key={post.slug} {...post} dark delay={0.1 + i * 0.08} />
          ))}
        </BlogGrid>
      </div>
    </div>
  ),
};

export const NoMoreLink: Story = {
  name: "No More Link",
  render: () => (
    <div className="bg-surface px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <BlogGrid>
          {POSTS.map((post, i) => (
            <BlogCard key={post.slug} {...post} delay={0.1 + i * 0.08} />
          ))}
        </BlogGrid>
      </div>
    </div>
  ),
};
