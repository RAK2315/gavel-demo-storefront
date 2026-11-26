// Onboarding tooltip. Experiment flag: onboarding_tooltip (control, video).
import { flagValue } from "./flags.js";

// gavel:flag onboarding_tooltip start
const variant = flagValue("onboarding_tooltip");
// gavel:flag onboarding_tooltip end

// gavel:variant onboarding_tooltip control start
function controlTooltip() {
  return `<aside class="tip">Add your first product to get started.</aside>`;
}
// gavel:variant onboarding_tooltip control end

// gavel:variant onboarding_tooltip video start
function videoTooltip() {
  return `<aside class="tip"><video src="/tour.mp4" muted autoplay></video></aside>`;
}
// gavel:variant onboarding_tooltip video end

export function onboardingTooltip() {
  // gavel:switch onboarding_tooltip start
  if (variant === "video") return videoTooltip();
  return controlTooltip();
  // gavel:switch onboarding_tooltip end
}
