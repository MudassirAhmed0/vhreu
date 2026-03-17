export const SITE_NAME = "Vehicle History Europe";
export const SITE_URL = "https://vehiclehistory.eu";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/sample-report", label: "Sample Reports" },
  { href: "/window-sticker", label: "Window Sticker" },
  { href: "/contact-us", label: "Contact Us" },
];

export const LANGUAGES = [
  { code: "EN", flag: "🇺🇸" },
  { code: "DE", flag: "🇩🇪" },
  { code: "UK", flag: "🇺🇦" },
  { code: "PL", flag: "🇵🇱" },
  { code: "IT", flag: "🇮🇹" },
  { code: "RU", flag: "🇷🇺" },
  { code: "FR", flag: "🇫🇷" },
  { code: "ES", flag: "🇪🇸" },
];

export const HERO = {
  heading: "European VIN Check\nEU VIN Lookup",
  subheading:
    "Get free VIN decoding and affordable European VIN check for reliable vehicle history - verify title and condition, accidents, auction records, actual mileage and more.",
  trustBadges: ["Reliable", "Detailed", "Accurate", "Affordable"],
};

export const SAVE_MONEY = {
  heading: "Save Money and Avoid Costly Mistakes",
  description:
    "Purchasing a vehicle with hidden problems can lead to expensive repairs and decreased resale value. Our comprehensive vehicle history report can save you thousands of euros by revealing potential issues before you buy.",
  warnings: [
    "1 in 3 used cars have a hidden problem",
    "Up to 30% of used cars in Europe have tampered odometers",
    "Around 20% of used cars in Germany have undisclosed damages",
    "Approximately 10% of vehicles on European roads have unresolved recall issues",
  ],
};

export const VIN_EXPLANATION = {
  heading: "What is a VIN Number?",
  paragraphs: [
    "A Vehicle Identification Number (VIN) is a unique 17-character code assigned to every car. It's like a car's fingerprint!",
    "The VIN number contains crucial information, including the vehicle's manufacturer, model, year, engine type, and country of origin. It also tracks the car's history, such as accidents, repairs, and ownership. A VIN is usually found on the car's dashboard, door frame, or engine block.",
  ],
};

export const WHY_RUN_VIN_CHECK = {
  heading: "Why You Should Run a European VIN Number Check?",
  intro:
    "With over 52% of used vehicles in Europe with hidden history, a European VIN number lookup will help you avoid financial booby traps and cars with bad histories, ensuring you buy with confidence and drive with peace of mind. Here's why running a VIN number check is essential before closing your next car deal:",
  reasons: [
    {
      title: "Reveal Hidden History",
      description:
        "1 in 3 used cars has a hidden problem. A European VIN check provides detailed information about a car's past, including accidents, repairs, or ownership changes, ensuring you're not blindsided by undisclosed issues.",
      icon: "eye",
    },
    {
      title: "Avoid Accidented Cars",
      description:
        "A car's accident history can reveal whether a car has undergone major repairs that might compromise its safety or performance. A VIN check helps you avoid vehicles with serious damage.",
      icon: "shield-check",
    },
    {
      title: "Detect Odometer Fraud",
      description:
        "Odometer tampering is common with up to 30% of European used cars with tampered odometers. A VIN check uncovers inconsistencies in mileage records, protecting you from paying more for a vehicle with manipulated mileage.",
      icon: "gauge",
    },
    {
      title: "Ensure Title Authenticity",
      description:
        "A VIN number check verifies that the vehicle's title is clean and free from issues like salvage or rebuilt titles, which could affect the car's value and insurability.",
      icon: "file-text",
    },
    {
      title: "Check for Open Recalls",
      description:
        "About 10% of vehicles on European roads have unresolved recall issues. A VIN check ensures you're aware of any unresolved recalls, enabling you to address safety concerns before purchasing a car.",
      icon: "triangle-alert",
    },
    {
      title: "Avoid Buying Stolen Cars",
      description:
        "EU police recorded an average of 697,000 vehicle thefts between 2015 to 2017. Checking the VIN against international databases helps confirm the vehicle hasn't been reported as stolen, saving you from legal troubles or losing the car.",
      icon: "lock",
    },
  ],
};

export const HOW_TO_STEPS = {
  heading: "How to Run a European VIN Check",
  closing:
    "It's that easy! Whether you're a buyer or a seller, our tool ensures you have all the facts.",
  steps: [
    {
      icon: "search",
      description: 'Enter the 17-digit VIN into the VIN search form at the top.',
    },
    {
      icon: "mail",
      description:
        "Provide your email and phone number so we can deliver your report securely.",
    },
    {
      icon: "mouse-pointer-click",
      description: 'Click "Check Vehicle History" to start the process.',
    },
    {
      icon: "file-text",
      description:
        "Review the detailed report to understand the car's history, usage, and condition.",
    },
    {
      icon: "circle-check",
      description:
        "Make an informed decision before buying or selling the vehicle.",
    },
  ],
};

