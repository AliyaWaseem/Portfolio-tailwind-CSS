import AboutSection from "./components/AboutSection/page";
import ContactSection from "./components/Contact/page";
import HeroSection from "./components/hero/page";
import ProjectSection from "./components/ProjectSection/page";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] py-4 w-full mx-auto overflow-hidden">
    <div className="md:px-12 px-4 mt-24 py-4 lg:mt-10">
    <HeroSection />
    <AboutSection />
    <ProjectSection />
    <ContactSection />
    </div>
    </main>
  );
}
