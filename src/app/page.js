import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black ">
      <NavBar />
      <div className="container mx-auto py-4 px-10 mt-24">
        <HeroSection />
      </div>
    </main>
  );
}
