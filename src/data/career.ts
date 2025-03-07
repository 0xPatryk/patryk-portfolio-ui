export type CareerItem = {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
  logo?: string;
};

export const careerHistory: CareerItem[] = [
  {
    id: "job-1",
    title: "Senior Software Engineer",
    company: "TechInnovate Solutions",
    location: "Remote",
    period: "2021 - Present",
    description: "Leading development of high-performance web applications and enterprise solutions for clients across fintech and e-commerce industries.",
    highlights: [
      "Architected and implemented a real-time analytics dashboard reducing data processing time by 60%",
      "Led a team of 5 developers in delivering a complete e-commerce platform rebuild",
      "Introduced automated testing practices that improved code quality and reduced bugs by 45%"
    ],
    technologies: ["React", "TypeScript", "Node.js", "AWS", "GraphQL"],
    logo: "/logos/techinnovate.svg"
  },
  {
    id: "job-2",
    title: "Full Stack Developer",
    company: "Digital Momentum",
    location: "Berlin, Germany",
    period: "2018 - 2021",
    description: "Developed scalable web applications and APIs for startups and medium-sized businesses, with a focus on performance optimization.",
    highlights: [
      "Built and maintained RESTful APIs serving over 50,000 daily active users",
      "Optimized database queries resulting in 35% faster page load times",
      "Collaborated with design team to implement responsive, accessible UIs"
    ],
    technologies: ["JavaScript", "Python", "Django", "PostgreSQL", "Docker"],
    logo: "/logos/digitalmomentum.svg"
  },
  {
    id: "job-3",
    title: "Software Developer",
    company: "InnoTech Systems",
    location: "Warsaw, Poland",
    period: "2016 - 2018",
    description: "Contributed to the development of enterprise-level software solutions for logistics and supply chain management.",
    highlights: [
      "Implemented inventory tracking system used by major retail clients",
      "Developed data migration tools for legacy system transitions",
      "Created internal tools that improved team productivity by 25%"
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "React", "Redux"],
    logo: "/logos/innotech.svg"
  },
  {
    id: "job-4",
    title: "Junior Developer",
    company: "CodeCraft Studio",
    location: "Krakow, Poland",
    period: "2014 - 2016",
    description: "Assisted in development of web applications and learned full-stack development practices while contributing to client projects.",
    highlights: [
      "Contributed to 10+ client websites and applications",
      "Developed front-end components using modern JavaScript frameworks",
      "Participated in code reviews and agile development processes"
    ],
    technologies: ["HTML/CSS", "JavaScript", "PHP", "Laravel", "MySQL"],
    logo: "/logos/codecraft.svg"
  }
]; 