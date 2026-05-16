import SectionShell from "./section-shell";

const projects = [
  {
    name: "Chairman Society Management",
    stack: ["React.JS", "Node.JS", "MongoDB", "Express.JS"],
    description:
      "Developed a web-based platform enabling a chairman to manage multiple societies, including member records, announcements, billing, and real-time updates.",
    highlights: [
      "Multi-society management with member records and announcements.",
      "Real-time billing updates and automated notifications.",
      "Role-based access control for chairman and members.",
    ],
  },
  {
    name: "Dynamic Invoice Generator",
    stack: ["Next.JS", "Node.JS", "MongoDB", "Express.JS"],
    image: "/assets/invoice.png",
    websiteUrl:
      "https://invoice-kp69s8pdm-prasadpund2020s-projects.vercel.app/",
    websiteLabel: "Visit Website",
    description:
      "Built a dynamic invoice generation system with customisable templates and automated billing features.",
    highlights: [
      "Customisable invoice templates with live preview.",
      "Automated billing and PDF export functionality.",
      "Persistent invoice history with search and filter.",
    ],
  },
  {
    name: "QR Code Frontend",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    description:
      "A sleek QR-code generation and sharing platform with a modern UI, supporting custom branding and instant download.",
    highlights: [
      "Custom branding options: color, logo, and corner style.",
      "Instant QR generation with high-resolution PNG download.",
      "Responsive design optimised for all screen sizes.",
    ],
  },
];

export default function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Work"
      title="Projects I've Built."
      description="A selection of real-world projects that demonstrate my ability to build full-stack products from concept to deployment."
    >
      <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <article
            key={project.name}
            className="group relative flex flex-col gap-5 rounded-[1.75rem] border border-emerald-300/12 bg-[linear-gradient(180deg,rgba(8,30,21,0.55),rgba(3,15,10,0.42))] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-emerald-300/30 hover:bg-[linear-gradient(180deg,rgba(10,38,26,0.65),rgba(4,18,12,0.5))] hover:shadow-[0_15px_40px_-15px_rgba(34,197,94,0.15)]"
          >
            {project.image ? (
              <div className="relative overflow-hidden rounded-[1.25rem] border border-emerald-300/12 bg-black/20">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03110b]/35 via-transparent to-transparent" />
              </div>
            ) : null}

            {/* Index badge */}
            <div className="flex items-start justify-between">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-400/10 text-xs font-semibold text-emerald-300 transition-colors duration-300 group-hover:border-emerald-300/40 group-hover:bg-emerald-400/20">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-wrap justify-end gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-emerald-300/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] text-emerald-100/70 transition-colors duration-300 group-hover:border-emerald-300/20 group-hover:bg-white/[0.05]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Title & description */}
            <div>
              <h3 className="text-xl font-semibold text-emerald-50 transition-colors duration-300 group-hover:text-emerald-300">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-7 text-emerald-50/70 group-hover:text-emerald-50/85 transition-colors duration-300">
                {project.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-auto space-y-2">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex gap-3 rounded-2xl border border-emerald-300/10 bg-black/10 px-4 py-3 transition-colors duration-300 group-hover:border-emerald-300/20 group-hover:bg-black/20"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300/80 transition-transform duration-300 group-hover:scale-125" />
                  <p className="text-xs leading-6 text-emerald-100/75 group-hover:text-emerald-100/90 transition-colors duration-300">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            {project.websiteUrl ? (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.websiteLabel} for ${project.name}`}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-100 transition-colors duration-300 hover:border-emerald-300/45 hover:bg-emerald-400/20 hover:text-emerald-50"
              >
                {project.websiteLabel}
                <span aria-hidden="true">-&gt;</span>
              </a>
            ) : null}

            {/* Subtle bottom glow line */}
            <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-300/18 to-transparent transition-opacity duration-300 group-hover:opacity-100 opacity-60" />

            {/* Top glow pulse on hover */}
            <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[1px] w-1/3 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
