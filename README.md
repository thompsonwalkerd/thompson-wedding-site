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
- Server-side rendering
- Basic responsive layout with background image support

## Planned Features

- RSVP functionality
- Event details with location-specific information for US and Czech guests
- Photo gallery

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # Dynamic route for language switching
│   │   ├── layout.tsx     # Locale-specific layout
│   │   └── page.tsx       # Homepage with translations
│   ├── layout.tsx         # Root layout (fonts, global styles)
│   └── page.tsx           # Root redirect to /en
├── lib/
│   └── translations.ts    # Type-safe translation definitions
```

## What I Learned

**File-Based Routing**: Next.js maps folder structure directly to URLs. The `[locale]` folder acts as a dynamic parameter that captures the language code from the URL path.

**Type-Safe i18n**: Instead of using a third-party library, I built a simple translation system using TypeScript. The type system ensures both languages have the same keys, catching mistakes at compile time.

**Server Components**: Next.js 15 defaults to server components, which render on the server and reduce the amount of JavaScript sent to the browser.

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
