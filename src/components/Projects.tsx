"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden pt-12 pb-24 lg:pt-16 lg:pb-32 bg-bg-secondary/30 scroll-mt-20"
    >
      {/* Background glow accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-blue-primary/[0.05] blur-[110px]" />
        <div className="absolute bottom-1/4 left-1/4 h-80 w-80 rounded-full bg-purple-primary/[0.05] blur-[110px]" />
      </div>

      <div className="section-padding relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs md:text-sm font-semibold tracking-widest text-blue-bright uppercase mb-3"
          >
            FEATURED WORK
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            <span className="gradient-text">Projects that </span>
            <span className="font-serif italic font-normal text-text-primary">
              make an impact.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            A selection of my recent work, from full-stack applications to AI-powered collaborative tools that solve real-world problems.
          </motion.p>
        </div>

        {/* Projects Grid (Text-Focused, Clean Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="group rounded-3xl glass-card border border-border p-7 sm:p-8 flex flex-col justify-between hover-glow transition-all"
            >
              <div>
                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-blue-bright transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3.5 text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/[0.04] border border-border px-3 py-1 text-xs font-medium text-text-secondary group-hover:border-blue-bright/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Row: See Project Button */}
              <div className="mt-8 pt-5 border-t border-border/50 flex items-center justify-end">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-bright group-hover:text-blue-primary transition-colors"
                >
                  See Project
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/RandiSh8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.04] px-6 py-3 text-sm font-semibold text-text-primary transition-all hover:bg-white/[0.08] hover:border-blue-bright/40 shadow-lg"
          >
            <GithubIcon className="h-4 w-4 text-blue-bright" />
            <span>See more projects</span>
            <ArrowUpRight size={15} className="text-text-secondary" />
          </a>
        </div>
      </div>
    </section>
  );
}
