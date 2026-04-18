import SectionShell from "./section-shell";
import { Download, ExternalLink, FileText } from "lucide-react";

export default function ResumeSection() {
  return (
    <SectionShell
      id="resume"
      eyebrow="Curriculum Vitae"
      title="My Resume."
      description="Get a comprehensive overview of my experience, skills, and education. You can view it directly in your browser or download a copy for your records."
    >
      <div className="flex w-full flex-col items-center justify-center gap-6 rounded-[1.75rem] border border-emerald-300/12 bg-[linear-gradient(180deg,rgba(8,30,21,0.55),rgba(3,15,10,0.42))] p-8 text-center sm:p-12">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-emerald-300/20 bg-emerald-400/10 shadow-[0_0_40px_rgba(52,211,153,0.15)]">
          <FileText className="h-10 w-10 text-emerald-300" />
        </div>
        
        <div className="max-w-md space-y-2">
          <h3 className="text-2xl font-semibold text-emerald-50">
            Prasad Pund
          </h3>
          <p className="text-sm leading-7 text-emerald-200/70">
            Full Stack Developer based in Nashik, India. Passionate about building seamless user experiences and robust backend systems.
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-8 py-3.5 text-sm font-medium text-emerald-50 shadow-[0_0_20px_rgba(52,211,153,0.1)] transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/20 hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]"
          >
            <span>View in Browser</span>
            <ExternalLink className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <a
            href="/assets/prasad-resume.pdf"
            download="Prasad_Pund_Resume.pdf"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-emerald-300/12 bg-white/[0.03] px-8 py-3.5 text-sm font-medium text-emerald-100/90 transition-all duration-300 hover:border-emerald-300/30 hover:bg-white/[0.08] hover:text-emerald-50"
          >
            <span>Download PDF</span>
            <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
