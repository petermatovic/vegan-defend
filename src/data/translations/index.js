// Spojené preklady obsahu mýtov (EN + BG). Zdroj (SK) ostáva v mythsData.
import { part1 } from "./part-1.js";
import { part2 } from "./part-2.js";
import { part3 } from "./part-3.js";
import { part4 } from "./part-4.js";
import { part5 } from "./part-5.js";
import { part6 } from "./part-6.js";
import { part7 } from "./part-7.js";

export const mythI18n = {
  ...part1,
  ...part2,
  ...part3,
  ...part4,
  ...part5,
  ...part6,
  ...part7,
};

// Vráti mýtus preložený do daného jazyka (sk = originál).
// Fallback na slovenský originál pre čokoľvek, čo chýba.
export function localizeMyth(myth, lang) {
  if (lang === "sk" || myth.id === "fallback") return myth;
  const t = mythI18n[myth.id]?.[lang];
  if (!t) return myth;

  const localized = {
    ...myth,
    query: t.query || myth.query,
    reality: t.reality || myth.reality,
  };
  if (myth.chartTitle && t.chartTitle) localized.chartTitle = t.chartTitle;
  if (myth.chartData && Array.isArray(t.chartData)) {
    localized.chartData = myth.chartData.map((d, i) => ({
      ...d,
      name: t.chartData[i] || d.name,
    }));
  }
  return localized;
}
