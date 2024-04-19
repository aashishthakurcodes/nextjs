import ChooseUs from "@/components/ChooseUs";
import FeatureCourses from "@/components/FeatureCourses";
import HeroSection from "@/components/Herosection";
import TestinomialCard from "@/components/TestinomialCards";
import UpcomingEvents from "@/components/upcomingEvents";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antaliased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-center">Aashish Singh</h1> */}
      <HeroSection />
      <FeatureCourses />
      <ChooseUs />
      <TestinomialCard />
      <UpcomingEvents />
    </main>
  );
}
