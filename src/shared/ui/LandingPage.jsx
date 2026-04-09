import HeroSection from "../../app/public/components/HeroSection";
import CourseCatalog from "../../app/public/components/CourseCatalog";
import FeatureSection from "../../app/public/components/FeatureSection";
import HowItWorks from "../../app/public/components/HowItWorks";
import ProgrammeRoles from "../../app/public/components/ProgrammeRoles";
import TestimonialsSection from "../../app/public/components/TestimonialSection";
import CTASection from "../../app/public/components/CTASection";

const LandingPage = () => {
  return (
    <>
      <HeroSection
        title="Learn. Build. Get Certified."
        highlightedWord="Build."
        description="TalentFlow is your all-in-one  learning platform. Access  courses, track progress, collaborate with teammates, and earn  certificates — all in one place."
        className="text-5xl md:text-7xl font-bold leading-tight"
        ctaPrimaryText="Get Started"
        ctaSecondaryText="Watch Demo"
        imageSrc="/hero.jpg"
        onPrimaryClick={() => console.log("Get Started")}
        onSecondaryClick={() => console.log("Watch Demo")}
      />
      <CourseCatalog />
      <FeatureSection />
      <HowItWorks />
      <ProgrammeRoles />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default LandingPage;
