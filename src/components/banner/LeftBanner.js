import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["SysOps Administration.", "DevOps Engineering.", "Site Reliability Engineering.","Infrastructure Modernization","VPN Administration "],
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
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Dynamic DevOps Engineer with 6 years of comprehensive experience in IT infrastructure management and software deployment, 
        proficient in Virtualization, Cloud, Docker, Kubernetes, Git, Ansible, Jenkins bash and terraform. Eager to contribute enthusiasm, 
        adaptability, and a fresh perspective to a dynamic team.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner