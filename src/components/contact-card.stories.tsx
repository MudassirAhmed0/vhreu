import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FeatureCard from "./feature-card";

/* ── Icons ── */
const ChatIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const PhoneIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const EmailIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const meta: Meta<typeof FeatureCard> = {
  title: "Components/FeatureCard/Contact",
  component: FeatureCard,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof FeatureCard>;

export const LiveChat: Story = {
  args: {
    title: "Live Chat",
    variant: "contact",
    icon: ChatIcon,
    label: "Live Chat",
    value: "Chat with us 24/7",
    secondary: "Instant response",
    href: "#",
  },
  decorators: [
    (Story) => (
      <div className="w-[280px] bg-surface p-6">
        <Story />
      </div>
    ),
  ],
};

export const Phone: Story = {
  args: {
    title: "Phone",
    variant: "contact",
    icon: PhoneIcon,
    label: "Phone",
    value: "(866)-300-0554",
    href: "tel:+18663000554",
  },
  decorators: [
    (Story) => (
      <div className="w-[280px] bg-surface p-6">
        <Story />
      </div>
    ),
  ],
};

export const Email: Story = {
  args: {
    title: "Email",
    variant: "contact",
    icon: EmailIcon,
    label: "Email",
    value: "support@vehiclehistory.eu",
    href: "mailto:support@vehiclehistory.eu",
  },
  decorators: [
    (Story) => (
      <div className="w-[280px] bg-surface p-6">
        <Story />
      </div>
    ),
  ],
};

export const DarkChat: Story = {
  args: {
    title: "Live Chat",
    variant: "contact",
    icon: ChatIcon,
    label: "Live Chat",
    value: "Chat with us 24/7",
    secondary: "Instant response",
    href: "#",
    dark: true,
  },
  decorators: [
    (Story) => (
      <div className="w-[280px] p-6" style={{ background: "var(--hero-dark)" }}>
        <Story />
      </div>
    ),
  ],
};

export const AllCards: Story = {
  args: { title: "", variant: "contact", value: "" },
  render: () => (
    <div className="bg-surface px-8 py-16">
      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
        <FeatureCard
          title="Live Chat"
          variant="contact"
          icon={ChatIcon}
          label="Live Chat"
          value="Chat with us 24/7"
          secondary="Instant response"
          href="#"
          delay={0.1}
        />
        <FeatureCard
          title="Phone"
          variant="contact"
          icon={PhoneIcon}
          label="Phone"
          value="(866)-300-0554"
          href="tel:+18663000554"
          delay={0.14}
        />
        <FeatureCard
          title="Email"
          variant="contact"
          icon={EmailIcon}
          label="Email"
          value="support@vehiclehistory.eu"
          href="mailto:support@vehiclehistory.eu"
          delay={0.18}
        />
      </div>
    </div>
  ),
  parameters: { layout: "fullscreen" },
};

export const AllCardsDark: Story = {
  args: { title: "", variant: "contact", value: "" },
  render: () => (
    <div className="px-8 py-16" style={{ background: "var(--hero-dark)" }}>
      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
        <FeatureCard
          title="Live Chat"
          variant="contact"
          icon={ChatIcon}
          label="Live Chat"
          value="Chat with us 24/7"
          secondary="Instant response"
          href="#"
          dark
          delay={0.1}
        />
        <FeatureCard
          title="Phone"
          variant="contact"
          icon={PhoneIcon}
          label="Phone"
          value="(866)-300-0554"
          href="tel:+18663000554"
          dark
          delay={0.14}
        />
        <FeatureCard
          title="Email"
          variant="contact"
          icon={EmailIcon}
          label="Email"
          value="support@vehiclehistory.eu"
          href="mailto:support@vehiclehistory.eu"
          dark
          delay={0.18}
        />
      </div>
    </div>
  ),
  parameters: { layout: "fullscreen" },
};
