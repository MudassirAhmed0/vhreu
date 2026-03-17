import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import LegalContent from "./legal-content";

const meta: Meta<typeof LegalContent> = {
  title: "Components/LegalContent",
  component: LegalContent,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof LegalContent>;

export const PrivacyPolicy: Story = {
  args: {
    lastUpdated: "March 15, 2026",
    children: (
      <>
        <h1>Privacy Policy</h1>
        <p>
          Vehicle History Europe (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the
          vehiclehistory.eu website. This page informs you of our policies regarding the
          collection, use, and disclosure of personal information when you use our Service.
        </p>

        <h2>1. Information Collection</h2>
        <p>
          We collect several types of information for various purposes to provide and improve
          our Service to you.
        </p>
        <h3>Personal Data</h3>
        <p>
          While using our Service, we may ask you to provide us with certain personally
          identifiable information that can be used to contact or identify you, including:
        </p>
        <ul>
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Vehicle Identification Number (VIN)</li>
        </ul>

        <h2>2. Use of Data</h2>
        <p>Vehicle History Europe uses the collected data for various purposes:</p>
        <ol>
          <li>To provide and maintain our Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve our Service</li>
        </ol>

        <h2>3. Data Retention</h2>
        <p>
          We will retain your <strong>Personal Data</strong> only for as long as is necessary
          for the purposes set out in this Privacy Policy. We will retain and use your Personal
          Data to the extent necessary to comply with our legal obligations.
        </p>

        <hr />

        <p>
          If you have any questions about this Privacy Policy, please{" "}
          <a href="/contact-us">contact us</a>.
        </p>
      </>
    ),
  },
};
