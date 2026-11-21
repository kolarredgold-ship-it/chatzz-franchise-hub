import { describe, it, expect } from "vitest";
import { enquiryMessage, homeModels, whatsapp } from "./homepage";
describe("WhatsApp-only homepage", () => {
  it("sends the kiosk enquiry with the requested investment and wording", () => {
    const model = homeModels[0];
    expect(model.price).toBe("₹5 lakh");
    expect(new URL(whatsapp(model.message)).searchParams.get("text")).toBe("Hi Bangarpet Chatzz, I'm interested in the ₹5 lakh Kiosk franchise. Please share the full investment breakdown, training details and available locations.");
  });
  it("sends the café enquiry for ₹15 lakh", () => {
    expect(homeModels[1].price).toBe("₹15 lakh");
    expect(homeModels[1].message).toBe("Hi Bangarpet Chatzz, I'm interested in the ₹15 lakh Café franchise. Please share the full investment breakdown, setup details and support provided.");
  });
  it("asks for training fee and dates without inventing a new fee", () => {
    expect(homeModels[2].message).toBe("Hi Bangarpet Chatzz, I want to learn chaat making. Please share the training details, duration, fee and next batch dates.");
  });
  it("encodes user details including ampersands without breaking the link", () => {
    const message = enquiryMessage(" Asha & Ravi ", " Kolar ", "Kiosk", "within 3 months");
    expect(new URL(whatsapp(message)).searchParams.get("text")).toBe("Hi, I'm Asha & Ravi from Kolar. I'm interested in Kiosk and want to start within 3 months.");
    expect(new URL(whatsapp(message)).pathname).toBe("/919738959525");
  });
});