import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import EmailCaptureForm from "./email-capture-form";

const meta: Meta<typeof EmailCaptureForm> = {
  title: "Forms/EmailCaptureForm",
  component: EmailCaptureForm,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof EmailCaptureForm>;

/* ── Light ── */
export const Light: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="bg-surface px-8 py-16">
        <div className="mx-auto max-w-md">
          <Story />
        </div>
      </div>
    ),
  ],
};

/* ── Dark ── */
export const Dark: Story = {
  args: { dark: true },
  decorators: [
    (Story) => (
      <div className="px-8 py-16" style={{ background: "var(--hero-dark)" }}>
        <div className="mx-auto max-w-md">
          <Story />
        </div>
      </div>
    ),
  ],
};

/* ── Newsletter variant ── */
export const Newsletter: Story = {
  args: { buttonText: "Subscribe" },
  decorators: [
    (Story) => (
      <div className="bg-surface px-8 py-16">
        <div className="mx-auto max-w-md">
          <Story />
        </div>
      </div>
    ),
  ],
};
