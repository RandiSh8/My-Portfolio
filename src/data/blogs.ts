export interface BlogPost {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  readingTime: string;
  url: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: "Sustainability & Energy",
    date: "Nov 7, 2025",
    title:
      "Smart Energy Use in Daily Life: Affordable and Sustainable Solutions",
    excerpt:
      "The rapid growth in energy demand around the world has increased the need for better energy management strategies, focusing on affordable and sustainable everyday solutions.",
    readingTime: "7 min read",
    url: "https://medium.com/@RandiSh8/smart-energy-use-in-daily-life-affordable-and-sustainable-solutions-for-the-future-7920d9c93249",
  },
  {
    id: 2,
    category: "Virtual Reality & AR",
    date: "May 10, 2025",
    title: "“From Real to Virtual: The Rise of VR and AR Technologies”",
    excerpt:
      "We are at the edge of a new frontier — exploring how immersive technology, VR, and AR are blurring the boundaries between the physical and digital worlds.",
    readingTime: "5 min read",
    url: "https://medium.com/@RandiSh8/from-real-to-virtual-the-rise-of-vr-and-ar-technologies-0c4576d5b2a6",
  },
  {
    id: 3,
    category: "AI & Security",
    date: "Apr 23, 2025",
    title: "“I’m Not a Robot”: The Saga of CAPTCHA and Human Frustration",
    excerpt:
      "An engaging look into why AI can write poetry and drive cars, yet CAPTCHAs still frustrate humans, exploring bot protection evolution and human verification.",
    readingTime: "5 min read",
    url: "https://medium.com/@RandiSh8/im-not-a-robot-the-saga-of-captcha-and-human-frustration-11aeb6965faf",
  },
  {
    id: 4,
    category: "API & Architecture",
    date: "Apr 1, 2025",
    title: "API Chronicles - Exploring the World of APIs",
    excerpt:
      "Exploring the foundational world of APIs, understanding RESTful concepts, and how modern software components communicate seamlessly across distributed systems.",
    readingTime: "4 min read",
    url: "https://medium.com/@RandiSh8/api-chronicles-exploring-the-world-of-apis-ee4520739e6f",
  },
  {
    id: 5,
    category: "Cloud Computing",
    date: "Mar 14, 2025",
    title: "Cloud Computing: Insights into the Digital Sky",
    excerpt:
      "Demystifying cloud computing paradigms, exploring scalable infrastructure, cloud services, and how the digital sky powers modern web applications.",
    readingTime: "3 min read",
    url: "https://medium.com/@RandiSh8/cloud-computing-insights-into-the-digital-sky-757bbd60163a",
  },
];
