"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blogs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      const navHeight = 75;
      const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementTop - navHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Left: Brand Logo */}
          <div className="flex items-center gap-2 lg:w-1/4">
            <button
              onClick={() => handleNavClick("#home")}
              className="text-2xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity"
            >
              RK<span className="text-blue-bright">.</span>
            </button>
          </div>

          {/* Center: Nav Links Capsule (Desktop) */}
          <div className="hidden items-center justify-center flex-1 lg:flex">
            <div className="flex items-center gap-1 rounded-full border border-border/80 bg-[#0c1326]/85 px-4 py-1.5 backdrop-blur-md shadow-lg shadow-black/30">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="rounded-full px-4 py-1.5 text-sm font-medium text-text-secondary transition-all hover:bg-white/10 hover:text-text-primary"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Contact Button & Mobile Toggle */}
          <div className="flex items-center justify-end gap-3 lg:w-1/4">
            <button
              onClick={() => handleNavClick("#contact")}
              className="hidden rounded-full gradient-btn px-6 py-2 text-sm font-semibold text-white transition-all shadow-md hover:shadow-blue-500/25 sm:inline-flex"
            >
              Contact
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-72 glass-card border-l border-border"
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-primary to-purple-primary text-sm font-bold text-white">
                    RK
                  </div>
                  <p className="text-sm font-semibold text-text-primary">
                    Randi Kaweesha
                  </p>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-text-secondary hover:text-text-primary"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-col gap-1 p-4">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className="rounded-lg px-4 py-3 text-left text-sm text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
