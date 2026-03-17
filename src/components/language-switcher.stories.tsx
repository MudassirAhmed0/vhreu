import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import LanguageSwitcher from "./language-switcher";

const meta: Meta<typeof LanguageSwitcher> = {
  title: "Components/LanguageSwitcher",
  component: LanguageSwitcher,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof LanguageSwitcher>;

export const Light: Story = {
  args: { current: "en" },
  decorators: [
    (Story) => (
      <div className="flex justify-end bg-white p-8">
        <Story />
      </div>
    ),
  ],
};

export const Dark: Story = {
  args: { current: "en", dark: true },
  decorators: [
    (Story) => (
      <div className="flex justify-end p-8" style={{ background: "var(--hero-dark)" }}>
        <Story />
      </div>
    ),
  ],
};

export const German: Story = {
  args: { current: "de" },
  decorators: [
    (Story) => (
      <div className="flex justify-end bg-white p-8">
        <Story />
      </div>
    ),
  ],
};
