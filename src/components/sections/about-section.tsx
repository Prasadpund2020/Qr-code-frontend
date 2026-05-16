import SectionShell from "./section-shell";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="Introduction"
      title="Hi, I am Prasad Pund."
      description="I build modern digital experiences with clean code, thoughtful design, and a strong focus on reliability."
    >
      <div className="relative pt-0 lg:min-h-[29rem] lg:pt-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mb-6 w-full max-w-[11rem] sm:mb-8 sm:max-w-[12.5rem] lg:absolute lg:mb-0 lg:left-auto lg:-right-12 lg:top-[-27rem] lg:z-20 lg:max-w-[20rem]"
        >
          <div className="relative overflow-hidden group">
            <img
              src="/assets/prof2.png"
              alt="Prasad Pund portrait"
              className="h-auto w-full object-contain object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#04160d] via-[#04160d]/75 to-transparent sm:h-20 lg:h-24" />
            
            {/* Subtle glow behind the avatar on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-full bg-emerald-400/[0.08] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 mix-blend-screen" />
          </div>
        </motion.div>

        <div className="max-w-3xl space-y-5 lg:max-w-[calc(100%-22rem)] lg:pr-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center rounded-full border border-emerald-300/14 bg-emerald-400/[0.06] px-4 py-2 text-sm font-medium text-emerald-100/80 shadow-[0_0_15px_rgba(52,211,153,0.1)] transition-colors hover:border-emerald-300/30 hover:bg-emerald-400/10 cursor-default"
          >
            Full Stack Developer
            <span className="ml-2 flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-2xl text-base leading-8 text-emerald-50/78 sm:text-lg"
          >
            I enjoy creating scalable web applications that feel polished on the
            frontend and dependable on the backend. My approach combines strong
            engineering fundamentals with a careful eye for user experience.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group relative rounded-[1.5rem] border border-emerald-300/12 bg-black/10 p-5 overflow-hidden transition-colors duration-300 hover:border-emerald-300/20 hover:bg-black/20"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-emerald-100/5 to-transparent skew-x-[-25deg] transition-transform duration-1000 group-hover:translate-x-[150%]" />
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/45 transition-colors duration-300 group-hover:text-emerald-200/60">
              Slogan
            </p>
            <p className="mt-3 text-xl font-medium leading-8 text-emerald-50 sm:text-2xl transition-colors duration-300 group-hover:text-emerald-300">
              Crafting reliable products with elegant code and meaningful
              design.
            </p>
          </motion.div>
        </div>
      </div>
    </SectionShell>
  );
}
