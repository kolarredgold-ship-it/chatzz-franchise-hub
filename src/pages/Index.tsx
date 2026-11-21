import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import EnquirySection from "@/components/EnquirySection";
import Footer from "@/components/Footer";
import { PageHead } from "@/components/PageHead";
import { FAQ, FinalCTA, Gallery, InvestmentModels, Journey, StickyActions, Stories, Support, useHomepageMotion, WhyStart } from "@/components/HomeSections";

const Index = () => {
  useHomepageMotion();
  return <div className="home-page min-h-screen">
    <PageHead title="Bangarpet Chatzz – No Royalty Chaat Franchise & Training | Kolar, Karnataka" description="Start with Bangarpet Chatzz: no royalty, ₹5L kiosk, ₹15L café and chaat training in Karnataka. Get franchise details on WhatsApp." path="/" />
    <Header />
    <main>
      <HeroSection />
      <WhyStart />
      <InvestmentModels />
      <Journey />
      <Support />
      <MenuSection />
      <Gallery />
      <Stories />
      <EnquirySection />
      <FAQ />
      <FinalCTA />
    </main>
    <Footer />
    <StickyActions />
  </div>;
};

export default Index;
