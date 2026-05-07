import { Hero } from '@/components/sections/Hero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { StoryBlock } from '@/components/sections/StoryBlock';
import { VehiclesFeatured } from '@/components/sections/VehiclesFeatured';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <StoryBlock />
      <VehiclesFeatured />
      <ContactCTA />
    </>
  );
}
