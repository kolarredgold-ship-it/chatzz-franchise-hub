import { XCircle, CheckCircle } from "lucide-react";

const competitors = [
  "Unbranded stalls",
  "Skill-dependent operators",
  "Inconsistent in hygiene and taste",
  "Lacking scalability",
];

const ourEdge = [
  "Recognizable and structured brand",
  "Standardized recipes and preparation",
  "Cleaner, more reliable than informal stalls",
  "More affordable and faster than cafés",
];

const CompetitiveEdge = () => (
  <section className="py-20 md:py-32 bg-card">
    <div className="container max-w-5xl mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">Brand Positioning</span>
        <h2 className="text-3xl md:text-5xl font-black mb-4">
          Competitive <span className="text-gradient">Landscape</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          The street chaat market is crowded but largely unorganized. We attract customers who already love chaat—but want trust, consistency, and speed.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl border-2 border-border bg-background p-8">
          <h3 className="text-lg font-bold mb-6 text-muted-foreground" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Most Competitors
          </h3>
          <div className="space-y-4">
            {competitors.map((c) => (
              <div key={c} className="flex items-center gap-3 text-sm text-muted-foreground">
                <XCircle className="h-5 w-5 text-destructive shrink-0" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border-2 border-primary bg-gradient-to-b from-primary/5 to-background p-8 shadow-xl shadow-primary/10">
          <h3 className="text-lg font-bold mb-6 text-gradient" style={{ fontFamily: "'Poppins', sans-serif" }}>
            BANGARPET CHATZz
          </h3>
          <div className="space-y-4">
            {ourEdge.map((e) => (
              <div key={e} className="flex items-center gap-3 text-sm font-medium">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span>{e}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CompetitiveEdge;
