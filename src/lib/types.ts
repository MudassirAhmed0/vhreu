export interface NavLink {
  href: string;
  label: string;
}

export interface Language {
  code: string;
  flag: string;
}

export interface BenefitItem {
  bold: string;
  text: string;
}

export interface ReportCategory {
  title: string;
  color: string;
  items: string[];
}

export interface ComparisonFeature {
  name: string;
  us: boolean | string;
  carfax: boolean | string;
  autodna: boolean | string;
}

export interface WhyChooseFeature {
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  slug: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  reports: number;
  price: number;
  savings: number | null;
}
