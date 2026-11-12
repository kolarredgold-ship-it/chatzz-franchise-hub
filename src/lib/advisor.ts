import { z } from "zod";

export const advisorResponseSchema = z.object({
  option: z.enum(["training", "franchise", "kiosk", "cafe", "not_ready"]),
  summary: z.string(), reasons: z.array(z.string()), nextSteps: z.array(z.string()),
  terms: z.object({ title: z.string(), fee: z.number(), renewal: z.number() }).nullable(),
});
export type AdvisorResponse = z.infer<typeof advisorResponseSchema>;
export function advisorWhatsApp(budget: string, city: string, goals: string, recommendation?: string) {
  const message = `Hi, I'm interested in Bangarpet Chatzz.\nBudget: ₹${budget}\nCity: ${city}\nBusiness goals: ${goals}${recommendation ? `\nAdvisor recommendation: ${recommendation}` : ""}`;
  return `https://wa.me/919738959525?text=${encodeURIComponent(message)}`;
}
export const formatRupees = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;