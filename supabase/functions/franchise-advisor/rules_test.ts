import { checkBudget, terms } from "./rules.ts";
function equal(actual: unknown, expected: unknown) { if (actual !== expected) throw new Error(`Expected ${expected}, got ${actual}`); }
Deno.test("training fee matches brochure ₹49,999", () => equal(terms.training.fee, 49999));
Deno.test("franchise fee matches brochure ₹1,49,999", () => equal(terms.franchise.fee, 149999));
Deno.test("franchise annual renewal matches ₹39,999", () => equal(terms.franchise.renewal, 39999));
Deno.test("training has no annual renewal", () => equal(terms.training.renewal, 0));
Deno.test("below training fee is not ready", () => equal(checkBudget("training", 49998), "not_ready"));
Deno.test("brand recommendation cannot exceed budget", () => equal(checkBudget("franchise", 149998), "not_ready"));