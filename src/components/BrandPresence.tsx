import { GraduationCap, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { peopleTrained, presence } from "@/lib/presence";

const BrandPresence = () => <section id="presence" className="scroll-mt-20 bg-background py-16 md:py-24">
  <div className="container mx-auto max-w-5xl px-4">
    <span className="eyebrow">Our presence</span>
    <div className="grid gap-10 md:grid-cols-2">
      <div><h2 className="h-sec">Rooted in <span className="text-gradient">Karnataka</span></h2><div className="mt-8 flex items-center gap-4"><GraduationCap className="h-10 w-10 text-primary" /><div><p className="text-4xl font-extrabold">{peopleTrained}</p><p className="text-sm text-muted-foreground">People trained</p></div></div></div>
      <div><ul className="divide-y divide-border">{presence.map(item => <li key={item.city} className="flex items-center gap-4 py-5"><MapPin className="h-6 w-6 shrink-0 text-primary" /><div><h3 className="text-xl font-extrabold">{item.city}</h3><p className="text-sm text-muted-foreground">{item.detail}</p></div></li>)}</ul><Button asChild variant="outline" className="mt-6 h-auto min-h-11 whitespace-normal"><a href="https://wa.me/919738959525?text=Hi%2C%20please%20share%20Bangarpet%20Chatzz%20outlet%20locations%20in%20Karnataka." target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4 shrink-0" /> Ask about outlet locations</a></Button></div>
    </div>
  </div>
</section>;
export default BrandPresence;