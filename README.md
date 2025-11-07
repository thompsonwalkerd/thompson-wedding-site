# Wedding Website

A bilingual wedding website for my upcoming wedding. Built with Next.js as both a functional site for guests and a learning project while transitioning from C++ development to web development.

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- React 19

## Current Features

- Bilingual support (English/Czech) via URL-based routing (`/en`, `/cz`)
- Type-safe translations with TypeScript
- Fully translatable UI including navigation and content
- Responsive navigation with mobile hamburger menu
- Custom design system with brand fonts and color palette
- Server-side rendering with client-side interactivity where needed
- Mobile-first responsive design with Tailwind breakpoints
- Multi-step RSVP system:
  - Guest search by name
  - Group-based RSVP (families/couples)
  - Attendance selection for each guest
  - Email collection for confirmation
  - Dietary restrictions/notes
  - Duplicate submission prevention
  - Confirmation page with email verification
- Event details page with venue, schedule, and accommodations info
- Photo gallery placeholder page

## Planned Features

- Python backend API for RSVP system
- Database integration (SQLite potentially)
- Email confirmation system
- Admin dashboard for managing RSVPs

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # Dynamic route for language switching
│   │   ├── details/       # Wedding details page
│   │   ├── photos/        # Photo gallery page
│   │   ├── rsvp/          # RSVP system page
│   │   ├── layout.tsx     # Locale-specific layout
│   │   └── page.tsx       # Homepage with translations
│   ├── layout.tsx         # Root layout (fonts, global styles)
│   └── page.tsx           # Root redirect to /en
├── components/
│   └── Header.tsx         # Responsive navigation component
├── lib/
│   ├── mocks/
│   │   └── rsvp.ts        # Mock RSVP API (temporary, for development)
│   └── translations.ts    # Type-safe translation definitions
```

## What I Learned

**File-Based Routing**: Next.js maps folder structure directly to URLs. The `[locale]` folder acts as a dynamic parameter that captures the language code from the URL path.

**Type-Safe i18n**: Instead of using a third-party library, I built a simple translation system using TypeScript. The type system ensures both languages have the same keys, catching mistakes at compile time.

**Server vs Client Components**: Next.js 15 defaults to server components for better performance. Using the `'use client'` directive only where needed (like the interactive navigation) keeps the bundle small while enabling interactivity.

**React State Management**: Implemented `useState` hook for managing mobile menu state, understanding how state triggers re-renders and enables dynamic UI.

**Design Systems with Tailwind v4**: Set up a custom design system using Tailwind's `@theme` directive to define brand colors and typography, loading Google Fonts with Next.js optimization.

**Form State Management**: Built a multi-step form with complex state management, handling search results, form inputs, and submission states. Learned how to properly manage interdependent state values and conditional rendering.

**Mock Data Pattern**: Created a mock API layer that mimics real backend behavior (delays, validation, error handling) to enable frontend development before the backend exists. This separates concerns and makes it easier to swap in real APIs later.

## Setup Instructions

1. Clone the repository

   ```bash
   git clone <repository-url>
   cd thompson-wedding-site
   ```

2. Copy the example translations file:

   ```bash
   cp src/lib/translations.example.ts src/lib/translations.ts
   ```

   This repository uses placeholder data for privacy. The example file contains mock names and dates.

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

The app will automatically redirect to `/en` (English) by default.

## Why I Built It This Way

**URL-based i18n**: Each language has its own URL (`/en`, `/cz`) instead of storing language preference in state or cookies. This makes links shareable, works better for SEO, and respects the browser's back button.

**Custom translations**: I wrote a simple translation system instead of using next-intl or similar libraries. This helped me understand how internationalization works under the hood and gave me more control over the structure.

**TypeScript everywhere**: Coming from C++, I appreciate strong typing. The type system catches a lot of mistakes before runtime.
