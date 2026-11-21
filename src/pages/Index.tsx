import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OutletShowcase from "@/components/OutletShowcase";
import DemandSection from "@/components/DemandSection";
import LocationStrategy from "@/components/LocationStrategy";
import CompetitiveEdge from "@/components/CompetitiveEdge";
import ConsumerInsights from "@/components/ConsumerInsights";
import MenuSection from "@/components/MenuSection";
import BusinessModels from "@/components/BusinessModels";
import FranchiseAdvisor from "@/components/FranchiseAdvisor";
import BrandPresence from "@/components/BrandPresence";
import PartnerStories from "@/components/PartnerStories";
import FranchiseProcess from "@/components/FranchiseProcess";
import PaymentPolicy from "@/components/PaymentPolicy";
import SecretMasala from "@/components/SecretMasala";
import WhyChoose from "@/components/WhyChoose";
import ROISection from "@/components/ROISection";
import EnquirySection from "@/components/EnquirySection";
import Footer from "@/components/Footer";
import { PageHead } from "@/components/PageHead";

const Index = () => (
  <div className="min-h-screen">
    <PageHead title="Bangarpet Chatzz – Franchise & Training" description="Explore Bangarpet Chatzz training, franchise branding, ₹5 lakh kiosk and ₹15 lakh café total investment options. Enquire on WhatsApp." path="/" />
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <OutletShowcase />
      <BrandPresence />
      <DemandSection />
      <LocationStrategy />
      <CompetitiveEdge />
      <ConsumerInsights />
      <MenuSection />
      <BusinessModels />
      <FranchiseAdvisor />
      <FranchiseProcess />
      <PaymentPolicy />
      <SecretMasala />
      <WhyChoose />
      <ROISection />
      <PartnerStories />
      <EnquirySection />
    </main>
    <Footer />
  </div>
);

export default Index;
