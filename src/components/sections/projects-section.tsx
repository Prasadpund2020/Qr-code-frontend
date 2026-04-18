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
            className="relative flex flex-col gap-5 rounded-[1.75rem] border border-emerald-300/12 bg-[linear-gradient(180deg,rgba(8,30,21,0.55),rgba(3,15,10,0.42))] p-5 sm:p-6"
          >
            {/* Index badge */}
            <div className="flex items-start justify-between">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-400/10 text-xs font-semibold text-emerald-300">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-wrap justify-end gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-emerald-300/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] text-emerald-100/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Title & description */}
            <div>
              <h3 className="text-xl font-semibold text-emerald-50">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-7 text-emerald-50/70">
                {project.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-auto space-y-2">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex gap-3 rounded-2xl border border-emerald-300/10 bg-black/10 px-4 py-3"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300/80" />
                  <p className="text-xs leading-6 text-emerald-100/75">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            {/* Subtle bottom glow line */}
            <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-300/18 to-transparent" />
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
