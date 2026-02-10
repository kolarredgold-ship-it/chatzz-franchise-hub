import { useState } from "react";
import { Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const EnquirySection = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [model, setModel] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobile.trim()) {
      toast({ title: "Mobile number is required", variant: "destructive" });
      return;
    }

    const msg = `Hi, I'm interested in Bangarpet ChatzZ.%0A%0AName: ${name || "N/A"}%0AMobile: ${mobile}%0ACity: ${city || "N/A"}%0AInterested Model: ${model || "N/A"}`;
    window.open(`https://wa.me/919738959525?text=${msg}`, "_blank");
  };

  return (
    <section id="enquiry" className="py-16 md:py-24 bg-gradient-to-b from-card to-background">
      <div className="container max-w-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
          Get <span className="text-gradient">Started</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10">Fill in your details and we'll reach out!</p>

        <form onSubmit={handleSubmit} className="space-y-5 bg-background rounded-2xl border border-border p-6 md:p-8 shadow-lg">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your full name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="mobile">Mobile Number *</Label>
            <Input id="mobile" type="tel" placeholder="10-digit mobile number" required value={mobile} onChange={(e) => setMobile(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="city">City / Area</Label>
            <Input id="city" placeholder="Your city or area" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div>
            <Label>Interested Model</Label>
            <Select value={model} onValueChange={setModel}>
              <SelectTrigger><SelectValue placeholder="Select a model" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Training (₹50,000)">Chaat Making Training (₹50,000)</SelectItem>
                <SelectItem value="Brand & Business (₹1,50,000)">Brand & Business Model (₹1,50,000)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" size="lg" className="w-full text-base shadow-lg shadow-primary/30">
            <Send className="mr-2 h-5 w-5" /> Submit via WhatsApp
          </Button>
        </form>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button asChild variant="outline" size="lg">
            <a href="tel:9738959525"><Phone className="mr-2 h-5 w-5" /> Call Now</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-green-600 text-green-700 hover:bg-green-50">
            <a href="https://wa.me/919738959525?text=Hi%2C%20I%27m%20interested%20in%20Bangarpet%20ChatzZ%20franchise." target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Chat
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
