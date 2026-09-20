export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "UNIFY - Campus Social & Collaboration Platform",
    category: "Campus Social Platform",
    year: "2024",
    description:
      "University social media platform with authentication, role-based profiles, real-time student-to-club communication, marketplace functionality, and active campus community discussions.",
    technologies: ["React", "Node.js", "Socket.IO", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "#", // TODO: Add actual GitHub URL
    liveUrl: undefined,
    image: "/projects/unify.jpg",
  },
  {
    id: 2,
    title: "WHIZBOARD - AI-Powered Collaborative Whiteboard",
    category: "AI & Real-time Collaboration",
    year: "2024",
    description:
      "AI-powered collaborative whiteboard with intelligent diagram generation, infinite canvas collaboration, real-time multi-user editing, and Google Gemini AI productivity tools.",
    technologies: ["Next.js", "React", "Google Gemini", "PostgreSQL", "Drizzle"],
    githubUrl: "#", // TODO: Add actual GitHub URL
    liveUrl: undefined,
    image: "/projects/whizboard.jpg",
  },
  {
    id: 3,
    title: "GREENCYCLE - Smart Waste Management Platform",
    category: "Civic Tech & Sustainability",
    year: "2024",
    description:
      "A civic-tech sustainability platform focused on responsible waste management, interactive recycling facility discovery maps, collection schedules, and environmental impact metrics.",
    technologies: ["React", "Express.js", "Leaflet", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "#", // TODO: Add actual GitHub URL
    liveUrl: undefined,
    image: "/projects/greencycle.jpg",
  },
];
