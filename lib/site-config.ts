export const siteConfig = {
  name: 'Quality Glass & Design of The Upstate',
  shortName: 'QGDU',
  tagline: "Greenville's Most Trusted Frameless Shower Glass Installer",
  description:
    'Precision-crafted frameless shower glass for custom builders, designers, and homeowners across the Upstate. 50+ five-star reviews. Lifetime warranty on every project.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://qualityglassupstate.com',
  phone: process.env.NEXT_PUBLIC_PHONE || '864-790-6358',
  phoneHref: 'tel:18647906358',
  email: process.env.NEXT_PUBLIC_EMAIL || 'connor@upstatescglass.com',
  jobberForm:
    process.env.NEXT_PUBLIC_JOBBER_FORM ||
    'https://clienthub.getjobber.com/hubs/38c83e7d-5eee-470d-9327-80823a7fd90d/public/requests/1358614/embedded_new',
  social: {
    instagram: 'https://instagram.com/qualityglassupstate',
    facebook: 'https://facebook.com/qualityglassupstate',
    linkedin: 'https://linkedin.com/in/connorsell',
  },
  founded: 2024,
  reviewCount: 52,
  reviewRating: 5.0,
};

export const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'For Builders', href: '/trade' },
];

export const services = [
  {
    slug: 'frameless-shower-doors',
    name: 'Frameless Shower Doors',
    short: 'Custom-fit, made to measure, 3/8" tempered glass.',
    description:
      'The cleanest look in the bathroom. Fully frameless construction with 3/8" tempered glass, premium hardware, and obsessively precise install. No off-the-shelf compromises.',
  },
  {
    slug: 'sliding-shower-doors',
    name: 'Sliding & Bypass Systems',
    short: 'Space-saving rollers for tight bathrooms and tubs.',
    description:
      'When swing clearance is tight, a sliding system opens the room. Available for showers and tubs. Smooth glide hardware in chrome, brushed nickel, matte black, or brass.',
  },
  {
    slug: 'hydroslide',
    name: 'Hydroslide Bifold',
    short: 'Folding glass that opens completely. Limited install network.',
    description:
      'CRL Hydroslide bifold doors fold flat against the wall. Wide opening, zero swing footprint. We install these throughout the Upstate.',
  },
  {
    slug: 'mirrors',
    name: 'Custom Mirrors',
    short: 'Vanity, full-length, statement walls. Custom cut and installed.',
    description:
      'Polished, beveled, or pencil edge. Frameless or framed. Cut to your wall, hung clean, every time.',
  },
  {
    slug: 'window-replacement',
    name: 'Window Glass Replacement',
    short: 'Single panes, IGUs, foggy seals, broken units.',
    description:
      'Tuesday measure, Wednesday install. We replace failed insulated glass units, broken panes, and storm-damaged windows across the Upstate.',
  },
  {
    slug: 'glass-railings',
    name: 'Glass Railings',
    short: 'Interior and exterior. Code-compliant. Built to last.',
    description:
      'Frameless and base-shoe systems. Decks, stairs, balconies. Engineered for code, designed to disappear.',
  },
];

export const cities = [
  { slug: 'greenville', name: 'Greenville' },
  { slug: 'greer', name: 'Greer' },
  { slug: 'simpsonville', name: 'Simpsonville' },
  { slug: 'five-forks', name: 'Five Forks' },
  { slug: 'spartanburg', name: 'Spartanburg' },
  { slug: 'easley', name: 'Easley' },
  { slug: 'travelers-rest', name: 'Travelers Rest' },
  { slug: 'anderson', name: 'Anderson' },
];
