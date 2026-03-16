import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import IconList from "./icon-list";

const WARNINGS = [
  "1 in 3 used cars have a hidden problem",
  "Up to 30% of used cars in Europe have tampered odometers",
  "Around 20% of used cars in Germany have undisclosed damages",
  "Approximately 10% of vehicles on European roads have unresolved recall issues",
];

const BUYER_BENEFITS = [
  { bold: "Avoid Scams:", text: "Know the real story of the car before purchase." },
  { bold: "Check Ownership:", text: "Find out how many people owned the car." },
  { bold: "Accident Records:", text: "Ensure the vehicle wasn't severely damaged." },
  { bold: "Mileage Accuracy:", text: "Spot tampered odometers, avoid odometer fraud easily." },
];

const FEATURES = [
  "Comprehensive accident history from European databases",
  "Odometer verification across multiple service records",
  "Title status and lien check",
  "Open recall notifications",
  "Theft records from international registries",
];

const INFO_ITEMS = [
  "Reports are generated in real-time from official sources",
  "Data is updated daily from European vehicle registries",
  "All reports include a unique verification code",
];

const meta: Meta<typeof IconList> = {
  title: "Components/IconList",
  component: IconList,
  argTypes: {
    icon: {
      control: "inline-radio",
      options: ["warning", "check", "info", "arrow"],
      table: { category: "Layout" },
    },
    variant: {
      control: "inline-radio",
      options: ["danger", "success", "neutral", "muted"],
      table: { category: "Layout" },
    },
    tinted: {
      control: "boolean",
      table: { category: "Layout" },
    },
    dark: {
      control: "boolean",
      table: { category: "Layout" },
    },
    spacing: {
      control: "inline-radio",
      options: ["tight", "normal", "loose"],
      table: { category: "Layout" },
    },
    columns: {
      control: "inline-radio",
      options: [undefined, 2, 3, 4],
      table: { category: "Layout" },
    },
    delay: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
      table: { category: "Layout" },
    },
    items: { control: "object", table: { category: "Content" } },
  },
  args: {
    items: FEATURES,
    icon: "check",
    variant: "neutral",
    dark: false,
    spacing: "normal",
    delay: 0,
  },
  parameters: { layout: "centered" },
  decorators: [
    (Story, context) => (
      <div
        className={`p-10 ${context.args.dark ? "bg-hero-dark" : "bg-white"}`}
        style={{ maxWidth: context.args.columns ? 960 : 520 }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof IconList>;

/* ── Danger / Warnings ── */
export const DangerWarnings: Story = {
  name: "Danger — Warnings (Tinted)",
  args: {
    items: WARNINGS,
    icon: "warning",
    variant: "danger",
  },
};

/* ── Success / Benefits ── */
export const SuccessBenefits: Story = {
  name: "Success — Benefits (Bold+Text)",
  args: {
    items: BUYER_BENEFITS,
    icon: "check",
    variant: "success",
  },
};

/* ── Success Tinted ── */
export const SuccessTinted: Story = {
  name: "Success — Tinted Rows",
  args: {
    items: BUYER_BENEFITS,
    icon: "check",
    variant: "success",
    tinted: true,
  },
};

/* ── Neutral / Features ── */
export const NeutralFeatures: Story = {
  name: "Neutral — Feature List",
  args: {
    items: FEATURES,
    icon: "check",
    variant: "neutral",
  },
};

/* ── Arrow variant ── */
export const ArrowList: Story = {
  name: "Arrow — Highlights",
  args: {
    items: FEATURES.slice(0, 3),
    icon: "arrow",
    variant: "neutral",
  },
};

/* ── Info callout ── */
export const InfoCallout: Story = {
  name: "Info — Callout",
  args: {
    items: INFO_ITEMS,
    icon: "info",
    variant: "muted",
    tinted: true,
  },
};

/* ── Tight spacing ── */
export const TightSpacing: Story = {
  name: "Tight Spacing",
  args: {
    items: FEATURES,
    icon: "check",
    variant: "neutral",
    spacing: "tight",
  },
};

/* ── Loose spacing ── */
export const LooseSpacing: Story = {
  name: "Loose Spacing",
  args: {
    items: WARNINGS,
    icon: "warning",
    variant: "danger",
    spacing: "loose",
  },
};

/* ── With stagger animation ── */
export const WithStagger: Story = {
  name: "With Stagger Animation",
  args: {
    items: FEATURES,
    icon: "check",
    variant: "success",
    delay: 0.1,
  },
};

/* ── Dark — Danger ── */
export const DarkDanger: Story = {
  name: "Dark — Danger",
  args: {
    items: WARNINGS,
    icon: "warning",
    variant: "danger",
    dark: true,
  },
};

/* ── Dark — Success ── */
export const DarkSuccess: Story = {
  name: "Dark — Success",
  args: {
    items: BUYER_BENEFITS,
    icon: "check",
    variant: "success",
    dark: true,
  },
};

/* ── Dark — Neutral ── */
export const DarkNeutral: Story = {
  name: "Dark — Neutral (Tinted)",
  args: {
    items: FEATURES.slice(0, 4),
    icon: "arrow",
    variant: "neutral",
    dark: true,
    tinted: true,
  },
};

/* ── Grid — 2 columns ── */
export const Grid2Cols: Story = {
  name: "Grid — 2 Columns",
  args: {
    items: BUYER_BENEFITS,
    icon: "check",
    variant: "success",
    tinted: true,
    columns: 2,
  },
};

/* ── Grid — 3 columns ── */
export const Grid3Cols: Story = {
  name: "Grid — 3 Columns",
  args: {
    items: [
      ...FEATURES,
      "European recall status and safety notices",
    ],
    icon: "check",
    variant: "neutral",
    tinted: true,
    columns: 3,
  },
};

/* ── Grid — 4 columns (danger) ── */
export const Grid4Cols: Story = {
  name: "Grid — 4 Columns (Danger)",
  args: {
    items: WARNINGS,
    icon: "warning",
    variant: "danger",
    columns: 4,
  },
};

/* ── Grid — No tint (bare) ── */
export const GridBare: Story = {
  name: "Grid — Bare (no bg)",
  args: {
    items: FEATURES,
    icon: "check",
    variant: "neutral",
    tinted: false,
    columns: 2,
  },
};

/* ── Grid — Dark ── */
export const GridDark: Story = {
  name: "Grid — Dark (2 col)",
  args: {
    items: BUYER_BENEFITS,
    icon: "check",
    variant: "success",
    columns: 2,
    dark: true,
  },
};
