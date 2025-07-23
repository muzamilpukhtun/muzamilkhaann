import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import  contactImg  from "../../assets/images/Profile.png";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-72 object-contain rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Furqan Ahmed</h3>
        <p className="text-lg font-normal text-gray-400">
        Web Developer (MERN Stack, .NET)
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Web Developer with 2+ years of experience building fast, scalable applications using the MERN stack and .NET. Proficient in React, Node.js, MongoDB, C#, and SQL. Skilled in full-stack development, dynamic dashboards, and admin panels. Focused on clean code, performance, and solving real-world problems through impactful digital solutions.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+92 3125122251</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">muzamilkhaan24@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon" data-tooltip-id="github">
            <a target='_blank' href='https://github.com/muzamilpukhtun' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </span>
          <span className="bannerIcon" data-tooltip-id="linkedin">
            <a target='_blank' href='https://www.linkedin.com/in/muhammadmuzamilkhan/' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft