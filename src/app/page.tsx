import ChooseUs from "@/components/ChooseUs";
import DirectionAware from "@/components/DirectionAware";
import HeroSection from "@/components/Herosection";
import Instructors from "@/components/Instructor";
import TestinomialCard from "@/components/TestinomialCards";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antaliased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-center">Aashish Singh</h1> */}
      <HeroSection />
      <DirectionAware/>
      {/* <FeatureCourses /> */}
      <ChooseUs />
      <TestinomialCard />
      {/* <UpcomingEvents /> */}
      <Instructors/>
      
      {/* <Footer/> */}
    </main>
  );
}
