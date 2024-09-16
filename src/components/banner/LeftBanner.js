import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["SysOps Administrator.", "DevOps Engineering.", "Site Reliability Engineer.","Infrastructure Modernization Specialist","VPN Administrator "],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Furqan Ahmed</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 text-justify tracking-wide">
        Senior DevOps Engineer with over 6+ years of extensive experience in IT infrastructure management, system administration, VPN administration and DevOps practices. Proficient in leveraging tools like Terraform for infrastructure as code, Jenkins for continuous integration and deployment, and Ansible for configuration management. Experienced with cloud platforms including AWS, Azure, and Oracle Cloud, as well as virtualization technologies like VMware ESXi, VCSA, and Proxmox. Skilled in Windows Server and Linux administration, with strong scripting abilities in Bash and Python. Seeking a challenging role to orchestrate seamless integration and deployment processes, ensure system reliability, and foster innovative solutions.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner