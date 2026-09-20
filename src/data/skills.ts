export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Flutter",
      "HTML5/CSS3",
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      "Node.js",
      "Express.js",
      "Rest API",
      "MSSQL",
      "Neon",
      "PostgreSQL",
    ],
  },
  {
    title: "Tools & Other",
    skills: [
      "VS Code",
      "GitHub",
      "Git",
      "C",
      "Python",
      "Figma",
      "Java",
      "Postman",
    ],
  },
];
