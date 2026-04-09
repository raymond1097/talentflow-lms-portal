import HeroSection from "../../app/public/components/HeroSection";
import HowItWorks from "../../app/public/components/HowItWorks";
import FeatureSection from "../../app/public/components/FeatureSection";
import ProgrammeRoles from "../../app/public/components/ProgrammeRoles";
import CTASection from "../../app/public/components/CTASection";
import TestimonialsSection from "../../app/public/components/TestimonialSection";

const AboutPage = () => {
  return (
    <section id="how-it-works">
      <HeroSection
        title="About TalentFlow"
        description="Empowering learners to build real skills and get certified"
        className="text-5xl md:text-6xl font-bold leading-tight"
        ctaPrimaryText="Get Started"
        ctaSecondaryText="Watch Demo"
        imageSrc="/hero.jpg"
        onPrimaryClick={() => console.log("Get Started")}
        onSecondaryClick={() => console.log("Watch Demo")}
      />
      <div className="max-w-7xl mx-auto px-6 md:py-16">
        <h1 className="text-5xl mb-5">Our Mission</h1>
        <p className="text-gray-900">
          At TalentFlow, our mission is to transform the way people learn by
          making education more practical, accessible, and results-driven. We
          believe that learning should go beyond theory, empowering individuals
          to build real-world skills that can be applied immediately in their
          careers and personal growth. We are committed to bridging the gap
          between knowledge and execution by providing hands-on courses,
          collaborative learning experiences, and tools that help users track
          their progress every step of the way. Through a structured yet
          flexible learning environment, we enable learners to move at their own
          pace while staying motivated and accountable. Our goal is to create a
          platform where anyone—regardless of their background—can learn, build,
          and confidently showcase their abilities through recognized
          certifications. By combining learning, practice, and achievement in
          one seamless experience, TalentFlow aims to unlock opportunities and
          help individuals reach their full potential.
        </p>
      </div>
      <ProgrammeRoles />
      <TestimonialsSection />
      <CTASection />
    </section>
  );
};

export default AboutPage;
