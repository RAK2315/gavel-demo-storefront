// Search ranking. Experiment flag: search_ranking (control, semantic).
import { flagValue } from "./flags.js";

// gavel:flag search_ranking start
const variant = flagValue("search_ranking");
// gavel:flag search_ranking end

// gavel:variant search_ranking control start
function controlRank(results) {
  return [...results].sort((a, b) => b.keywordScore - a.keywordScore);
}
// gavel:variant search_ranking control end

// gavel:variant search_ranking semantic start
function semanticRank(results) {
  return [...results].sort((a, b) => b.embeddingScore - a.embeddingScore);
}
// gavel:variant search_ranking semantic end

export function rankResults(results) {
  // gavel:switch search_ranking start
  if (variant === "semantic") return semanticRank(results);
  return controlRank(results);
  // gavel:switch search_ranking end
}
