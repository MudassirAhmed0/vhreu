import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import VinLocationDiagram from "./vin-location-diagram";

const meta: Meta<typeof VinLocationDiagram> = {
  title: "Content/VinLocationDiagram",
  component: VinLocationDiagram,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof VinLocationDiagram>;

export const Light: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="bg-surface px-8 py-16">
        <div className="mx-auto max-w-3xl">
          <Story />
        </div>
      </div>
    ),
  ],
};

export const Dark: Story = {
  args: { dark: true },
  decorators: [
    (Story) => (
      <div className="px-8 py-16" style={{ background: "var(--hero-dark)" }}>
        <div className="mx-auto max-w-3xl">
          <Story />
        </div>
      </div>
    ),
  ],
};
