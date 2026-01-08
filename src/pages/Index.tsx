import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RoofDrawingSection from "@/components/RoofDrawingSection";
import PanelStandardsSection from "@/components/PanelStandardsSection";
import ConfigurationLogicSection from "@/components/ConfigurationLogicSection";
import OrientationSection from "@/components/OrientationSection";
import CalculatorSection from "@/components/CalculatorSection";
import VisualizationSection from "@/components/VisualizationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <RoofDrawingSection />
      <PanelStandardsSection />
      <ConfigurationLogicSection />
      <OrientationSection />
      <CalculatorSection />
      <VisualizationSection />
      <Footer />
    </div>
  );
};

export default Index;
