import { notFound } from "next/navigation";
import { AboutSection } from "../_components/sections/about-section";
import { AchievementsSection } from "../_components/sections/achievements-section";
import { ContactSection } from "../_components/sections/contact-section";
import { ExperienceSection } from "../_components/sections/experience-section";
import { HeroSection } from "../_components/sections/hero-section";
import { PersonalProjectsSection } from "../_components/sections/personal-projects-section";
import { ProjectsSection } from "../_components/sections/projects-section";
import { SkillsSection } from "../_components/sections/skills-section";
import { hasLocale } from "../_i18n/config";
import { getDictionary } from "../_i18n/get-dictionary";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return (
    <>
      <HeroSection dict={dict.hero} />
      <AboutSection dict={dict.about} />
      <SkillsSection dict={dict.stack} />
      <ExperienceSection dict={dict.experience} />
      <ProjectsSection dict={dict.projects} />
      <PersonalProjectsSection dict={dict.personalProjects} />
      <AchievementsSection dict={dict.achievements} />
      <ContactSection dict={dict.contact} />
    </>
  );
}