export const WHY_NEED_LOOKUP = {
  heading: "Why You Need European VIN Lookup",
  buyers: {
    title: "For Car Buyers",
    benefits: [
      { bold: "Avoid Scams:", text: "Know the real story of the car before purchase." },
      { bold: "Check Ownership:", text: "Find out how many people owned the car." },
      { bold: "Accident Records:", text: "Ensure the vehicle wasn't severely damaged." },
      { bold: "Mileage Accuracy:", text: "Spot tampered odometers, avoid odometer fraud easily." },
      { bold: "Service Records:", text: "Confirm the car has been well-maintained." },
      { bold: "Theft History:", text: "Ensure the car isn't flagged as stolen." },
    ],
  },
  dealers: {
    title: "For Dealerships and Resellers",
    benefits: [
      { bold: "Build Trust:", text: "Show potential buyers the car's complete history." },
      { bold: "Highlight Value:", text: "Use car title and condition to increase appeal." },
      { bold: "Close Sales Faster:", text: "Provide detailed reports to eliminate buyer doubts." },
      { bold: "Compliance:", text: "Ensure vehicles meet EU legal requirements for sale." },
      { bold: "Better resale value:", text: "Shows servicing, set fair, market-aligned prices." },
      { bold: "Boost reputation:", text: "Establish trustworthiness, attracting repeat customers and referrals." },
    ],
  },
};

export const REPORT_CONTENTS = {
  heading: "What Can You Learn from Europe Vehicle History Report",
  categories: [
    {
      title: "Detailed Vehicle Specification",
      color: "blue",
      items: [
        "General specification",
        "Number of doors and seats",
        "Body type",
        "Engine type",
        "Fuel type",
        "Displacement information",
        "Gearbox type",
      ],
    },
    {
      title: "Auction Records",
      color: "amber",
      items: [
        "Sales status and history",
        "Engine status (Runs and drives, engine starts, and car keys status)",
        "Auction type, date and location, type of seller",
      ],
    },
    {
      title: "Title and Condition",
      color: "green",
      items: [
        "Title brand (clean, salvage, etc)",
        "Title Description",
        "Damage (Primary and secondary)",
      ],
    },
    {
      title: "Technical Specs",
      color: "purple",
      items: [
        "Odometer on title",
        "Average estimated retail value",
        "Vehicle color",
        "Transmission",
        "Estimated repair cost",
        "Damage ratio",
        "Estimated retail value",
      ],
    },
    {
      title: "Theft Records (Stolen Check)",
      color: "red",
      items: [
        "Reported as Stolen",
        "Stolen Date",
        "Location",
        "License Plate",
        "Color",
      ],
    },
  ],
};

export const COMPETITOR_COMPARISON = {
  heading: "Our Reports vs. Competitors",
  features: [
    { name: "Sales History", us: true, carfax: true, autodna: true },
    { name: "Accident Records", us: true, carfax: true, autodna: true },
    { name: "Auction Records (NA)", us: true, carfax: false, autodna: false },
    { name: "Mileage Verification", us: "Included", carfax: "Included", autodna: "Included" },
    { name: "Auction History & Photos", us: "Detailed", carfax: false, autodna: true },
    { name: "Theft Records", us: "Recent", carfax: true, autodna: true },
    { name: "Free VIN Lookup", us: "Included", carfax: "Paid Only", autodna: "Included" },
    { name: "Cost per report", us: "\u20AC4.99", carfax: "\u20AC39.99", autodna: "\u20AC19.90" },
    { name: "Report Expiration", us: "No", carfax: "Yes (30 days)", autodna: "Yes (12 days)" },
  ],
};

export const WHY_CHOOSE = {
  heading: "Why Choose Our EU VIN Decoder?",
  features: [
    {
      title: "Fast and Reliable Reports",
      description: "Access your report instantly with a user-friendly experience and up-to-date information.",
      icon: "zap",
    },
    {
      title: "Trusted European Databases",
      description: "Our data comes directly from reliable sources across Europe, ensuring accuracy.",
      icon: "database",
    },
    {
      title: "Easy-to-Use Tools",
      description: "Simply enter the VIN, and our system does the rest in seconds.",
      icon: "wrench",
    },
    {
      title: "Affordable Options",
      description: "Choose between free basic checks or detailed premium reports for full insights.",
      icon: "wallet",
    },
    {
      title: "Multilingual Support",
      description: "Available in multiple languages to cater to all European users.",
      icon: "globe",
    },
    {
      title: "24/7 Customer Service",
      description: "Get issues resolved on time. Make informed decisions without delay.",
      icon: "headphones",
    },
  ],
};

