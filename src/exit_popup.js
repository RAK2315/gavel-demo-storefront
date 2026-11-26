// Exit-intent discount popup. Experiment flag: exit_popup (control, popup).
import { flagValue } from "./flags.js";

// gavel:flag exit_popup start
const variant = flagValue("exit_popup");
// gavel:flag exit_popup end

// gavel:variant exit_popup control start
function controlExit() {
  return "";
}
// gavel:variant exit_popup control end

// gavel:variant exit_popup popup start
function popupExit() {
  return `<dialog open class="exit">Wait! Take 10% off before you go.</dialog>`;
}
// gavel:variant exit_popup popup end

export function exitPopup() {
  // gavel:switch exit_popup start
  if (variant === "popup") return popupExit();
  return controlExit();
  // gavel:switch exit_popup end
}
