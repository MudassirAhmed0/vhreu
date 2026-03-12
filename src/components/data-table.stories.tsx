import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import DataTable from "./data-table";

/* ── Competitor comparison data ── */

const COMPETITOR_COLUMNS = [
  { key: "us", label: "VHR.eu", highlight: true },
  { key: "carfax", label: "Carfax" },
  { key: "autodna", label: "AutoDNA" },
];

const COMPETITOR_ROWS = [
  { name: "Sales History", us: true, carfax: true, autodna: true },
  { name: "Accident Records", us: true, carfax: true, autodna: true },
  { name: "Auction Records (NA)", us: true, carfax: false, autodna: false },
  { name: "Mileage Verification", us: "Included", carfax: "Included", autodna: "Included" },
  { name: "Auction History & Photos", us: "Detailed", carfax: false, autodna: true },
  { name: "Theft Records", us: "Recent", carfax: true, autodna: true },
  { name: "Free VIN Lookup", us: "Included", carfax: "Paid Only", autodna: "Included" },
  { name: "Cost per report", us: "€4.99", carfax: "€39.99", autodna: "€19.90" },
  { name: "Report Expiration", us: "No", carfax: "Yes (30 days)", autodna: "Yes (12 days)" },
];

/* ── Pricing comparison data ── */

const PRICING_COLUMNS = [
  { key: "basic", label: "Basic" },
  { key: "silver", label: "Silver", highlight: true },
  { key: "gold", label: "Gold" },
];

const PRICING_ROWS = [
  { name: "Reports included", basic: "1", silver: "2", gold: "5" },
  { name: "Price per report", basic: "€9.98", silver: "€8.50", gold: "€8.00" },
  { name: "Accident history", basic: true, silver: true, gold: true },
  { name: "Odometer check", basic: true, silver: true, gold: true },
  { name: "Theft records", basic: false, silver: true, gold: true },
  { name: "Auction photos", basic: false, silver: false, gold: true },
  { name: "Priority support", basic: false, silver: true, gold: true },
];

/* ── Country coverage data ── */

const COUNTRY_COLUMNS = [
  { key: "de", label: "Germany" },
  { key: "fr", label: "France" },
  { key: "pl", label: "Poland" },
  { key: "uk", label: "UK" },
];

const COUNTRY_ROWS = [
  { name: "Accident records", de: true, fr: true, pl: true, uk: true },
  { name: "Service history", de: true, fr: true, pl: false, uk: true },
  { name: "MOT/TUV records", de: "TÜV", fr: "CT", pl: false, uk: "MOT" },
  { name: "Odometer data", de: true, fr: true, pl: true, uk: true },
  { name: "Theft registry", de: true, fr: true, pl: true, uk: true },
  { name: "Avg. data depth", de: "Excellent", fr: "Good", pl: "Fair", uk: "Excellent" },
];

