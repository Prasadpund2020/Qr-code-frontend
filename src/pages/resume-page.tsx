import { Mail, Phone, MapPin, Download } from "lucide-react";

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

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-neutral-100 py-12 px-4 sm:px-6 print:bg-white print:p-0">
      <div className="mx-auto max-w-[210mm] overflow-hidden bg-white shadow-xl print:shadow-none sm:rounded-lg">
        {/* Floating Download Button (Hidden on Print) */}
        <div className="flex justify-end p-4 print:hidden">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-md bg-[#03110b] px-4 py-2 text-sm font-medium text-emerald-50 shadow-sm transition-colors hover:bg-[#03110b]/80 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
          >
            <Download className="h-4 w-4" />
            Save as PDF
          </button>
        </div>

        <div className="px-8 pb-16 pt-8 print:p-0">
          {/* Header */}
          <header className="mb-6 flex flex-col-reverse items-center justify-between gap-6 border-b-2 border-neutral-800 pb-6 sm:flex-row sm:items-end">
            <div className="flex-1 space-y-4 text-center sm:text-left">
              <div>
                <h1 className="text-4xl font-serif font-bold text-neutral-900 tracking-tight">Prasad Pund</h1>
                <p className="mt-1 flex items-center justify-center sm:justify-start gap-1.5 text-neutral-600">
                  <MapPin className="h-4 w-4" /> Nashik, India
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2 text-sm text-neutral-600">
                <a href="tel:+919130314834" className="flex items-center gap-1.5 hover:text-emerald-700">
                  <Phone className="h-3.5 w-3.5" /> +91-9130314834
                </a>
                <a href="mailto:prasadpund2020@gmail.com" className="flex items-center gap-1.5 hover:text-emerald-700">
                  <Mail className="h-3.5 w-3.5" /> prasadpund2020@gmail.com
                </a>
                <a href="https://linkedin.com/in/prasad-pund" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-700">
                  <LinkedinIcon className="h-3.5 w-3.5" /> linkedin.com/in/prasad-pund
                </a>
                <a href="https://github.com/prasadpund2020" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-700">
                  <GithubIcon className="h-3.5 w-3.5" /> github.com/prasadpund2020
                </a>
              </div>
            </div>
            {/* Optional Image Area */}
            <div className="h-28 w-28 shrink-0 overflow-hidden rounded-[0.25rem] border border-neutral-200">
              <img
                src="/assets/prof2.png"
                alt="Prasad Pund"
                className="h-full w-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </header>

          <main className="space-y-6 text-neutral-800">
            {/* TECHNICAL SKILLS */}
            <section>
              <h2 className="mb-2 border-b border-neutral-300 pb-1 text-xs font-bold uppercase tracking-widest text-neutral-900">
                Technical Skills
              </h2>
              <div className="space-y-1 text-[13px] leading-relaxed">
                <p><span className="font-semibold text-neutral-900">Languages:</span> Python, Java, JavaScript</p>
                <p><span className="font-semibold text-neutral-900">Frontend:</span> React.JS, Next.JS, HTML, CSS</p>
                <p><span className="font-semibold text-neutral-900">Backend:</span> Node.JS, ExpressJS</p>
                <p><span className="font-semibold text-neutral-900">Databases:</span> MongoDB</p>
                <p><span className="font-semibold text-neutral-900">Testing:</span> Cypress (E2E Testing), Postman (API Testing)</p>
                <p><span className="font-semibold text-neutral-900">Tools:</span> Git, GitHub, VS Code, IntelliJ IDEA</p>
              </div>
            </section>

            {/* INTERNSHIP */}
            <section>
              <h2 className="mb-3 border-b border-neutral-300 pb-1 text-xs font-bold uppercase tracking-widest text-neutral-900">
                Internship
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                    <h3 className="text-sm font-bold text-neutral-900">AI Alpha Tech</h3>
                    <span className="text-[13px] text-neutral-600">6 Months | Current</span>
                  </div>
                  <p className="text-[13px] italic text-neutral-700">Software Developer Intern (Full Stack)</p>
                  <ul className="mt-1 list-inside list-disc text-[13px] leading-relaxed text-neutral-700">
                    <li>Collaborating with team members on full-stack development projects, contributing to both frontend and backend development tasks.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                    <h3 className="text-sm font-bold text-neutral-900">Startup 0 KM</h3>
                    <span className="text-[13px] text-neutral-600">2 Months</span>
                  </div>
                  <p className="text-[13px] italic text-neutral-700">Frontend Developer Intern</p>
                  <ul className="mt-1 list-inside list-disc text-[13px] leading-relaxed text-neutral-700">
                    <li>Developed and maintained responsive user interfaces, ensuring seamless user experience across various devices and browsers.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* PROJECTS */}
            <section>
              <h2 className="mb-3 border-b border-neutral-300 pb-1 text-xs font-bold uppercase tracking-widest text-neutral-900">
                Projects
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-neutral-900">Chairman Society Management</h3>
                  <ul className="mt-1 list-inside list-disc text-[13px] leading-relaxed text-neutral-700">
                    <li>Developed a web-based platform enabling a chairman to manage multiple societies, including member records, announcements, billing, and real-time updates.</li>
                    <li><span className="font-semibold">Technology Stack:</span> React.JS, Node.JS, MongoDB, ExpressJS</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-neutral-900">Dynamic Invoice Generator</h3>
                  <ul className="mt-1 list-inside list-disc text-[13px] leading-relaxed text-neutral-700">
                    <li>Built a dynamic invoice generation system with customisable templates and automated billing features.</li>
                    <li><span className="font-semibold">Technology Stack:</span> Next.JS, Node.JS, MongoDB, ExpressJS</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* EDUCATION */}
            <section>
              <h2 className="mb-3 border-b border-neutral-300 pb-1 text-xs font-bold uppercase tracking-widest text-neutral-900">
                Education
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-[13px] font-bold text-neutral-900">Sandip Institute of Engineering & Management</h3>
                  <p className="text-[13px] text-neutral-700">Degree Name - B.E (Computer) <span className="font-semibold">CGPA - 7.0</span></p>
                </div>
                <div>
                  <h3 className="text-[13px] font-bold text-neutral-900">Vainateva Vidyalaya & Jr. College of Science, Niphad</h3>
                  <p className="text-[13px] text-neutral-700">HSC Exam - 12th Science - <span className="font-semibold">Percentage - 68.20%</span></p>
                </div>
                <div>
                  <h3 className="text-[13px] font-bold text-neutral-900">Niphad English School, Niphad</h3>
                  <p className="text-[13px] text-neutral-700">SSC Exam - 10th - <span className="font-semibold">Percentage - 87.80%</span></p>
                </div>
              </div>
            </section>

            {/* CERTIFICATIONS */}
            <section>
              <h2 className="mb-2 border-b border-neutral-300 pb-1 text-xs font-bold uppercase tracking-widest text-neutral-900">
                Certifications
              </h2>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-[13px] list-inside list-disc text-neutral-700">
                <li>ReactJS</li>
                <li>Next.JS</li>
                <li>MongoDB Basics</li>
                <li>Node.js with Express & MongoDB - Udemy</li>
                <li>AWS Cloud Practitioner Essentials</li>
              </ul>
            </section>

            {/* EXTRACURRICULAR */}
            <section>
              <h2 className="mb-2 border-b border-neutral-300 pb-1 text-xs font-bold uppercase tracking-widest text-neutral-900">
                Extracurricular
              </h2>
              <div>
                <h3 className="text-[13px] font-bold text-neutral-900">Computer Engineering Students' Association (CESA)</h3>
                <p className="text-[13px] italic text-neutral-700">Joint Secretary</p>
                <ul className="mt-1 list-inside list-disc text-[13px] leading-relaxed text-neutral-700">
                  <li>Organised technical events and enhanced student engagement.</li>
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
