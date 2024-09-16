import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import CCNA from '../../assets/images/CCNA.jpg'
const achievements = [
  {
    title: 'CEH (Certified Ethical Hacker)',
    subTitle: 'Expert in DevOps practices and technologies',
    src: "https://cdn.prod.website-files.com/611d71e2f411757883bc9bb5/616dd9d2cbea0f25d4b95837_ceh-small.png"
  },
  {
    title: 'CCNA (Certified Cisco Network Associate)',
    subTitle: 'Expert in networking and infrastructure',
    src: CCNA
  },
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
    title: 'Microsoft Azure Administrator Associate (Certified)',
    subTitle: 'Proficient in Azure management',
    src: "https://images.credly.com/images/35d18649-95c6-4c78-b07a-cfc1362318f3/azure-administrator-associate.png"
  },
  {
    title: 'Microsoft Azure DevOps (Certified)',
    subTitle: 'Expert in DevOps practices and cloud management',
    src: "https://mdfarragher.com/wp-content/uploads/2023/03/AZ-400c-400x284.png"
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
  },
];

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-10 lg:gap-20"
    >
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">Company Achievements</h2>
          </div>
          <div className="mt-6 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            {achievements.slice(0, 6).map((achievement, index) => (
              <ResumeCard
                key={index}
                src={achievement.src}
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
            {achievements.slice(6, 12).map((achievement, index) => (
              <ResumeCard
                key={index}
                src={achievement.src}
                title={achievement.title}
                subTitle={achievement.subTitle}
                result={achievement.result}
                des={achievement.des}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
