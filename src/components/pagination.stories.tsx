import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Pagination from "./pagination";

const meta: Meta<typeof Pagination> = {
  title: "Blog/Pagination",
  component: Pagination,
  argTypes: {
    currentPage: { control: { type: "range", min: 1, max: 20, step: 1 } },
    totalPages: { control: { type: "range", min: 1, max: 20, step: 1 } },
  },
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const FirstPage: Story = {
  args: { currentPage: 1, totalPages: 8, basePath: "/blog" },
  decorators: [
    (Story) => (
      <div className="bg-surface p-8">
        <Story />
      </div>
    ),
  ],
};

export const MiddlePage: Story = {
  args: { currentPage: 5, totalPages: 12, basePath: "/blog" },
  decorators: [
    (Story) => (
      <div className="bg-surface p-8">
        <Story />
      </div>
    ),
  ],
};

export const LastPage: Story = {
  args: { currentPage: 8, totalPages: 8, basePath: "/blog" },
  decorators: [
    (Story) => (
      <div className="bg-surface p-8">
        <Story />
      </div>
    ),
  ],
};

export const FewPages: Story = {
  args: { currentPage: 2, totalPages: 3, basePath: "/blog" },
  decorators: [
    (Story) => (
      <div className="bg-surface p-8">
        <Story />
      </div>
    ),
  ],
};

export const DarkMode: Story = {
  args: { currentPage: 4, totalPages: 10, basePath: "/blog", dark: true },
  decorators: [
    (Story) => (
      <div className="p-8" style={{ background: "var(--hero-dark)" }}>
        <Story />
      </div>
    ),
  ],
};
