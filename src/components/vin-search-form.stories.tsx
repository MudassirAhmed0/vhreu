import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import VinSearchForm from "./vin-search-form";

const meta: Meta<typeof VinSearchForm> = {
  title: "Components/VinSearchForm",
  component: VinSearchForm,
  argTypes: {
    buttonText: {
      control: "text",
      table: { category: "Content" },
    },
    dark: {
      control: "boolean",
      table: { category: "Layout" },
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof VinSearchForm>;

/* ── Dark — full width on dark hero bg ── */
export const Dark: Story = {
  args: {
    buttonText: "Search VIN",
    dark: true,
  },
  decorators: [
    (Story) => (
      <div
        className="flex min-h-[280px] w-[700px] items-center justify-center rounded-2xl px-16 py-12"
        style={{ background: "var(--hero-dark)" }}
      >
        <div className="w-full">
          <Story />
        </div>
      </div>
    ),
  ],
};

/* ── Light — on white/surface bg ── */
export const Light: Story = {
  args: {
    buttonText: "Search VIN",
    dark: false,
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-[280px] w-[700px] items-center justify-center rounded-2xl px-16 py-12 bg-white">
        <div className="w-full">
          <Story />
        </div>
      </div>
    ),
  ],
};

/* ── Window Sticker — "Check Vehicle" button text ── */
export const WindowSticker: Story = {
  args: {
    buttonText: "Check Vehicle",
    dark: true,
  },
  decorators: [
    (Story) => (
      <div
        className="flex min-h-[280px] w-[700px] items-center justify-center rounded-2xl px-16 py-12"
        style={{ background: "var(--hero-dark)" }}
      >
        <div className="w-full">
          <Story />
        </div>
      </div>
    ),
  ],
};

/* ── Decoder — "Search" button text ── */
export const Decoder: Story = {
  args: {
    buttonText: "Search",
    dark: true,
  },
  decorators: [
    (Story) => (
      <div
        className="flex min-h-[280px] w-[700px] items-center justify-center rounded-2xl px-16 py-12"
        style={{ background: "var(--hero-dark)" }}
      >
        <div className="w-full">
          <Story />
        </div>
      </div>
    ),
  ],
};

/* ── In Card — inside a navy rounded container (like VIN decoder hub) ── */
export const InCard: Story = {
  args: {
    buttonText: "Search",
    dark: true,
  },
  decorators: [
    (Story) => (
      <div
        className="flex min-h-[400px] w-[800px] items-center justify-center px-16 py-12"
        style={{ background: "var(--hero-dark)" }}
      >
        <div
          className="w-full max-w-lg rounded-2xl px-10 py-12"
          style={{ background: "var(--primary)" }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
};
