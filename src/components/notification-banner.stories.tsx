import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import NotificationBanner from "./notification-banner";

const meta: Meta<typeof NotificationBanner> = {
  title: "Overlays/NotificationBanner",
  component: NotificationBanner,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof NotificationBanner>;

export const Basic: Story = {
  args: {
    vin: "WVWZZZ3CZWE123456",
    vehicle: "2019 Volkswagen Golf",
  },
  decorators: [
    (Story) => (
      <div className="relative h-[300px] bg-surface">
        <Story />
      </div>
    ),
  ],
};

export const WithDiscount: Story = {
  args: {
    vin: "WVWZZZ3CZWE123456",
    vehicle: "2019 Volkswagen Golf",
    discount: "15% OFF",
  },
  decorators: [
    (Story) => (
      <div className="relative h-[300px] bg-surface">
        <Story />
      </div>
    ),
  ],
};
