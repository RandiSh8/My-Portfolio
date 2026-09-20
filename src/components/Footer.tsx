"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon } from "./icons";

const footerLinks = [
  {
    icon: GithubIcon,
    href: "#", // TODO: Add actual GitHub URL
    label: "GitHub",
  },
  {
    icon: LinkedinIcon,
    href: "#", // TODO: Add actual LinkedIn URL
    label: "LinkedIn",
  },
  {
    icon: MediumIcon,
    href: "https://medium.com/@RandiSh8",
    label: "Medium",
  },
  {
    icon: Mail,
    href: "mailto:randi.kaweesha@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary/30">
      {/* CTA Banner */}
      <div className="section-padding py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h3 className="text-2xl font-bold text-text-primary sm:text-3xl">
            Have an idea in mind?
          </h3>
          <p className="mt-3 text-text-secondary">
            Let&apos;s work together and build something great.
          </p>
          <a
            href="#contact"
            className="gradient-btn mt-6 inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white"
          >
            Let&apos;s Connect ✦
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="section-padding border-t border-border py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-primary to-purple-primary text-xs font-bold text-white">
              RK
            </div>
            <div>
              <p className="text-sm font-semibold text-text-primary">
                Randi Kaweesha
              </p>
              <p className="text-xs text-text-secondary">
                Building, learning and creating with curiosity.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white/5 text-text-secondary transition-all hover:border-blue-primary/30 hover:bg-white/10 hover:text-text-primary"
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-7xl text-center">
          <p className="text-xs text-text-secondary">
            © 2026 Randi Kaweesha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
