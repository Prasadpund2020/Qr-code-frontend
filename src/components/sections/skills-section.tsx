import SectionShell from "./section-shell";

const skillGroups = [
  {
    title: "Frontend",
    description:
      "Building responsive interfaces with a strong focus on clarity, performance, and polished interactions.",
    skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5"],
  },
  {
    title: "Backend",
    description:
      "Designing APIs and application logic that stay maintainable, dependable, and easy to extend.",
    skills: ["Node.js", "Express", "REST APIs", "MongoDB", "SQL"],
  },
  {
    title: "Tools",
    description:
      "Using practical tools and workflows that keep development smooth from local builds to deployment.",
    skills: ["Git", "GitHub", "Vite", "Postman", "Figma"],
  },
];

export default function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Capabilities"
      title="Skills That Help Me Build End-to-End."
      description="I work across the stack and focus on tools that help me ship clean interfaces, reliable logic, and production-ready experiences."
    >
      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
        <div className="space-y-5">
          <div className="rounded-[1.75rem] border border-emerald-300/12 bg-[linear-gradient(180deg,rgba(8,30,21,0.55),rgba(3,15,10,0.42))] p-5 sm:p-6">
            <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-200/45">
              Core Stack
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind CSS",
                "Git",
                "REST APIs",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-emerald-300/14 bg-emerald-400/[0.06] px-4 py-2 text-sm font-medium text-emerald-50/88"
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
                className="rounded-[1.5rem] border border-emerald-300/12 bg-black/10 p-5"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/45">
                  {group.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-50/72">
                  {group.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-emerald-300/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium tracking-[0.12em] text-emerald-100/78"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-emerald-300/12 bg-[linear-gradient(180deg,rgba(11,38,26,0.62),rgba(3,15,10,0.46))] p-5 sm:p-6">
          <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-200/45">
            Working Style
          </p>
          <div className="mt-5 space-y-4">
            {[
              {
                label: "UI Development",
                value: "92%",
                width: "w-[92%]",
              },
              {
                label: "API Integration",
                value: "88%",
                width: "w-[88%]",
              },
              {
                label: "Backend Logic",
                value: "84%",
                width: "w-[84%]",
              },
              {
                label: "Problem Solving",
                value: "90%",
                width: "w-[90%]",
              },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex items-center justify-between text-sm text-emerald-50/82">
                  <span>{item.label}</span>
                  <span className="text-emerald-200/58">{item.value}</span>
                </div>
                <div className="h-2 rounded-full bg-white/[0.05]">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-200 shadow-[0_0_20px_rgba(52,211,153,0.28)] ${item.width}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-emerald-300/10 bg-black/10 p-5">
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
