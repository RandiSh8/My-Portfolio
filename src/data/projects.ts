export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "QuickShow - Movie Ticket Booking Platform",
    category: "Full-Stack Web & Entertainment",
    year: "2025",
    description:
      "A modern, full-stack movie ticket booking web application with Clerk authentication, TMDB movie discovery, real-time interactive seat grid selection, and an admin management dashboard.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Clerk", "Tailwind CSS"],
    githubUrl: "https://github.com/RandiSh8/QuickShow",
    liveUrl: undefined,
  },
  {
    id: 2,
    title: "WHIZBOARD - AI-Powered Collaborative Whiteboard",
    category: "AI & Real-time Collaboration",
    year: "2024",
    description:
      "AI-powered collaborative whiteboard with intelligent diagram generation, infinite canvas collaboration, real-time multi-user editing, and Google Gemini AI productivity tools.",
    technologies: ["Next.js", "React", "Google Gemini", "PostgreSQL", "Drizzle"],
    githubUrl: "https://github.com/RandiSh8/ai-agentic-whiteboard",
    liveUrl: undefined,
  },
  {
    id: 3,
    title: "UNIFY - Campus Social & Collaboration Platform",
    category: "Campus Social Platform",
    year: "2024",
    description:
      "University social media platform with authentication, role-based profiles, real-time student-to-club communication, marketplace functionality, and active campus community discussions.",
    technologies: ["React", "Node.js", "Socket.IO", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/RandiSh8",
    liveUrl: undefined,
  },
  {
    id: 4,
    title: "GREENCYCLE - Smart Waste Management Platform",
    category: "Civic Tech & Sustainability",
    year: "2024",
    description:
      "A civic-tech sustainability platform focused on responsible waste management, interactive recycling facility discovery maps, collection schedules, and environmental impact metrics.",
    technologies: ["React", "Express.js", "Leaflet", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/RandiSh8",
    liveUrl: undefined,
  },
];
