import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { generateResponse, GatewayError } from "npm:@lovable.dev/ai-gateway@0.1.11";
import { checkBudget, inputSchema, instructions, recommendationSchema, terms } from "./rules.ts";

const json = (data: unknown, status = 200) => new Response(JSON.stringify(data), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

// Intentionally public: prospective partners need no account; no private data is read or stored.
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Please submit the advisor form." }, 405);
  let body: unknown;
  try { body = await req.json(); } catch { return json({ error: "Please enter a valid budget, city and business goals." }, 400); }
  const parsed = inputSchema.safeParse(body);
  if (!parsed.success) return json({ error: "Enter a positive budget, a city, and business goals of at least 10 characters." }, 400);
  try {
    const response = await generateResponse({
      model: "openai/gpt-6-astra",
      instructions,
      input: [{ role: "user", content: JSON.stringify(parsed.data) }],
      reasoning: { effort: "low" },
      text: { format: { type: "json_schema", name: "franchise_recommendation", strict: true, schema: {
        type: "object", additionalProperties: false,
        properties: {
          option: { type: "string", enum: ["training", "franchise", "kiosk", "cafe", "not_ready"] },
          summary: { type: "string" }, reasons: { type: "array", items: { type: "string" } }, nextSteps: { type: "array", items: { type: "string" } },
        }, required: ["option", "summary", "reasons", "nextSteps"],
      } } },
    });
    const text = response.output.flatMap(item => item.type === "message" ? item.content.filter(part => part.type === "output_text").map(part => part.text) : []).join("");
    if (!text || response.status === "incomplete" || response.status === "failed") return json({ error: "The advisor could not complete a recommendation. Your details are unchanged; you can contact us on WhatsApp." }, 502);
    const result = recommendationSchema.parse(JSON.parse(text));
    const option = checkBudget(result.option, parsed.data.budget);
    if (option !== result.option) return json({ error: "The recommendation needs a budget review. Please contact our team on WhatsApp." }, 502);
    return json({ ...result, terms: option === "not_ready" ? null : terms[option] });
  } catch (error) {
    if (error instanceof GatewayError) {
      console.error("Advisor gateway failure", { code: error.code, ids: error.ids, outcome: error.outcome });
      const message = error.code === "payment_required" ? "The AI advisor is paused until the site owner adds AI credits. Please enquire on WhatsApp." : error.code === "rate_limited" ? "The advisor is busy. Please wait before trying again, or enquire on WhatsApp." : "The AI advisor is unavailable right now. Your details are unchanged; please enquire on WhatsApp.";
      return json({ error: message }, error.code === "rate_limited" ? 429 : 503);
    }
    console.error("Advisor response could not be validated");
    return json({ error: "The advisor could not read the recommendation. Please contact our team on WhatsApp." }, 502);
  }
});