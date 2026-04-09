import HeroSection from '../../app/public/components/HeroSection'
import HowItWorks from '../../app/public/components/HowItWorks'
import FeatureSection from '../../app/public/components/FeatureSection'
import ProgrammeRoles from '../../app/public/components/ProgrammeRoles'
import CTASection from '../../app/public/components/CTASection'

const HowItWorksPage = () => {
  return (
    <section id='how-it-works'>
      <HeroSection
        title="How TalentFlow Works."
        highlightedWord="TalentFlow"
        description="Go from learning to certification in few simple steps"
        className="text-5xl md:text-6xl font-bold leading-tight"
        ctaPrimaryText="Get Started"
        ctaSecondaryText="Watch Demo"
        imageSrc="/hero.jpg"
        onPrimaryClick={() => console.log("Get Started")}
        onSecondaryClick={() => console.log("Watch Demo")}
      />
      <HowItWorks />
      <FeatureSection />
      <ProgrammeRoles />
      <CTASection />
    </section>
  )
}

export default HowItWorksPage