import { Settings, ArrowRight } from "lucide-react";

const ConfigurationLogicSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Settings className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Configuration Logic</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            How{" "}
            <span className="text-primary">Calculations</span>{" "}
            Work
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Our system uses precise engineering formulas to calculate the exact 
            dimensions of your solar panel configuration including all mounting hardware.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Default Values */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-solar-amber/10">
                <Settings className="w-5 h-5 text-solar-amber" />
              </div>
              Default Configuration Values
            </h3>
            
            <div className="space-y-4">
              {[
                { label: "Middle/End Clamp Width", value: "20mm" },
                { label: "End Cap Width", value: "32mm" },
                { label: "Profile Position", value: "Horizontal" },
                { label: "Panel Orientation", value: "Portrait" },
                { label: "Clamping Side", value: "Long Side" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 border border-border/50"
                >
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-mono font-semibold text-primary">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Length Calculation */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6">Length Calculation (Portrait)</h3>
            
            <div className="space-y-6">
              {/* Formula */}
              <div className="p-6 rounded-xl bg-solar-slate text-white font-mono">
                <div className="text-sm text-gray-400 mb-2">Formula</div>
                <div className="text-sm leading-relaxed">
                  <div>Length = (columns × panel_width)</div>
                  <div className="pl-8">+ (clamp_width × total_clamps)</div>
                  <div className="pl-8">+ (endcap_width × total_endcaps)</div>
                </div>
              </div>
              
              {/* Example Calculation */}
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-3">Example: 9 Columns</div>
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Panels:</span>
                    <span>9 × 1134</span>
                    <span className="text-primary">=</span>
                    <span className="text-primary font-semibold">10,206 mm</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Clamps:</span>
                    <span>10 × 20</span>
                    <span className="text-primary">=</span>
                    <span className="text-primary font-semibold">200 mm</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">End Caps:</span>
                    <span>2 × 32</span>
                    <span className="text-primary">=</span>
                    <span className="text-primary font-semibold">64 mm</span>
                  </div>
                </div>
              </div>
              
              {/* Result */}
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Total Configuration Length</span>
                  <span className="text-2xl font-mono font-bold text-primary">10,470 mm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Width Calculation */}
        <div className="mt-8 glass-card p-8 rounded-2xl max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-6 text-center">Width Calculation</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="p-6 rounded-xl bg-secondary text-center">
              <div className="text-sm text-muted-foreground mb-2">Formula</div>
              <div className="font-mono font-semibold">Width = rows × panel_height</div>
            </div>
            
            <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
            
            <div className="p-6 rounded-xl bg-secondary text-center">
              <div className="text-sm text-muted-foreground mb-2">1 Row Example</div>
              <div className="font-mono font-semibold">1 × 1762 = <span className="text-primary">1,762 mm</span></div>
            </div>
          </div>
          
          {/* Visual diagram */}
          <div className="mt-8 p-6 rounded-xl bg-solar-slate overflow-x-auto">
            <svg viewBox="0 0 600 120" className="w-full min-w-[400px]">
              {/* End cap left */}
              <rect x="10" y="30" width="20" height="60" fill="#f59e0b" rx="2" />
              <text x="20" y="110" textAnchor="middle" className="fill-gray-400 text-[8px]">32mm</text>
              
              {/* Panels with clamps */}
              {[0, 1, 2, 3, 4].map((i) => (
                <g key={i} transform={`translate(${30 + i * 100}, 0)`}>
                  {/* Clamp */}
                  <rect x="0" y="35" width="8" height="50" fill="#6b7280" rx="1" />
                  {/* Panel */}
                  <rect x="12" y="20" width="80" height="80" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1" rx="2" />
                  <line x1="12" y1="60" x2="92" y2="60" stroke="#3b82f6" strokeWidth="0.5" />
                </g>
              ))}
              
              {/* Last clamp */}
              <rect x="530" y="35" width="8" height="50" fill="#6b7280" rx="1" />
              
              {/* End cap right */}
              <rect x="545" y="30" width="20" height="60" fill="#f59e0b" rx="2" />
              <text x="555" y="110" textAnchor="middle" className="fill-gray-400 text-[8px]">32mm</text>
              
              {/* Dimension line */}
              <line x1="10" y1="10" x2="565" y2="10" stroke="#3b82f6" strokeWidth="1" />
              <line x1="10" y1="5" x2="10" y2="15" stroke="#3b82f6" strokeWidth="1" />
              <line x1="565" y1="5" x2="565" y2="15" stroke="#3b82f6" strokeWidth="1" />
              <text x="287" y="8" textAnchor="middle" className="fill-blue-400 text-[10px] font-bold">Total Configuration Length</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfigurationLogicSection;
