"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";

// Luminous cyan glowing particles positioned closely to match the reference composition
const glowingDots = [
  { size: 4, left: "19%", top: "4%", driftX: 6, driftY: -12, duration: 6, delay: 0 },
  { size: 3, left: "33%", top: "14%", driftX: -6, driftY: -10, duration: 7, delay: 1 },
  { size: 5, left: "39%", top: "16%", driftX: 8, driftY: -14, duration: 8, delay: 0.5 },
  { size: 3, left: "59%", top: "13%", driftX: -8, driftY: -12, duration: 6.5, delay: 2 },
  { size: 4, left: "11%", top: "22%", driftX: 6, driftY: -15, duration: 9, delay: 1.5 },
  { size: 5, left: "57%", top: "45%", driftX: -10, driftY: -16, duration: 7.5, delay: 0.8 },
  { size: 3, left: "92%", top: "45%", driftX: 6, driftY: -10, duration: 8.5, delay: 2.5 },
  { size: 4, left: "38%", top: "63%", driftX: -8, driftY: -14, duration: 7, delay: 1.2 },
  { size: 5, left: "64%", top: "82%", driftX: 8, driftY: -16, duration: 8, delay: 3 },
  { size: 3, left: "6%", top: "82%", driftX: -6, driftY: -12, duration: 6.8, delay: 0.3 },
  { size: 4, left: "39%", top: "90%", driftX: 6, driftY: -14, duration: 9.5, delay: 2.2 },
  { size: 4, left: "96%", top: "94%", driftX: -8, driftY: -12, duration: 7.2, delay: 1.8 },
  { size: 3, left: "48%", top: "20%", driftX: 6, driftY: -10, duration: 8.2, delay: 0.7 },
  { size: 4, left: "75%", top: "28%", driftX: -6, driftY: -14, duration: 6.2, delay: 2.8 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-32 pb-20 overflow-hidden bg-[#060A10]"
    >
      {/* 3D Perspective Digital Horizon Grid & Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Luminous Horizon Line */}
        <div className="absolute top-[56%] inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/60 via-purple-400/50 to-transparent z-0" />
        <div className="absolute top-[56%] inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-blue-500/25 to-transparent blur-[2px] z-0" />

        {/* Soft horizon vanishing glow */}
        <div className="absolute top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-[220px] w-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.18),transparent_70%)] blur-2xl pointer-events-none" />

        {/* Perspective Rays & Grid Floor Fanning Outward */}
        <motion.div
          animate={{ opacity: [0.35, 0.5, 0.35] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-x-0 bottom-0 top-[56%] overflow-hidden pointer-events-none"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 400"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="rayGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.08" />
              </linearGradient>
            </defs>

            {/* Horizontal perspective lines receding towards vanishing point (500, 0) */}
            <line x1="0" y1="20" x2="1000" y2="20" stroke="url(#rayGradient)" strokeWidth="1" opacity="0.45" />
            <line x1="0" y1="50" x2="1000" y2="50" stroke="url(#rayGradient)" strokeWidth="1" opacity="0.55" />
            <line x1="0" y1="95" x2="1000" y2="95" stroke="url(#rayGradient)" strokeWidth="1" opacity="0.65" />
            <line x1="0" y1="155" x2="1000" y2="155" stroke="url(#rayGradient)" strokeWidth="1.1" opacity="0.75" />
            <line x1="0" y1="235" x2="1000" y2="235" stroke="url(#rayGradient)" strokeWidth="1.2" opacity="0.85" />
            <line x1="0" y1="340" x2="1000" y2="340" stroke="url(#rayGradient)" strokeWidth="1.4" opacity="0.95" />

            {/* Perspective Rays fanning out from the vanishing point */}
            {/* Center ray */}
            <line x1="500" y1="0" x2="500" y2="400" stroke="url(#rayGradient)" strokeWidth="1" />

            {/* Left-side radiating rays */}
            <line x1="500" y1="0" x2="430" y2="400" stroke="url(#rayGradient)" strokeWidth="1" />
            <line x1="500" y1="0" x2="350" y2="400" stroke="url(#rayGradient)" strokeWidth="1" />
            <line x1="500" y1="0" x2="250" y2="400" stroke="url(#rayGradient)" strokeWidth="1" />
            <line x1="500" y1="0" x2="130" y2="400" stroke="url(#rayGradient)" strokeWidth="1" />
            <line x1="500" y1="0" x2="-20" y2="400" stroke="url(#rayGradient)" strokeWidth="1" />
            <line x1="500" y1="0" x2="-220" y2="400" stroke="url(#rayGradient)" strokeWidth="1" />
            <line x1="500" y1="0" x2="-500" y2="400" stroke="url(#rayGradient)" strokeWidth="1" />
            <line x1="500" y1="0" x2="0" y2="220" stroke="url(#rayGradient)" strokeWidth="1" />
            <line x1="500" y1="0" x2="0" y2="100" stroke="url(#rayGradient)" strokeWidth="1" />
            <line x1="500" y1="0" x2="0" y2="35" stroke="url(#rayGradient)" strokeWidth="1" />

            {/* Right-side radiating rays */}
            <line x1="500" y1="0" x2="570" y2="400" stroke="url(#rayGradient)" strokeWidth="1" />
            <line x1="500" y1="0" x2="650" y2="400" stroke="url(#rayGradient)" strokeWidth="1" />
            <line x1="500" y1="0" x2="750" y2="400" stroke="url(#rayGradient)" strokeWidth="1" />
            <line x1="500" y1="0" x2="870" y2="400" stroke="url(#rayGradient)" strokeWidth="1" />
            <line x1="500" y1="0" x2="1020" y2="400" stroke="url(#rayGradient)" strokeWidth="1" />
            <line x1="500" y1="0" x2="1220" y2="400" stroke="url(#rayGradient)" strokeWidth="1" />
            <line x1="500" y1="0" x2="1500" y2="400" stroke="url(#rayGradient)" strokeWidth="1" />
            <line x1="500" y1="0" x2="1000" y2="220" stroke="url(#rayGradient)" strokeWidth="1" />
            <line x1="500" y1="0" x2="1000" y2="100" stroke="url(#rayGradient)" strokeWidth="1" />
            <line x1="500" y1="0" x2="1000" y2="35" stroke="url(#rayGradient)" strokeWidth="1" />
          </svg>
        </motion.div>

        {/* Floating Glowing Blue/Purple Particles */}
        {glowingDots.map((dot, idx) => (
          <motion.div
            key={idx}
            style={{
              width: dot.size,
              height: dot.size,
              left: dot.left,
              top: dot.top,
            }}
            animate={{
              y: [0, dot.driftY, 0],
              x: [0, dot.driftX, 0],
              opacity: [0.35, 1, 0.35],
              scale: [0.85, 1.25, 0.85],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: dot.delay,
            }}
            className="absolute rounded-full bg-blue-400 shadow-[0_0_10px_#60A5FA,0_0_20px_rgba(96,165,250,0.7)]"
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
              href="#" // TODO: Add CV download link
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/[0.08] hover:border-white/30"
            >
              <Download size={16} className="text-white" />
              Download CV
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
