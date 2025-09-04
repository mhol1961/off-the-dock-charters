# CLAUDE_old.md - Detailed History & Context

This file contains detailed interaction history, specific prompts, and comprehensive technical details that are referenced by CLAUDE.md but kept separate to maintain readability.

## Project Creation History

### Initial Setup Context
- Project originally created using **Cline AI assistant** in PowerShell environment
- This explains the existence of `.clinerules/` directory with PowerShell-specific safety protocols
- Current development environment: WSL2/Linux with bash (not PowerShell)
- Original safety rules about avoiding `&&` command chaining don't apply in current bash environment

### Analysis Session (September 4, 2025)
**User Request**: `/init` command to analyze codebase and create CLAUDE.md file
**Objective**: Create comprehensive guidance file for future Claude Code instances

**Analysis Process**:
1. Examined `package.json` for dependencies and scripts
2. Reviewed `README.md` for project overview and features
3. Analyzed configuration files:
   - `next.config.js` - Images unoptimized, standalone output
   - `tailwind.config.ts` - Custom gold/black theme
   - `tsconfig.json` - Strict TypeScript with path aliases
4. Investigated `.clinerules/` directory (PowerShell safety protocols)
5. Examined key architectural files:
   - `src/app/layout.tsx` - SEO metadata and structured data
   - `src/lib/supabase/client.ts` - Database operations
   - `src/lib/types/booking.ts` - Form validation schemas
   - `src/app/api/bookings/route.ts` - API endpoints with in-memory fallback

## Detailed Technical Specifications

### Dependencies Analysis
**Core Framework**:
- `next: ^15.2.4` - Latest Next.js with App Router
- `react: ^18.2.0` - React 18 with concurrent features
- `typescript: ^5.0.0` - Latest TypeScript

**Styling & Animation**:
- `tailwindcss: ^3.3.0` - Utility-first CSS framework
- `framer-motion: ^10.0.0` - Animation library
- Custom theme with CSS variables for fonts

**Database & Backend**:
- `@supabase/supabase-js: ^2.49.3` - Supabase client
- `nodemailer: ^6.10.0` - Email functionality
- `@emailjs/browser: ^4.4.1` - Client-side email service

**Form Management**:
- `react-hook-form: ^7.43.0` - Form state management
- `@hookform/resolvers: ^3.3.0` - Form validation resolvers
- `zod: ^3.22.0` - Schema validation
- `react-datepicker: ^4.25.0` - Date selection component

**Development Tools**:
- `@typescript-eslint/eslint-plugin: ^6.0.0`
- `@typescript-eslint/parser: ^6.0.0`
- `eslint-config-next: ^13.5.0`
- `prettier: ^3.0.0`

### Supabase Integration Details
**Client Configuration** (`src/lib/supabase/client.ts`):
- Environment variables with build-time placeholders
- Client-side execution warnings for missing variables
- Database operations: `getAvailableSlots()`, `createBooking()`, `createPayment()`, `updateBookingStatus()`

**Database Schema Inference**:
- TypeScript types generated from Supabase schema
- Tables: `availability`, `bookings`, `payments`
- Strong typing throughout application

### SEO & Structured Data Implementation
**Global Metadata** (`src/app/layout.tsx:11-56`):
- Base URL: `https://offthedockcharters.com`
- OpenGraph and Twitter Card optimization
- Robots directives for search engines
- Canonical URL configuration

**Structured Data Schemas** (`src/lib/utils/localSchema.ts`):
- LocalBusiness schema for Google My Business
- Service schema for fishing charter services
- Organization schema for business entity

### Component Architecture Patterns
**Layout Components**:
- `Navbar` - Responsive navigation with mobile menu
- `Footer` - Business information and links
- `ScrollToTop` - User experience enhancement

**Feature Components**:
- `BookingForm` - Multi-step booking with payment
- `GalleryGrid` - Image galleries with modal viewer
- `WeatherWidget` - Fishing conditions integration
- `VirtualTour` - Interactive boat tour

