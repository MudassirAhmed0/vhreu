import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ExitIntentPopup from "./exit-intent-popup";

const meta: Meta<typeof ExitIntentPopup> = {
  title: "Overlays/ExitIntentPopup",
  component: ExitIntentPopup,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof ExitIntentPopup>;

export const Default: Story = {
  args: {
    open: true,
    onDismiss: () => {},
  },
};

export const CustomText: Story = {
  args: {
    open: true,
    headline: "20% OFF",
    subtext: "Your vehicle history report is waiting",
    ctaLabel: "Claim my discount",
    dismissLabel: "I'll pay full price",
    onDismiss: () => {},
  },
};
