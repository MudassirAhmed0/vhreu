import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PillGrid from "./pill-grid";

const meta: Meta<typeof PillGrid> = {
  title: "Components/PillGrid",
  component: PillGrid,
  argTypes: {
    dark: { control: "boolean", table: { category: "Layout" } },
    delay: { control: "number", table: { category: "Animation" } },
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof PillGrid>;

const COUNTRIES = [
  "Albania", "Austria", "Belgium", "Andorra", "Bosnia",
  "Bulgaria", "Croatia", "Czech Republic", "Denmark", "Estonia",
  "Finland", "France", "Germany", "Greece", "Hungary",
  "Iceland", "Ireland", "Italy", "Latvia", "Liechtenstein",
  "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco",
  "Montenegro", "Netherlands", "Norway", "Poland", "Portugal",
  "Romania", "Russia", "San Marino", "Serbia", "Slovakia",
  "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine",
  "United Kingdom", "North Macedonia", "Holy See",
].map((c) => ({ label: c, href: `/${c.toLowerCase().replace(/\s+/g, "-")}-vin-check` }));

const FEW_COUNTRIES = COUNTRIES.slice(0, 12);

const CAR_MAKES = [
  "Alfa Romeo", "Audi", "BMW", "Citroen", "Fiat",
  "Jaguar", "Land Rover", "Mercedes-Benz", "Mini",
  "Peugeot", "Porsche", "Renault", "Saab", "Volkswagen", "Volvo",
].map((m) => ({ label: m, href: `/vin-decoder/${m.toLowerCase().replace(/\s+/g, "-")}` }));

/* ── Light — full country list ── */
export const Countries: Story = {
  args: {
    items: COUNTRIES,
    dark: false,
  },
  decorators: [
    (Story) => (
      <div className="bg-surface px-8 py-16">
        <div className="mx-auto max-w-5xl">
          <Story />
        </div>
      </div>
    ),
  ],
};

/* ── Dark — full country list ── */
export const CountriesDark: Story = {
  args: {
    items: COUNTRIES,
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

/* ── Few items — small pill set ── */
export const FewItems: Story = {
  args: {
    items: FEW_COUNTRIES,
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

/* ── Car Makes — alternate data ── */
export const CarMakes: Story = {
  args: {
    items: CAR_MAKES,
    dark: false,
  },
  decorators: [
    (Story) => (
      <div className="bg-white px-8 py-16">
        <div className="mx-auto max-w-4xl">
          <Story />
        </div>
      </div>
    ),
  ],
};

/* ── With stagger animation ── */
export const Animated: Story = {
  args: {
    items: FEW_COUNTRIES,
    dark: false,
    delay: 0.1,
  },
  decorators: [
    (Story) => (
      <div className="bg-surface px-8 py-16">
        <div className="mx-auto max-w-4xl">
          <Story />
        </div>
      </div>
    ),
  ],
};
