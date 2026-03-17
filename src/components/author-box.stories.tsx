import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import AuthorBox from "./author-box";

const meta: Meta<typeof AuthorBox> = {
  title: "Blog/AuthorBox",
  component: AuthorBox,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof AuthorBox>;

const AUTHOR = {
  name: "Adewale Peter",
  bio: "Automotive journalist covering European car markets, VIN fraud, and vehicle history transparency.",
  socials: {
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
};

export const Light: Story = {
  args: AUTHOR,
  decorators: [
    (Story) => (
      <div className="w-[480px] bg-surface p-8">
        <Story />
      </div>
    ),
  ],
};

export const Dark: Story = {
  args: { ...AUTHOR, dark: true },
  decorators: [
    (Story) => (
      <div className="w-[480px] p-8" style={{ background: "var(--hero-dark)" }}>
        <Story />
      </div>
    ),
  ],
};

export const NoAvatar: Story = {
  args: { ...AUTHOR, avatar: undefined },
  decorators: [
    (Story) => (
      <div className="w-[480px] bg-surface p-8">
        <Story />
      </div>
    ),
  ],
};

export const NoSocials: Story = {
  args: { name: AUTHOR.name, bio: AUTHOR.bio },
  decorators: [
    (Story) => (
      <div className="w-[480px] bg-surface p-8">
        <Story />
      </div>
    ),
  ],
};
