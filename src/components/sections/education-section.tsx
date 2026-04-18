import SectionShell from "./section-shell";

const education = [
  {
    institution: "Sandip Institute of Engineering & Management",
    qualification: "B.E. (Computer)",
    result: "CGPA — 7.0",
    period: "2020 – 2024",
    type: "Degree",
  },
  {
    institution: "Vainateva Vidyalaya & Jr. College of Science, Niphad",
    qualification: "HSC Exam — 12th Science",
    result: "Percentage — 68.20%",
    period: "2019 – 2020",
    type: "Higher Secondary",
  },
  {
    institution: "Niphad English School, Niphad",
    qualification: "SSC Exam — 10th",
    result: "Percentage — 87.80%",
    period: "2017 – 2018",
    type: "Secondary",
  },
];

export default function EducationSection() {
  return (
    <SectionShell
      id="education"
      eyebrow="Background"
      title="My Academic Foundation."
      description="A structured academic path that provided me with strong engineering fundamentals and a problem-solving mindset."
    >
      <div className="space-y-5">
        {education.map((edu, idx) => (
          <article
            key={edu.institution}
            className="relative flex flex-col gap-4 rounded-[1.75rem] border border-emerald-300/12 bg-[linear-gradient(180deg,rgba(8,30,21,0.55),rgba(3,15,10,0.42))] p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-6"
          >
            {/* Timeline node */}
            <div className="flex shrink-0 flex-col items-center sm:pt-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-400/10 text-xs font-semibold text-emerald-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                {String(idx + 1).padStart(2, "0")}
              </div>
              {idx < education.length - 1 && (
                <div className="mt-3 hidden h-full w-px bg-gradient-to-b from-emerald-300/20 to-transparent sm:block" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-block rounded-full border border-emerald-300/14 bg-emerald-400/[0.06] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.3em] text-emerald-200/65">
                  {edu.type}
                </span>
                <span className="text-[11px] uppercase tracking-[0.3em] text-emerald-200/40">
                  {edu.period}
                </span>
              </div>

              <h3 className="mt-3 text-lg font-semibold text-emerald-50 sm:text-xl">
                {edu.institution}
              </h3>
              <p className="mt-1 text-sm text-emerald-100/60">
                {edu.qualification}
              </p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-[1.25rem] border border-emerald-300/10 bg-black/10 px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-emerald-300/80 shadow-[0_0_10px_rgba(110,231,183,0.5)]" />
                <p className="text-sm font-medium text-emerald-50/82">
                  {edu.result}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
