// Checkout button. Experiment flag: checkout_cta (control, bold, subtle).
import { flagValue } from "./flags.js";

// gavel:flag checkout_cta start
const variant = flagValue("checkout_cta");
// gavel:flag checkout_cta end

// gavel:variant checkout_cta control start
function controlButton() {
  return `<button class="cta">Checkout</button>`;
}
// gavel:variant checkout_cta control end

// gavel:variant checkout_cta bold start
function boldButton() {
  return `<button class="cta cta-bold">Complete my order</button>`;
}
// gavel:variant checkout_cta bold end

// gavel:variant checkout_cta subtle start
function subtleButton() {
  return `<button class="cta cta-subtle">Continue to payment</button>`;
}
// gavel:variant checkout_cta subtle end

export function checkoutButton() {
  // gavel:switch checkout_cta start
  if (variant === "bold") return boldButton();
  if (variant === "subtle") return subtleButton();
  return controlButton();
  // gavel:switch checkout_cta end
}
