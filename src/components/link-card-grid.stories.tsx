import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import LinkCardGrid from "./link-card-grid";

const meta: Meta<typeof LinkCardGrid> = {
  title: "Components/LinkCardGrid",
  component: LinkCardGrid,
  argTypes: {
    columns: {
      control: "select",
      options: [2, 3, 4, 5, 6],
      table: { category: "Layout" },
    },
    dark: { control: "boolean", table: { category: "Layout" } },
    delay: { control: "number", table: { category: "Animation" } },
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof LinkCardGrid>;

const CAR_MAKES = [
  "Alfa Romeo", "Audi", "BMW", "Citroen", "Fiat",
  "Jaguar", "Land Rover", "Mercedes-Benz", "Mini",
  "Peugeot", "Porsche", "Renault", "Saab", "Volkswagen", "Volvo",
].map((m) => ({
  label: m,
  href: `/vin-decoder/${m.toLowerCase().replace(/\s+/g, "-")}`,
}));

const BRANDS_24 = [
  "Volkswagen", "BMW", "Mercedes-Benz", "Audi", "Ford", "Toyota",
  "Honda", "Nissan", "Renault", "Peugeot", "Citroen", "Opel",
  "Volvo", "SEAT", "Skoda", "Fiat", "Alfa Romeo", "Porsche",
  "Land Rover", "Jaguar", "Mini", "Mazda", "Hyundai", "Kia",
].map((m) => ({
  label: m,
  href: `/vin-decoder/${m.toLowerCase().replace(/\s+/g, "-")}`,
}));

const DECODER_LINKS = [
  "Ford", "Audi", "Nissan", "Fiat",
].map((m) => ({
  label: `${m} VIN Decoder`,
  href: `/vin-decoder/${m.toLowerCase()}`,
}));

/* ── Car Makes — 5 columns (homepage) ── */
export const CarMakes: Story = {
  args: {
    items: CAR_MAKES,
    columns: 5,
    dark: false,
  },
  decorators: [
    (Story) => (
      <div className="bg-white px-8 py-16">
        <div className="mx-auto max-w-5xl">
          <Story />
        </div>
      </div>
    ),
  ],
};

/* ── Car Makes Dark ── */
export const CarMakesDark: Story = {
  args: {
    items: CAR_MAKES,
    columns: 5,
    dark: true,
  },
  decorators: [
    (Story) => (
      <div className="px-8 py-16" style={{ background: "var(--hero-dark)" }}>
        <div className="mx-auto max-w-5xl">
          <Story />
        </div>
      </div>
    ),
  ],
};

/* ── Window Sticker Brands — 6 columns ── */
export const BrandsWide: Story = {
  args: {
    items: BRANDS_24,
    columns: 6,
    dark: false,
  },
  decorators: [
    (Story) => (
      <div className="bg-surface px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <Story />
        </div>
      </div>
    ),
  ],
};

/* ── Decoder Links — 3 columns (brand page footer) ── */
export const DecoderLinks: Story = {
  args: {
    items: DECODER_LINKS,
    columns: 4,
    dark: false,
  },
  decorators: [
    (Story) => (
      <div className="bg-white px-8 py-16">
        <div className="mx-auto max-w-3xl">
          <Story />
        </div>
      </div>
    ),
  ],
};

/* ── With stagger animation ── */
export const Animated: Story = {
  args: {
    items: CAR_MAKES,
    columns: 5,
    dark: false,
    delay: 0.1,
  },
  decorators: [
    (Story) => (
      <div className="bg-white px-8 py-16">
        <div className="mx-auto max-w-5xl">
          <Story />
        </div>
      </div>
    ),
  ],
};
