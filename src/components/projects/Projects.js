import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, p4, p5, p6, p7, p8, p9, p10, p3, p2, p1 } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  // src/data/projects.js
const projects = [
    {
      title: "Migrated On-Premises Infrastructure to AWS",
      des: "Successfully transitioned local data center operations to Amazon Web Services, optimizing performance and scalability while ensuring seamless migration of critical applications and data with minimal downtime.",
      src: p1
    },
    {
      title: "Windows Server Deployment Engineer",
      des: "Spearheaded the deployment and configuration of Windows Servers, ensuring robust security measures and efficient management of user access and services.",
      src: p2
    },
    {
      title: "Setup Pfsense IPSec/IKEv2 for Windows, iOS, and Android with RADIUS",
      des: "Implemented a secure Pfsense VPN solution using IPSec/IKEv2 protocols across multiple platforms, integrating RADIUS for enhanced authentication and access control.",
      src: p3
    },
    {
      title: "Residential Static Proxy IP Integration for Deployment",
      des: "Integrated residential static proxy IPs to facilitate secure and anonymous operations, enhancing privacy and bypassing geographical restrictions without compromising speed.",
      src: p4
    },
    {
      title: "OpenVPN with 2FA on Linux",
      des: "Configured OpenVPN on Linux systems with two-factor authentication, bolstering network security by adding an additional layer of user verification.",
      src: p5
    },
    {
      title: "Multiple Directory & SQL Backup through Shell Script",
      des: "Developed and maintained shell scripts for automated backups of directories and SQL databases, ensuring data integrity and availability in recovery scenarios.",
      src: p6
    },
    {
      title: "Java-Based Microservice Deployment on AKS",
      des: "Engineered and deployed Java-based microservices on Azure Kubernetes Service, optimizing resource utilization and scaling capabilities within a cloud-native architecture.",
      src: p7
    },
    {
      title: "Node-Based Microservice Deployment on EKS",
      des: "Rolled out Node-based microservices on Amazon Elastic Kubernetes Service, leveraging container orchestration to enhance deployment speeds and system resilience.",
      src: p8
    },
    {
      title: "CI/CD Pipeline for Node and Laravel on GitHub Actions",
      des: "Configured continuous integration and continuous deployment pipelines for Node and Laravel projects using GitHub Actions, improving development workflows and code quality assurance.",
      src: p9
    },
    {
      title: "CI/CD Pipeline for Java Projects on Jenkins",
      des: "Established a robust CI/CD pipeline for Java projects using Jenkins, automating builds, tests, and deployments to streamline development processes and enhance productivity.",
      src:  p10
    }
  ];

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      {projects.map((project, index) => (
        <ProjectsCard
          key={index}
          title={project.title}
          des={project.des}
          src={project.src}
        />
      ))}

      </div>
    </section>
  );
}

export default Projects