import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SplitContent from "./split-content";

/* ── Warning alert item (used by SaveMoney story) ── */
function WarningItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-red-100/80 bg-gradient-to-r from-red-50/80 to-red-50/30 px-4 py-3.5">
      <svg
        className="mt-0.5 h-[18px] w-[18px] shrink-0 text-red-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-[14px] font-medium leading-relaxed text-red-800/80">{text}</span>
    </div>
  );
}

/* ── VIN structure graphic (used by VIN Explainer story) ── */
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

const WARNINGS = [
  "1 in 3 used cars have a hidden problem",
  "Up to 30% of used cars in Europe have tampered odometers",
  "Around 20% of used cars in Germany have undisclosed damages",
  "Approximately 10% of vehicles on European roads have unresolved recall issues",
];

const meta: Meta<typeof SplitContent> = {
  title: "Components/SplitContent",
  component: SplitContent,
  argTypes: {
    bg: {
      control: "inline-radio",
      options: ["white", "muted", "dark"],
      table: { category: "Layout" },
    },
    reverse: {
      control: "boolean",
      table: { category: "Layout" },
    },
    heading: { control: "text", table: { category: "Content" } },
    description: { control: "text", table: { category: "Content" } },
    cta: { control: "object", table: { category: "Actions" } },
    secondaryCta: { control: "object", table: { category: "Actions" } },
    children: { table: { disable: true } },
    media: { table: { disable: true } },
  },
  args: {
    heading: "Save Money and Avoid Costly Mistakes",
    description:
      "Purchasing a vehicle with hidden problems can lead to expensive repairs and decreased resale value. Our comprehensive vehicle history report can save you thousands of euros by revealing potential issues before you buy.",
    bg: "white",
    reverse: false,
  },
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof SplitContent>;

/* ── SAVE MONEY (homepage) ── */
export const SaveMoney: Story = {
  name: "Save Money (Warnings + CTAs)",
  args: {
    heading: "Save Money and Avoid Costly Mistakes",
    description:
      "Purchasing a vehicle with hidden problems can lead to expensive repairs and decreased resale value. Our comprehensive vehicle history report can save you thousands of euros by revealing potential issues before you buy.",
    bg: "white",
    secondaryCta: { label: "View Sample", href: "/sample-report" },
    cta: { label: "Check Vehicle History!", href: "#hero" },
  },
  render: (args) => (
    <SplitContent {...args}>
      <div className="space-y-3">
        {WARNINGS.map((w) => (
          <WarningItem key={w} text={w} />
        ))}
      </div>
    </SplitContent>
  ),
};

/* ── VIN EXPLAINER (homepage, reversed) ── */
export const VinExplainer: Story = {
  name: "VIN Explainer (Reversed)",
  args: {
    heading: "What is a VIN Number?",
    description: [
      "A Vehicle Identification Number (VIN) is a unique 17-character code assigned to every car. It's like a car's fingerprint!",
      "The VIN number contains crucial information, including the vehicle's manufacturer, model, year, engine type, and country of origin. It also tracks the car's history, such as accidents, repairs, and ownership.",
    ],
    bg: "muted",
    reverse: true,
  },
  render: (args) => (
    <SplitContent {...args} media={<VinGraphic />} />
  ),
};

/* ── DEFAULT PLACEHOLDER (no media) ── */
export const DefaultPlaceholder: Story = {
  name: "Default Placeholder",
  args: {
    heading: "Comprehensive Vehicle Reports",
    description:
      "Get detailed insights into any European vehicle's history, from accidents and mileage verification to title checks and theft records.",
    bg: "white",
    cta: { label: "Get Started", href: "#hero" },
  },
};

/* ── DARK VARIANT ── */
export const Dark: Story = {
  name: "Dark",
  args: {
    heading: "Protect Your Investment",
    description:
      "Don't let hidden vehicle problems cost you thousands. Our reports give you the full picture before you commit.",
    bg: "dark",
    cta: { label: "Check VIN Now", href: "#hero" },
    secondaryCta: { label: "Learn More", href: "/about" },
  },
};

/* ── REVERSED (media left) ── */
export const Reversed: Story = {
  name: "Reversed (Media Left)",
  args: {
    heading: "Know What You're Buying",
    description:
      "Our detailed reports cover everything from accident history to ownership records, giving you complete peace of mind.",
    bg: "muted",
    reverse: true,
    cta: { label: "View Sample Report", href: "/sample-report" },
  },
};

/* ── COUNTRY PAGE VARIANT ── */
export const CountryPage: Story = {
  name: "Country Page (Germany)",
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
