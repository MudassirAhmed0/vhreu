import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import DiscountBanner from "./discount-banner";

const meta: Meta<typeof DiscountBanner> = {
  title: "Overlays/DiscountBanner",
  component: DiscountBanner,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof DiscountBanner>;

export const Basic: Story = {
  args: {
    message: "You've received a special discount!",
    code: "GET15",
  },
};

export const NoCode: Story = {
  args: {
    message: "Limited time offer — 20% off all vehicle history reports!",
  },
};
