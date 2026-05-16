import SectionShell from "./section-shell";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const skillGroups = [
  {
    title: "Frontend",
    description:
      "Building responsive interfaces with a strong focus on clarity, performance, and polished interactions.",
    skills: ["React.JS", "Next.JS", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend & DB",
    description:
      "Designing APIs and application logic that stay maintainable, dependable, and easy to extend.",
    skills: ["Node.JS", "ExpressJS", "MongoDB", "Python", "Java"],
  },
  {
    title: "Tools & Testing",
    description:
      "Using practical tools and workflows that keep development smooth from local builds to deployment.",
    skills: ["Git", "GitHub", "Cypress", "Postman", "VS Code", "IntelliJ IDEA"],
  },
];

export default function SkillsSection() {
  const barsRef = useRef<HTMLDivElement>(null);
  // `once: true` + `amount: 0.5` fires ONLY when the element is 50% in the real viewport
  const barsInView = useInView(barsRef, { amount: 0.5 });

  const bars = [
    { label: "UI Development", value: 92 },
    { label: "API Integration", value: 88 },
    { label: "Backend Logic",   value: 84 },
    { label: "Problem Solving", value: 90 },
  ];

  return (
    <SectionShell
      id="skills"
      eyebrow="Capabilities"
      title="Skills That Help Me Build End-to-End."
      description="I work across the stack and focus on tools that help me ship clean interfaces, reliable logic, and production-ready experiences."
    >
      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
        <div className="space-y-5">
          <div className="rounded-[1.75rem] border border-emerald-300/12 bg-[linear-gradient(180deg,rgba(8,30,21,0.55),rgba(3,15,10,0.42))] p-5 sm:p-6 transition-colors duration-300 hover:border-emerald-300/20">
            <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-200/45">
              Core Stack
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {[
                "React.JS",
                "Next.JS",
                "Node.JS",
                "ExpressJS",
                "MongoDB",
                "Python",
                "Java",
                "Cypress",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-emerald-300/14 bg-emerald-400/[0.06] px-4 py-2 text-sm font-medium text-emerald-50/88 transition-colors duration-300 hover:border-emerald-300/30 hover:bg-emerald-400/10 hover:text-emerald-50 cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="group relative rounded-[1.5rem] border border-emerald-300/12 bg-black/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-emerald-900/10 hover:shadow-[0_10px_30px_-10px_rgba(34,197,94,0.12)]"
              >
                <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/0 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:via-emerald-400/40" />
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/45 transition-colors duration-300 group-hover:text-emerald-200/60">
                  {group.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-50/72 group-hover:text-emerald-50/90 transition-colors duration-300">
                  {group.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-emerald-300/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium tracking-[0.12em] text-emerald-100/78 transition-colors duration-300 group-hover:border-emerald-300/20 group-hover:bg-white/[0.06] group-hover:text-emerald-50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="group rounded-[1.75rem] border border-emerald-300/12 bg-[linear-gradient(180deg,rgba(11,38,26,0.62),rgba(3,15,10,0.46))] p-5 sm:p-6 transition-colors duration-300 hover:border-emerald-300/20">
          <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-200/45">
            Working Style
          </p>

          {/* Ref is placed on this container — useInView watches it precisely */}
          <div ref={barsRef} className="mt-5 space-y-4">
            {bars.map((item, idx) => (
              <div key={item.label} className="space-y-2">
                <div className="flex items-center justify-between text-sm text-emerald-50/82">
                  <span>{item.label}</span>
                  <span className="text-emerald-200/58 transition-colors duration-300 group-hover:text-emerald-200/80">
                    {item.value}%
                  </span>
                </div>
                <div className="h-2 rounded-full border border-emerald-900/40 bg-black/20 overflow-hidden">
                  <motion.div
                    animate={{ width: barsInView ? `${item.value}%` : "0%" }}
                    transition={{ duration: 1, delay: idx * 0.12, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.4)]"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-emerald-300/10 bg-black/10 p-5 transition-colors duration-300 hover:border-emerald-300/20 hover:bg-black/20 cursor-default">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/45">
              Focus
            </p>
            <p className="mt-3 text-base leading-8 text-emerald-50/80">
              I care about code that stays readable, components that scale
              cleanly, and products that feel dependable when real users start
              relying on them.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
