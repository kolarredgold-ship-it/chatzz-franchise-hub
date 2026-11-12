export const outletModels = [
  {
    id: "kiosk", title: "Kiosk Model", investment: 500000,
    description: "A compact, counter-service format for quick snacks and takeaway.",
    specifications: [
      { label: "Suggested space", value: "100–200 sq ft" },
      { label: "Service style", value: "Walk-up counter & takeaway" },
      { label: "Suggested team", value: "2–3 people" },
      { label: "Menu focus", value: "Pani puri, chaats & select drinks" },
      { label: "Equipment plan", value: "Prep counter, refrigeration, water filtration & storage" },
      { label: "Location fit", value: "College zones, office clusters & busy shopping areas" },
    ],
  },
  {
    id: "cafe", title: "Café Model", investment: 1500000,
    description: "A larger, seated format with chaat, drinks and an expanded snack menu.",
    specifications: [
      { label: "Suggested space", value: "500–800 sq ft" },
      { label: "Service style", value: "Dine-in & takeaway" },
      { label: "Suggested team", value: "4–6 people" },
      { label: "Menu focus", value: "Chaats, milkshakes, burgers, pizzas & sandwiches" },
      { label: "Equipment plan", value: "Prep stations, refrigeration, blender, grill & pizza oven" },
      { label: "Location fit", value: "Residential-commercial neighbourhoods & high-street areas" },
    ],
  },
];

export function outletEnquiry(title: string, investment: number) {
  return `https://wa.me/919738959525?text=${encodeURIComponent(`Hi, I'm interested in the Bangarpet Chatzz ${title} with ₹${investment.toLocaleString("en-IN")} total investment. Please share confirmed specifications, inclusions and payment terms.`)}`;
}