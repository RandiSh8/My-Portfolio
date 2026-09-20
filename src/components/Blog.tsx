"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blogs";
import { MediumIcon } from "./icons";

export default function Blog() {
  return (
    <section id="blogs" className="relative overflow-hidden pt-12 pb-24 lg:pt-16 lg:pb-32 bg-bg-secondary/20 scroll-mt-20">
      {/* Ambient background glow matching portfolio theme */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/3 h-80 w-80 rounded-full bg-blue-primary/[0.05] blur-[110px]" />
        <div className="absolute bottom-1/3 right-1/3 h-80 w-80 rounded-full bg-purple-primary/[0.05] blur-[110px]" />
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
            ARTICLES & INSIGHTS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            <span className="gradient-text">Thoughts & </span>
            <span className="font-serif italic font-normal text-text-primary">
              articles.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Insights, deep dives, and technical guides published on Medium
            covering cloud computing, APIs, AI, and emerging technologies.
          </motion.p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="group rounded-3xl glass-card border border-border p-7 flex flex-col justify-between hover-glow transition-all cursor-pointer"
            >
              {/* Top Row: Category pill & Reading time */}
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-blue-primary/10 border border-blue-primary/20 px-3 py-1 text-xs font-semibold text-blue-bright">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                    <Clock size={13} className="text-text-secondary" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="mt-5 text-lg md:text-xl font-bold text-text-primary group-hover:text-blue-bright transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 text-sm leading-relaxed text-text-secondary line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Bottom Row: Date & Read Article link */}
              <div className="mt-7 pt-5 border-t border-border/50 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                  <Calendar size={13} />
                  <span>{post.date}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-bright group-hover:text-blue-primary transition-colors">
                  Read Article
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All on Medium CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://medium.com/@RandiSh8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.04] px-6 py-3 text-sm font-semibold text-text-primary transition-all hover:bg-white/[0.08] hover:border-blue-bright/40 shadow-lg"
          >
            <MediumIcon className="h-4 w-4 text-blue-bright" />
            <span>Read more on Medium</span>
            <ArrowUpRight size={15} className="text-text-secondary" />
          </a>
        </div>
      </div>
    </section>
  );
}
