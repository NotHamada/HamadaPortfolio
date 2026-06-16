import { Reveal } from "../reveal";
import { AiOutlineDotNet } from "react-icons/ai";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="hero-grid overflow-hidden border-b border-[#171717] bg-[#0A0A0A]"
    >
      <div className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#A78BFA]">
              Fullstack Developer | Maringá - PR
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.03] text-[#FAFAFA] md:text-7xl">
              Desenvolvo sistemas web corporativos com foco em resultado.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#A3A3A3] md:text-xl">
              Sou Matheus Hamada, desenvolvedor fullstack com experiência em
              C#, .NET, AngularJS, React, APIs REST e MySQL.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#experiencia"
                className="rounded-full bg-[#8B5CF6] px-7 py-3 text-center text-sm font-bold text-[#FAFAFA] shadow-[0_18px_55px_rgba(139,92,246,0.28)] transition hover:bg-[#A78BFA]"
              >
                Ver experiência
              </a>
              <a
                href="#sobre"
                className="rounded-full border border-[#A78BFA]/40 px-7 py-3 text-center text-sm font-bold text-[#FAFAFA] transition hover:border-[#A78BFA] hover:bg-[#171717]"
              >
                Sobre mim
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal direction="scale" delay={180}>
          <div className="relative mx-auto aspect-square w-full max-w-[460px]">
            <div className="absolute inset-8 rounded-full border border-[#A78BFA]/20 bg-[#171717]/70 shadow-2xl shadow-[#8B5CF6]/10" />
            <div className="orbital-ring absolute inset-0 rounded-full border border-dashed border-[#8B5CF6]/35" />
            <div className="orbital-ring absolute inset-12 rounded-full border border-[#A78BFA]/25" />
            <div className="orbital-ring absolute inset-24 rounded-full border border-dashed border-[#FAFAFA]/25" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid h-48 w-48 place-items-center rounded-[32px] border border-[#A78BFA]/35 bg-[#0A0A0A] shadow-[0_25px_80px_rgba(167,139,250,0.22)]">
                <span className="text-6xl font-black text-[#FAFAFA]">
                  <AiOutlineDotNet/>
                </span>
              </div>
            </div>
            <div className="absolute left-4 top-16 rounded-2xl border border-[#A78BFA]/20 bg-[#171717] px-4 py-3 text-sm font-semibold text-[#FAFAFA] shadow-xl">
              C# .NET
            </div>
            <div className="absolute bottom-14 right-0 rounded-2xl border border-[#A78BFA]/20 bg-[#171717] px-4 py-3 text-sm font-semibold text-[#FAFAFA] shadow-xl">
              AngularJS
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
