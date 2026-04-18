import SectionShell from "./section-shell";

const experiences = [
  {
    period: "6 Months · Current",
    role: "Software Developer Intern (Full Stack)",
    company: "AI Alpha Tech",
    summary:
      "Collaborating with team members on full-stack development projects, contributing to both frontend and backend development tasks.",
    highlights: [
      "Building responsive UIs and integrating REST APIs using React and Node.js.",
      "Contributing to backend features with Express.js and MongoDB.",
      "Collaborating in an Agile team environment on production-level features.",
    ],
  },
  {
    period: "2 Months",
    role: "Frontend Developer Intern",
    company: "Startup 0 KM",
    summary:
      "Developed and maintained responsive user interfaces, ensuring seamless user experience across various devices and browsers.",
    highlights: [
      "Built pixel-perfect responsive layouts from Figma designs.",
      "Ensured cross-browser and cross-device UI consistency.",
      "Optimised component re-renders and improved page load performance.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Journey"
      title="Experience Built Through Real Projects."
      description="My experience comes from building, refining, and iterating on practical products that improved both my technical depth and design judgment."
    >
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
        <div className="space-y-4">
          {experiences.map((experience) => (
            <article
              key={`${experience.period}-${experience.role}`}
              className="relative rounded-[1.75rem] border border-emerald-300/12 bg-[linear-gradient(180deg,rgba(8,30,21,0.55),rgba(3,15,10,0.42))] p-5 sm:p-6"
            >
              <div className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-emerald-300/40 via-emerald-300/12 to-transparent" />
              <div className="relative pl-6">
                <div className="absolute left-[-2px] top-1.5 h-3 w-3 rounded-full border border-emerald-200/40 bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,0.45)]" />
                <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-200/45">
                  {experience.period}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-emerald-50">
                  {experience.role}
                </h3>
                <p className="mt-1 text-sm uppercase tracking-[0.26em] text-emerald-200/40">
                  {experience.company}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-emerald-50/74">
                  {experience.summary}
                </p>
                <div className="mt-5 space-y-3">
                  {experience.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex gap-3 rounded-2xl border border-emerald-300/10 bg-black/10 px-4 py-3"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300/85" />
                      <p className="text-sm leading-7 text-emerald-100/78">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="space-y-5">
          <div className="rounded-[1.75rem] border border-emerald-300/12 bg-[linear-gradient(180deg,rgba(11,38,26,0.62),rgba(3,15,10,0.46))] p-5 sm:p-6">
            <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-200/45">
              Snapshot
            </p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              {[
                { label: "Internships", value: "2" },
                { label: "Core Stack", value: "MERN" },
                { label: "Experience", value: "8mo+" },
                { label: "Mode", value: "Active" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.25rem] border border-emerald-300/10 bg-black/10 p-4"
                >
                  <p className="text-2xl font-semibold text-emerald-50">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-emerald-200/42">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-emerald-300/12 bg-black/10 p-5 sm:p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/45">
              What I Bring
            </p>
            <div className="mt-4 space-y-3">
              {[
                "Attention to clean structure and reusable components.",
                "A practical approach to turning ideas into working interfaces.",
                "Consistent learning through project execution and iteration.",
                "Strong interest in building products that feel refined and reliable.",
              ].map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-emerald-300/10 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-emerald-100/78"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
