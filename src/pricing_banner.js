// Pricing banner. Experiment flag: pricing_banner (control, annual_first).
import { flagValue } from "./flags.js";

// gavel:flag pricing_banner start
const variant = flagValue("pricing_banner");
// gavel:flag pricing_banner end

// gavel:variant pricing_banner control start
function controlBanner() {
  return `<p class="banner">Monthly from $12. Save 20% with annual billing.</p>`;
}
// gavel:variant pricing_banner control end

// gavel:variant pricing_banner annual_first start
function annual_firstBanner() {
  return `<p class="banner banner-annual">$115 a year, or $12 monthly.</p>`;
}
// gavel:variant pricing_banner annual_first end

export function pricingBanner() {
  // gavel:switch pricing_banner start
  if (variant === "annual_first") return annual_firstBanner();
  return controlBanner();
  // gavel:switch pricing_banner end
}
