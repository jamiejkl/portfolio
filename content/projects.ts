export type Project = {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  role: string;
  duration: string;
  projectType: string;
  tools: string[];
  methods: string[];
  researchType: string;
  year: string;
  coverImage: string;
  status: "published" | "coming-soon";
};

export const projects: Project[] = [
  {
    slug: "colleague-ai",
    title: "Colleague AI",
    tagline:
      "Understanding how an AI smart recommendation platform enhances lesson planning for K–12 teachers.",
    tags: ["UX Research", "UX Design", "AI", "EdTech"],
    role: "UX Researcher / UX Designer / UX Operations",
    duration: "6 months",
    projectType: "Team project (Team of 4)",
    tools: ["Google Forms", "Miro", "Figma", "Qualtrics", "Google G-Suite"],
    methods: ["Contextual Inquiry", "In-depth Interview", "Competitive Analysis", "Co-Design"],
    researchType: "Generative Research",
    year: "2024",
    coverImage: "/images/colleague-ai.jpg",
    status: "published",
  },
  {
    slug: "relationships-pandemic",
    title: "Relationships During the Pandemic",
    tagline:
      "Exploring how COVID-19 transformed dating culture in the U.S. — examining immediate impacts and longer-term shifts.",
    tags: ["UX Research", "Mixed Methods", "Exploratory"],
    role: "UX Researcher / UX Operations",
    duration: "9 weeks",
    projectType: "Team project (Team of 3)",
    tools: ["Google Forms", "Miro", "Google G-Suite"],
    methods: ["Public Survey", "Remote Interview", "Diary Study"],
    researchType: "Exploratory Research",
    year: "2023",
    coverImage: "/images/pandemic.jpg",
    status: "published",
  },
  {
    slug: "trellis",
    title: "Trellis",
    tagline:
      "A platform where consumers can connect, identify, and explore minority-owned small businesses for their needs.",
    tags: ["UX Research", "UX Design", "Community"],
    role: "UX Researcher / UX Designer",
    duration: "9 weeks",
    projectType: "Team project (Team of 3)",
    tools: ["Google Forms", "Lucidchart", "Figma", "Google G-Suite"],
    methods: ["User Interview", "Focus Group", "Survey"],
    researchType: "User-Centered Design",
    year: "2023",
    coverImage: "/images/trellis.jpg",
    status: "published",
  },
];

