import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Breadcrumbs from "./breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const BlogPost: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "7 Best Electric Cars to Buy Used in 2024", href: "/best-electric-cars-used-2024" },
    ],
  },
  decorators: [
    (Story) => (
      <div className="bg-surface px-8 py-6">
        <Story />
      </div>
    ),
  ],
};

export const CountryPage: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "VIN Check", href: "/#" },
      { label: "Germany VIN Check", href: "/germany-vin-check" },
    ],
  },
  decorators: [
    (Story) => (
      <div className="bg-surface px-8 py-6">
        <Story />
      </div>
    ),
  ],
};

export const Dark: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "VIN Decoder", href: "/vin-decoder" },
      { label: "BMW", href: "/vin-decoder/bmw" },
    ],
    dark: true,
  },
  decorators: [
    (Story) => (
      <div className="px-8 py-6" style={{ background: "var(--hero-dark)" }}>
        <Story />
      </div>
    ),
  ],
};
