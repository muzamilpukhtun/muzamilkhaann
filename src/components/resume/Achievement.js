import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const achievements = [
  {
    title: "Enhanced CI/CD Processes",
    subTitle: "Streamlined deployment workflows",
    result: "Success",
    des: "Configured and maintained Jenkins, GitHub Actions, Ansible, and Terraform for streamlined CI/CD deployments at DeliveryDevs and 360factors, improving deployment efficiency and reliability."
  },
  {
    title: "Advanced Cloud Management",
    subTitle: "Expert in cloud infrastructure",
    result: "Success",
    des: "Managed and deployed applications using Azure, AWS, and Oracle Cloud across multiple roles, demonstrating expertise in cloud infrastructure and application deployment."
  },
  {
    title: "Security and Monitoring Implementation",
    subTitle: "Enhanced system security and performance",
    result: "Success",
    des: "Implemented security measures and monitoring tools including Wazuh, Zabbix, and Grafana for enhanced system security and performance monitoring."
  },
  {
    title: "Automation and Scripting",
    subTitle: "Increased operational efficiency",
    result: "Success",
    des: "Automated tasks using Bash and Python scripts, reducing manual effort and increasing operational efficiency in various positions."
  },
  {
    title: "Database Management",
    subTitle: "Ensured data integrity and availability",
    result: "Success",
    des: "Maintained and managed PostgreSQL, MongoDB, and MySQL databases, including backup and restoration, ensuring data integrity and availability."
  },
  {
    title: "Proficient in Virtualization and Networking",
    subTitle: "Strong skills in virtualization and network security",
    result: "Success",
    des: "Configured and managed VMware ESXi, Hyper-V, and various VPN technologies, showcasing strong skills in virtualization and network security."
  },
  {
    title: "Technical Support and Troubleshooting",
    subTitle: "Effective issue resolution",
    result: "Success",
    des: "Provided comprehensive technical support for Windows and Linux systems, networks, and servers, effectively resolving issues and maintaining system functionality."
  },
  {
    title: "VPN and Security Optimization",
    subTitle: "Enhanced performance and security",
    result: "Success",
    des: "Configured and optimized various VPN servers and security measures at GADITEK, enhancing performance and security for remote access and content availability."
  }
];

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      <div className="flex-1">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Company Achievements</h2>
        </div>
        <div className="mt-6 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {achievements.slice(0, 4).map((achievement, index) => (
            <ResumeCard
              key={index}
              title={achievement.title}
              subTitle={achievement.subTitle}
              result={achievement.result}
              des={achievement.des}
            />
          ))}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Personal Achievements</h2>
        </div>
        <div className="mt-6 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {achievements.slice(4, 8).map((achievement, index) => (
            <ResumeCard
              key={index}
              title={achievement.title}
              subTitle={achievement.subTitle}
              result={achievement.result}
              des={achievement.des}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
