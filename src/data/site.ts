// All company facts live here. Values marked PENDING come from the manager (see docs/needs.md);
// the pages hide or fall back gracefully while they are empty.
// Not shown until the manager confirms them: "Amazon DSP partner", "FMCSA fully compliant",
// "98% on-time", "$100k+ average earnings", the 2019 "100+ drivers" timeline.

export const company = {
  name: 'Lion King Transport Corp',
  legalName: 'Lion King Transport Corp',
  short: 'Lion King',
  street: '2667 Sawbury Blvd Suite B',
  city: 'Columbus',
  state: 'OH',
  zip: '43235',
  phone: '(614) 665-0707',
  phoneHref: 'tel:+16146650707',
  email: 'info@lionkingtransport.com',
  founded: '2015',
  // PENDING: USDOT and MC numbers. The trust block and top bar show them as soon as they are filled in.
  dot: '',
  mc: '',
};

export const fullAddress = `${company.street}, ${company.city}, ${company.state} ${company.zip}`;

export const links = {
  // PENDING: a verified FMCSA SAFER link (shown only when filled in).
  fmcsa: '',
  maps: `https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`,
};

// PENDING: real social profiles. Icons stay hidden while a link is empty (the old site used "#").
export const social: { name: string; href: string }[] = [
  { name: 'Facebook', href: '' },
  { name: 'Instagram', href: '' },
  { name: 'LinkedIn', href: '' },
].filter((s) => s.href);

export const hours = [
  { days: 'Monday to Friday', time: '8:00 AM to 6:00 PM' },
  { days: 'Saturday', time: '9:00 AM to 2:00 PM' },
  { days: 'Sunday', time: 'Closed' },
];

// Static figures, no count-up animation, and consistent across pages.
export const stats = [
  { value: company.founded, label: 'In business since' },
  { value: '48', label: 'States covered' },
  { value: '1,000+', label: 'Deliveries completed' },
  { value: '24/7', label: 'Dispatch support' },
];

// photo: a file set in public/photos (TEMPORARY stock photos, see src/data/credits.ts).
export const services = [
  {
    id: 'last-mile', icon: 'box', photo: 'svc-lastmile', title: 'Last-mile delivery',
    body: 'The final leg, done right: packages go from the sorting facility to your customer’s door on time.',
    points: ['Same-day and next-day options', 'Real-time tracking updates', 'Signature confirmation', 'Photo proof of delivery', 'Returns management'],
  },
  {
    id: 'long-haul', icon: 'truck', photo: 'svc-longhaul', title: 'Long-haul trucking',
    body: 'Coast-to-coast freight with experienced drivers on every major corridor in the lower 48.',
    points: ['48-state coverage', 'GPS tracking on every truck', 'Driver check-in system', 'Late-model Freightliner sleepers'],
  },
  {
    id: 'dispatch', icon: 'clock', photo: 'svc-dispatch', title: 'Dispatch services',
    body: 'A professional dispatch team coordinates loads and drivers around the clock.',
    points: ['24/7 dispatcher availability', 'Load planning and optimization', 'Real-time GPS tracking', 'Emergency response coordination', 'Compliance and HOS monitoring'],
  },
  {
    id: 'freight-management', icon: 'route', photo: 'svc-freight', title: 'Freight management',
    body: 'One team plans, schedules and follows your freight from pickup to delivery paperwork.',
    points: ['Custom logistics plan and schedule', 'Pickup coordination', 'Shipment updates along the way', 'Delivery confirmation and documents'],
  },
];

export const steps = [
  { title: 'Request a quote', body: 'Send the origin, destination, weight and timeline of your freight.' },
  { title: 'Get your plan', body: 'We send a logistics plan with clear pricing and a confirmed schedule.' },
  { title: 'We pick it up', body: 'A professional driver arrives at the scheduled time to load and secure your freight.' },
  { title: 'Track it', body: 'Dispatch keeps you updated on the location of your shipment.' },
  { title: 'Delivered', body: 'Your cargo arrives safely; we confirm delivery and send the documents.' },
];

export const industries = ['E-commerce', 'Manufacturing', 'Retail and CPG', 'Healthcare', 'Food and beverage', 'Construction', 'Automotive', 'Technology'];

export const reasons = [
  { icon: 'clock', title: '24/7 dispatch', body: 'A dispatcher answers day and night for urgent freight.' },
  { icon: 'route', title: 'All 48 states', body: 'Coast to coast from our base in Columbus, Ohio.' },
  { icon: 'gps', title: 'GPS-tracked fleet', body: 'Every truck is GPS equipped with dash cams and ELDs.' },
  { icon: 'shield', title: 'Clear pricing', body: 'Transparent rates with no hidden fees.' },
];

