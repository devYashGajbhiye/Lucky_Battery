// import { Helmet } from "react-helmet-async";
import HeroSection from "../components/Hero/HeroSection";
import HeroContent from "../components/Hero/HeroContent";
import HeroActions from "../components/Hero/HeroActions";
import SectionTitle from "../components/common/SectionTitle";
import CTA from "../components/common/CTA";
import HeroBanner from "../components/Hero/HeroBanner";
import CategorySection from "../components/Category/CategorySection";
import ServicesSection from "../components/Services/ServicesSection";
import WhyChooseUs from "../components/WhyUs/WhyChooseUs";
import CTABanner from "../components/CTA/CTABanner";
import Testimonials from "../components/Testimonials/Testimonial";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <CategorySection />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  );
};

export default Home;
