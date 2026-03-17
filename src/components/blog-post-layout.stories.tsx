import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import BlogPostLayout from "./blog-post-layout";

const meta: Meta<typeof BlogPostLayout> = {
  title: "Components/BlogPostLayout",
  component: BlogPostLayout,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof BlogPostLayout>;

const SAMPLE_AUTHOR = {
  name: "Adewale Peter",
  bio: "Automotive journalist covering European car markets, VIN fraud, and vehicle history transparency.",
  socials: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
};

const SAMPLE_CONTENT = (
  <>
    <p>
      Electric vehicles are becoming more affordable on the second-hand market.
      Here are the best options for 2024, with a focus on range, reliability,
      and value for money.
    </p>
    <h2>1. Tesla Model 3</h2>
    <p>
      The Tesla Model 3 remains the most popular used EV in Europe. With over
      350 km of real-world range and access to the Supercharger network, it
      offers an unbeatable combination of technology and practicality.
    </p>
    <p>
      When buying a used Model 3, always check the <a href="#">vehicle history
      report</a> to verify battery health and any previous accident damage.
    </p>
    <h2>2. Volkswagen ID.3</h2>
    <p>
      VW&apos;s dedicated electric hatchback has depreciated significantly,
      making it a great value proposition. The 58 kWh battery variant offers
      around 340 km of range.
    </p>
    <h3>What to watch out for</h3>
    <ul>
      <li>Software update history — early models had infotainment issues</li>
      <li>Battery degradation — check the state of health percentage</li>
      <li>Service history completeness</li>
    </ul>
    <h2>3. Renault Zoe</h2>
    <p>
      The Renault Zoe is the budget champion. Prices for the 52 kWh version
      start under €15,000 in many European markets. Range is around 300 km.
    </p>
    <blockquote>
      Always run a VIN check before purchasing any used electric vehicle.
      Battery replacement costs can exceed €10,000 on some models.
    </blockquote>
    <h2>Conclusion</h2>
    <p>
      The used EV market in Europe is maturing rapidly. With proper due
      diligence — including a comprehensive vehicle history report — buyers can
      find excellent deals on reliable electric cars.
    </p>
  </>
);

/* ── Basic post ── */
export const Basic: Story = {
  args: {
    title: "7 Best Electric Cars to Buy Used in 2024",
    date: "Nov 27, 2024",
    readTime: "5 min read",
    author: SAMPLE_AUTHOR,
    children: SAMPLE_CONTENT,
  },
};

/* ── With sidebar ── */
export const WithSidebar: Story = {
  args: {
    title: "7 Best Electric Cars to Buy Used in 2024",
    date: "Nov 27, 2024",
    readTime: "5 min read",
    author: SAMPLE_AUTHOR,
    children: SAMPLE_CONTENT,
    sidebar: (
      <div className="rounded-2xl border border-border bg-white p-6">
        <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-text-3">
          Sidebar CTA
        </p>
        <p className="mt-2 text-[14px] font-bold text-foreground">
          Ensure a Smart Purchase
        </p>
        <p className="mt-1 text-[13px] text-text-2">
          Run a VIN check before buying any used car in Europe.
        </p>
        <button className="mt-4 w-full rounded-xl bg-primary py-3 text-[14px] font-bold text-white">
          Check VIN Now
        </button>
      </div>
    ),
  },
};

/* ── No featured image ── */
export const NoImage: Story = {
  args: {
    title: "Understanding Odometer Fraud in Europe",
    date: "Jan 12, 2025",
    readTime: "8 min read",
    author: SAMPLE_AUTHOR,
    children: SAMPLE_CONTENT,
  },
};
