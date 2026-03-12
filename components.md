## Site Page Inventory (95+ URLs, ~8 page types)

| Page Type | Count | Example |
|-----------|-------|---------|
| Homepage | 1 | `/` (done) |
| Country VIN Check | ~45 | `/germany-vin-check` |
| Brand VIN Decoder | ~17 | `/bmw`, `/audi` |
| VIN Report | dynamic | `/report/vin/[vin]` |
| Pricing | 1 | `/pricing` |
| Sample Reports | 1 | `/sample-report` |
| Vehicle Specifications | 1 | `/vehicle-specifications` |
| Contact | 1 | `/contact-us` |
| FAQ | 1 | `/frequently-asked-questions` |
| Blog Listing | 1 | `/blog` |
| Blog Post | many | individual articles |
| Login/Register | 2 | `/members/login` |
| Legal (Privacy, ToS, Refund) | 3 | `/privacy-policy` |
| i18n Variants | 7 | `/de/`, `/fr/`, etc. |

---

## Components — Done ✓

| Component | File | Notes |
|-----------|------|-------|
| **PageHero** | `src/components/page-hero.tsx` | 3 variants (centered, split, stacked), dark/light, heroImage slot (580×660 @2x), backgroundImage watermark, Storybook controls for non-techs |
| **HowItWorks** | `src/components/how-it-works.tsx` | 5 built-in icons, dark/light, responsive grid (3-col ≤3 steps, 5-col >3), horizontal connector line, stagger animation |
| **FeatureCard** | `src/components/feature-card.tsx` | icon (ReactNode) + title + description, dark/light, premium hover with custom easing, stagger delay prop |
| **CardSection** | `src/components/card-section.tsx` | Section wrapper: bg variants (white/muted/dark), responsive grid (2/3/4 cols), heading/subtitle, optional CTA + secondary CTA |
| **SplitContent** | `src/components/split-content.tsx` | 2-col split layout (text + media), bg variants, reverse prop, description as string or string[], CTAs, entrance animations |
| **IconList** | `src/components/icon-list.tsx` | Vertical icon+text list: 4 icons (warning/check/info/arrow), 4 variants (danger/success/neutral/muted), tinted rows, dark mode, stagger animation |
| **DataTable** | `src/components/data-table.tsx` | Responsive data table: desktop table + mobile stacked cards, highlight column, boolean check/x icons, zebra striping, dark mode |

PageHero absorbed the previously planned CountryHero and BrandHero — country pages use split variant with `backgroundImage`, brand pages use stacked variant.
FeatureCard + CardSection replace inline WhyRunVinCheck and WhyChooseUs sections on homepage, and will be reused on country/brand pages.

## Pre-existing Components (from homepage build)

| Component | File | Notes |
|-----------|------|-------|
| **VinSearchForm** | `src/components/vin-search-form.tsx` | VIN input + button, dark/light prop, WCAG label |
| **Header** | `src/components/header.tsx` | Fixed nav with glass effect |
| **Footer** | `src/components/footer.tsx` | Dark teal footer |
| **FaqAccordion** | `src/components/faq-accordion.tsx` | Animated +/x toggle |
| **Marquee** | `src/components/marquee.tsx` | Scrolling car brand ticker |
| **Reveal** | `src/components/reveal.tsx` | IntersectionObserver scroll reveal |

---

## Components — Remaining (~18-22)

### Shared / Layout (1)
1. **`ExitIntentPopup`** — 15% discount modal triggered on page exit (site-wide)

### Pricing Page (3)
2. **`PricingCard`** — Credit tier card (6 tiers: Basic through Executive) with price, savings badge, CTA
3. **`CheckoutModal`** — Email input + proceed to checkout popup
4. **`FeatureHighlightRow`** — 3-column info boxes (Comprehensive Reports, Accuracy, Real-time)

### Country VIN Check Pages (1-2, template × 45)
5. **`CountryInfoSection`** — Content blocks about VIN checking for that country
*(reuses PageHero split, VinSearchForm, FaqAccordion)*

### Brand VIN Decoder Pages (2-3, template × 17)
6. **`VinExplainerGraphic`** — SVG diagram showing VIN structure breakdown (partially exists in homepage)
7. **`ModelListSection`** — Bulleted list of supported models per brand
8. **`SampleReportCard`** — Mini report preview card with specs + "View Full Report" link
*(reuses PageHero stacked, VinSearchForm, FaqAccordion)*

### VIN Report Page (4-5 — most complex page)
9. **`ReportHeader`** — Vehicle title, VIN, generation date, copy link / download buttons
10. **`SpecTable`** — Key-value data table (general info, technical specs, auction data)
11. **`AuctionRecord`** — Auction details: damage, odometer, bid range, condition checkboxes
12. **`TitleChecklist`** — 40+ item pass/fail checklist grid
13. **`ReportSection`** — Collapsible section wrapper (Title Records, Accident Records, Theft, etc.)

### Contact Page (1-2)
14. **`ContactForm`** — Name, email, category dropdown, message, submit
15. **`ContactMethodCard`** — Icon + title + info cards (Live Chat, Phone, Email)

### Blog (2-3)
16. **`BlogCard`** — Post card with image, title, author, date, excerpt
17. **`BlogGrid`** — Paginated grid layout with pagination controls
18. **`BlogPost`** — Single post template (content area, sidebar with related/popular posts)

### Auth (1-2)
19. **`LoginForm`** — Email/password + forgot password + register link
20. **`RegisterForm`** — Sign-up form (if separate from login)

### Legal / Static (1)
21. **`LegalPage`** — Simple prose layout for Privacy Policy, Terms, Refund

---

## Summary

| Category | Total | Done | Remaining | Effort |
|----------|-------|------|-----------|--------|
| Shared/Layout | 9 | 7 (PageHero, HowItWorks, FeatureCard, CardSection, SplitContent, IconList, ComparisonTable) | 2 | Low |
| Pricing | 3 | 0 | 3 | Medium |
| Country pages (template × 45) | 1-2 | 0 | 1-2 | Medium (template + data) |
| Brand pages (template × 17) | 2-3 | 0 | 2-3 | Medium (template + data) |
| **VIN Report** | **4-5** | **0** | **4-5** | **High** (most complex) |
| Contact | 2 | 0 | 2 | Low |
| Blog | 2-3 | 0 | 2-3 | Medium |
| Auth | 1-2 | 0 | 1-2 | Medium |
| Legal | 1 | 0 | 1 | Low |
| **Total** | **~20-24** | **7** | **~13-17** | |
