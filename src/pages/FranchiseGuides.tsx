import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Search } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Footer from "@/components/Footer";
import { PageHead } from "@/components/PageHead";
import { franchiseGuides, guideCategories, guideEnquiry, SITE_URL } from "@/lib/franchise-guides";
import { outletModels } from "@/lib/outlet-models";
import NotFound from "@/pages/NotFound";
import shopReal from "@/assets/shop-real.asset.json";

const GuideHeader = () => <header className="border-b border-border bg-background"><div className="container mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4"><Link to="/" className="text-xl font-extrabold text-primary">Bangarpet Chatzz</Link><Button asChild variant="outline" size="sm"><Link to="/franchise-guides">All guides</Link></Button></div></header>;

export function FranchiseGuides() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const filtered = franchiseGuides.filter(g => (category === "all" || category === g.category) && `${g.title} ${g.intro}`.toLowerCase().includes(search.toLowerCase()));
  return <><PageHead title="Franchise Comparison & Investment Guides | Bangarpet Chatzz" description="Compare food franchise formats, investment planning, locations and training. Explore 100 practical guides and Bangarpet Chatzz options." path="/franchise-guides" /><GuideHeader />
    <main className="container mx-auto max-w-6xl px-4 py-10 md:py-16">
      <span className="eyebrow">Franchise research</span><h1 className="h-sec max-w-3xl">Compare your next food business</h1><p className="mt-5 max-w-2xl text-muted-foreground">Brand comparisons, practical investment checks and food-format guides, published by Bangarpet Chatzz.</p>
      <div className="my-8 flex flex-col gap-3 sm:flex-row"><div className="relative flex-1"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input aria-label="Search franchise guides" placeholder="Search a brand or food format" value={search} onChange={e => setSearch(e.target.value)} className="pl-10" /></div><Select value={category} onValueChange={setCategory}><SelectTrigger className="sm:w-60" aria-label="Filter guides by category"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="all">All categories</SelectItem>{guideCategories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent></Select></div>
      <p aria-live="polite" className="mb-5 text-sm text-muted-foreground">{filtered.length} guides</p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{filtered.map(g => <article key={g.slug} className="flex flex-col rounded-lg border border-border bg-card p-6"><span className="mb-3 text-xs font-semibold uppercase text-primary">{g.category}</span><h2 className="text-lg font-extrabold"><Link className="hover:text-primary" to={`/franchise-guides/${g.slug}`}>{g.title}</Link></h2><p className="my-4 text-sm text-muted-foreground">{g.description}</p><Link to={`/franchise-guides/${g.slug}`} className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary">Read guide <ArrowRight className="h-4 w-4" /></Link></article>)}</div>
      {filtered.length === 0 && <p className="py-12 text-center text-muted-foreground">No guides match your search.</p>}
    </main><Footer /></>;
}

export function FranchiseGuide() {
  const { slug } = useParams();
  const guide = franchiseGuides.find(g => g.slug === slug);
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);
  if (!guide) return <NotFound />;
  const path = `/franchise-guides/${guide.slug}`;
  const related = franchiseGuides.filter(g => g.subject === guide.subject && g.slug !== guide.slug);
  return <><PageHead title={`${guide.title} | Bangarpet Chatzz`} description={guide.description} path={path} />
    <Helmet><script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: "Franchise guides", item: `${SITE_URL}/franchise-guides` }, { "@type": "ListItem", position: 3, name: guide.title, item: `${SITE_URL}${path}` }] })}</script></Helmet><GuideHeader />
    <main>
      <div className="container mx-auto max-w-4xl px-4 py-10 md:py-16"><Link to="/franchise-guides" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground"><ArrowLeft className="h-4 w-4" /> Franchise guides</Link><span className="eyebrow">{guide.eyebrow}</span><h1 className="h-sec break-words">{guide.title}</h1><p className="mt-6 text-lg text-muted-foreground">{guide.intro}</p><p className="mt-5 border-l-2 border-primary pl-4 text-sm text-muted-foreground">Published by Bangarpet Chatzz, one of the options discussed. Independent comparison; no affiliation with other brands. This is not an official enquiry page for another franchise.</p>
        {guide.sections.map(section => <section key={section.heading} className="mt-10"><h2 className="text-2xl font-extrabold md:text-3xl">{section.heading}</h2>{section.paragraphs.map(p => <p key={p} className="mt-4 leading-relaxed text-muted-foreground">{p}</p>)}</section>)}
        <section className="mt-10"><h2 className="text-2xl font-extrabold md:text-3xl">Your decision checklist</h2><ul className="mt-5 space-y-4">{guide.checklist.map(c => <li key={c} className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-primary" /><span>{c}</span></li>)}</ul></section>
        {guide.sourceUrl && <section className="mt-10 border-t border-border pt-6"><h2 className="text-lg font-extrabold">Official reference</h2><a href={guide.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-primary underline">{guide.sourceLabel}</a><p className="mt-2 text-sm text-muted-foreground">Brand overview checked on 12 November 2026. Competitor prices, earnings and availability are not quoted here; verify current terms directly with the brand.</p></section>}
      </div>
      <section className="border-y border-border bg-card py-12"><div className="container mx-auto max-w-4xl px-4"><span className="eyebrow">Our alternative</span><h2 className="h-sec">Consider Bangarpet Chatzz</h2><p className="mt-5 text-muted-foreground">Choose a chaat-led business if it suits the customer occasion and daily work you want to manage. Our confirmed outlet presence is in Karnataka, mostly Bengaluru, with three outlets in Kolar. We have trained 200+ people; this is not an outlet count. Availability at your proposed location requires confirmation.</p><img src={shopReal.url} alt="Bangarpet Chatzz storefront supplied by the brand" loading="lazy" className="mt-6 aspect-video w-full rounded-lg object-cover" />
        <dl className="mt-8 divide-y divide-border"><div className="grid gap-2 py-5 sm:grid-cols-2"><dt className="font-extrabold">Business Training Program</dt><dd>₹49,999 program fee — operate under your own brand, not a franchise; no annual renewal fee.</dd></div><div className="grid gap-2 py-5 sm:grid-cols-2"><dt className="font-extrabold">Franchise & Branding Program</dt><dd>₹1,49,999 program fee, with ₹39,999 annual brand renewal; brand rights subject to company terms.</dd></div>{outletModels.map(m => <div key={m.id} className="grid gap-2 py-5 sm:grid-cols-2"><dt className="font-extrabold">{m.title}</dt><dd>₹{m.investment.toLocaleString("en-IN")} total investment. {m.description} Specifications are indicative.</dd></div>)}</dl>
        <p className="mt-5 text-sm text-muted-foreground">Program fees and total outlet investments are different scopes, not amounts to add together without clarification. Confirm itemised inclusions, premises costs, working capital and recurring terms. No EMI or security deposit under our payment policy; full payment is required. Any landlord or venue charges must be confirmed separately. Prices and menu availability may vary by location. No guaranteed earnings or break-even period.</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg" className="h-auto min-h-11 whitespace-normal"><a href={guideEnquiry(guide.title)} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-5 w-5 shrink-0" /> Enquire about Bangarpet Chatzz</a></Button><Button asChild size="lg" variant="outline"><a href="/#advisor">Check my budget</a></Button></div>
      </div></section>
      <section className="container mx-auto max-w-4xl px-4 py-12"><h2 className="text-2xl font-extrabold">More on {guide.subject}</h2><ul className="mt-5 divide-y divide-border">{related.map(g => <li key={g.slug}><Link className="flex items-center justify-between gap-4 py-4 text-primary" to={`/franchise-guides/${g.slug}`}>{g.title}<ArrowRight className="h-5 w-5 shrink-0" /></Link></li>)}</ul></section>
    </main><Footer /></>;
}