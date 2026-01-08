import { useState } from "react";
import { RotateCcw, ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrientationSection = () => {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  
  const panelWidth = 1134;
  const panelHeight = 1762;
  const clampWidth = 20;
  const endCapWidth = 32;
  
  // Calculate based on orientation
  const isPortrait = orientation === 'portrait';
  const displayWidth = isPortrait ? panelWidth : panelHeight;
  const displayHeight = isPortrait ? panelHeight : panelWidth;
  
  // Configuration for 3 columns, 1 row
  const columns = 3;
  const rows = 1;
  const totalClamps = columns + 1;
  const totalEndCaps = 2;
  
  const configLength = isPortrait 
    ? (columns * panelWidth) + (clampWidth * totalClamps) + (endCapWidth * totalEndCaps)
    : (columns * panelHeight) + (clampWidth * totalClamps) + (endCapWidth * totalEndCaps);
    
  const configWidth = isPortrait 
    ? rows * panelHeight
    : rows * panelWidth;

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <RotateCcw className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Orientation Options</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Portrait vs{" "}
            <span className="text-primary">Landscape</span>{" "}
            Mode
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Toggle between orientations to see how panel layout and dimensions change. 
            Clamping position adjusts automatically based on your selection.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Toggle & Info */}
          <div className="space-y-8">
            {/* Toggle Button */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Panel Orientation</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setOrientation(o => o === 'portrait' ? 'landscape' : 'portrait')}
                  className="gap-2"
                >
                  <ArrowRightLeft className="w-4 h-4" />
                  Switch
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setOrientation('portrait')}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    isPortrait 
                      ? 'border-primary bg-primary/10' 
                      : 'border-border hover:border-primary/30'
                  }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className={`w-12 h-16 rounded border-2 ${
                      isPortrait ? 'border-primary bg-primary/20' : 'border-muted-foreground/50'
                    }`} />
                    <span className={`font-medium ${isPortrait ? 'text-primary' : ''}`}>Portrait</span>
                  </div>
                </button>
                
                <button
                  onClick={() => setOrientation('landscape')}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    !isPortrait 
                      ? 'border-primary bg-primary/10' 
                      : 'border-border hover:border-primary/30'
                  }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className={`w-16 h-12 rounded border-2 ${
                      !isPortrait ? 'border-primary bg-primary/20' : 'border-muted-foreground/50'
                    }`} />
                    <span className={`font-medium ${!isPortrait ? 'text-primary' : ''}`}>Landscape</span>
                  </div>
                </button>
              </div>
            </div>
            
            {/* Orientation Details */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-semibold mb-4">
                {isPortrait ? 'Portrait Mode' : 'Landscape Mode'} Details
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-secondary/50 border border-border/50">
                  <div className="text-sm text-muted-foreground mb-1">Clamping Side</div>
                  <div className="font-semibold text-primary">
                    {isPortrait ? 'Long side (1762mm)' : 'Short side (1134mm)'}
                  </div>
                </div>
                
                <div className="p-4 rounded-xl bg-secondary/50 border border-border/50">
                  <div className="text-sm text-muted-foreground mb-1">Panel Display Size</div>
                  <div className="font-mono font-semibold">
                    {displayWidth} × {displayHeight} mm
                  </div>
                </div>
                
                <div className="p-4 rounded-xl bg-solar-amber/10 border border-solar-amber/20">
                  <div className="text-sm text-solar-amber mb-1">Configuration Note</div>
                  <div className="text-sm text-muted-foreground">
                    {isPortrait 
                      ? 'Clamps and end caps affect the total length of the configuration.'
                      : 'Clamps and end caps affect the total width of the configuration.'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Visual */}
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Live Preview (3 Panels)</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <RotateCcw className={`w-4 h-4 transition-transform duration-500 ${!isPortrait ? 'rotate-90' : ''}`} />
                {orientation}
              </div>
            </div>
            
            {/* Panel Grid */}
            <div className="relative aspect-video bg-secondary/50 rounded-xl p-8 blueprint-grid overflow-hidden">
              <div 
                className={`flex items-center justify-center h-full transition-all duration-500 ${
                  isPortrait ? 'gap-2' : 'gap-3'
                }`}
              >
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="relative bg-gradient-to-br from-blue-900 via-blue-950 to-blue-900 border-2 border-gray-400 rounded transition-all duration-500 panel-shadow"
                    style={{
                      width: isPortrait ? '25%' : '30%',
                      aspectRatio: isPortrait ? `${panelWidth}/${panelHeight}` : `${panelHeight}/${panelWidth}`,
                    }}
                  >
                    {/* Panel grid lines */}
                    <div className="absolute inset-1 grid grid-cols-3 grid-rows-6 gap-px opacity-30">
                      {Array.from({ length: 18 }).map((_, j) => (
                        <div key={j} className="bg-blue-400/20 border border-blue-400/10" />
                      ))}
                    </div>
                    
                    {/* Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded" />
                  </div>
                ))}
              </div>
              
              {/* Dimension Labels */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                <div className="px-3 py-1 rounded-lg bg-primary text-primary-foreground text-xs font-mono font-semibold">
                  {configLength.toLocaleString()} mm
                </div>
              </div>
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <div className="px-3 py-1 rounded-lg bg-solar-amber text-white text-xs font-mono font-semibold">
                  {configWidth.toLocaleString()} mm
                </div>
              </div>
            </div>
            
            {/* Summary Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-secondary text-center">
                <div className="text-2xl font-bold text-primary">{columns}</div>
                <div className="text-xs text-muted-foreground">Columns</div>
              </div>
              <div className="p-4 rounded-xl bg-secondary text-center">
                <div className="text-2xl font-bold text-primary">{totalClamps}</div>
                <div className="text-xs text-muted-foreground">Clamps</div>
              </div>
              <div className="p-4 rounded-xl bg-secondary text-center">
                <div className="text-2xl font-bold text-solar-amber">{totalEndCaps}</div>
                <div className="text-xs text-muted-foreground">End Caps</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrientationSection;
