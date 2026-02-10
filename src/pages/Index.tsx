import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import BusinessModels from "@/components/BusinessModels";
import WhyChoose from "@/components/WhyChoose";
import Expectations from "@/components/Expectations";
import EnquirySection from "@/components/EnquirySection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <BusinessModels />
      <WhyChoose />
      <Expectations />
      <EnquirySection />
    </main>
    <Footer />
  </div>
);

export default Index;
