"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Trophy, BookOpen, Download } from "lucide-react";

const stats = [
  {
    icon: Code2,
    value: "10+",
    title: "Technologies",
    description: "Modern tools & frameworks mastered",
  },
  {
    icon: Rocket,
    value: "3+",
    title: "Projects",
    description: "Real-world apps built & deployed",
  },
  {
    icon: Trophy,
    value: "2+",
    title: "Competitions",
    description: "Hackathons & competitions entered",
  },
  {
    icon: BookOpen,
    value: "5+",
    title: "Technical Articles",
    description: "Published on Medium",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32 bg-bg-secondary/20 scroll-mt-16">
      {/* Background ambient glow matching theme */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-blue-primary/[0.05] blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 h-72 w-72 rounded-full bg-purple-primary/[0.05] blur-[100px]" />
      </div>

      <div className="section-padding relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col justify-start"
          >
            {/* Tag label */}
            <p className="text-xs md:text-sm font-semibold tracking-widest text-blue-bright uppercase mb-3">
              ABOUT ME
            </p>

            {/* Headline with editorial styling */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              <span className="gradient-text">Building the future, </span>
              <span className="font-serif italic font-normal text-text-primary">
                one component at a time.
              </span>
            </h2>

            {/* Bio paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-text-secondary leading-relaxed">
              <p>
                Hello! I&apos;m <span className="text-text-primary font-medium">Randi Kaweesha</span>, a third year Information Technology undergraduate at the Faculty of Information Technology, University of Moratuwa. I&apos;m passionate about Software Engineering and Full-Stack Development, with a growing interest in exploring emerging technologies and building meaningful digital solutions.
              </p>
              <p>
                I enjoy turning ideas into practical applications through problem-solving, creativity, and continuous learning. I seek opportunities to contribute to innovative projects, collaborate with others, and gain valuable experiences beyond academics.
              </p>
              <p>
                Beyond my studies, I enjoy exploring new technologies, writing technical blogs, following emerging trends in the tech industry, and discovering new things. I believe every project and experience is an opportunity to learn and grow.
              </p>
            </div>

            {/* Action link */}
            <div className="mt-8 pt-2">
              <a
                href="#" // TODO: Add CV download link
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.04] px-6 py-2.5 text-sm font-semibold text-text-primary transition-all hover:bg-white/[0.08] hover:border-blue-bright/40"
              >
                <Download size={16} className="text-blue-bright" />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Stat Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:pt-14"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="group flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-2xl glass-card border border-border hover-glow transition-all"
                >
                  {/* Icon badge */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-primary/15 to-purple-primary/15 border border-blue-primary/20 mb-4 transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5 text-blue-bright" />
                  </div>

                  {/* Stat value */}
                  <span className="text-3xl sm:text-4xl font-extrabold gradient-text tracking-tight">
                    {stat.value}
                  </span>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-text-primary mt-2">
                    {stat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed max-w-[200px]">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
