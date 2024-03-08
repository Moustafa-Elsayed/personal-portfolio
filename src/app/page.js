import AchievementsSection from "@/components/AchievementsSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import AboutMe from "@/components/aboutme/AboutMe";
import NavBar from "@/components/navBar/NavBar";
import ProjectSection from "@/components/projects/ProjectSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col dark:bg-black bg-white ">
      <NavBar />
      <div className="container mx-auto py-4 px-10 mt-24">
        <HeroSection />
        <AchievementsSection />
        <AboutMe />
        <Skills />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
