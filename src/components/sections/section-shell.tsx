import type { ReactNode } from "react";
import { motion } from "motion/react";

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
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mt-4 overflow-visible w-full min-h-[30rem] scroll-mt-32 rounded-[2rem] border border-emerald-400/12 bg-[linear-gradient(180deg,rgba(8,28,20,0.88),rgba(4,16,11,0.72))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:mt-6 sm:min-h-[34rem] sm:p-8 lg:mt-24 lg:min-h-[38rem] lg:p-12"
    >
      <div className="mb-6 space-y-3">
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-[11px] uppercase tracking-[0.4em] text-emerald-200/55"
        >
          {eyebrow}
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-semibold tracking-[0.08em] text-emerald-50 sm:text-4xl"
        >
          {title}
        </motion.h2>
        {description ? (
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl text-sm leading-7 text-emerald-100/62 sm:text-base"
          >
            {description}
          </motion.p>
        ) : null}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
}
