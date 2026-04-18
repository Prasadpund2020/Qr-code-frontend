import SectionShell from "./section-shell";

const certifications = [
  {
    title: "ReactJS",
    issuer: "Udemy",
    category: "Frontend",
    color: "emerald",
  },
  {
    title: "Node.js",
    issuer: "Udemy",
    category: "Backend",
    color: "emerald",
  },
  {
    title: "MongoDB Basics",
    issuer: "MongoDB University",
    category: "Database",
    color: "emerald",
  },
  {
    title: "Node.js with Express & MongoDB",
    issuer: "Udemy",
    category: "Full Stack",
    color: "emerald",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    category: "Cloud",
    color: "emerald",
  },
];

export default function CertificationsSection() {
  return (
    <SectionShell
      id="certifications"
      eyebrow="Credentials"
      title="Certifications & Learning."
      description="Verified credentials across frontend, backend, database, and cloud technologies that reinforce my practical skill set."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, idx) => (
          <article
            key={cert.title}
            className="group relative flex flex-col gap-4 overflow-hidden rounded-[1.75rem] border border-emerald-300/12 bg-[linear-gradient(180deg,rgba(8,30,21,0.55),rgba(3,15,10,0.42))] p-5 transition-colors duration-300 hover:border-emerald-300/24 hover:bg-[linear-gradient(180deg,rgba(10,38,26,0.72),rgba(4,15,10,0.55))]"
          >
            {/* Card number */}
            <div className="flex items-start justify-between">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-400/10 text-xs font-semibold text-emerald-300">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="rounded-full border border-emerald-300/14 bg-emerald-400/[0.06] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-emerald-200/65">
                {cert.category}
              </span>
            </div>

            {/* Title */}
            <div className="flex-1">
              <h3 className="text-base font-semibold leading-7 text-emerald-50">
                {cert.title}
              </h3>
              <div className="mt-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/80" />
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-200/50">
                  {cert.issuer}
                </p>
              </div>
            </div>

            {/* Hover glow accent */}
            <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
          </article>
        ))}

        {/* Summary stat card */}
        <article className="flex flex-col justify-between gap-4 rounded-[1.75rem] border border-emerald-300/12 bg-[linear-gradient(180deg,rgba(11,38,26,0.62),rgba(3,15,10,0.46))] p-5">
          <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-200/45">
            At a Glance
          </p>
          <div className="space-y-3">
            {[
              { label: "Total Certified", value: "5+" },
              { label: "Platforms", value: "AWS · Udemy · MongoDB" },
              { label: "Focus Areas", value: "MERN · Cloud" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-2xl border border-emerald-300/10 bg-black/10 px-4 py-3"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-emerald-200/45">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-emerald-50">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </SectionShell>
  );
}
