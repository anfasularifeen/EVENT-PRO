import { useEventData } from '../hooks/useEventData';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import ClientFeaturesSection from '../components/home/ClientFeaturesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';

// 1. Import the new component
import CallToActionSection from '../components/home/CallToActionSection';
// 2. TechStackSection is no longer imported

function HomePage() {
  const { testimonials, activeTestimonial, setActiveTestimonial } = useEventData();

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ClientFeaturesSection />
      <TestimonialsSection
        testimonials={testimonials}
        activeTestimonial={activeTestimonial}
        setActiveTestimonial={setActiveTestimonial}
      />
      {/* 3. Replace <TechStackSection /> with the new component */}
      <CallToActionSection />
    </>
  );
}

export default HomePage;