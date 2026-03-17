import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import RefundForm from "./refund-form";

const meta: Meta<typeof RefundForm> = {
  title: "Components/RefundForm",
  component: RefundForm,
  argTypes: {
    card: { control: "boolean", table: { category: "Layout" } },
    dark: { control: "boolean", table: { category: "Layout" } },
    delay: { control: "number", table: { category: "Animation" } },
  },
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof RefundForm>;

/* ── Card ── */
export const Card: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="bg-surface px-8 py-16">
        <div className="mx-auto max-w-2xl">
          <Story />
        </div>
      </div>
    ),
  ],
};

/* ── Card dark ── */
export const CardDark: Story = {
  args: { dark: true },
  decorators: [
    (Story) => (
      <div className="px-8 py-16" style={{ background: "var(--hero-dark)" }}>
        <div className="mx-auto max-w-2xl">
          <Story />
        </div>
      </div>
    ),
  ],
};

/* ── Bare (no card) ── */
export const Bare: Story = {
  args: { card: false },
  decorators: [
    (Story) => (
      <div className="bg-surface px-8 py-16">
        <div className="mx-auto max-w-2xl">
          <Story />
        </div>
      </div>
    ),
  ],
};
