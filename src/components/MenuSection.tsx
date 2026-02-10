import { Badge } from "@/components/ui/badge";

const BEST_SELLERS = ["Masala Puri", "Sev Puri", "Spicy Dahi Boondi", "Sprouts Bhel"];

const menuCategories = [
  {
    name: "🥣 Pani Puri Variants",
    items: ["Pani Puri", "Amchur Pani Puri", "Pudina Pani Puri", "Dahi Puri"],
  },
  {
    name: "🌶️ Puri & Masala Items",
    items: ["Masala Puri", "Sev Masala", "Bun Masala", "Peanut Masala", "Boti Masala"],
  },
  {
    name: "🍲 Bhel Varieties",
    items: [
      "Bhel Puri", "Sev Puri", "Nippat Bhel", "Chakli Bhel", "Kurkure Bhel", "Chips Bhel",
      "Pudina Bhel", "Lemon Bhel", "Ghee Bhel", "Tomato Bhel", "Spicy Bhel", "Sweet Bhel",
      "Amchur Bhel", "Sprouts Bhel", "Achar Mango Bhel", "Achar Lemon Bhel",
    ],
  },
  {
    name: "🧀 Special & Fusion",
    items: ["Cheese Puri", "Special Cheese Masala", "Chocolate Puri", "Chocolate Dahi Puri", "Layers Choco Punch", "Spicy Dahi Boondi"],
  },
  {
    name: "🥤 Drinks",
    items: ["Masala Cool Drink"],
  },
];

const MenuSection = () => (
  <section id="menu" className="py-16 md:py-24 bg-card">
    <div className="container max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
        Our <span className="text-gradient">Menu</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12">A feast of flavors waiting for your franchise!</p>

      <div className="grid gap-8 md:grid-cols-2">
        {menuCategories.map((cat) => (
          <div key={cat.name} className="rounded-xl border border-border bg-background p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>{cat.name}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full bg-muted text-foreground font-medium">
                  {item}
                  {BEST_SELLERS.includes(item) && (
                    <Badge className="ml-1 text-[10px] px-1.5 py-0 bg-accent text-accent-foreground">⭐ Best Seller</Badge>
                  )}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground text-center mt-10 max-w-2xl mx-auto italic">
        * Prices mentioned in the menu are indicative only. Final selling prices can be customized by the franchise owner depending on area, city, rent, and local market conditions.
      </p>
    </div>
  </section>
);

export default MenuSection;
