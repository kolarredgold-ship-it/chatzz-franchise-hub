import { describe, expect, it } from "vitest";
import { advisorWhatsApp } from "./advisor";
import { peopleTrained, presence } from "./presence";

describe("advisor enquiry", () => {
  it("sends the budget, city and goals to the company's WhatsApp", () => {
    const url = new URL(advisorWhatsApp("200000", "Kolar", "Own brand & family business"));
    expect(url.pathname).toBe("/919738959525");
    expect(url.searchParams.get("text")).toContain("Budget: ₹200000\nCity: Kolar\nBusiness goals: Own brand & family business");
  });
});
describe("confirmed brand presence", () => {
  it("shows exactly three Kolar outlets", () => expect(presence.find(p => p.city === "Kolar")?.outlets).toBe(3));
  it("keeps the 200+ milestone as people trained, not outlets", () => expect(peopleTrained).toBe("200+"));
});