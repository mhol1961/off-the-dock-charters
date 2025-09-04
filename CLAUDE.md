# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

*For detailed technical specifications, interaction history, and comprehensive documentation, see `CLAUDE_old.md`.*

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run lint` - Code quality check

## Tech Stack

- **Next.js 15** with App Router + TypeScript
- **Tailwind CSS** (gold/black theme)
- **Supabase** for database
- **React Hook Form** + Zod validation
- **Framer Motion** for animations

## Key Architecture

### Project Structure
```
src/
├── app/                 # Pages & API routes
├── components/         # Reusable components
├── lib/supabase/       # Database client & operations
└── lib/types/          # TypeScript schemas
```

### Important Files
- `src/lib/supabase/client.ts` - Database operations
- `src/app/layout.tsx` - SEO metadata & structured data
- `src/lib/types/booking.ts` - Form validation schemas

### Configuration
- **Images**: Unoptimized in `next.config.js` 
- **Environment**: `NEXT_PUBLIC_SUPABASE_*` variables required
- **Deployment**: `standalone` output mode

## Development Notes

- Manual testing via dev server (no test framework)
- Client components use `'use client'` directive
- SEO-optimized blog system in `/src/app/blog/`
- Images stored in `/public/images/`