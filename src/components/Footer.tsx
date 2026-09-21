"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon } from "./icons";

const footerLinks = [
  {
    icon: GithubIcon,
    href: "https://github.com/RandiSh8",
    label: "GitHub",
  },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/randi-kaweesha-30a470291/",
    label: "LinkedIn",
  },
  {
    icon: MediumIcon,
    href: "https://medium.com/@RandiSh8",
    label: "Medium",
  },
  {
    icon: Mail,
    href: "mailto:randikaveesha88@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary/30">
      {/* Bottom */}
      <div className="section-padding py-8">
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
