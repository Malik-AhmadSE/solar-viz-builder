import { Sun, Grid3x3, Calculator, Eye, Ruler, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-solar-roof.jpg";

const Hero = () => {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sun className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Solar Configuration Tool</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
              Design & Visualize Your{" "}
              <span className="text-primary">Solar Installation</span>{" "}
              with Precision
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Draw roof dimensions, auto-calculate optimal panel configurations, 
              and see realistic rooftop visualizations—all in one powerful tool.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-xl shadow-solar hover:shadow-elevated transition-all duration-300"
                onClick={scrollToFeatures}
              >
                <Grid3x3 className="w-5 h-5 mr-2" />
                Start Designing
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-secondary transition-all duration-300"
                onClick={scrollToCalculator}
              >
                <Calculator className="w-5 h-5 mr-2" />
                View Calculator
              </Button>
            </div>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                { icon: Ruler, label: "Draw Dimensions" },
                { icon: Calculator, label: "Auto-Calculate" },
                { icon: Eye, label: "Live Preview" },
                { icon: RotateCcw, label: "Orientation Toggle" },
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border/50 shadow-soft"
                >
                  <feature.icon className="w-4 h-4 text-solar-amber" />
                  <span className="text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="relative lg:ml-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img 
                src={heroImage}
                alt="Solar panels installed on modern rooftop"
                className="w-full h-auto object-cover aspect-video"
              />
              
              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card p-4 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">12</div>
                      <div className="text-xs text-muted-foreground">Panels</div>
                    </div>
                    <div className="w-px h-8 bg-border" />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">4.8</div>
                      <div className="text-xs text-muted-foreground">kW System</div>
                    </div>
                    <div className="w-px h-8 bg-border" />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-solar-amber">97%</div>
                      <div className="text-xs text-muted-foreground">Efficiency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-2xl animate-float" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-solar-amber/10 rounded-xl animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