const meta: Meta<typeof DataTable> = {
  title: "Components/DataTable",
  component: DataTable,
  argTypes: {
    dark: {
      control: "boolean",
      table: { category: "Layout" },
    },
    rowLabel: {
      control: "text",
      table: { category: "Content" },
    },
    columns: { control: "object", table: { category: "Content" } },
    rows: { control: "object", table: { category: "Content" } },
  },
  args: {
    columns: COMPETITOR_COLUMNS,
    rows: COMPETITOR_ROWS,
    rowLabel: "Feature",
    dark: false,
  },
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story, context) => (
      <div
        className={`w-full p-6 ${context.args.dark ? "bg-hero-dark" : "bg-surface"}`}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DataTable>;

/* ── Competitor comparison ── */
export const Competitors: Story = {
  name: "Competitors (Homepage)",
};

/* ── Dark variant ── */
export const CompetitorsDark: Story = {
  name: "Competitors (Dark)",
  args: { dark: true },
};

/* ── Pricing tiers ── */
export const PricingTiers: Story = {
  name: "Pricing Tiers",
  args: {
    columns: PRICING_COLUMNS,
    rows: PRICING_ROWS,
    rowLabel: "Feature",
  },
};

/* ── Country coverage ── */
export const CountryCoverage: Story = {
  name: "Country Coverage (4 cols)",
  args: {
    columns: COUNTRY_COLUMNS,
    rows: COUNTRY_ROWS,
    rowLabel: "Data Type",
  },
};

/* ── Minimal (2 columns) ── */
export const Minimal: Story = {
  name: "Minimal (2 Columns)",
  args: {
    columns: [
      { key: "free", label: "Free Check" },
      { key: "paid", label: "Full Report", highlight: true },
    ],
    rows: [
      { name: "Basic specs", free: true, paid: true },
      { name: "Accident history", free: false, paid: true },
      { name: "Odometer verification", free: false, paid: true },
      { name: "Theft records", free: false, paid: true },
      { name: "Price", free: "Free", paid: "€4.99" },
    ],
    rowLabel: "Included",
  },
};

/* ── Content table: Vehicle specs (text-rich, left-aligned) ── */

const SPEC_COLUMNS = [
  { key: "value", label: "Specification", align: "left" as const },
];

const SPEC_ROWS = [
  { name: "Engine", value: "2.0L Turbocharged Inline-4, 248 HP @ 5,500 RPM, Direct Injection with Variable Valve Timing" },
  { name: "Transmission", value: "8-Speed Automatic with Sport Mode and Manual Paddle Shifters" },
  { name: "Drivetrain", value: "All-Wheel Drive (quattro) with Torsen Centre Differential" },
  { name: "Fuel Economy", value: "24 city / 31 highway / 27 combined MPG (EU cycle: 6.2L/100km)" },
  { name: "Dimensions", value: "4,762 mm L × 1,847 mm W × 1,427 mm H — Wheelbase: 2,824 mm" },
  { name: "Kerb Weight", value: "1,680 kg (3,704 lbs) including driver and standard equipment" },
  { name: "Boot Capacity", value: "460 litres (rear seats up) / 1,410 litres (rear seats folded)" },
];

export const VehicleSpecs: Story = {
  name: "Content — Vehicle Specs",
  args: {
    columns: SPEC_COLUMNS,
    rows: SPEC_ROWS,
    rowLabel: "Detail",
  },
};

/* ── Content table: Country registration info (multi-column, text-rich) ── */

const REGISTRATION_COLUMNS = [
  { key: "process", label: "Registration Process", align: "left" as const },
  { key: "docs", label: "Required Documents", align: "left" as const },
];

const REGISTRATION_ROWS = [
  {
    name: "Germany",
    process: "Register at local Zulassungsstelle within 14 days of purchase. TÜV inspection required for imports.",
    docs: "Fahrzeugbrief (title), proof of insurance (eVB number), ID, proof of address",
  },
  {
    name: "France",
    process: "Apply via ANTS portal or prefecture. Contrôle Technique valid for 6 months required.",
    docs: "Carte grise (registration cert), contrôle technique report, proof of insurance, ID",
  },
  {
    name: "Netherlands",
    process: "Transfer at RDW post office or online via DigiD. APK inspection for vehicles 4+ years.",
    docs: "Tenaamstellingscode, valid APK, proof of insurance, ID or DigiD login",
  },
  {
    name: "Poland",
    process: "Register at Starostwo Powiatowe within 30 days. Technical inspection at authorised station.",
    docs: "Vehicle card, proof of ownership, insurance (OC), customs clearance for imports",
  },
];

export const RegistrationGuide: Story = {
  name: "Content — Registration Guide",
  args: {
    columns: REGISTRATION_COLUMNS,
    rows: REGISTRATION_ROWS,
    rowLabel: "Country",
  },
};

/* ── Content table dark ── */
export const VehicleSpecsDark: Story = {
  name: "Content — Specs (Dark)",
  args: {
    columns: SPEC_COLUMNS,
    rows: SPEC_ROWS,
    rowLabel: "Detail",
    dark: true,
  },
};

/* ── Mixed: some centered, some left ── */
export const MixedAlignment: Story = {
  name: "Mixed — Centered + Left",
  args: {
    columns: [
      { key: "available", label: "Available" },
      { key: "details", label: "Details", align: "left" as const },
    ],
    rows: [
      { name: "Accident History", available: true, details: "Sourced from EU insurance databases, police reports, and repair shop networks across 32 countries" },
      { name: "Odometer Verification", available: true, details: "Cross-referenced against MOT/TÜV records, service history, and auction data to detect rollback" },
      { name: "Theft Records", available: true, details: "Checked against Interpol, Europol, SIS II, and national police databases in real-time" },
      { name: "Recall Status", available: false, details: "Currently in beta — coverage expanding to include RAPEX and manufacturer recall databases" },
      { name: "Finance/Lien Check", available: false, details: "Not yet available for EU vehicles. UK HPI check supported separately." },
    ],
    rowLabel: "Data Point",
  },
};
