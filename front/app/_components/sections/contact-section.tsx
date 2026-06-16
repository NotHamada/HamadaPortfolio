import {Reveal} from "../reveal";
import {FaLinkedin, FaGithub} from "react-icons/fa6"

export function ContactSection() {
    return (
        <section id="contato" className="bg-[#0A0A0A] py-24">
            <div className="section-shell">
                <Reveal direction="scale">
                    <div
                        className="mx-auto max-w-4xl rounded-lg border border-[#A78BFA]/25 bg-[#171717] p-8 text-center shadow-[0_24px_80px_rgba(10,10,10,0.35)] md:p-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#A78BFA]">
                            Contato
                        </p>
                        <h2 className="mt-4 text-3xl font-black text-[#FAFAFA] md:text-5xl">
                            Vamos construir algo com impacto?
                        </h2>
                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#A3A3A3]">
                            Estou aberto a oportunidades e conversas sobre desenvolvimento
                            fullstack, sistemas web corporativos e integrações.
                        </p>
                        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                            <a
                                href="mailto:matheushamada@live.com"
                                className="rounded-full bg-[#8B5CF6] px-7 py-3 text-sm font-bold text-[#FAFAFA] transition hover:bg-[#A78BFA]"
                            >
                                Enviar email
                            </a>
                            <a
                                href="https://www.linkedin.com/in/matheushamada/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 rounded-full border border-[#A78BFA]/40 px-7 py-3 text-sm font-bold text-[#FAFAFA] transition hover:border-[#A78BFA] hover:bg-[#171717]"
                            >
                                <FaLinkedin/> LinkedIn
                            </a>
                            <a
                                href="https://github.com/NotHamada"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 rounded-full border border-[#A78BFA]/40 px-7 py-3 text-sm font-bold text-[#FAFAFA] transition hover:border-[#A78BFA] hover:bg-[#171717]"
                            >
                              <FaGithub/> GitHub
                            </a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
