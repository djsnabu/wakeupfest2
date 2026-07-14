import HeroSection from '@/components/home/HeroSection'
import PartnerLogoMarquee from '@/components/home/PartnerLogoMarquee'
import SpeakerPreview from '@/components/home/SpeakerPreview'
import ArtistPreview from '@/components/home/ArtistPreview'
import WorkshopPreview from '@/components/home/WorkshopPreview'
import PartnerPreview from '@/components/home/PartnerPreview'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnerLogoMarquee />
      <SpeakerPreview />
      <ArtistPreview />
      <WorkshopPreview />
      <PartnerPreview />
    </>
  )
}
