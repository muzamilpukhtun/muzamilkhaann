import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Full-Stack Web Developer",
      "MERN Stack Developer",
      ".NET Web Developer",
      "Frontend & Backend Expert",
      "The On Top"
    ],
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
          Hi, I'm <span className="text-designColor capitalize">Muzamil Khaann</span>
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
        Bringing 2 years of experience in MERN stack and .NET development, I help businesses build fast, scalable web apps, admin panels, and dashboards that are both powerful and user-friendly. I write clean, efficient code and specialize in solving complex problems — turning ideas into smooth, reliable digital solutions that deliver real results.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner
