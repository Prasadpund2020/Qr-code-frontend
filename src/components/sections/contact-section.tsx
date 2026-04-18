import SectionShell from "./section-shell";
import { Mail, Phone, MapPin } from "lucide-react";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Reach Out"
      title="Let's Connect."
      description="I'm currently available for opportunities. Whether you have a question or just want to say hi, feel free to reach out!"
    >
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:gap-6">
        {/* Contact Info Cards */}
        <div className="space-y-4">
          <a
            href="mailto:prasadpund2020@gmail.com"
            className="group relative flex items-center gap-5 overflow-hidden rounded-[1.75rem] border border-emerald-300/12 bg-[linear-gradient(180deg,rgba(8,30,21,0.55),rgba(3,15,10,0.42))] p-5 transition-colors duration-300 hover:border-emerald-300/24 hover:bg-[linear-gradient(180deg,rgba(10,38,26,0.72),rgba(4,15,10,0.55))] sm:p-6"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-400/10 text-emerald-300 group-hover:bg-emerald-400/20">
              <Mail className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-200/45">
                Email
              </p>
              <p className="mt-1 break-all text-base font-medium text-emerald-50 sm:text-lg">
                prasadpund2020@gmail.com
              </p>
            </div>
          </a>

          <a
            href="tel:+919130314834"
            className="group relative flex items-center gap-5 overflow-hidden rounded-[1.75rem] border border-emerald-300/12 bg-[linear-gradient(180deg,rgba(8,30,21,0.55),rgba(3,15,10,0.42))] p-5 transition-colors duration-300 hover:border-emerald-300/24 hover:bg-[linear-gradient(180deg,rgba(10,38,26,0.72),rgba(4,15,10,0.55))] sm:p-6"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-400/10 text-emerald-300 group-hover:bg-emerald-400/20">
              <Phone className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-200/45">
                Phone
              </p>
              <p className="mt-1 break-words text-base font-medium text-emerald-50 sm:text-lg">
                +91-9130314834
              </p>
            </div>
          </a>

          <div className="group relative flex items-center gap-5 overflow-hidden rounded-[1.75rem] border border-emerald-300/12 bg-[linear-gradient(180deg,rgba(8,30,21,0.55),rgba(3,15,10,0.42))] p-5 transition-colors duration-300 hover:border-emerald-300/24 hover:bg-[linear-gradient(180deg,rgba(10,38,26,0.72),rgba(4,15,10,0.55))] sm:p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-400/10 text-emerald-300 group-hover:bg-emerald-400/20">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-200/45">
                Location
              </p>
              <p className="mt-1 break-words text-base font-medium text-emerald-50 sm:text-lg">
                Nashik, India
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:gap-5">
          <a
            href="https://linkedin.com/in/prasad-pund"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-1 flex-col items-center justify-center gap-3 sm:gap-4 rounded-[1.75rem] border border-emerald-300/12 bg-[linear-gradient(180deg,rgba(11,38,26,0.62),rgba(3,15,10,0.46))] p-6 sm:p-8 transition-colors duration-300 hover:border-emerald-300/24 hover:bg-[linear-gradient(180deg,rgba(15,48,34,0.72),rgba(4,18,12,0.55))]"
          >
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-400/10 text-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.15)] group-hover:bg-emerald-400/20 group-hover:shadow-[0_0_40px_rgba(52,211,153,0.25)]">
              <LinkedinIcon className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <div className="text-center min-w-0 w-full px-2">
              <p className="font-medium text-emerald-50 truncate">LinkedIn</p>
              <p className="mt-1 text-[11px] sm:text-xs text-emerald-200/60 break-words line-clamp-2">
                Let's connect professionally
              </p>
            </div>
            {/* Hover glow line */}
            <div className="absolute inset-x-8 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
          </a>

          <a
            href="https://github.com/prasadpund2020"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-1 flex-col items-center justify-center gap-3 sm:gap-4 rounded-[1.75rem] border border-emerald-300/12 bg-[linear-gradient(180deg,rgba(11,38,26,0.62),rgba(3,15,10,0.46))] p-6 sm:p-8 transition-colors duration-300 hover:border-emerald-300/24 hover:bg-[linear-gradient(180deg,rgba(15,48,34,0.72),rgba(4,18,12,0.55))]"
          >
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-400/10 text-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.15)] group-hover:bg-emerald-400/20 group-hover:shadow-[0_0_40px_rgba(52,211,153,0.25)]">
              <GithubIcon className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <div className="text-center min-w-0 w-full px-2">
              <p className="font-medium text-emerald-50 truncate">GitHub</p>
              <p className="mt-1 text-[11px] sm:text-xs text-emerald-200/60 break-words line-clamp-2">
                Check out my code repositories
              </p>
            </div>
            {/* Hover glow line */}
            <div className="absolute inset-x-8 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
