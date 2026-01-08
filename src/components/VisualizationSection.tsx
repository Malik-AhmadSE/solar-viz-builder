import { Eye, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-solar-roof.jpg";

const VisualizationSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Eye className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Realistic Visualization</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            See Your Panels{" "}
            <span className="text-primary">Installed</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Our advanced visualization engine shows panels as they would actually appear 
            on your roof—with proper perspective, shadows, and alignment.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Feature List */}
          <div className="space-y-6">
            {[
              {
                title: "Perspective Matching",
                desc: "Panels automatically match your roof's tilt and slope angle",
              },
              {
                title: "Perfect Alignment",
                desc: "Panels align with roof edges and follow architectural lines",
              },
              {
                title: "Realistic Shadows",
                desc: "Dynamic shadow rendering based on panel height and position",
              },
              {
                title: "No Floating Panels",
                desc: "Panels appear properly mounted, not hovering above the surface",
              },
              {
                title: "Orientation Matching",
                desc: "Visual updates instantly when switching portrait/landscape",
              },
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-shadow duration-300"
              >
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
            
            {/* Client Quote */}
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <blockquote className="text-lg italic text-foreground mb-3">
                "This looks like it's actually installed on the roof."
              </blockquote>
              <div className="text-sm text-muted-foreground">— What your clients will say</div>
            </div>
          </div>
          
          {/* Right - Visualization Demo */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              {/* Main visualization */}
              <div className="relative">
                <img 
                  src={heroImage}
                  alt="Realistic solar panel visualization on rooftop"
                  className="w-full h-auto"
                />
                
                {/* Overlay indicators */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Panel highlight areas */}
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                    {/* Alignment guides */}
                    <line x1="15" y1="20" x2="85" y2="20" stroke="hsl(var(--solar-amber))" strokeWidth="0.3" strokeDasharray="2,2" />
                    <line x1="15" y1="75" x2="85" y2="75" stroke="hsl(var(--solar-amber))" strokeWidth="0.3" strokeDasharray="2,2" />
                  </svg>
                </div>
                
                {/* Floating annotation */}
                <div className="absolute top-4 right-4 glass-card px-4 py-3 max-w-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-semibold">Visualization Active</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Panels rendered with realistic perspective and shadows
                  </div>
                </div>
                
                {/* Bottom stats */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass-card p-4 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">15°</div>
                      <div className="text-xs text-muted-foreground">Roof Tilt</div>
                    </div>
                    <div className="text-center border-x border-border">
                      <div className="text-lg font-bold text-primary">South</div>
                      <div className="text-xs text-muted-foreground">Orientation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-solar-amber">95%</div>
                      <div className="text-xs text-muted-foreground">Match Score</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-solar-amber/5 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualizationSection;
