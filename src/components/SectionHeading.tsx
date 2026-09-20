"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  children?: ReactNode;
}

export default function SectionHeading({ label, title, children }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <span className="text-sm font-semibold tracking-widest text-blue-primary uppercase">
        {label}
      </span>
      <h2 className="mt-2 text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children}
    </motion.div>
  );
}
