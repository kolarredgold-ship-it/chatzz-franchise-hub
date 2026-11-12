import { describe, expect, it } from "vitest";
import { outletModels, outletEnquiry } from "./outlet-models";
describe("outlet total investments", () => {
  it("sets kiosk total investment to ₹5 lakh", () => expect(outletModels.find(m => m.id === "kiosk")?.investment).toBe(500000));
  it("sets cafe total investment to ₹15 lakh", () => expect(outletModels.find(m => m.id === "cafe")?.investment).toBe(1500000));
  it("sends the chosen format and total investment to WhatsApp", () => {
    const url = new URL(outletEnquiry("Kiosk Model", 500000));
    expect(url.pathname).toBe("/919738959525");
    expect(url.searchParams.get("text")).toContain("Kiosk Model with ₹5,00,000 total investment");
  });
});