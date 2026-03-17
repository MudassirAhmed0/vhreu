/* ══════════════════════════════════════════════════════════
   Sample data — shared between multiple story files.
   Avoids duplicating domain text in each story.
   ══════════════════════════════════════════════════════════ */

import type { AccentColor, ChecklistItem } from "../card";

export const WARNINGS = [
  "1 in 3 used cars have a hidden problem",
  "Up to 30% of used cars in Europe have tampered odometers",
  "Around 20% of used cars in Germany have undisclosed damages",
  "Approximately 10% of vehicles on European roads have unresolved recall issues",
];

export const BUYER_ITEMS: ChecklistItem[] = [
  { bold: "Avoid Scams:", text: "Know the real story of the car before purchase." },
  { bold: "Check Ownership:", text: "Find out how many people owned the car." },
  { bold: "Accident Records:", text: "Ensure the vehicle wasn't severely damaged." },
  { bold: "Mileage Accuracy:", text: "Spot tampered odometers, avoid odometer fraud easily." },
  { bold: "Service Records:", text: "Confirm the car has been well-maintained." },
  { bold: "Theft History:", text: "Ensure the car isn't flagged as stolen." },
];

export const DEALER_ITEMS: ChecklistItem[] = [
  { bold: "Build Trust:", text: "Show potential buyers the car's complete history." },
  { bold: "Highlight Value:", text: "Use car title and condition to increase appeal." },
  { bold: "Close Sales Faster:", text: "Provide detailed reports to eliminate buyer doubts." },
  { bold: "Compliance:", text: "Ensure vehicles meet EU legal requirements for sale." },
  { bold: "Better resale value:", text: "Shows servicing, set fair, market-aligned prices." },
  { bold: "Boost reputation:", text: "Establish trustworthiness, attracting repeat customers." },
];

export const REPORT_CATEGORIES: {
  title: string;
  accent: AccentColor;
  items: string[];
}[] = [
  {
    title: "Detailed Vehicle Specification",
    accent: "blue",
    items: ["General specification", "Number of doors and seats", "Body type", "Engine type", "Fuel type", "Displacement information", "Gearbox type"],
  },
  {
    title: "Auction Records",
    accent: "amber",
    items: ["Sales status and history", "Engine status (Runs and drives, engine starts, and car keys status)", "Auction type, date and location, type of seller"],
  },
  {
    title: "Title and Condition",
    accent: "green",
    items: ["Title brand (clean, salvage, etc)", "Title Description", "Damage (Primary and secondary)"],
  },
  {
    title: "Technical Specs",
    accent: "purple",
    items: ["Odometer on title", "Average estimated retail value", "Vehicle color", "Transmission", "Estimated repair cost", "Damage ratio"],
  },
  {
    title: "Theft Records (Stolen Check)",
    accent: "red",
    items: ["Reported as Stolen", "Stolen Date", "Location", "License Plate", "Color"],
  },
];

export const FEATURES = [
  { title: "Reveal Hidden History", description: "1 in 3 used cars has a hidden problem. A European VIN check provides detailed information about a car's past." },
  { title: "Avoid Accidented Cars", description: "A car's accident history can reveal whether a car has undergone major repairs that might compromise its safety." },
  { title: "Detect Odometer Fraud", description: "Odometer tampering is common with up to 30% of European used cars with tampered odometers." },
  { title: "Ensure Title Authenticity", description: "Verify that the vehicle's title is clean and free from salvage or rebuilt titles." },
  { title: "Check for Open Recalls", description: "About 10% of vehicles on European roads have unresolved recall issues." },
  { title: "Avoid Buying Stolen Cars", description: "Check the VIN against international databases to confirm the vehicle hasn't been reported as stolen." },
];
