import { Grid3x3, Move, Maximize2, MousePointer2 } from "lucide-react";

const RoofDrawingSection = () => {
  return (
    <section id="features" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Description */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <MousePointer2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Interactive Drawing</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Draw Your Roof{" "}
              <span className="text-primary">Dimensions</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our intuitive drawing tool lets you map out your roof exactly as it is. 
              Select rectangular or polygon areas, and watch as real-time measurements 
              appear with millimeter precision.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: Grid3x3, title: "Grid Overlay", desc: "Precision snapping for accurate measurements" },
                { icon: Move, title: "Drag & Drop", desc: "Easily adjust boundaries with smooth controls" },
                { icon: Maximize2, title: "Real-time Labels", desc: "See dimensions update as you draw (mm)" },
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 shadow-soft">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right - Visual Demo */}
          <div className="relative">
            <div className="rounded-2xl bg-card border border-border shadow-elevated overflow-hidden">
              {/* Blueprint Grid Area */}
              <div className="relative aspect-square blueprint-grid bg-secondary/50 p-8">
                {/* Roof Shape */}
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* Background grid lines */}
                  <defs>
                    <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-solar-grid" />
                    </pattern>
                  </defs>
                  
                  {/* Roof outline */}
                  <polygon 
                    points="50,100 350,100 350,320 50,320" 
                    fill="none" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="3"
                    strokeDasharray="0"
                    className="animate-pulse-slow"
                  />
                  
                  {/* Selected area highlight */}
                  <polygon 
                    points="80,130 320,130 320,290 80,290" 
                    fill="hsl(var(--primary))"
                    fillOpacity="0.15"
                    stroke="hsl(var(--solar-amber))"
                    strokeWidth="2"
                    strokeDasharray="8,4"
                  />
                  
                  {/* Corner handles */}
                  {[
                    [80, 130], [320, 130], [320, 290], [80, 290]
                  ].map(([x, y], i) => (
                    <circle 
                      key={i}
                      cx={x} 
                      cy={y} 
                      r="8" 
                      fill="hsl(var(--solar-amber))"
                      className="cursor-pointer"
                    />
                  ))}
                  
                  {/* Dimension labels */}
                  <text x="200" y="115" textAnchor="middle" className="fill-primary text-xs font-mono font-semibold">
                    4800 mm
                  </text>
                  <text x="335" y="210" textAnchor="start" className="fill-primary text-xs font-mono font-semibold" transform="rotate(90, 335, 210)">
                    3200 mm
                  </text>
                </svg>
                
                {/* Floating measurement tooltip */}
                <div className="absolute top-8 right-8 glass-card px-3 py-2 text-sm font-mono">
                  <div className="text-muted-foreground">Area</div>
                  <div className="text-lg font-bold text-primary">15.36 m²</div>
                </div>
              </div>
              
              {/* Bottom toolbar */}
              <div className="flex items-center justify-between p-4 border-t border-border bg-card">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium">Drawing Mode Active</span>
                </div>
                <div className="flex gap-2">
                  <div className="px-3 py-1.5 rounded-lg bg-secondary text-sm font-medium">Rectangle</div>
                  <div className="px-3 py-1.5 rounded-lg bg-muted text-sm text-muted-foreground">Polygon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoofDrawingSection;
