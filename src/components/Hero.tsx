"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon } from "./icons";

// Floating bubbles/particles matching Sanduni's portfolio pattern
const floatingBubbles = [
  { size: 6, left: "6%", top: "14%", duration: 18, delay: 0, opacity: 0.65, color: "#20B2A6" },
  { size: 5, left: "14%", top: "45%", duration: 22, delay: 2, opacity: 0.55, color: "#38BDF8" },
  { size: 4, left: "22%", top: "28%", duration: 25, delay: 1, opacity: 0.6, color: "#20B2A6" },
  { size: 7, left: "33%", top: "22%", duration: 20, delay: 3, opacity: 0.7, color: "#22D3EE" },
  { size: 5, left: "43%", top: "18%", duration: 24, delay: 0.5, opacity: 0.65, color: "#38BDF8" },
  { size: 4, left: "40%", top: "62%", duration: 19, delay: 4, opacity: 0.5, color: "#20B2A6" },
  { size: 6, left: "48%", top: "25%", duration: 27, delay: 1.5, opacity: 0.6, color: "#38BDF8" },
  { size: 5, left: "58%", top: "45%", duration: 23, delay: 3.5, opacity: 0.55, color: "#60A5FA" },
  { size: 6, left: "68%", top: "12%", duration: 21, delay: 2.2, opacity: 0.7, color: "#20B2A6" },
  { size: 4, left: "78%", top: "16%", duration: 26, delay: 4.5, opacity: 0.6, color: "#22D3EE" },
  { size: 5, left: "81%", top: "3%", duration: 19, delay: 1.8, opacity: 0.55, color: "#38BDF8" },
  { size: 7, left: "88%", top: "24%", duration: 24, delay: 0.8, opacity: 0.65, color: "#20B2A6" },
  { size: 5, left: "92%", top: "45%", duration: 22, delay: 2.7, opacity: 0.6, color: "#38BDF8" },
  { size: 4, left: "90%", top: "75%", duration: 20, delay: 3.2, opacity: 0.55, color: "#60A5FA" },
  { size: 6, left: "76%", top: "65%", duration: 25, delay: 1.2, opacity: 0.6, color: "#20B2A6" },
  { size: 5, left: "65%", top: "82%", duration: 28, delay: 4.1, opacity: 0.5, color: "#22D3EE" },
  { size: 6, left: "50%", top: "89%", duration: 18, delay: 2.5, opacity: 0.65, color: "#38BDF8" },
  { size: 5, left: "38%", top: "83%", duration: 26, delay: 0.9, opacity: 0.6, color: "#20B2A6" },
  { size: 4, left: "26%", top: "72%", duration: 21, delay: 3.8, opacity: 0.55, color: "#38BDF8" },
  { size: 6, left: "19%", top: "80%", duration: 23, delay: 1.7, opacity: 0.6, color: "#22D3EE" },
  { size: 5, left: "10%", top: "88%", duration: 27, delay: 2.9, opacity: 0.5, color: "#20B2A6" },
  { size: 4, left: "3%", top: "70%", duration: 20, delay: 4.2, opacity: 0.55, color: "#60A5FA" },
  { size: 5, left: "2%", top: "32%", duration: 24, delay: 1.1, opacity: 0.6, color: "#38BDF8" },
  { size: 6, left: "11%", top: "22%", duration: 22, delay: 3.1, opacity: 0.65, color: "#20B2A6" },
  { size: 4, left: "29%", top: "54%", duration: 19, delay: 0.4, opacity: 0.5, color: "#38BDF8" },
  { size: 5, left: "52%", top: "40%", duration: 25, delay: 2.1, opacity: 0.6, color: "#22D3EE" },
  { size: 4, left: "62%", top: "33%", duration: 23, delay: 3.7, opacity: 0.55, color: "#20B2A6" },
  { size: 5, left: "84%", top: "58%", duration: 21, delay: 1.4, opacity: 0.65, color: "#60A5FA" },
  { size: 6, left: "95%", top: "30%", duration: 26, delay: 4.8, opacity: 0.6, color: "#38BDF8" },
  { size: 4, left: "70%", top: "92%", duration: 22, delay: 2.6, opacity: 0.5, color: "#22D3EE" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-32 pb-20 overflow-hidden bg-[#070B1A]"
    >
      {/* Exact Hero Background Perspective Grid & Horizon Image from Sanduni's Portfolio */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B1A]/20 via-[#070B1A]/80 to-[#070B1A]" />
      </div>

      {/* Floating Glowing Particle Bubbles (Exact Pattern & Animation from Sanduni Portfolio) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingBubbles.map((bubble, idx) => (
          <div
            key={idx}
            className="absolute rounded-full shadow-[0_0_8px_#38BDF8,0_0_16px_rgba(56,189,248,0.5)]"
            style={{
              width: bubble.size,
              height: bubble.size,
              backgroundColor: bubble.color,
              left: bubble.left,
              top: bubble.top,
              opacity: bubble.opacity,
              animation: `slow-drift ${bubble.duration}s ease-in-out infinite`,
              animationDelay: `${bubble.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-12 lg:flex-row lg:gap-14 z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 text-center lg:text-left"
        >

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-extrabold tracking-tight text-white leading-[1.08]">
            Crafting{" "}
            <span className="gradient-text drop-shadow-[0_0_28px_rgba(96,165,250,0.55)]">
              digital
            </span>
            <br />
            experiences with
            <br />
            <span className="font-serif italic font-normal text-white">
              precision.
            </span>
          </h1>

          {/* Bio paragraph */}
          <p className="mt-7 max-w-xl text-sm sm:text-base leading-relaxed text-slate-400 mx-auto lg:mx-0">
            Hi, I&apos;m <span className="text-white font-medium">Randi Kaweesha</span>, an IT undergraduate at the University Moratuwa, Transforming ideas into impactful digital experiences through a passion for Software Engineering, blending technical problem-solving with creativity, curiosity, and a drive to explore emerging technologies.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#contact"
              className="gradient-btn inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
            >
              Contact
            </a>
            <a
              href="/Randi_Kaweesha_CV.pdf"
              download="Randi_Kaweesha_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/[0.08] hover:border-white/30"
            >
              <Download size={16} className="text-white" />
              Download CV
            </a>
          </div>

          {/* Follow Me Social Links */}
          <div className="mt-7 flex items-center justify-center gap-3 lg:justify-start">
            <span className="text-sm font-medium text-slate-400 mr-1">Follow me:</span>

            <a
              href="https://github.com/RandiSh8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:border-blue-400/50 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_0_12px_rgba(96,165,250,0.3)]"
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/randi-kaweesha-30a470291/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:border-blue-400/50 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_0_12px_rgba(96,165,250,0.3)]"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>

            <a
              href="https://medium.com/@RandiSh8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium Profile"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:border-blue-400/50 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_0_12px_rgba(96,165,250,0.3)]"
            >
              <MediumIcon className="h-4 w-4" />
            </a>

            <a
              href="mailto:randikaveesha88@gmail.com"
              aria-label="Send Email"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:border-blue-400/50 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_0_12px_rgba(96,165,250,0.3)]"
            >
              <Mail size={16} />
            </a>
          </div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative flex-shrink-0"
        >
          <div className="relative">
            {/* Soft ambient blue halo behind image */}
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-blue-600/20 via-purple-600/15 to-transparent blur-3xl" />

            {/* Image Card */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B1220]/70 p-1.5 shadow-2xl shadow-black/80">
              <div className="relative overflow-hidden rounded-[26px] aspect-[3/4] w-[300px] sm:w-[370px] lg:w-[400px]">
                <Image
                  src="/p.png"
                  alt="Randi Kaweesha - IT Undergraduate"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 300px, 400px"
                  priority
                />
              </div>
            </div>

            {/* Pinned "Available for work" pill badge */}
            <div className="absolute -bottom-3 right-4 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-[#070D18]/90 px-4 py-2 backdrop-blur-md shadow-2xl shadow-black">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#10B981]" />
              </span>
              <span className="text-xs font-semibold text-white tracking-wide">
                Available for work
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
