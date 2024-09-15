import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const experienceData = [
  {
    title: "Senior DevOps Engineer",
    subTitle: "DeliveryDevs (July 2024 – Present)",
    result: "Pakistan",
    des: "Troubleshooting and configuring Windows/Linux systems, networks, and servers. CI/CD setup with Jenkins, GitHub Actions, Ansible, and Terraform. Managing Docker and Kubernetes. Monitoring with Zabbix and Grafana. Security management with Wazuh. Database maintenance (PostgreSQL, MongoDB, MySQL). Cloud management (Azure, AWS, Oracle). Application deployment (PHP, Laravel, Node.js, React)."
  },
  {
    title: "DevOps Engineer",
    subTitle: "360factors (April 2023 – July 2024)",
    result: "Pakistan",
    des: "Technical support and server management. Software version control on Bitbucket. CI/CD with Jenkins, Ansible, and Terraform. Managing Docker and Kubernetes. Monitoring with Zabbix and ELK. Security management with Wazuh. Web server configuration (Apache Tomcat, Nginx). Cloud and Office 365 management."
  },
  {
    title: "System Administrator",
    subTitle: "Bit-Development (September 2022 – April 2023)",
    result: "Pakistan",
    des: "Technical support and server management. CI/CD with Jenkins. Docker management. IIS server configuration. Database management (SQL Server, MySQL). AWS Cloud and Office 365 management. Network security and virtualization (VMware, Hyper-V). Firewall and VPN configuration."
  },
  {
    title: "Associate Engineer (PureVPN)",
    subTitle: "GADITEK (April 2022 – August 2022)",
    result: "Pakistan",
    des: "Troubleshooting Linux and VPN servers. VPN configuration (OpenVPN, WireGuard, IPsec). Traffic management with HAProxy and Squid Proxy. Monitoring with Grafana and Prometheus. Automation with Bash and Ansible."
  },
  {
    title: "System Support Engineer",
    subTitle: "GEO TV (January 2019 – March 2022)",
    result: "Pakistan",
    des: "Technical support and server management. Virtualization (VMware, Proxmox). Network and security management. Backup and disaster recovery (Veeam). VPN and firewall configuration. IT inventory management."
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
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
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
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2022</p>
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
