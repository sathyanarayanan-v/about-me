import {
  ExternalLink,
  Globe,
  Link as LinkIcon,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Resume = () => {
  const personalInfo = {
    name: "Sathyanarayanan Vaithianathan",
    title: "Senior Frontend Engineer",
    email: "svvsathyanarayanan@gmail.com",
    phone: "+1 (302)-867-9061",
    location: "Modesto CA, 95356",
    github: "https://github.com/sathyanarayanan-v",
    linkedin: "https://linkedin.com/in/sathyanarayananvaithianathan",
    website: "https://svaithianathan.bezzietech.com",
  };

  const projects = [
    {
      title: "MaayanCorp",
      description:
        "A comprehensive service management platform built with Next.js, featuring location-based service scheduling, member management, and business administration tools. Implements real-time data synchronization with Supabase, advanced form handling with Mantine, and responsive UI components.",
      link: "https://maayancorp.com",
      technologies:
        "Next.js 14, TypeScript, Mantine UI, Supabase, TanStack Query, Tailwind CSS",
      image: "/maayancorp.png",
      imageContain: true,
    },
    {
      title: "NestJS Starter Kit",
      description:
        "A production-ready starter application template integrating NestJS with Swagger documentation, ClerkJS authentication, and Mongoose ORM. Features include environment configuration, email integration, JWT verification, and comprehensive API documentation.",
      link: "https://github.com/bezzietech/nestjs-starter",
      technologies:
        "NestJS 10, TypeScript, Swagger, ClerkJS, Mongoose, MongoDB",
      image: "/project-1.png",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio with email integration and dynamic content",
      link: "https://github.com/sathyanarayanan-v/about-me",
      technologies: "NestJS, Handlebars, and Nodemailer",
      image: "/portfolio.jpeg",
      imageContain: true,
    },
  ];

  const experience = [
    {
      role: "Software Engineer",
      company: "My Stories Matter",
      companyLink: "https://www.mystoriesmatter.com",
      location: "Palo Alto, CA",
      period: "Jun 2023 – Present",
      logo: "/MSM.png",
      achievements: [
        "Developed an InDesign automation script using JavaScript that reduced book generation time from 7.2 hours to 1 minute, processing 200+ page books with consistent formatting",
        "Engineered dynamic image grid layouts handling 4-5 image rows and implemented smart page separation for chapter-wise content using InDesignJS",
        "Automated book formatting workflow resulting in 7+ hours of time savings per book while maintaining consistent formatting and smart image placement",
        "Migrate existing React project from JavaScript to TypeScript and support the API using NestJS, integrating Swagger UI and CRON jobs, and implementing automated email feature within an Agile Environment",
        "Incorporate OpenAI API for generating written memories with multiple user prompts, collaborating with the development team for seamless migration and optimal performance in an Agile Software Development context",
        "Migrated Redux state management to React Query v4, enhancing data fetching and caching capabilities for improved performance and scalability",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "My Stories Matter",
      companyLink: "https://www.mystoriesmatter.com",
      location: "Palo Alto, CA",
      period: "May 2022 – May 2023",
      logo: "/MSM.png",
      achievements: [
        "Migrated the existing JavaScript React project to typescript with strong type checking",
        "Developed and implemented UI components such as Infinite Scroller, Responsive Sidenav, Profile UI, and Change password screen, using technologies like React, Shadcn, Radix UI",
        "Integrated Helmet with Gatsby.JS to dynamically change page titles and descriptions, improving SEO",
        "Implemented form validation using Yup schema and integrated Formik for enhanced form handling, ensuring a Customer Facing interface",
        "Conducted unit testing using Jest and Enzyme frameworks to ensure quality and reliability of the code",
      ],
    },
    {
      role: "Software Developer",
      company: "BeezLabs",
      companyLink: "https://www.beezlabs.com",
      location: "India",
      period: "Aug 2020 – Aug 2021",
      logo: "/beezlabs.png",
      achievements: [
        "Developed and maintained a full-stack application for comfile360.com, connecting company owners with federal tax information and due dates, using VueJS, Vuetify, NestJS, MongoDB, and Docker",
        "Led the development of seven major modules, ensuring seamless integration and optimal performance of the application with an emphasis on Architectural quality",
        "Collaborated with stakeholders, gathered requirements, and translated them into technical specifications, implementing REST APIs and providing technical support to ensure successful project delivery and maintenance in a Cloud Service environment",
      ],
    },
    {
      role: "Software Developer",
      company: "Rapid Automation",
      companyLink: "https://rapidautomation.ai/",
      location: "India",
      period: "Jun 2019 – Aug 2020",
      logo: "/rap.svg",
      achievements: [
        "Developed a Low-Code platform and an Internal application leveraging Node-RED and React, and effectively managing both projects simultaneously using an Agile Software approach",
        "Successfully communicated and collaborated with four different microservices, including AWS S3, EC2, SQS, and Lambda functions, in the development of the internal project, implementing Creative Solutions",
        "Designed and implemented seamless deployment using Docker container. Protected the server using UFW firewall and also used Nginx as a web server which increased performance by up to 43%",
      ],
    },
  ];
  const skills = {
    design: {
      icon: "🎨",
      items: [
        { name: "React", type: "primary" },
        { name: "NextJS", type: "primary" },
        { name: "GatsbyJS", type: "primary" },
        { name: "NodeJS", type: "secondary" },
        { name: "NestJS", type: "secondary" },
        { name: "TypeORM", type: "secondary" },
      ],
    },
    development: {
      icon: "💻",
      items: [
        { name: "Javascript", type: "primary" },
        { name: "Typescript", type: "primary" },
        { name: "Python", type: "primary" },
        { name: "Docker", type: "secondary" },
        { name: "MongoDB", type: "secondary" },
        { name: "MySQL", type: "secondary" },
      ],
    },
  };

  const achievements = {
    company: "BezzieTech",
    role: "Entrepreneur",
    period: "Jan 2018 – Present",
    logo: "/bezzietech.svg",
    projects: [
      "Developed MaayanCorp, an innovative booking app revolutionizing reservation experiences by connecting users with a diverse network of reliable service providers in real-time. Used Technology: Next.JS, Nest.JS, MongoDB, Docker Container and Nginx",
      "Designed an advanced e-commerce app with robust rental capabilities, accommodating infinite product combinations for enhanced user convenience and integrating Google Drive for photo storage, optimizing product visuals and enhancing the overall shopping experience. Used Technology: Next.JS, Nest.JS, MongoDB, Docker Container and Nginx",
    ],
    companyLink: "https://bezzietech.com",
  };

  const education = [
    {
      school: "California State University Chico",
      degree: "Masters in Computer Science",
      period: "May 2023",
      gpa: "3.5/4.0",
      courses: [
        "Computer Security",
        "Advanced Web Technology",
        "Data Structures and Algorithms",
      ],
    },
    {
      school: "SASTRA University",
      degree: "Bachelors in Information Technology",
      period: "Jun 2019",
      gpa: "3.0/4.0",
      location: "India",
      courses: [
        "Basic web technologies",
        "Data Structures",
        "Networking",
        "DBMS",
        "Software Engineering and Development life cycle",
        "Angular 8",
        "Firebase",
        "Desktop app development using C#",
      ],
    },
  ];
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
          <h2 className="text-xl text-purple-400 mb-6">{personalInfo.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-400" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-purple-400"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/github.svg"
                  alt="github"
                  className="w-5 h-5 text-purple-400"
                />
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/linkedin.png"
                  alt="linkedin"
                  className="w-6 h-6 text-purple-400"
                />
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-purple-400" />
                <a
                  href={personalInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Latest Projects Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            Latest projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-slate-800 rounded-lg overflow-hidden`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-48 bg-white ${
                    project.imageContain ? "object-contain" : "object-cover"
                  }`}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                  >
                    <LinkIcon className="w-4 h-4" />
                    {project.technologies}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            Experience
          </h2>
          <div className="space-y-4">
            {experience.map((job, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6">
                <div className="flex items-start gap-4 max-md:flex-col ">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-12 h-12 rounded max-md:mx-auto max-md:w-auto"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <a
                      href={job.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 flex gap-2 items-center"
                    >
                      {job.company}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <div className="flex justify-between items-center mt-2 text-sm text-gray-400">
                      <span>{job.period}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2 text-gray-300">
                      {job.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-purple-400/50 before:rounded-full"
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            Skills
          </h2>
          <div className="space-y-8">
            {Object.entries(skills).map(([category, { icon, items }]) => (
              <div key={category} className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{icon}</span>
                  <h3 className="text-lg font-semibold capitalize">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-lg ${
                        skill.type === "primary"
                          ? "bg-purple-400/20 text-purple-300"
                          : "bg-slate-800 text-gray-400"
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold">{edu.school}</h3>
                <div className="text-gray-400">
                  {edu.degree} • GPA: {edu.gpa} • {edu.period}
                  {edu.location && ` • ${edu.location}`}
                </div>
                {edu.courses && (
                  <div className="mt-4 text-gray-300">
                    <span className="text-purple-400">Key courses:</span>{" "}
                    {edu.courses.join(", ")}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            Achievements
          </h2>
          <div className="bg-slate-800 rounded-lg p-6">
            <div className="flex items-start gap-4 max-md:flex-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={achievements.logo}
                alt={achievements.company}
                className="w-24 h-24 rounded max-md:mx-auto max-md:w-48"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{achievements.role}</h3>
                <a
                  href={achievements.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 flex gap-2 items-center"
                >
                  {achievements.company}
                  <ExternalLink className="w-4 h-4" />
                </a>
                <div className="text-sm text-gray-400 mt-2">
                  {achievements.period}
                </div>
                <div className="mt-4 space-y-4">
                  {achievements.projects.map((project, index) => {
                    // Split the project description and technology
                    const [description, tech] =
                      project.split("Used Technology:");
                    return (
                      <div
                        key={index}
                        className="bg-slate-900/50 rounded-lg p-4"
                      >
                        <p className="text-gray-300 mb-2">
                          {description.trim()}
                        </p>
                        <div className="text-purple-400 text-sm">
                          <span className="font-semibold">Technologies:</span>{" "}
                          {tech.trim()}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sathyanarayanan Vaithianathan | Senior Frontend Engineer",
  description:
    "Portfolio of Sathyanarayanan Vaithianathan, a Senior Frontend Engineer with expertise in React, Next.js, TypeScript, and Node.js. Experienced in building scalable web applications and enterprise solutions.",
  keywords: [
    "Sathyanarayanan Vaithianathan",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "Web Development",
    "Software Engineer",
    "Full Stack Developer",
    "JavaScript",
    "NestJS",
    "MongoDB",
    "Docker",
  ],
  authors: [{ name: "Sathyanarayanan Vaithianathan" }],
  creator: "Sathyanarayanan Vaithianathan",
  publisher: "Sathyanarayanan Vaithianathan",
  openGraph: {
    type: "profile",
    title: "Sathyanarayanan Vaithianathan - Senior Frontend Engineer Portfolio",
    description:
      "Senior Frontend Engineer specializing in React, Next.js, and TypeScript with experience in building scalable web applications.",
    images: [
      {
        url: "/og_image.png", // You'll need to create and add this image
        width: 1200,
        height: 630,
        alt: "Sathyanarayanan Vaithianathan - Portfolio",
      },
    ],
    locale: "en_US",
    url: "https://svaithianathan.bezzietech.com",
    siteName: "Sathya's Portfolio",
  },
  metadataBase: new URL("https://svaithianathan.bezzietech.com/"),
  twitter: {
    card: "summary_large_image",
    title: "Sathyanarayanan Vaithianathan - Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with expertise in React, Next.js, TypeScript, and modern web technologies.",
    images: ["/og_image.png"], // Same image as OpenGraph
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://svaithianathan.bezzietech.com",
  },
  verification: {
    google: "3PVe-_D80SYgmyrlAV7KLO8w1kIbe4ponmpj_fgYO7E",
  },
};
