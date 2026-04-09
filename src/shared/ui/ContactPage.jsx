import HeroSection from '../../app/public/components/HeroSection'
import HowItWorks from '../../app/public/components/HowItWorks'
import FeatureSection from '../../app/public/components/FeatureSection'
import ProgrammeRoles from '../../app/public/components/ProgrammeRoles'
import CTASection from '../../app/public/components/CTASection'
import ContactSection from '../../app/public/components/ContactSection'
import Newsletter from '../../app/public/components/NewsLetter'

const ContactPage = () => {
  return (
    <section id='how-it-works'>
      <HeroSection
        title="Contact Us"
        highlightedWord="Us"
        description="We’d love to hear from you"
        className="text-5xl md:text-6xl font-bold leading-tight"
        ctaPrimaryText="Get Started"
        ctaSecondaryText="Watch Demo"
        imageSrc="/hero.jpg"
        onPrimaryClick={() => console.log("Get Started")}
        onSecondaryClick={() => console.log("Watch Demo")}
      />
      <ContactSection />
      <Newsletter />
    </section>
  )
}

export default ContactPage