**Form Patterns**:
- React Hook Form with Zod validation
- Async submission with loading states
- Error handling with user feedback

### Image Management System
**Directory Structure**: `/public/images/`
**Naming Convention**: Descriptive names for fishing gallery images
**Examples**:
- `Two_guys_Redfish_gallery.png` - Gallery images
- `Hero_Image_1.png` - Hero section images
- `captain-chandler-brown.jpg` - About page images
- `best-summer-winter-spots-map-blog.png` - Blog content images

**Next.js Configuration**:
- Images unoptimized (`unoptimized: true`)
- Remote patterns allow all HTTPS sources
- Standalone output for flexible deployment

### Blog System Architecture
**Structure**: `/src/app/blog/`
**Current Posts**:
- `seasonal-fishing-bradenton/page.tsx`
- `manatee-river-fishing-guide/page.tsx`

**SEO Optimization**:
- Individual metadata for each post
- Structured data for articles
- Local SEO targeting for Bradenton/Anna Maria Island

### API Routes Implementation
**Bookings API** (`/src/app/api/bookings/route.ts`):
- GET: Fetch bookings by date
- POST: Create new booking
- In-memory storage as fallback
- Error handling with proper HTTP status codes

**Availability API** (`/src/app/api/check-availability/route.ts`):
- Integration with calendar system
- Real-time availability checking

### Git History Context
**Recent Commits** (from git status analysis):
- `4a8eb8c` - Environment files and gallery images update
- `5bfc274` - Blog functionality and safety rules addition
- `801f047` - Jack Crevalle image path fixes (case sensitivity)
- `661d134` - Species page client/server component separation

**Current Status**:
- Multiple modified files indicating active development
- New blog directory `src/app/blog/manatee-river-fishing-guide/`
- Updated environment templates and configuration files

### Environment Variable Configuration
**Required Variables**:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

**Build-time Safety** (`src/lib/supabase/client.ts:4-11`):
- Placeholder values prevent build failures
- Client-side warnings for missing production values
- Graceful degradation when database unavailable

### PowerShell Safety Rules Context
**Files**: `.clinerules/README.md`, `.clinerules/github-safety.md`, `.clinerules/powershell-rules.md`

**Key Restrictions** (Not applicable in current bash environment):
- No `&&` command chaining
- Individual git commands required
- Backup branch creation before major changes
- Explicit confirmations for destructive operations

**Historical Context**: These rules were created for the original Cline PowerShell environment and serve as documentation of the project's development history.

## Development Environment Notes

### Current Setup
- **OS**: Linux (WSL2)
- **Terminal**: Bash
- **Package Manager**: npm
- **Git**: Standard Unix git commands available

### Testing Strategy
- No formal test framework configured
- Manual testing via development server
- Build verification before deployment

### Deployment Configuration
- **Output**: `standalone` mode for hosting flexibility
- **Static Assets**: Included in deployment package
- **Environment**: Production variables required for Supabase functionality

## User Interaction Patterns

### Common Development Tasks
1. **Starting Development**: `npm run dev`
2. **Code Quality**: `npm run lint`
3. **Production Build**: `npm run build`
4. **Manual Testing**: Navigate to localhost:3000

### Troubleshooting Patterns
- Check Supabase environment variables if database operations fail
- Verify image paths for case sensitivity issues
- Review build output for TypeScript errors
- Test responsive design across device sizes

## Future Development Considerations

### Scalability Notes
- In-memory booking storage needs database replacement
- Image optimization could improve performance
- Test framework addition recommended for larger team

### Security Considerations
- Environment variables properly segregated
- No sensitive data in repository
- Client-side validation complemented by server-side checks

### Performance Optimizations
- Consider enabling Next.js image optimization
- Implement lazy loading for gallery components
- Add caching strategies for Supabase queries