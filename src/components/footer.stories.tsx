import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Footer from "./footer";

const meta: Meta<typeof Footer> = {
  title: "Layout/Footer",
  component: Footer,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};

export const WithPage: Story = {
  name: "With Page Content",
  render: () => (
    <div>
      <div className="mx-auto max-w-7xl px-8 py-20">
        <h1 className="text-3xl font-bold text-foreground">Page Content</h1>
        <p className="mt-4 text-text-2">Footer sits below the page content.</p>
      </div>
      <Footer />
    </div>
  ),
};
