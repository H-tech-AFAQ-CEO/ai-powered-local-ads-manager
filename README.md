# adwise. Dashboard

A polished, responsive advertising intelligence dashboard for managing Meta and Instagram campaign performance.

## Project overview

adwise. is a front-end dashboard concept for marketing teams and independent advertisers. It brings campaign health, spend, revenue, return on ad spend, conversions, performance trends, and AI-assisted recommendations into one focused workspace.

The current experience is designed as a high-fidelity product prototype with realistic campaign data and responsive navigation. It is intentionally lightweight and can be connected to a live advertising data source later.

## Features

- Responsive dashboard layout for desktop, tablet, and mobile screens.
- Collapsible mobile navigation with workspace and insights sections.
- KPI cards for total spend, revenue, ROAS, and conversions.
- Performance overview visualization for revenue and spend over time.
- AI recommendation cards with campaign-specific next steps.
- Campaign performance table with status, spend, conversions, and ROAS.
- Accessible labels for icon-only controls and navigation actions.
- Light, calm visual system using coral, mint, lavender, and warm neutral accents.

## Technology

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React icons
- pnpm

## Getting started

### Requirements

- Node.js 20 or newer
- pnpm 12 or compatible pnpm version

### Install dependencies

```bash
pnpm install
```

### Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

### Create a production build

```bash
pnpm build
pnpm start
```

## Project structure

```text
app/
  globals.css       Global styles and design tokens
  layout.tsx        Root metadata and application shell
  page.tsx          Dashboard route
components/
  ads-dashboard.tsx Reusable dashboard component area
  ui/               Shared UI primitives
lib/
  utils.ts          Shared class-name utilities
public/             Static public assets
```

## Data and integrations

The dashboard currently renders representative product data directly in the UI so the prototype is immediately usable. For production, replace the data constants in `app/page.tsx` with server-fetched campaign data and keep all account-specific queries scoped to the authenticated workspace.

A future production integration should add:

1. Meta Marketing API authentication and account selection.
2. Server-side campaign, ad set, creative, spend, and conversion queries.
3. A persistent database for workspace configuration, recommendations, and report history.
4. Server-side validation, rate limiting, and secure handling of provider credentials.
5. Loading, error, empty, and stale-data states for each dashboard surface.

## Design notes

The interface uses a restrained editorial dashboard style: generous whitespace, compact typography, soft borders, subtle shadows, and coral action emphasis. The layout favors flexbox for navigation and control groups, with responsive grids for KPI and content regions. The visual language is designed to keep dense marketing metrics readable without making the workspace feel noisy.

## Developer

Designed and developed by **Afaq Ahmad**.

## License

This project is private and intended for product development and demonstration purposes.

## Disclaimer

Campaign values shown in the prototype are illustrative and are not connected to a live advertising account.
