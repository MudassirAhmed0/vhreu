## Site Page Inventory (95+ URLs, ~8 page types)

| Page Type | Count | Example |
|-----------|-------|---------|
| Homepage | 1 | `/` (already done) |
| Country VIN Check | ~45 | `/germany-vin-check` |
| Brand VIN Decoder | ~17 | `/bmw`, `/audi` |
| VIN Report | dynamic | `/report/vin/[vin]` |
| Pricing | 1 | `/pricing` |
| Sample Reports | 1 | `/sample-report` |
| Window Sticker | 1 | `/window-sticker` |
| Contact | 1 | `/contact-us` |
| FAQ | 1 | `/frequently-asked-questions` |
| Blog Listing | 1 | `/blog` |
| Blog Post | many | individual articles |
| Login/Register | 2 | `/members/login` |
| Legal (Privacy, ToS, Refund) | 3 | `/privacy-policy` |
| i18n Variants | 7 | `/de/`, `/fr/`, etc. |

---

## New Components Needed (~20-25)

### Shared / Layout (3 reusable across all pages)
1. **`PageHero`** — Dark teal hero banner with title/subtitle (used on every inner page)
2. **`VinSearchForm`** — The VIN/License Plate toggle form with email, phone, year/make/model dropdowns, discount badge (appears on 5+ page types — country, brand, sample, window sticker)
3. **`ExitIntentPopup`** — 15% discount modal triggered on page exit (site-wide)

### Pricing Page (3)
4. **`PricingCard`** — Credit tier card (6 tiers: Basic through Executive) with price, savings badge, CTA
5. **`CheckoutModal`** — Email input + proceed to checkout popup
6. **`FeatureHighlightRow`** — 3-column info boxes (Comprehensive Reports, Accuracy, Real-time)

### Country VIN Check Pages (2-3, mostly template)
7. **`CountryHero`** — Hero with country SVG/flag imagery (templated per country)
8. **`CountryInfoSection`** — Content blocks about VIN checking for that country
9. *(reuses `VinSearchForm`, `FaqAccordion`)*

### Brand VIN Decoder Pages (3-4, mostly template)
10. **`BrandHero`** — Hero with brand-specific imagery and copy
11. **`VinExplainerGraphic`** — SVG diagram showing VIN structure breakdown (already partially exists)
12. **`ModelListSection`** — Bulleted list of supported models per brand
13. **`SampleReportCard`** — Mini report preview card with specs + "View Full Report" link

### VIN Report Page (4-5 — the most complex page)
14. **`ReportHeader`** — Vehicle title, VIN, generation date, copy link / download buttons
15. **`SpecTable`** — Key-value data table (used for general info, technical specs, auction data)
16. **`AuctionRecord`** — Auction details: damage, odometer, bid range, condition checkboxes
17. **`TitleChecklist`** — 40+ item pass/fail checklist grid (all the "No Problems Found" items)
18. **`ReportSection`** — Collapsible section wrapper (Title Records, Accident Records, Theft, etc.)

### Contact Page (1-2)
19. **`ContactForm`** — Name, email, category dropdown, message, submit
20. **`ContactMethodCard`** — Icon + title + info cards (Live Chat, Phone, Email)

### Blog (2-3)
21. **`BlogCard`** — Post card with image, title, author, date, excerpt
22. **`BlogGrid`** — Paginated grid layout with pagination controls
23. **`BlogPost`** — Single post template (content area, sidebar with related/popular posts)

### Auth (1-2)
24. **`LoginForm`** — Email/password + forgot password + register link
25. **`RegisterForm`** — Sign-up form (if separate from login)

### Legal / Static (1)
26. **`LegalPage`** — Simple prose layout for Privacy Policy, Terms, Refund (just a wrapper, content differs)

---

## Summary

| Category | New Components | Effort |
|----------|---------------|--------|
| Shared/Layout | 3 | Low-Medium |
| Pricing | 3 | Medium |
| Country pages (template x45) | 2-3 | Medium (template + data) |
| Brand pages (template x17) | 3-4 | Medium (template + data) |
| **VIN Report** | **4-5** | **High** (most complex) |
| Contact | 2 | Low |
| Blog | 2-3 | Medium |
| Auth | 1-2 | Medium |
| Legal | 1 | Low |
| **Total** | **~22-26** | |

The existing components (Header, Footer, SearchCard, FaqAccordion, Marquee, Reveal) can be reused heavily. The **VIN Report page** is the heaviest lift — it's basically a data dashboard. The **country and brand pages** are high volume but low unique effort since they're templates with swapped data.
