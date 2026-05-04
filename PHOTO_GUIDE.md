# Photo Drop Guide

When ready, export these photos from Google Drive (compressed JPG, 1500-2000px wide) and place them at the paths below.

## Required for Phase 1 (10 photos):

```
public/portfolio/hero.jpg                    Best hero shot — vertical, 4:5 ratio preferred
public/portfolio/about-connor-mello.jpg      You + Mello, jobsite, vertical
public/portfolio/service-frameless.jpg       Best frameless install
public/portfolio/service-sliding.jpg         Best sliding system
public/portfolio/service-hydroslide.jpg      The CRL Hydroslide that went viral
public/portfolio/service-mirror.jpg          Best mirror project
public/portfolio/service-windows.jpg         Window replacement work
public/portfolio/service-railings.jpg        Glass railing project
public/portfolio/greenville.jpg              Project in a Greenville neighborhood
public/portfolio/greer.jpg                   Project in Greer
```

## Each placeholder location is marked in code with this comment:

```tsx
{/* TO REPLACE: drop /public/portfolio/[filename].jpg, then swap PlaceholderArt for: ... */}
```

## After uploading, in each component file:

1. Add at top: `import Image from 'next/image';`
2. Replace `<PlaceholderArt ... />` with `<Image src="/portfolio/[filename].jpg" alt="..." fill className="object-cover" priority />` (priority only on the hero image)
3. Push to GitHub, Vercel auto-deploys

## Logo

Place your logo at: `public/logo.svg`

Then update `components/logo.tsx` to use it (instructions in README.md).
