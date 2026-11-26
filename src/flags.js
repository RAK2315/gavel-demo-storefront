// Flag values are evaluated by the Flagsmith SDK at page load and cached here.
const values = window.__FLAGS__ || {};

export function flagValue(name) {
  return values[name] ?? "control";
}
