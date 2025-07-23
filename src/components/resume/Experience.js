import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const experienceData = [
  {
    title: ".NET Developer",
    subTitle: "Alshifa Eye Trust Hospital (July 2025 – Present)",
    result: "Pakistan",
    des: "Built and maintained robust internal web applications using ASP.NET and C#. Integrated secure authentication, handled SQL Server databases, and implemented RESTful APIs. Collaborated on frontend improvements with React. Optimized application performance and participated in agile sprints and code reviews."
  },
  {
    title: "WordPress Developer",
    subTitle: "Tech Solutions Pro (March 2025 – June 2025)",
    result: "Pakistan",
    des: "Developed and customized WordPress websites using Elementor and custom themes. Integrated WooCommerce for e-commerce projects and developed custom plugins. Managed domain setup, performance optimization, and client support for ongoing site updates and enhancements."
  },
  {
    title: "MERN Stack Developer",
    subTitle: "Digital Faaz (August 2024 – January 2025)",
    result: "Pakistan",
    des: "Built full-stack web applications using the MERN stack. Developed dynamic admin panels, dashboards, and REST APIs. Integrated MongoDB with Express and Node.js backend, and styled frontend interfaces using Tailwind CSS. Deployed applications on Vercel and managed version control with GitHub."
  },
  {
    title: "Freelance Web Developer",
    subTitle: "Remote · Various Clients (2023 – Present)",
    result: "Worldwide",
    des: "Delivered responsive, scalable web apps for clients across e-commerce, education, and fintech sectors. Specialized in MERN, .NET, and WordPress stacks. Integrated Supabase, Firebase, GraphQL, and wallet/AI services. Ensured SEO-friendly, pixel-perfect UIs with responsive design and clean code. Successfully completed 15+ freelance projects with high client satisfaction."
  }
];

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      <div className="flex-1">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {experienceData.slice(0, 3).map((experience, index) => (
            <ResumeCard
              key={index}
              title={experience.title}
              subTitle={experience.subTitle}
              result={experience.result}
              des={experience.des}
            />
          ))}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {experienceData.slice(3, 5).map((experience, index) => (
            <ResumeCard
              key={index}
              title={experience.title}
              subTitle={experience.subTitle}
              result={experience.result}
              des={experience.des}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
