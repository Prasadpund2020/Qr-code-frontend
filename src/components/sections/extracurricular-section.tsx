import SectionShell from "./section-shell";

const activities = [
  {
    org: "Computer Engineering Students' Association (CESA)",
    role: "Joint Secretary",
    period: "2022 – 2024",
    highlights: [
      "Organised technical events and enhanced student engagement across the department.",
      "Coordinated inter-college hackathons, workshops, and guest lecture series.",
      "Managed a team of 20+ members to drive association initiatives and campaigns.",
    ],
  },
];

export default function ExtracurricularSection() {
  return (
    <SectionShell
      id="extracurricular"
      eyebrow="Beyond Code"
      title="Leadership & Activities."
      description="Roles and initiatives outside the classroom that shaped my leadership, communication, and team-management skills."
    >
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:gap-6">
        {/* Main activity card */}
        <div className="space-y-5">
          {activities.map((activity) => (
            <article
              key={activity.org}
              className="relative rounded-[1.75rem] border border-emerald-300/12 bg-[linear-gradient(180deg,rgba(8,30,21,0.55),rgba(3,15,10,0.42))] p-5 sm:p-6"
            >
              <div className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-emerald-300/40 via-emerald-300/12 to-transparent" />
              <div className="relative pl-6">
                <div className="absolute left-[-2px] top-1.5 h-3 w-3 rounded-full border border-emerald-200/40 bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,0.45)]" />
                <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-200/45">
                  {activity.period}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-emerald-50">
                  {activity.role}
                </h3>
                <p className="mt-1 text-sm uppercase tracking-[0.26em] text-emerald-200/40">
                  {activity.org}
                </p>
                <div className="mt-5 space-y-3">
                  {activity.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex gap-3 rounded-2xl border border-emerald-300/10 bg-black/10 px-4 py-3"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-300/85" />
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

        {/* Soft skills sidebar */}
        <div className="space-y-5">
          <div className="rounded-[1.75rem] border border-emerald-300/12 bg-[linear-gradient(180deg,rgba(11,38,26,0.62),rgba(3,15,10,0.46))] p-5 sm:p-6">
            <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-200/45">
              Skills Gained
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Leadership",
                "Event Planning",
                "Team Coordination",
                "Public Speaking",
                "Community Building",
                "Project Management",
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

          <div className="rounded-[1.75rem] border border-emerald-300/12 bg-black/10 p-5 sm:p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/45">
              Highlight
            </p>
            <p className="mt-3 text-base leading-8 text-emerald-50/80">
              Serving as Joint Secretary of CESA taught me how to balance
              technical execution with people management — a mindset I carry
              into every project I build.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
