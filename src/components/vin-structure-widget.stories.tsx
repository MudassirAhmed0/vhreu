import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import VinStructureWidget from "./vin-structure-widget";

const meta: Meta<typeof VinStructureWidget> = {
  title: "Content/VinStructureWidget",
  component: VinStructureWidget,
  argTypes: {
    vin: { control: "text", table: { category: "Content" } },
    dark: { control: "boolean", table: { category: "Layout" } },
    delay: { control: "number", table: { category: "Animation" } },
  },
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof VinStructureWidget>;

/* ── Light ── */
export const Light: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="w-[560px] bg-surface p-6">
        <Story />
      </div>
    ),
  ],
};

/* ── Dark ── */
export const Dark: Story = {
  args: { dark: true },
  decorators: [
    (Story) => (
      <div className="w-[560px] p-6" style={{ background: "var(--hero-dark)" }}>
        <Story />
      </div>
    ),
  ],
};

/* ── Custom VIN ── */
export const CustomVin: Story = {
  args: { vin: "5YJSA1E26MF123456" },
  decorators: [
    (Story) => (
      <div className="w-[560px] bg-surface p-6">
        <Story />
      </div>
    ),
  ],
};

/* ── Full width light ── */
export const FullWidth: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="bg-surface px-8 py-16">
        <div className="mx-auto max-w-xl">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: { layout: "fullscreen" },
};

/* ── Full width dark ── */
export const FullWidthDark: Story = {
  args: { dark: true },
  decorators: [
    (Story) => (
      <div className="px-8 py-16" style={{ background: "var(--hero-dark)" }}>
        <div className="mx-auto max-w-xl">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: { layout: "fullscreen" },
};
