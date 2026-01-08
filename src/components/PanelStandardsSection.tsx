import { Zap } from "lucide-react";

const PanelStandardsSection = () => {
  const panelSpecs = [
    {
      name: "Standard Panel A",
      dimensions: "1762 × 1134 × 30",
      width: 1134,
      height: 1762,
      depth: 30,
      power: "400W",
      cells: "144 Half-cut",
    },
    {
      name: "Standard Panel B",
      dimensions: "1756 × 1134 × 30",
      width: 1134,
      height: 1756,
      depth: 30,
      power: "395W",
      cells: "144 Half-cut",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-solar-amber/10 border border-solar-amber/20 mb-6">
            <Zap className="w-4 h-4 text-solar-amber" />
            <span className="text-sm font-medium text-solar-amber">Panel Specifications</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Industry Standard{" "}
            <span className="text-primary">Panel Dimensions</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Our calculations are based on real-world panel standards. 
            Choose your panel type and orientation for accurate configuration sizing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {panelSpecs.map((panel, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden"
            >
              {/* Panel Visual */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-solar-slate to-solar-panel p-8 overflow-hidden">
                {/* Panel frame */}
                <div className="relative w-full h-full border-4 border-gray-400 rounded-lg bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 panel-shadow">
                  {/* Grid lines */}
                  <div className="absolute inset-2 grid grid-cols-6 grid-rows-12 gap-px">
                    {Array.from({ length: 72 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="bg-blue-800/30 border border-blue-700/20"
                      />
                    ))}
                  </div>
                  
                  {/* Reflection highlight */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                </div>
                
                {/* Dimension annotations */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 flex flex-col items-center">
                  <div className="w-px h-16 bg-solar-amber" />
                  <div className="px-2 py-1 bg-solar-amber text-solar-amber-foreground text-xs font-mono font-semibold rounded my-1">
                    {panel.height}mm
                  </div>
                  <div className="w-px h-16 bg-solar-amber" />
                </div>
                
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 flex items-center">
                  <div className="h-px w-12 bg-solar-amber" />
                  <div className="px-2 py-1 bg-solar-amber text-solar-amber-foreground text-xs font-mono font-semibold rounded mx-1">
                    {panel.width}mm
                  </div>
                  <div className="h-px w-12 bg-solar-amber" />
                </div>
              </div>
              
              {/* Panel Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{panel.name}</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-secondary">
                    <div className="text-sm text-muted-foreground">Dimensions</div>
                    <div className="font-mono font-semibold text-primary">{panel.dimensions}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary">
                    <div className="text-sm text-muted-foreground">Power Output</div>
                    <div className="font-mono font-semibold text-solar-amber">{panel.power}</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Cell Type:</span>
                  <span className="font-medium">{panel.cells}</span>
                </div>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
        
        {/* Additional info */}
        <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Configuration Note</h4>
              <p className="text-muted-foreground text-sm">
                Panel layout is calculated based on your selected orientation (Portrait/Landscape). 
                Profile position and clamping side affect the total configuration dimensions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanelStandardsSection;
