import { useState } from "react";
import { MessageCircle, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { enquiryMessage, whatsapp } from "@/lib/homepage";

const EnquirySection = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [model, setModel] = useState("Not sure");
  const [timeline, setTimeline] = useState("within 3 months");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !city.trim()) return;
    window.open(whatsapp(enquiryMessage(name, city, model, timeline)), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="enquiry" className="home-section reveal bg-muted/50">
      <div className="home-container grid gap-10 md:grid-cols-2 md:gap-16">
        <div className="md:pt-5"><span className="eyebrow">Let's take the first step</span><h2 className="h-sec text-secondary">Every new beginning<br />starts with a conversation.</h2><p className="mt-5 max-w-md text-muted-foreground">Tell us a little about your plans. Our team will help you understand the options, costs and next steps — at your pace.</p><ul className="mt-8 space-y-4 text-secondary">{['No pressure. Just an honest conversation.', 'A model that fits your plans.', 'Your details stay in your WhatsApp message.'].map(text => <li key={text} className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-primary" />{text}</li>)}</ul></div>
        <form onSubmit={handleSubmit} className="grid gap-5 rounded-2xl border border-border bg-card p-6 md:p-8 soft-shadow">
          <h3 className="text-xl font-extrabold text-secondary">Tell us about your dream</h3>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" className="mt-2 h-12 text-base" autoComplete="name" placeholder="Your full name" required maxLength={100} value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="city">City / Area</Label>
            <Input id="city" className="mt-2 h-12 text-base" autoComplete="address-level2" placeholder="Your city or area" required maxLength={100} value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="interest">Interested model</Label>
            <select id="interest" value={model} onChange={e => setModel(e.target.value)} className="mt-2 h-12 w-full rounded-md border border-input bg-background px-3 text-base focus:ring-2 focus:ring-ring">{['Not sure', 'Kiosk', 'Café', 'Training'].map(value => <option key={value}>{value}</option>)}</select>
          </div>
          <div><Label htmlFor="timeline">When would you like to start?</Label><select id="timeline" value={timeline} onChange={e => setTimeline(e.target.value)} className="mt-2 h-12 w-full rounded-md border border-input bg-background px-3 text-base focus:ring-2 focus:ring-ring">{['as soon as possible', 'within 3 months', 'within 6 months', 'after exploring my options'].map(value => <option key={value} value={value}>{value.charAt(0).toUpperCase() + value.slice(1)}</option>)}</select></div>
          <Button type="submit" size="lg" className="w-full h-auto min-h-12 rounded-full whitespace-normal py-3 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90">
            <MessageCircle /> Let's talk on WhatsApp <ArrowUpRight />
          </Button>
          <p className="text-xs text-center text-muted-foreground">No account. No stored form details. Just a conversation.</p>
        </form>
      </div>
    </section>
  );
};

export default EnquirySection;
