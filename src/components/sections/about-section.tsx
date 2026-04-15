import SectionShell from "./section-shell";

export default function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="Introduction"
      title="Hi, I am Prasad Pund."
      description="I build modern digital experiences with clean code, thoughtful design, and a strong focus on reliability."
    >
      <div className="relative pt-0 lg:min-h-[29rem] lg:pt-4">
        <div className="mx-auto mb-6 w-full max-w-[11rem] sm:mb-8 sm:max-w-[12.5rem] lg:absolute lg:mb-0 lg:left-auto lg:-right-12 lg:top-[-27rem] lg:z-20 lg:max-w-[20rem]">
          <div className="relative overflow-hidden">
            <img
              src="/assets/prof2.png"
              alt="Prasad Pund portrait"
              className="h-auto w-full object-contain object-top"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#04160d] via-[#04160d]/75 to-transparent sm:h-20 lg:h-24" />
          </div>
        </div>

        <div className="max-w-3xl space-y-5 lg:max-w-[calc(100%-22rem)] lg:pr-4">
          <div className="inline-flex items-center rounded-full border border-emerald-300/14 bg-emerald-400/[0.06] px-4 py-2 text-sm font-medium text-emerald-100/80">
            Full Stack Developer
          </div>

          <p className="max-w-2xl text-base leading-8 text-emerald-50/78 sm:text-lg">
            I enjoy creating scalable web applications that feel polished on the
            frontend and dependable on the backend. My approach combines strong
            engineering fundamentals with a careful eye for user experience.
          </p>

          <div className="rounded-[1.5rem] border border-emerald-300/12 bg-black/10 p-5">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/45">
              Slogan
            </p>
            <p className="mt-3 text-xl font-medium leading-8 text-emerald-50 sm:text-2xl">
              Crafting reliable products with elegant code and meaningful
              design.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
