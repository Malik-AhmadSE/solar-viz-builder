import { useState, useMemo } from "react";
import { Calculator, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CalculatorSection = () => {
  const [availableLength, setAvailableLength] = useState(10000);
  const [availableWidth, setAvailableWidth] = useState(5000);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [panelType, setPanelType] = useState<'A' | 'B'>('A');
  
  const panelSpecs = {
    A: { width: 1134, height: 1762 },
    B: { width: 1134, height: 1756 },
  };
  
  const clampWidth = 20;
  const endCapWidth = 32;
  
  const calculation = useMemo(() => {
    const panel = panelSpecs[panelType];
    const isPortrait = orientation === 'portrait';
    
    const panelW = isPortrait ? panel.width : panel.height;
    const panelH = isPortrait ? panel.height : panel.width;
    
    // Calculate max columns that fit in available length
    // Formula: availableLength >= (columns * panelW) + ((columns + 1) * clampWidth) + (2 * endCapWidth)
    // Solve for columns: columns <= (availableLength - 2*endCapWidth - clampWidth) / (panelW + clampWidth)
    const maxCols = Math.floor(
      (availableLength - 2 * endCapWidth - clampWidth) / (panelW + clampWidth)
    );
    
    // Calculate max rows that fit in available width
    const maxRows = Math.floor(availableWidth / panelH);
    
    const columns = Math.max(0, maxCols);
    const rows = Math.max(0, maxRows);
    const totalPanels = columns * rows;
    
    const totalClamps = columns > 0 ? (columns + 1) * rows : 0;
    const totalEndCaps = columns > 0 ? 2 * rows : 0;
    
    const configLength = columns > 0 
      ? (columns * panelW) + ((columns + 1) * clampWidth) + (2 * endCapWidth)
      : 0;
    const configWidth = rows * panelH;
    
    return {
      columns,
      rows,
      totalPanels,
      totalClamps,
      totalEndCaps,
      configLength,
      configWidth,
      panelW,
      panelH,
    };
  }, [availableLength, availableWidth, orientation, panelType]);
  
  const resetCalculator = () => {
    setAvailableLength(10000);
    setAvailableWidth(5000);
    setOrientation('portrait');
    setPanelType('A');
  };

  return (
    <section id="calculator" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-solar-amber/10 border border-solar-amber/20 mb-6">
            <Calculator className="w-4 h-4 text-solar-amber" />
            <span className="text-sm font-medium text-solar-amber">Solar Calculator</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Manual Panel{" "}
            <span className="text-primary">Calculator</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Enter your available roof dimensions and get instant calculations 
            for panel count, rows, columns, and all required mounting hardware.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Panel */}
          <div className="glass-card p-8 rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Input Parameters</h3>
              <Button variant="ghost" size="sm" onClick={resetCalculator}>
                <RefreshCw className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="length">Available Length (mm)</Label>
                <Input
                  id="length"
                  type="number"
                  value={availableLength}
                  onChange={(e) => setAvailableLength(Number(e.target.value))}
                  className="font-mono"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="width">Available Width (mm)</Label>
                <Input
                  id="width"
                  type="number"
                  value={availableWidth}
                  onChange={(e) => setAvailableWidth(Number(e.target.value))}
                  className="font-mono"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Panel Standard</Label>
                <div className="grid grid-cols-2 gap-2">
                  {(['A', 'B'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setPanelType(type)}
                      className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                        panelType === type
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/30'
                      }`}
                    >
                      Panel {type}
                      <div className="text-xs text-muted-foreground font-mono mt-1">
                        {panelSpecs[type].height}×{panelSpecs[type].width}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Orientation</Label>
                <div className="grid grid-cols-2 gap-2">
                  {(['portrait', 'landscape'] as const).map((o) => (
                    <button
                      key={o}
                      onClick={() => setOrientation(o)}
                      className={`p-3 rounded-lg border-2 text-sm font-medium capitalize transition-all ${
                        orientation === o
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/30'
                      }`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Results Panel */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-lg font-semibold mb-6">Calculation Results</h3>
            
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total Panels</span>
                  <span className="text-3xl font-bold text-primary">{calculation.totalPanels}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-secondary">
                  <div className="text-sm text-muted-foreground">Columns</div>
                  <div className="text-2xl font-bold">{calculation.columns}</div>
                </div>
                <div className="p-4 rounded-xl bg-secondary">
                  <div className="text-sm text-muted-foreground">Rows</div>
                  <div className="text-2xl font-bold">{calculation.rows}</div>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-secondary space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Config Length</span>
                  <span className="font-mono font-semibold">{calculation.configLength.toLocaleString()} mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Config Width</span>
                  <span className="font-mono font-semibold">{calculation.configWidth.toLocaleString()} mm</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-solar-amber/10 border border-solar-amber/20">
                  <div className="text-sm text-solar-amber">Clamps</div>
                  <div className="text-2xl font-bold">{calculation.totalClamps}</div>
                </div>
                <div className="p-4 rounded-xl bg-solar-amber/10 border border-solar-amber/20">
                  <div className="text-sm text-solar-amber">End Caps</div>
                  <div className="text-2xl font-bold">{calculation.totalEndCaps}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Preview */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-lg font-semibold mb-6">Layout Preview</h3>
            
            <div className="relative aspect-square bg-secondary/50 rounded-xl blueprint-grid p-4 overflow-hidden">
              {calculation.totalPanels > 0 ? (
                <div 
                  className="h-full flex flex-col gap-1 justify-center items-center"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                  }}
                >
                  {Array.from({ length: Math.min(calculation.rows, 4) }).map((_, row) => (
                    <div key={row} className="flex gap-1">
                      {Array.from({ length: Math.min(calculation.columns, 8) }).map((_, col) => (
                        <div
                          key={col}
                          className="bg-gradient-to-br from-blue-900 to-blue-950 border border-gray-400 rounded-sm panel-shadow"
                          style={{
                            width: orientation === 'portrait' ? '24px' : '32px',
                            height: orientation === 'portrait' ? '32px' : '24px',
                          }}
                        />
                      ))}
                      {calculation.columns > 8 && (
                        <div className="flex items-center text-xs text-muted-foreground">+{calculation.columns - 8}</div>
                      )}
                    </div>
                  ))}
                  {calculation.rows > 4 && (
                    <div className="text-xs text-muted-foreground">+{calculation.rows - 4} rows</div>
                  )}
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-muted-foreground text-sm">
                  No panels fit in the given dimensions
                </div>
              )}
            </div>
            
            {/* Quick stats */}
            <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
              <div className="text-sm text-muted-foreground mb-2">Panel Size Used</div>
              <div className="font-mono font-semibold">
                {calculation.panelW} × {calculation.panelH} mm ({orientation})
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