export const COUNTRIES_LIST = [
  "Albania", "Austria", "Belgium", "Andorra", "Bosnia", "Bulgaria",
  "Croatia", "Czech Republic", "Denmark", "Estonia", "Finland",
  "North Macedonia", "France", "Germany", "Greece", "Hungary",
  "Iceland", "Ireland", "Italy", "Latvia", "Liechtenstein", "Lithuania",
  "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro",
  "Netherlands", "Norway", "Poland", "Portugal", "Romania", "Russia",
  "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden",
  "Switzerland", "Ukraine", "United Kingdom", "Holy See",
];

export const CAR_MAKES = [
  "Alfa Romeo", "Audi", "BMW", "Citroen", "Fiat", "Jaguar",
  "Land Rover", "Mercedes-Benz", "Mini", "Peugeot", "Porsche",
  "Renault", "Saab", "Volkswagen", "Volvo",
];

export const BLOG_POSTS = [
  {
    title: "What is the Best Used SUV to Buy in?",
    author: "Adewale Peter",
    date: "Nov 30, 2024",
    excerpt: "You've decided it's time for an SUV, but the choices feel overwhelming...",
    slug: "what-is-the-best-used-suv-to-buy-in",
    image: "/blog-suv.jpg",
  },
  {
    title: "7 Best Electric Cars to Buy Used in 2024",
    author: "Adewale Peter",
    date: "Nov 27, 2024",
    excerpt: "Between 2022 and 2023, the market for used electric cars has been...",
    slug: "best-used-electric-cars",
    image: "/blog-ev.jpg",
  },
  {
    title: "Best Family SUVs for 2024",
    author: "Adewale Peter",
    date: "Nov 24, 2024",
    excerpt: "Finding the right SUV for your family is not always easy. With so many...",
    slug: "best-family-suv-2024",
    image: "/blog-family-suv.jpg",
  },
];

export const FAQS = [
  {
    question: "What is the difference between free and paid VIN checks?",
    answer:
      "A free VIN check gives basic details like make, model, and year. Paid reports may include ownership history, accidents, theft records, mileage history and more. Use our free VIN lookup tool for quick overviews of vehicle details and paid ones if you're purchasing or selling used cars.",
  },
  {
    question: "Is your VIN check reliable and accurate?",
    answer:
      "Yes, our VIN check is highly reliable and accurate. We source our data from multiple trusted databases and official records to ensure the information provided is up-to-date and comprehensive. However, please note that the accuracy of the report also depends on the timeliness and completeness of the data reported by various sources.",
  },
  {
    question: "Where is the VIN number on a car?",
    answer:
      "The VIN (Vehicle Identification Number) can typically be found in several locations on a car: On the driver's side dashboard, visible through the windshield; inside the driver's side door jamb; on the engine block; and in the vehicle registration and insurance documents. The exact location may vary depending on the make and model of the car.",
  },
  {
    question: "What information does a European VIN number contain?",
    answer:
      "A European VIN number typically contains 17 characters that provide various details about the vehicle, including: World Manufacturer Identifier (first 3 characters), Vehicle descriptor section (characters 4-9), and Vehicle identifier section (last 8 characters). These sections can reveal information such as the country of manufacture, brand, vehicle type, body style, engine size, model year, plant code, and serial number.",
  },
  {
    question: "I don't have a VIN number, what can I do?",
    answer:
      "If you don't have a VIN number, you can try the following: Check your vehicle registration or insurance documents; look for the VIN plate on your vehicle; contact your car dealer or the manufacturer; check your car's service history or maintenance records; or if you've recently purchased the car, contact the seller. If you still can't find the VIN, consult with a professional mechanic or your local vehicle registration authority for assistance.",
  },
];

export const PRICING_PLANS = [
  { id: "VHREU1", name: "Basic", reports: 1, price: 9.98, savings: null },
  { id: "VHREU2", name: "Silver", reports: 2, price: 17.0, savings: 15 },
  { id: "VHREU5", name: "Gold", reports: 5, price: 40.0, savings: 20 },
  { id: "VHREU10", name: "Platinum", reports: 10, price: 75.0, savings: 25 },
  { id: "VHREU25", name: "Diamond", reports: 25, price: 175.0, savings: 30 },
  { id: "VHREU50", name: "Executive", reports: 50, price: 300.0, savings: 40 },
];

export const SAMPLE_REPORTS = [
  "2015 Toyota Corolla",
  "2005 Renault Clio",
  "2017 Vauxhall Astra",
];

export const FOOTER = {
  phone: "+(866)-300-0554",
  email: "support@vehiclehistory.com",
  decoderByMake: [
    "Ford VIN Decoder",
    "Audi VIN Decoder",
    "Nissan VIN Decoder",
    "Fiat VIN Decoder",
  ],
  quickLinks: [
    { label: "Classic Car VIN Lookup", href: "#" },
    { label: "Window Sticker", href: "/window-sticker" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms and Conditions", href: "/terms-of-service" },
    { label: "FAQs", href: "/frequently-asked-questions" },
  ],
};
