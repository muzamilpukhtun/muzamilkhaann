import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Furqan Ahmed</h3>
        <p className="text-lg font-normal text-gray-400">
        Senior DevOps Engineer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Dynamic DevOps Engineer with 6 years of experience in IT infrastructure and software deployment. Proficient in Virtualization, Cloud, Docker, Kubernetes, Git, Ansible, Jenkins, Bash, and Terraform. Ready to bring enthusiasm, adaptability, and a fresh perspective to your team.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+92 3312527961</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">furqanahmed29499@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon" data-tooltip-id="github">
            <a target='_blank' href='https://github.com/Furqanahmed19' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </span>
          <span className="bannerIcon" data-tooltip-id="linkedin">
            <a target='_blank' href='https://www.linkedin.com/in/furqan-ahmed-a5a16b150/' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft