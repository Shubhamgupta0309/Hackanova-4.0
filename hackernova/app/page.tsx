import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import HighlightsSection from '../components/HighlightsSection'
import CampusGallery from '../components/CampusGallery'
import FaqSection from '../components/FaqSection'
import CrackEventsSection from '../components/CrackEventsSection'
import ThemesSection from '../components/ThemesSection'
import SpeakersSection from '../components/SpeakersSection'
import TimelineSection from '../components/TimelineSection'
import SponsorsSection from '../components/SponsorsSection'
import LocationSection from '../components/LocationSection'
import Footer from '../components/Footer'
import ParticleBackground from '../components/ParticleBackground'
import TsdwSection from '@/components/TsdwSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutSection />
        <HighlightsSection />
        <CrackEventsSection />
        <ThemesSection />
        <SpeakersSection />
        <TimelineSection />
        <SponsorsSection />
        <LocationSection />
        <FaqSection />
        <CampusGallery />
        <TsdwSection />
        <Footer />
      </div>
    </main>
  )
}

