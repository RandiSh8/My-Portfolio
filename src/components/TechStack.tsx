"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import {
  TailwindIcon,
  FlutterIcon,
  HTML5Icon,
  CSS3Icon,
  NodeIcon,
  ExpressIcon,
  PostgreSQLIcon,
  MSSQLIcon,
  PythonIcon,
  ReactIcon,
  NextIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  GitIcon,
  VSCodeIcon,
  FigmaIcon,
  JavaIcon,
  PostmanIcon,
  NeonIcon,
} from "./TechIcons";
import { GithubIcon } from "./icons";

// List of technologies for the horizontal marquee
const marqueeItems = [
  { name: "Tailwind CSS", icon: TailwindIcon },
  { name: "Flutter", icon: FlutterIcon },
  { name: "HTML5", icon: HTML5Icon },
  { name: "CSS3", icon: CSS3Icon },
  { name: "Node.js", icon: NodeIcon },
  { name: "Express.js", icon: ExpressIcon },
  { name: "PostgreSQL", icon: PostgreSQLIcon },
  { name: "MSSQL", icon: MSSQLIcon },
  { name: "Python", icon: PythonIcon },
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "Git", icon: GitIcon },
  { name: "GitHub", icon: GithubIcon },
  { name: "VS Code", icon: VSCodeIcon },
  { name: "Figma", icon: FigmaIcon },
  { name: "Java", icon: JavaIcon },
  { name: "Postman", icon: PostmanIcon },
  { name: "Neon", icon: NeonIcon },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden pt-16 pb-20 lg:pt-20 lg:pb-24 bg-bg-secondary/40 scroll-mt-20"
    >
      {/* Background glow accents matching portfolio theme */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/4 h-80 w-80 rounded-full bg-blue-primary/[0.06] blur-[110px]" />
        <div className="absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-purple-primary/[0.06] blur-[110px]" />
      </div>

      <div className="section-padding relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs md:text-sm font-semibold tracking-widest text-blue-bright uppercase mb-3"
          >
            TECH STACK
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            <span className="gradient-text">Technologies I </span>
            <span className="font-serif italic font-normal text-text-primary">
              work with.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            A versatile set of modern technologies, libraries, and tools I use to
            build robust, responsive, and scalable digital solutions.
          </motion.p>
        </div>

        {/* Category Cards (3 Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.12 * index }}
              className="rounded-2xl glass-card p-6 md:p-7 shadow-lg flex flex-col justify-start hover-glow"
            >
              <h3 className="text-base md:text-lg font-bold text-text-primary mb-5 tracking-tight">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium text-text-secondary bg-white/[0.03] border border-border hover:border-blue-bright/40 hover:text-text-primary hover:bg-blue-primary/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Horizontal Flowing Icons Marquee */}
      <div className="relative w-full overflow-hidden mt-16 md:mt-20">
        {/* Left & Right gradient fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-r from-bg-primary via-bg-primary/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-l from-bg-primary via-bg-primary/80 to-transparent z-10" />

        {/* Marquee track duplicated for infinite continuous scroll */}
        <div className="animate-marquee flex gap-4 py-3">
          {marqueeItems.concat(marqueeItems).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.name}-${idx}`}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl glass-card border border-border flex-shrink-0 hover:border-blue-bright/40 hover:bg-white/[0.06] transition-all cursor-default select-none shadow-md"
              >
                <Icon size={22} className="w-[22px] h-[22px] flex-shrink-0" />
                <span className="text-sm font-medium text-text-primary whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
