import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CheckoutModal from "./checkout-modal";

const meta: Meta<typeof CheckoutModal> = {
  title: "Overlays/CheckoutModal",
  component: CheckoutModal,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof CheckoutModal>;

export const Default: Story = {
  args: {
    open: true,
    planName: "Gold — 5 Credits",
    price: "€40",
    onClose: () => {},
  },
};

export const NoPlan: Story = {
  args: {
    open: true,
    onClose: () => {},
  },
};
