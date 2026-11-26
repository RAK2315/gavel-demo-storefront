// Signup form length. Experiment flag: signup_form (control, three_fields).
import { flagValue } from "./flags.js";

// gavel:flag signup_form start
const variant = flagValue("signup_form");
// gavel:flag signup_form end

// gavel:variant signup_form control start
function sixFields() {
  return `<form class="signup">${["name", "email", "password", "company", "role", "phone"].map((f) => `<input name="${f}">`).join("")}</form>`;
}
// gavel:variant signup_form control end

// gavel:variant signup_form three_fields start
function threeFields() {
  return `<form class="signup">${["name", "email", "password"].map((f) => `<input name="${f}">`).join("")}</form>`;
}
// gavel:variant signup_form three_fields end

export function signupForm() {
  // gavel:switch signup_form start
  if (variant === "three_fields") return threeFields();
  return sixFields();
  // gavel:switch signup_form end
}
