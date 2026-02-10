import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DemandSection from "@/components/DemandSection";
import LocationStrategy from "@/components/LocationStrategy";
import CompetitiveEdge from "@/components/CompetitiveEdge";
import ConsumerInsights from "@/components/ConsumerInsights";
import MenuSection from "@/components/MenuSection";
import BusinessModels from "@/components/BusinessModels";
import WhyChoose from "@/components/WhyChoose";
import ROISection from "@/components/ROISection";
import EnquirySection from "@/components/EnquirySection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <DemandSection />
      <LocationStrategy />
      <CompetitiveEdge />
      <ConsumerInsights />
      <MenuSection />
      <BusinessModels />
      <WhyChoose />
      <ROISection />
      <EnquirySection />
    </main>
    <Footer />
  </div>
);

export default Index;
