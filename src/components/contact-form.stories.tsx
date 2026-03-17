import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ContactForm from "./contact-form";
import PageHero from "./page-hero";

const meta: Meta<typeof ContactForm> = {
  title: "Components/ContactForm",
  component: ContactForm,
  argTypes: {
    card: { control: "boolean", table: { category: "Layout" } },
    heading: { control: "boolean", table: { category: "Layout" } },
    dark: { control: "boolean", table: { category: "Layout" } },
    delay: { control: "number", table: { category: "Animation" } },
  },
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

/* ── Card (default) ── */
export const Card: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="w-[600px] bg-surface p-8">
        <Story />
      </div>
    ),
  ],
};

/* ── Card dark ── */
export const CardDark: Story = {
  args: { dark: true },
  decorators: [
    (Story) => (
      <div className="w-[600px] p-8" style={{ background: "var(--hero-dark)" }}>
        <Story />
      </div>
    ),
  ],
};

/* ── Bare (no card wrapper) ── */
export const Bare: Story = {
  args: { card: false },
  decorators: [
    (Story) => (
      <div className="w-[600px] bg-surface p-8">
        <Story />
      </div>
    ),
  ],
};

/* ── Bare dark ── */
export const BareDark: Story = {
  args: { card: false, dark: true },
  decorators: [
    (Story) => (
      <div className="w-[600px] p-8" style={{ background: "var(--hero-dark)" }}>
        <Story />
      </div>
    ),
  ],
};

/* ── Bare, no heading — just fields ── */
export const FieldsOnly: Story = {
  args: { card: false, heading: false },
  decorators: [
    (Story) => (
      <div className="w-[600px] bg-surface p-8">
        <Story />
      </div>
    ),
  ],
};

/* ── Full width card ── */
export const FullWidth: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="bg-surface px-8 py-16">
        <div className="mx-auto max-w-2xl">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: { layout: "fullscreen" },
};

/* ── Full width dark ── */
export const FullWidthDark: Story = {
  args: { dark: true },
  decorators: [
    (Story) => (
      <div className="px-8 py-16" style={{ background: "var(--hero-dark)" }}>
        <div className="mx-auto max-w-2xl">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: { layout: "fullscreen" },
};

/* ── Inside PageHero split ── */
export const HeroSplit: Story = {
  args: { card: false, heading: false, dark: true },
  render: () => (
    <PageHero
      variant="split"
      tag="Contact"
      title="Got any"
      highlight="Questions?"
      subtitle="If you have any questions or need clarity on any area regarding vehicle history reports, you can reach us via this page. We offer live chat, immediate response, and 24/7 customer service."
      bullets={["24/7 Support", "Instant Response", "Live Chat"]}
      glow={false}
    >
      <ContactForm card={false} heading={false} dark />
    </PageHero>
  ),
  parameters: { layout: "fullscreen" },
};

/* ── Inside PageHero stacked ── */
export const HeroStacked: Story = {
  args: { card: false, heading: false, dark: true },
  render: () => (
    <PageHero
      variant="stacked"
      tag="Contact"
      title="Got any"
      highlight="Questions?"
      subtitle="We offer live chat, immediate response, and 24/7 customer service to attend to your pressing needs."
      glow={false}
    >
      <ContactForm card={false} heading={false} dark />
    </PageHero>
  ),
  parameters: { layout: "fullscreen" },
};
