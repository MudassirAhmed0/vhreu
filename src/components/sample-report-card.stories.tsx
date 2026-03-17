import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SampleReportCard from "./sample-report-card";

const meta: Meta<typeof SampleReportCard> = {
  title: "Cards/SampleReportCard",
  component: SampleReportCard,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof SampleReportCard>;

const SAMPLE = {
  image: "https://placehold.co/600x340/e2e8f0/64748b?text=Toyota+Corolla",
  year: 2019,
  model: "Toyota Corolla Verso",
  vin: "NMTER16RX0R073590",
  bodyStyle: "4 Doors Minivan",
  engine: "1.8L L4 DOHC 16V",
  country: "Turkey",
};

export const Light: Story = {
  args: SAMPLE,
  decorators: [
    (Story) => (
      <div className="bg-surface px-8 py-16">
        <div className="mx-auto max-w-sm">
          <Story />
        </div>
      </div>
    ),
  ],
};

export const Dark: Story = {
  args: { ...SAMPLE, dark: true },
  decorators: [
    (Story) => (
      <div className="px-8 py-16" style={{ background: "var(--hero-dark)" }}>
        <div className="mx-auto max-w-sm">
          <Story />
        </div>
      </div>
    ),
  ],
};

export const TwoCards: Story = {
  args: SAMPLE,
  render: () => (
    <div className="bg-surface px-8 py-16">
      <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
        <SampleReportCard {...SAMPLE} delay={0.1} />
        <SampleReportCard
          image="https://placehold.co/600x340/e2e8f0/64748b?text=VW+Golf"
          year={2020}
          model="Volkswagen Golf"
          vin="WVWZZZ3CZWE123456"
          bodyStyle="5 Doors Hatchback"
          engine="2.0L TDI"
          country="Germany"
          delay={0.14}
        />
      </div>
    </div>
  ),
};
