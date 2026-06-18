// Vygeneruje public/sitemap.xml zo zoznamu mýtov (spúšťa sa pred `vite build`).
import { writeFileSync } from "node:fs";
import { mythsData } from "../src/data/mythsData.js";

const BASE = "https://vegan-defender.vercel.app";

const paths = [
  "/",
  ...mythsData
    .filter((m) => m.id && m.id !== "fallback")
    .map((m) => `/?m=${encodeURIComponent(m.id)}`),
];

const urls = paths
  .map(
    (p) =>
      `  <url>\n    <loc>${BASE}${p}</loc>\n    <changefreq>monthly</changefreq>\n  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(new URL("../public/sitemap.xml", import.meta.url), xml);
console.log(`✓ sitemap.xml vygenerovaný (${paths.length} URL)`);
