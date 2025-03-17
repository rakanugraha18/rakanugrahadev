import HomeSection from "@/components/sections/home";
import AboutSection from "@/components/sections/about";
import LoadingScreen from "@/components/loadingScreen";
import ProjectsSection from "@/components/sections/projects";

export default function Home() {
  return (
    <div>
      <LoadingScreen />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}
