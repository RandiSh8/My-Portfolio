import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Randi Kaweesha | IT Undergraduate",
  description:
    "Personal portfolio of Randi Kaweesha — a 3rd-year IT undergraduate passionate about full-stack development, backend engineering, AI, and cloud technologies.",
  keywords: [
    "Randi Kaweesha",
    "Portfolio",
    "University of Moratuwa",
    "IT Undergraduate",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Randi Kaweesha" }],
  openGraph: {
    title: "Randi Kaweesha | IT Undergraduate",
    description:
      "Personal portfolio of Randi Kaweesha — a 3rd-year IT undergraduate passionate about full-stack development, backend engineering, AI, and cloud technologies.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg-primary text-text-primary font-sans">
        {children}
      </body>
    </html>
  );
}
