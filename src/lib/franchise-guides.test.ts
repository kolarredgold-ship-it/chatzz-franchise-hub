import { describe, expect, it } from "vitest";
import { franchiseGuides, guideEnquiry, guidesByCategory } from "./franchise-guides";

describe("franchise research collection", () => {
  it("provides exactly 100 individually addressable guides", () => {
    expect(franchiseGuides).toHaveLength(100);
    expect(new Set(franchiseGuides.map(g => g.slug)).size).toBe(100);
  });
  it("keeps enquiries account-free and directed to the brand WhatsApp number", () => {
    const url = new URL(guideEnquiry("Amul: cost planning"));
    expect(url.pathname).toBe("/919738959525");
    expect(url.searchParams.get("text")).toContain("Bangarpet Chatzz");
    expect(url.searchParams.get("text")).toContain("Amul: cost planning");
  });
  it("lists every guide exactly once across the footer category groups", () => {
    const listed = guidesByCategory.flatMap(group => group.guides.map(g => g.slug));
    expect(listed).toHaveLength(100);
    expect(new Set(listed).size).toBe(100);
    expect(guidesByCategory.every(group => group.guides.length > 0)).toBe(true);
  });
});
