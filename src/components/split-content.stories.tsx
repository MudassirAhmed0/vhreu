import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SplitContent from "./split-content";
import IconList from "./icon-list";
import { WARNINGS } from "./__fixtures__/sample-data";

/* ── VIN structure graphic ── */
function VinGraphic() {
  const chars = ["W","V","W","Z","Z","Z","3","C","Z","W","E","1","2","3","4","5","6"];
  return (
    <div className="w-full max-w-md">
      <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
        <div className="mb-4 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-text-3">
          VIN Structure
        </div>
        <div className="flex justify-center gap-0.5 font-mono text-lg">
          {chars.map((ch, i) => (
            <span
              key={i}
              className={`flex h-9 w-7 items-center justify-center rounded text-sm font-bold ${
                i < 3
                  ? "bg-blue-100 text-blue-700"
                  : i < 9
                    ? "bg-amber-100 text-amber-700"
                    : "bg-green-100 text-green-700"
              }`}
            >
              {ch}
            </span>
          ))}
        </div>
        <div className="mt-4 flex justify-between text-[10px] font-semibold text-text-3">
          <span className="text-blue-600">WMI (1-3)</span>
          <span className="text-amber-600">VDS (4-9)</span>
          <span className="text-green-600">VIS (10-17)</span>
        </div>
      </div>
    </div>
  );
}

const meta: Meta<typeof SplitContent> = {
  title: "Components/SplitContent",
  component: SplitContent,
  argTypes: {
    bg: { control: "inline-radio", options: ["white", "muted", "dark"], table: { category: "Layout" } },
    reverse: { control: "boolean", table: { category: "Layout" } },
    heading: { control: "text", table: { category: "Content" } },
    description: { control: "text", table: { category: "Content" } },
    cta: { control: "object", table: { category: "Actions" } },
    secondaryCta: { control: "object", table: { category: "Actions" } },
    children: { table: { disable: true } },
    media: { table: { disable: true } },
  },
  args: {
    heading: "Two-Column Section",
    description: "Supporting text that explains the value of this section to the user.",
    bg: "white",
    reverse: false,
  },
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof SplitContent>;

/* ── With child content (warnings) ── */
export const WithChildContent: Story = {
  name: "With Child Content",
  args: {
    heading: "Save Money and Avoid Costly Mistakes",
    description: "Purchasing a vehicle with hidden problems can lead to expensive repairs and decreased resale value. Our comprehensive vehicle history report can save you thousands of euros by revealing potential issues before you buy.",
    bg: "white",
    secondaryCta: { label: "View Sample", href: "/sample-report" },
    cta: { label: "Check Vehicle History!", href: "#hero" },
  },
  render: (args) => (
    <SplitContent {...args}>
      <IconList items={WARNINGS} icon="warning" variant="danger" />
    </SplitContent>
  ),
};

/* ── Reversed with media ── */
export const ReversedWithMedia: Story = {
  name: "Reversed With Media",
  args: {
    heading: "What is a VIN Number?",
    description: [
      "A Vehicle Identification Number (VIN) is a unique 17-character code assigned to every car. It's like a car's fingerprint!",
      "The VIN number contains crucial information, including the vehicle's manufacturer, model, year, engine type, and country of origin.",
    ],
    bg: "muted",
    reverse: true,
  },
  render: (args) => (
    <SplitContent {...args} media={<VinGraphic />} />
  ),
};

/* ── Default placeholder (no media) ── */
export const DefaultPlaceholder: Story = {
  name: "Default Placeholder",
  args: {
    heading: "Comprehensive Vehicle Reports",
    description: "Get detailed insights into any European vehicle's history, from accidents and mileage verification to title checks and theft records.",
    bg: "white",
    cta: { label: "Get Started", href: "#hero" },
  },
};

/* ── Dark ── */
export const Dark: Story = {
  name: "Dark",
  args: {
    heading: "Protect Your Investment",
    description: "Don't let hidden vehicle problems cost you thousands. Our reports give you the full picture before you commit.",
    bg: "dark",
    cta: { label: "Check VIN Now", href: "#hero" },
    secondaryCta: { label: "Learn More", href: "/about" },
  },
};

/* ── Reversed (media left) ── */
export const Reversed: Story = {
  name: "Reversed (Media Left)",
  args: {
    heading: "Know What You're Buying",
    description: "Our detailed reports cover everything from accident history to ownership records, giving you complete peace of mind.",
    bg: "muted",
    reverse: true,
    cta: { label: "View Sample Report", href: "/sample-report" },
  },
};

/* ── Multi-paragraph ── */
export const MultiParagraph: Story = {
  name: "Multi-Paragraph",
  args: {
    heading: "German Vehicle History Check",
    description: [
      "Germany is one of Europe's largest used car markets, with millions of vehicles changing hands each year.",
      "Our comprehensive German VIN check accesses official TUV records, KBA databases, and European-wide accident registries to give you the complete picture.",
    ],
    bg: "white",
    cta: { label: "Check German Vehicle", href: "#hero" },
    secondaryCta: { label: "View Sample", href: "/sample-report" },
  },
};
