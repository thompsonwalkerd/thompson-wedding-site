# Thompson Wedding Site

Bilingual (English/Czech) wedding website with full-stack RSVP system. Built as both a functional site for guests and a learning project to increase comfortability in full-stack web development.

## Tech Stack

- **Next.js 15** with App Router
- **React 19** and TypeScript
- **Tailwind CSS v4** with custom design system
- **Flask REST API** backend (separate repo)

## Features

- URL-based bilingual routing (`/en`, `/cz`) with type-safe translations
- Responsive navigation with mobile hamburger menu
- Custom design system with brand fonts and color palette
- Multi-step RSVP system:
  - Guest search by name
  - Group-based RSVP (families/couples/singles)
  - Attendance selection with dietary restrictions
  - 6-state flow with success and already-submitted handling
  - Duplicate submission prevention
- Event details page with venue, schedule, and accommodations
- Gift registry with client-side search filtering and multiple payment options
- Photo gallery page

## Project Structure

```
src/
├── app/
│   ├── [locale]/              # Dynamic route for language switching
│   │   ├── details/           # Wedding details page
│   │   │   └── us-travel/     # US travel info subpage
│   │   ├── photos/            # Photo gallery page
│   │   ├── registry/          # Gift registry page
│   │   ├── rsvp/              # RSVP system page
│   │   └── page.tsx           # Homepage
│   └── layout.tsx             # Root layout (fonts, global styles)
├── components/
│   ├── Header.tsx             # Responsive navigation
│   ├── rsvp/
│   │   ├── RsvpSearch.tsx     # Name search form
│   │   ├── RsvpResults.tsx    # Guest group selection
│   │   ├── RsvpForm.tsx       # Attendance/details form
│   │   ├── RsvpConfirm.tsx    # Confirmation/review page
│   │   ├── RsvpSuccess.tsx    # Success message
│   │   └── RsvpAlreadySubmitted.tsx  # Already submitted message
│   ├── registry/
│   │   └── PaymentOptions.tsx # Payment method display
│   └── ui/                    # Reusable UI components
│       ├── Button.tsx
│       ├── Container.tsx
│       ├── PageTitle.tsx
│       └── SectionHeading.tsx
├── lib/
│   ├── api/
│   │   └── rsvp-api.ts        # API client for backend
│   ├── mocks/
│   │   └── rsvp.ts            # TypeScript types for RSVP data
│   └── translations.ts        # Type-safe translations
└── utils/
    └── locale.ts              # Locale validation utility
```

## Local Setup

```bash
npm install
echo "NEXT_PUBLIC_API_URL=http://localhost:5000" > .env.local
npm run dev                    # Open http://localhost:3000
```

**Note**: Backend API must be running for RSVP functionality. See [thompson-wedding-api](https://github.com/thompsonwalkerd/thompson-wedding-api).

## Production Deployment

Deployed on **Vercel** with auto-deploy from main branch.

Environment variables:

- `NEXT_PUBLIC_API_URL` - Production Flask API URL (Render)

Backend uses Render + Supabase PostgreSQL.

## Key Design Decisions

**URL-based i18n**: Each language has its own URL (`/en`, `/cz`) instead of cookies/state. Makes links shareable and respects browser back button.

**Custom Translation System**: Built a simple type-safe translation system using TypeScript instead of using. The type system ensures both languages have matching keys.

**Server/Client Component Split**: Defaults to server components for performance, using `'use client'` only where needed (navigation, forms) to keep bundle size small.

**Multi-Step Form State**: Complex state management across search → results → form → confirmation → success flow, with proper error handling and loading states at each step.

## What I Learned

**File-Based Routing**: Next.js maps folder structure to URLs. The `[locale]` folder captures language code as a dynamic parameter.

**TypeScript Everywhere**: Coming from C++, I appreciate strong typing. The type system catches mistakes at compile time.

**React State Management**: Implemented `useState` for managing form state, understanding how state triggers re-renders and enables dynamic UI.

**Design Systems with Tailwind**: Set up custom design using Tailwind's `@theme` directive for brand colors and typography.

**API Integration**: Connected frontend to Flask backend with proper error handling, loading states, and duplicate prevention.
