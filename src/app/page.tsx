import HeroSection from '@/components/home/HeroSection'
import EventHighlights from '@/components/home/EventHighlights'
import SpeakerPreview from '@/components/home/SpeakerPreview'
import ArtistPreview from '@/components/home/ArtistPreview'
import WorkshopPreview from '@/components/home/WorkshopPreview'
import InstagramCTA from '@/components/home/InstagramCTA'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EventHighlights />
      <SpeakerPreview />
      <ArtistPreview />
      <WorkshopPreview />
      <InstagramCTA />
    </>
  )
}
