import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Header from "./header";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export const WithPage: Story = {
  name: "With Page Content",
  render: () => (
    <div>
      <Header />
      <div className="mx-auto max-w-7xl px-8 py-20">
        <h1 className="text-3xl font-bold text-foreground">Page Content</h1>
        <p className="mt-4 text-text-2">Scroll down to see the sticky header behavior.</p>
        <div className="mt-8 space-y-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="h-40 rounded-2xl border border-border bg-surface" />
          ))}
        </div>
      </div>
    </div>
  ),
};
