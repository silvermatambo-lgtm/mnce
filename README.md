# MNCE Skills Development — Website

Professional on-site training and individual-course website, developed by WebDevPro from Ultra Max 6.

## What is included
- Responsive React/Vite website with home, on-site corporate enquiry, searchable course catalogue, about, services, gallery, videos, FAQs, and contact pages.
- Site uses only MNCE-supplied imagery; poster images are used solely to extract the company logo and factual course details. Promotional posters are **not** displayed.
- Four short clips optimised from supplied footage (16-second previews), presented with native video controls.
- Hero image slider, typing effects, scroll reveals, flip cards and reduced-motion accessibility support.
- Installable PWA, WhatsApp assistant, mobile navigation, SEO metadata and Vercel SPA routing.
- Corporate enquiry sends a prefilled WhatsApp message, never silently stores customer data.

## Local development
Requires Node 20+. Run `npm install`, then `npm run dev` or `npm run build`.
Deploy to Vercel as a Vite project, output directory `dist`. Vercel Git integration will build after push to main.

## Important content verification
- Course prices were transcribed from various client posters. Posters occasionally conflict. Treat all prices and durations as indicative until confirmed with MNCE.
- On-site courses **do not** have automatic prices — request a tailored quote.
- Job-guarantee and accreditation claims from promotional material are intentionally **not** repeated as verified promises. Request current documents before publishing certification promises.
- Contact details and training addresses are from the supplied posters and should be confirmed with the client before domain activation.
- `site.config.json` uses `mode: client`, preventing search indexing while in demo status. Switch to `client-ready` only when all template release checks are satisfied and final domain is confirmed.

## Storage
No database is required for this enquiry-focused release. Media is served directly from `public/media/`; Neon is suitable for structured bookings/leads later, but not for storing video files. Consider Blob/object storage or a dedicated video platform for larger full-length clips.
