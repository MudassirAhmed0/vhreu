import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CTABanner from "./cta-banner";

const meta: Meta<typeof CTABanner> = {
  title: "Components/CTABanner",
  component: CTABanner,
  argTypes: {
    heading: { control: "text", table: { category: "Content" } },
    subtitle: { control: "text", table: { category: "Content" } },
    ctaLabel: { control: "text", table: { category: "Content" } },
    ctaHref: { control: "text", table: { category: "Content" } },
    showVinInput: { control: "boolean", table: { category: "Layout" } },
    vinButtonText: { control: "text", table: { category: "Content" } },
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof CTABanner>;

/* ── Button only — country page bottom CTA ── */
export const ButtonOnly: Story = {
  args: {
    heading: "Check your vehicle now",
    subtitle:
      "Don't risk buying a vehicle with hidden problems. Get a comprehensive history report in seconds.",
    ctaLabel: "Check Now",
    ctaHref: "#hero",
  },
};

/* ── With VIN input — homepage bottom CTA ── */
export const WithVinInput: Story = {
  args: {
    heading: "Ready to check your vehicle?",
    subtitle:
      "Enter your 17-digit VIN below and get instant access to your vehicle's complete history.",
    showVinInput: true,
    vinButtonText: "Search VIN",
  },
};

/* ── Window Sticker CTA ── */
export const WindowSticker: Story = {
  args: {
    heading: "Get Window Sticker Now",
    subtitle:
      "Look up the original factory specs, equipment lists, and MSRP for any vehicle.",
    ctaLabel: "Get Window Sticker",
    ctaHref: "/window-sticker",
  },
};

/* ── Minimal — heading + button only, no subtitle ── */
export const Minimal: Story = {
  args: {
    heading: "Start your VIN check today",
    ctaLabel: "Get Started",
    ctaHref: "#hero",
  },
};

/* ── Decoder CTA ── */
export const Decoder: Story = {
  args: {
    heading: "Decode any European VIN instantly",
    subtitle:
      "Access detailed vehicle specifications, history, and more with our free VIN decoder.",
    showVinInput: true,
    vinButtonText: "Decode VIN",
  },
};
