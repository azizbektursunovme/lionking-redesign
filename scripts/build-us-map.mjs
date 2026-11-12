// Builds src/data/us-map.json: simplified SVG paths for the 48 contiguous states
// plus the projected position of the Saint Charles, MO home base.
// Source: us-atlas (US Census Bureau cartographic boundaries, already in Albers USA, 975x610).
// Run: node scripts/build-us-map.mjs
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { feature } from 'topojson-client';
import { presimplify, simplify, quantile } from 'topojson-simplify';
import { geoPath, geoAlbersUsa } from 'd3-geo';

const require = createRequire(import.meta.url);
const topo = require('us-atlas/states-albers-10m.json');

const ABBR = {
  Alabama: 'AL', Arizona: 'AZ', Arkansas: 'AR', California: 'CA', Colorado: 'CO', Connecticut: 'CT',
  Delaware: 'DE', Florida: 'FL', Georgia: 'GA', Idaho: 'ID', Illinois: 'IL', Indiana: 'IN', Iowa: 'IA',
  Kansas: 'KS', Kentucky: 'KY', Louisiana: 'LA', Maine: 'ME', Maryland: 'MD', Massachusetts: 'MA',
  Michigan: 'MI', Minnesota: 'MN', Mississippi: 'MS', Missouri: 'MO', Montana: 'MT', Nebraska: 'NE',
  Nevada: 'NV', 'New Hampshire': 'NH', 'New Jersey': 'NJ', 'New Mexico': 'NM', 'New York': 'NY',
  'North Carolina': 'NC', 'North Dakota': 'ND', Ohio: 'OH', Oklahoma: 'OK', Oregon: 'OR', Pennsylvania: 'PA',
  'Rhode Island': 'RI', 'South Carolina': 'SC', 'South Dakota': 'SD', Tennessee: 'TN', Texas: 'TX', Utah: 'UT',
  Vermont: 'VT', Virginia: 'VA', Washington: 'WA', 'West Virginia': 'WV', Wisconsin: 'WI', Wyoming: 'WY',
};

const pre = presimplify(topo);
const simple = simplify(pre, quantile(pre, 0.3));
const all = feature(simple, simple.objects.states).features;
const lower48 = all.filter((f) => ABBR[f.properties.name]);
if (lower48.length !== 48) throw new Error(`expected 48 states, got ${lower48.length}`);

const path = geoPath().digits(1);
const [[x0, y0], [x1, y1]] = path.bounds({ type: 'FeatureCollection', features: lower48 });
const pad = 6;
const viewBox = [x0 - pad, y0 - pad, x1 - x0 + pad * 2, y1 - y0 + pad * 2].map((n) => Math.round(n)).join(' ');

// Same projection us-atlas used for the *-albers files.
const projection = geoAlbersUsa().scale(1300).translate([487.5, 305]);
const HQ = { lon: -83.06, lat: 40.1, label: 'Columbus, OH' }; // 2667 Sawbury Blvd, Columbus, OH 43235
const [hx, hy] = projection([HQ.lon, HQ.lat]);

const out = {
  source: 'us-atlas states-albers-10m (US Census Bureau), simplified',
  viewBox,
  hq: { x: Math.round(hx * 10) / 10, y: Math.round(hy * 10) / 10, label: HQ.label },
  states: lower48
    .map((f) => ({ abbr: ABBR[f.properties.name], name: f.properties.name, d: path(f) }))
    .sort((a, b) => a.abbr.localeCompare(b.abbr)),
};
fs.writeFileSync(new URL('../src/data/us-map.json', import.meta.url), JSON.stringify(out));
const bytes = fs.statSync(new URL('../src/data/us-map.json', import.meta.url)).size;
console.log(`states: ${out.states.length}, viewBox: ${viewBox}, hq: ${out.hq.x},${out.hq.y}, size: ${(bytes / 1024).toFixed(1)} KB`);
