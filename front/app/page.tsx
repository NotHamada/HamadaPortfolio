import { AboutSection } from "./_components/sections/about-section";
import { ContactSection } from "./_components/sections/contact-section";
import { ExperienceSection } from "./_components/sections/experience-section";
import { HeroSection } from "./_components/sections/hero-section";
import { PersonalProjectsSection } from "./_components/sections/personal-projects-section";
import { ProjectsSection } from "./_components/sections/projects-section";
import { SkillsSection } from "./_components/sections/skills-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <PersonalProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
