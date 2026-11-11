# FreshFold — One Brand, Two Website Strategies

Episode 02 of the **“One Brand. Two Websites.”** portfolio series.

FreshFold is a fictional laundry and dry-cleaning brand serving urban Nigeria. This project demonstrates how the same business can use two fundamentally different website strategies based on customer intent.

## Website strategies

### FreshFold Living — `/template-a`

A premium, editorial lifestyle experience designed to sell the emotional benefit of outsourcing laundry.

**Journey:** Discover → Desire → Explore → Trust → Join or Enquire

Key features:

- Cinematic lifestyle hero
- Editorial storytelling and service presentation
- Three illustrative membership plans
- Validated membership enquiry form
- Demo customer stories and FAQ
- Calm sage, cream, forest-green, and terracotta design system

### FreshFold Express — `/template-b`

A practical booking experience designed to help customers move quickly from an immediate laundry need to a completed demo booking.

**Journey:** Arrive → Check Coverage → Select Service → Estimate Price → Schedule Pickup → Confirm

Key features:

- Booking component in the first viewport
- Lagos and Abuja demo coverage selector
- Multi-service selection
- Itemized quantity and price estimator
- Future-date pickup scheduling
- Validated customer details
- Browser-session booking storage
- Generated demo reference and copyable order summary
- Mobile sticky booking action

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Minimal portfolio showcase comparing both strategies |
| `/template-a` | FreshFold Living lifestyle website |
| `/template-b` | FreshFold Express booking website |

The branded templates do not link to each other. Each has its own navigation, information architecture, visual hierarchy, interactions, and customer journey.

## Technology

- Next.js App Router
- TypeScript
- Tailwind CSS
- Radix UI primitives
- Lucide React
- Motion
- React Hook Form
- Zod

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

The completed implementation was checked at desktop and mobile viewport sizes. The three routes were also verified over HTTP.

## Project structure

```text
app/
  page.tsx                 Portfolio showcase
  template-a/page.tsx      FreshFold Living route
  template-b/page.tsx      FreshFold Express route
components/
  brand.tsx                Shared FreshFold identity
  living-site.tsx          Lifestyle website and enquiry flow
  express-site.tsx         Booking website and multi-step funnel
  reveal.tsx               Reduced-motion-aware scroll reveals
lib/
  pricing.ts               Central illustrative pricing configuration
  utils.ts                 Shared class-name utility
scripts/
  visual-qa.mjs            Local desktop and mobile screenshot checks
```

## Demo-data notice

FreshFold is a fictional portfolio brand. All displayed prices, memberships, reviews, customer stories, coverage indicators, addresses, pickup windows, availability, fees, and booking records are illustrative demonstration data.

The application does not:

- Process payments
- Submit real orders
- Arrange real pickups or deliveries
- Send enquiry forms to an external service
- Claim street-level service coverage

Booking confirmations are simulated and stored only in the current browser session.

## Image credits

Lifestyle imagery is loaded from Unsplash for demonstration purposes. Replace the remote images and fictional business information with properly licensed production assets and verified operational details before using the project commercially.
