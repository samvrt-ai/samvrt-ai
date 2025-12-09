import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturesIntro from "../components/FeaturesIntro";
import FeatureCards from "../components/FeatureCards";
import CaseStudies from "../components/CaseStudies";
import CaseStudiesAlternating from "../components/CaseStudiesAlternating";
import StaggeredCaseGrid from "../components/StaggeredCaseGrid";
import ImageRevealGrid from "../components/ImageRevealGrid";
import TechGrid from "../components/TechGrid";
import TechEllipse from "../components/TechEllipse";
import TestimonialsPage from "../components/TestimonialsPage";
import ClientsGrid from "../components/ClientsGrid";
import Footer from "../components/Footer";
import ServicesPanel from "../components/ServicesPanel";
import ContactForm from "../components/ContactForm";
import WhySamvrtSection from "../components/WhySamvrtSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesIntro />
      <FeatureCards />     
      <StaggeredCaseGrid />
      <ImageRevealGrid />    
      <TechEllipse />
      <TestimonialsPage />
      <WhySamvrtSection />
      <ClientsGrid />
      <Footer />
    
     

      {/* below-hero sections (placeholders) */}
      
    </>
  );
}
