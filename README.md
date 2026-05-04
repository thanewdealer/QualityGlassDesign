# Quality Glass & Design of The Upstate — Website

Next.js 14 site for QGDU. Built for Vercel hosting.

---

## Stack

- Next.js 14 (App Router, RSC)
- React 18, TypeScript
- Tailwind CSS 3
- next/font for Fraunces display + Geist body
- Lucide icons
- Existing Jobber form embedded on /quote

---

## Pages built (Phase 1)

```
/                           Home
/about                      Founder story
/services                   All services overview
/services/frameless-shower-doors
/services/sliding-shower-doors
/services/hydroslide
/quote                      Embedded Jobber form
/reviews                    Featured reviews
/trade                      Builder & designer program
/greenville                 City page (template)
/greer                      City page (template)
```

Sitemap and robots.txt auto-generated.

---

## DEPLOYMENT — three steps to live

### 1. Get this code into a GitHub repo

Easiest path (no terminal required):

1. Sign in to https://github.com
2. Click "+" top right → "New repository"
3. Name it `qgdu-website`, keep it private
4. Click "Create repository"
5. On the next page click "uploading an existing file"
6. Drag every file and folder from this project EXCEPT `node_modules` and `.next` if they exist
7. Commit message: "Initial site"
8. Click "Commit changes"

### 2. Connect Vercel and deploy

1. Go to https://vercel.com and sign in with GitHub
2. Click "Add New..." → "Project"
3. Find `qgdu-website` in the list, click "Import"
4. Framework: Next.js (auto-detected)
5. Add environment variables (copy from `.env.example`):
   - `NEXT_PUBLIC_SITE_URL` = `https://qualityglassupstate.com`
   - `NEXT_PUBLIC_PHONE` = `864-790-6358`
   - `NEXT_PUBLIC_EMAIL` = `connor@upstatescglass.com`
   - `NEXT_PUBLIC_JOBBER_FORM` = (copy from `.env.example`)
6. Click "Deploy"

About 90 seconds later, Vercel gives you a preview URL like `qgdu-website-xxx.vercel.app`. Test it.

### 3. Point qualityglassupstate.com to Vercel

1. In Vercel, project Settings → Domains → "Add" → enter `qualityglassupstate.com`
2. Vercel shows DNS records you need to add at your domain registrar
3. Log into wherever the domain is registered (was Namecheap based on your migration history, confirm)
4. Add the A record and CNAME Vercel shows you
5. Add `www.qualityglassupstate.com` too, redirect it to apex

DNS propagation: usually 5 minutes to a few hours.

You're now live on the new site.

---

## DROP YOUR PHOTOS — replacing placeholder art

Right now every image position shows a decorative placeholder.

When you're ready to drop in real photos:

1. From your Google Drive, export the photos you want to use as JPG (compressed, ~1500-2000px wide)
2. Upload them to GitHub at `/public/portfolio/` with these specific filenames:

```
public/portfolio/
  hero.jpg                      Featured hero shot, vertical 4:5 ratio
  about-connor-mello.jpg        You and Mello on a jobsite
  service-frameless.jpg         Best frameless shower install
  service-sliding.jpg           Best sliding system
  service-hydroslide.jpg        The viral hydroslide install
  service-mirror.jpg            Best mirror project
  service-windows.jpg           Window replacement work
  service-railings.jpg          Glass railing
  greenville.jpg                Project in Greenville
  greer.jpg                     Project in Greer
```

3. In each component file (e.g. `components/hero.tsx`), find the line:

```tsx
<PlaceholderArt label="..." />
```

Replace with:

```tsx
<Image
  src="/portfolio/hero.jpg"
  alt="Frameless shower door, Augusta Road, Greenville"
  fill
  className="object-cover"
  priority
/>
```

(Add `import Image from 'next/image';` to the top of any file you do this in)

Push to GitHub, Vercel auto-deploys within 90 seconds.

---

## DROP YOUR LOGO

Right now the site uses a placeholder geometric mark plus the wordmark.

When you have your logo as an SVG:

1. Save it as `public/logo.svg`
2. In `components/logo.tsx`, replace the inline `<svg>` block with:

```tsx
<Image src="/logo.svg" alt="QGDU" width={36} height={36} priority />
```

If your logo has color you want to keep, leave the wordmark text but use your full logo as the mark.

---

## Local development (optional)

If you want to preview changes before pushing to GitHub:

```bash
# install dependencies
npm install

# run dev server
npm run dev

# open http://localhost:3000
```

You'll need Node.js 18+ installed (https://nodejs.org).

---

## Adding more pages later

The site is built to scale. To add a new city page (e.g. Simpsonville):

1. Copy `app/greer/page.tsx` to `app/simpsonville/page.tsx`
2. Find/replace "Greer" → "Simpsonville" and adjust neighborhoods
3. The page is automatically picked up by sitemap.ts (already includes all cities listed in `lib/site-config.ts`)
4. Push to GitHub, Vercel deploys

Same pattern for landmark pages, neighborhood pages, and community spotlights.

---

## What's NOT built yet (Phase 2 work)

- Other 6 cities (Simpsonville, Five Forks, Spartanburg, Easley, Travelers Rest, Anderson)
- Neighborhood pages (Augusta Road, Cleveland Park, etc.)
- Landmark pages (Falls Park, Swamp Rabbit Trail, Peace Center, etc.)
- Community spotlight templates
- Service pages: Mirrors, Window Replacement, Glass Railings (placeholder routes exist but not built)
- Blog / journal section

These get built one at a time as you close jobs in those areas. The architecture supports them all.

---

## Questions for Connor

You're shipping. The next moves to think about:

1. Photo selection from your Google Drive — pick the top 8-10 hero shots
2. Logo SVG — do you have it as a vector file?
3. After deployment, set up Google Search Console and submit the sitemap
4. Set up Google Business Profile to point to qualityglassupstate.com
5. Set up Plausible or simple Vercel Analytics for traffic data

— Built April 2026 by Claude