// Fleet: 10 late-model Freightliner sleepers (from the current site). PENDING real photos.
export const fleet = {
  count: '10',
  type: 'Semi-truck with sleeper',
  make: 'Late-model Freightliner',
  use: 'Long-haul OTR freight',
  features: ['Full truckload capacity', 'Premium sleeper cab', 'Inverter and fridge', 'ELD compliant', 'GPS and cameras', 'Satellite communication', 'PrePass transponder', 'APU equipped'],
  stats: [
    { value: '10', label: 'Active trucks' },
    { value: '100%', label: 'GPS equipped' },
    { value: '2022+', label: 'Average model year' },
  ],
  tech: [
    { icon: 'gps', title: 'Real-time GPS tracking', body: 'Live location, route planning and delivery confirmation on every truck.' },
    { icon: 'clock', title: 'Electronic logging devices', body: 'Certified ELDs keep hours-of-service records accurate.' },
    { icon: 'shield', title: 'Dash cameras', body: 'Front and rear cameras for driver coaching and incident records.' },
    { icon: 'truck', title: 'Preventive maintenance', body: 'Scheduled maintenance keeps trucks on the road and downtime low.' },
  ],
};

export const careers = {
  stats: [
    { value: 'Weekly', label: 'Pay every Friday' },
    { value: '10', label: 'Active drivers' },
    { value: '48', label: 'States of routes' },
  ],
  benefits: [
    { icon: 'clock', title: 'Weekly pay', body: 'Paid every Friday, with consistent weekly earnings.' },
    { icon: 'route', title: 'Flexible routes', body: 'Local, regional and OTR routes to fit your schedule.' },
    { icon: 'shield', title: 'Health benefits', body: 'Medical, dental and vision coverage for you and eligible dependents.' },
    { icon: 'truck', title: 'Late-model trucks', body: 'Well-maintained Freightliner sleepers with modern safety features.' },
    { icon: 'phone', title: '24/7 dispatch', body: 'Dispatch is there for you on the road, day or night.' },
    { icon: 'user', title: 'Room to grow', body: 'Move up to lead driver, trainer or dispatcher.' },
  ],
  roles: [
    { id: 'company-driver', title: 'Company driver', type: 'Full-time, nationwide OTR', body: 'Drive company equipment on OTR and regional routes, with benefits and home time.' },
    { id: 'owner-operator', title: 'Owner operator', type: 'Independent contractor', body: 'Run your own equipment with per-mile rates, flexible scheduling and dedicated freight lanes.' },
    { id: 'lease-driver', title: 'Lease driver', type: 'Lease program', body: 'Get behind the wheel of a quality truck through our lease-to-own program.' },
  ],
  requirements: [
    'Valid CDL Class A or B',
    'At least 1 year of verifiable driving experience',
    'Clean motor vehicle record (MVR)',
    'Able to pass a DOT physical and drug screening',
    'Strong safety record',
  ],
};

export const values = [
  { title: 'Integrity', body: 'Open, honest dealings in every load and every relationship.' },
  { title: 'Reliability', body: 'We deliver on the promises we make to shippers and drivers.' },
  { title: 'Safety', body: 'Driver and cargo safety come first on every route.' },
  { title: 'People first', body: 'Our drivers and staff are the business, and we invest in them.' },
];

// Map grouping by geography (all 48 contiguous states are served).
export const regions = [
  { name: 'Midwest', home: true, states: ['OH', 'MI', 'IN', 'IL', 'WI', 'MN', 'IA', 'MO', 'KS', 'NE', 'ND', 'SD'] },
  { name: 'Northeast', home: false, states: ['PA', 'NY', 'NJ', 'CT', 'MA', 'RI', 'VT', 'NH', 'ME', 'MD', 'DE'] },
  { name: 'Southeast', home: false, states: ['KY', 'WV', 'VA', 'TN', 'NC', 'SC', 'GA', 'FL', 'AL', 'MS'] },
  { name: 'South Central', home: false, states: ['TX', 'OK', 'AR', 'LA'] },
  { name: 'West', home: false, states: ['CA', 'OR', 'WA', 'NV', 'AZ', 'UT', 'CO', 'NM', 'ID', 'MT', 'WY'] },
];

// PENDING: real customer and driver reviews with permission to publish. Hidden while empty.
export const reviews: { quote: string; name: string; company: string }[] = [];
