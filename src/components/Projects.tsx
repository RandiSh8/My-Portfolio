"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden pt-12 pb-24 lg:pt-16 lg:pb-32 bg-bg-secondary/30 scroll-mt-20">
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
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              className="group rounded-3xl glass-card border border-border overflow-hidden flex flex-col hover-glow transition-all"
            >
              {/* Card Image Banner */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-card">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-60" />
              </div>

              {/* Card Body */}
              <div className="p-7 md:p-8 flex flex-col flex-1">
                {/* Title & Arrow */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl md:text-2xl font-bold text-text-primary group-hover:text-blue-bright transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-text-secondary group-hover:text-blue-bright group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1" />
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-text-secondary flex-1">
                  {project.description}
                </p>

                {/* Footer with technologies and links */}
                <div className="mt-6 pt-5 border-t border-border/50 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/[0.04] border border-border px-3 py-1 text-xs font-medium text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-bright hover:text-blue-primary transition-colors"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-bright hover:text-purple-primary transition-colors"
                      >
                        <ExternalLink size={13} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
