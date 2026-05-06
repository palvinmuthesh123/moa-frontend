import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PropertyOverview from '@/components/PropertyOverview';
import RetailSection from '@/components/RetailSection';
import LuxurySection from '@/components/LuxurySection';
import DiningSection from '@/components/DiningSection';
import EntertainmentSection from '@/components/EntertainmentSection';
import EventsSection from '@/components/EventsSection';
import VenueSection from '@/components/VenueSection';
import SponsorshipSection from '@/components/SponsorshipSection';
import LeasingSection from '@/components/LeasingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import IntroGateway from '@/components/IntroGateway';
import ScrollParallaxLayers from '@/components/ScrollParallaxLayers';

export default function Home() {
  return (
    <IntroGateway>
      <ScrollParallaxLayers />
      <main className="relative z-10 overflow-x-hidden">
        <Navigation />
        <Hero />
        <PropertyOverview />
        <RetailSection />
        <LuxurySection />
        <DiningSection />
        <EntertainmentSection />
        <EventsSection />
        <VenueSection />
        <SponsorshipSection />
        <LeasingSection />
        <ContactSection />
        <Footer />
      </main>
    </IntroGateway>
  );
}
