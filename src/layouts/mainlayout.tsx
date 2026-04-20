import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import AboutSection from "@/components/sections/about-section";
import ExperienceSection from "@/components/sections/experience-section";
import SkillsSection from "@/components/sections/skills-section";
import ProjectsSection from "@/components/sections/projects-section";
import EducationSection from "@/components/sections/education-section";
import CertificationsSection from "@/components/sections/certifications-section";
import ExtracurricularSection from "@/components/sections/extracurricular-section";
import ResumeSection from "@/components/sections/resume-section";
import ContactSection from "@/components/sections/contact-section";
import { cn } from "@/lib/utils";

export default function MainLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Certifications",
    "Extracurricular",
    "Resume",
    "Contact",
  ];

  const floatingDots = [
    { left: "6%", delay: "0s", duration: "10s", size: "5px" },
    { left: "12%", delay: "1.2s", duration: "12s", size: "4px" },
    { left: "18%", delay: "2.1s", duration: "9s", size: "6px" },
    { left: "24%", delay: "0.6s", duration: "11s", size: "5px" },
    { left: "30%", delay: "2.8s", duration: "13s", size: "4px" },
    { left: "36%", delay: "1.4s", duration: "10.5s", size: "5px" },
    { left: "42%", delay: "3.2s", duration: "12.5s", size: "6px" },
    { left: "48%", delay: "0.9s", duration: "9.5s", size: "4px" },
    { left: "54%", delay: "2.4s", duration: "11.5s", size: "5px" },
    { left: "60%", delay: "1.7s", duration: "10s", size: "4px" },
    { left: "66%", delay: "3.5s", duration: "13.5s", size: "6px" },
    { left: "72%", delay: "0.4s", duration: "9.8s", size: "5px" },
    { left: "78%", delay: "2.6s", duration: "12.2s", size: "4px" },
    { left: "84%", delay: "1.1s", duration: "10.8s", size: "5px" },
    { left: "90%", delay: "3.1s", duration: "11.8s", size: "6px" },
    { left: "96%", delay: "1.9s", duration: "9.2s", size: "4px" },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#03110b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_55%),radial-gradient(circle_at_bottom,rgba(22,163,74,0.07),transparent_60%),linear-gradient(to_bottom,rgba(4,20,13,0.95),rgba(3,17,11,0.98))]" />

      {/* Grid */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,rgba(34,197,94,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.08)_1px,transparent_1px)]",
        )}
      />
      {/* Grid dots */}
      <div
        className="absolute inset-0 [background-size:40px_40px] [background-image:radial-gradient(circle,rgba(34,197,94,0.28)_1.2px,transparent_1.4px)]"
        style={{ backgroundPosition: "20px 20px" }}
      />

      {/* Floating accent dots */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingDots.map((dot, index) => (
          <span
            key={`${dot.left}-${index}`}
            className="absolute bottom-[-8%] rounded-full bg-[#22c55e]/80 shadow-[0_0_18px_rgba(34,197,94,0.45)]"
            style={{
              left: dot.left,
              width: dot.size,
              height: dot.size,
              animation: `riseDot ${dot.duration} linear ${dot.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* Green radial glow */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center 
        bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.06),transparent_60%)]"
      />

      {/* Fade mask */}
      <div
        className="pointer-events-none absolute inset-0 bg-[#03110b] 
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      />

      <div className="fixed left-4 top-4 z-20 flex justify-start sm:left-6 sm:top-6 md:inset-x-0 md:justify-center md:px-8 lg:px-10">
        <nav className="flex w-fit max-w-[calc(100vw-2rem)] flex-col gap-4 rounded-b-[2rem] rounded-t-none border border-emerald-400/15 bg-[linear-gradient(135deg,rgba(7,25,18,0.9),rgba(4,15,10,0.72))] px-4 py-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:max-w-[22rem] md:w-full md:max-w-6xl md:rounded-[2rem] md:px-6">
          <div className="flex items-center justify-between gap-4 md:hidden">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-400/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="h-5 w-5 rounded-full bg-emerald-300 shadow-[0_0_24px_rgba(110,231,183,0.6)]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.45em] text-emerald-200/55">
                  Portfolio Navigation
                </p>
                <h1 className="text-lg font-semibold tracking-[0.16em] text-emerald-50">
                  Prasad
                </h1>
              </div>
            </div>

            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/12 bg-white/[0.03] text-emerald-50 transition-colors duration-300 hover:border-emerald-300/30 hover:bg-emerald-300/[0.08]"
            >
              <span className="relative h-4 w-6">
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: 45, y: 6 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="absolute left-0 top-0 h-[2px] w-6 rounded-full bg-current"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="absolute left-0 top-[7px] h-[2px] w-6 rounded-full bg-current"
                />
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: -45, y: -6 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="absolute left-0 top-[14px] h-[2px] w-6 rounded-full bg-current"
                />
              </span>
            </button>
          </div>

          <AnimatePresence initial={false}>
            {isMobileMenuOpen ? (
              <motion.div
                key="mobile-menu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
                className="overflow-hidden md:hidden"
              >
                <div className="flex max-w-full flex-col items-start gap-2 border-t border-emerald-400/10 pt-4">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "group relative w-full overflow-hidden rounded-full border border-emerald-300/12 px-4 py-2.5 text-left text-sm font-medium text-emerald-100/78 transition-all duration-300",
                        "bg-white/[0.03] hover:border-emerald-300/30 hover:bg-emerald-300/[0.08] hover:text-emerald-50",
                      )}
                    >
                      <span className="relative z-10">{item}</span>
                      <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-emerald-300/80 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                    </a>
                  ))}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="hidden flex-col gap-4 md:flex md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-400/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="h-5 w-5 rounded-full bg-emerald-300 shadow-[0_0_24px_rgba(110,231,183,0.6)]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.45em] text-emerald-200/55">
                  Portfolio Navigation
                </p>
                <h1 className="text-lg font-semibold tracking-[0.16em] text-emerald-50">
                  Prasad
                </h1>
              </div>
            </div>

            <div className="flex max-w-full flex-row flex-nowrap items-center justify-end gap-1 overflow-x-auto lg:gap-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={cn(
                    "group relative overflow-hidden whitespace-nowrap rounded-full border border-emerald-300/12 px-3 py-2 text-center text-[13px] font-medium text-emerald-100/78 transition-all duration-300 lg:px-4 lg:py-2.5 lg:text-sm",
                    "bg-white/[0.03] hover:border-emerald-300/30 hover:bg-emerald-300/[0.08] hover:text-emerald-50",
                  )}
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-emerald-300/80 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-4 pb-16 pt-56 sm:px-6 sm:pt-60 md:px-8 lg:px-10 lg:pt-52">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <ExtracurricularSection />
        <ResumeSection />
        <ContactSection />
      </main>

      <style>{`
        @keyframes riseDot {
          0% {
            transform: translate3d(0, 0, 0) scale(0.85);
            opacity: 0;
          }
          10% {
            opacity: 0.45;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate3d(0, -58rem, 0) scale(1.1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
