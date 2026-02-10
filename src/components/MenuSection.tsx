import { Badge } from "@/components/ui/badge";
import menuPage1 from "@/assets/menu-page-1.jpg";
import menuPage2 from "@/assets/menu-page-2.jpg";

const BEST_SELLERS = ["Masala Puri", "Sev Puri", "Spicy Dahi Boondi", "Sprouts Bhel"];

const menuCategories = [
  {
    name: "🥣 Pani Puri Variants",
    items: [
      { name: "Pani Puri", price: "₹35" },
      { name: "Amchur Pani Puri", price: "₹35" },
      { name: "Pudina Pani Puri", price: "₹35" },
      { name: "Dahi Puri", price: "₹35" },
    ],
  },
  {
    name: "🌶️ Puri & Masala Items",
    items: [
      { name: "Masala Puri", price: "₹35" },
      { name: "Sev Masala", price: "₹35" },
      { name: "Bun Masala", price: "₹35" },
      { name: "Peanut Masala", price: "₹35" },
      { name: "Boti Masala", price: "₹35" },
    ],
  },
  {
    name: "🍲 Bhel Varieties",
    items: [
      { name: "Bhel Puri", price: "₹35" },
      { name: "Sev Puri", price: "₹35" },
      { name: "Nippat Bhel", price: "₹35" },
      { name: "Chakli Bhel", price: "₹35" },
      { name: "Kurkure Bhel", price: "₹35" },
      { name: "Chips Bhel", price: "₹35" },
      { name: "Pudina Bhel", price: "₹35" },
      { name: "Lemon Bhel", price: "₹35" },
      { name: "Ghee Bhel", price: "₹35" },
      { name: "Tomato Bhel", price: "₹35" },
      { name: "Spicy Bhel", price: "₹35" },
      { name: "Sweet Bhel", price: "₹35" },
      { name: "Amchur Bhel", price: "₹35" },
      { name: "Sprouts Bhel", price: "₹40" },
      { name: "Achar Mango Bhel", price: "₹35" },
      { name: "Achar Lemon Bhel", price: "₹35" },
    ],
  },
  {
    name: "🧀 Special & Fusion",
    items: [
      { name: "Cheese Puri", price: "₹50" },
      { name: "Special Cheese Masala", price: "₹50" },
      { name: "Chocolate Puri", price: "₹50" },
      { name: "Chocolate Dahi Puri", price: "₹50" },
      { name: "Layers Choco Punch", price: "₹50" },
      { name: "Spicy Dahi Boondi", price: "₹35" },
    ],
  },
  {
    name: "🥤 Drinks",
    items: [
      { name: "Masala Cool Drink", price: "₹30" },
    ],
  },
];

const MenuSection = () => (
  <section id="menu" className="py-16 md:py-24 bg-card">
    <div className="container max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
        Our <span className="text-gradient">Menu</span>
      </h2>
      <p className="text-center text-muted-foreground mb-10">A feast of flavors waiting for your franchise!</p>

      {/* Menu PDF Images */}
      <div className="grid md:grid-cols-2 gap-6 mb-14">
        <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-2xl hover:scale-[1.01]">
          <img src={menuPage1} alt="Bangarpet Chatzz Menu Page 1 - Pani Puri, Masala Items & Bhel" className="w-full h-auto" loading="lazy" />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-2xl hover:scale-[1.01]">
          <img src={menuPage2} alt="Bangarpet Chatzz Menu Page 2 - Bhel Varieties & Special Dishes" className="w-full h-auto" loading="lazy" />
        </div>
      </div>

      {/* Detailed items grid */}
      <h3 className="text-xl font-bold text-center mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
        Full Menu – {menuCategories.reduce((acc, c) => acc + c.items.length, 0)}+ Items
      </h3>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {menuCategories.map((cat) => (
          <div key={cat.name} className="rounded-xl border border-border bg-background p-5 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-base font-bold mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>{cat.name}</h4>
            <ul className="space-y-2">
              {cat.items.map((item) => (
                <li key={item.name} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    {item.name}
                    {BEST_SELLERS.includes(item.name) && (
                      <Badge className="text-[10px] px-1.5 py-0 bg-accent text-accent-foreground">⭐ Best Seller</Badge>
                    )}
                  </span>
                  <span className="font-semibold text-primary shrink-0 ml-2">{item.price}</span>
                </li>
              ))}
            </ul>
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
