import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export default function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className="relative mt-4 overflow-visible w-full min-h-[30rem] scroll-mt-32 rounded-[2rem] border border-emerald-400/12 bg-[linear-gradient(180deg,rgba(8,28,20,0.88),rgba(4,16,11,0.72))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:mt-6 sm:min-h-[34rem] sm:p-8 lg:mt-24 lg:min-h-[38rem] lg:p-12"
    >
      <div className="mb-6 space-y-3">
        <p className="text-[11px] uppercase tracking-[0.4em] text-emerald-200/55">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold tracking-[0.08em] text-emerald-50 sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-sm leading-7 text-emerald-100/62 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>

      {children}
    </section>
  );
}
