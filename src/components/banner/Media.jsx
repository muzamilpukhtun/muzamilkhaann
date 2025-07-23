// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCloud,
//   faToolbox,
//   faCogs,
//   faNetworkWired,
//   faCube,
// } from "@fortawesome/free-solid-svg-icons";
// import { faGithub, faLinkedinIn,faLinux } from "@fortawesome/free-brands-svg-icons";
// import { Tooltip } from "react-tooltip";

// const Media = () => {
//   return (
//     <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
//       <div>
//         <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
//         <div className="flex gap-4">
//           <a
//             target="_blank"
//             href="https://github.com/muzamilpukhtun"
//             rel="noopener noreferrer"
//           >
//             <span className="bannerIcon" data-tooltip-id="github">
//               <FontAwesomeIcon icon={faGithub} />
//             </span>
//           </a>
//           <a
//             target="_blank"
//             href="https://www.linkedin.com/in/muhammadmuzamilkhan/"
//             rel="noopener noreferrer"
//           >
//             <span className="bannerIcon" data-tooltip-id="linkedin">
//               <FontAwesomeIcon icon={faLinkedinIn} />
//             </span>
//           </a>
//         </div>
//       </div>
//       <div>
//         <h2 className="text-base uppercase font-titleFont mb-4">
//           BEST SKILL ON
//         </h2>
//         <div className="flex gap-4">
//           <span className="bannerIcon" data-tooltip-id="cicd">
//             <FontAwesomeIcon icon={faToolbox} />
//           </span>
//           <span className="bannerIcon" data-tooltip-id="orchestration">
//             <FontAwesomeIcon icon={faCogs} />
//           </span>
//           <span className="bannerIcon" data-tooltip-id="microservices">
//             <FontAwesomeIcon icon={faCube} />
//           </span>
//           <span className="bannerIcon" data-tooltip-id="vpn">
//             <FontAwesomeIcon icon={faNetworkWired} />
//           </span>
//           <span className="bannerIcon" data-tooltip-id="cloud">
//             <FontAwesomeIcon icon={faCloud} />
//           </span>
//           <span className="bannerIcon" data-tooltip-id="linux" onMouseOver={() => console.log('Linux icon hovered')}>
//           <FontAwesomeIcon icon={faLinux} />
//         </span>
//         </div>
//       </div>
//       <Tooltip id="github" place="top" effect="solid">
//         GitHub
//       </Tooltip>
//       <Tooltip id="linkedin" place="top" effect="solid">
//         LinkedIn
//       </Tooltip>
//       <Tooltip id="cicd" place="top" effect="solid">
//         CI/CD
//       </Tooltip>
//       <Tooltip id="orchestration" place="top" effect="solid">
//         Orchestration
//       </Tooltip>
//       <Tooltip id="microservices" place="top" effect="solid">
//         Micro Services
//       </Tooltip>
//       <Tooltip id="vpn" place="top" effect="solid">
//         VPN
//       </Tooltip>
//       <Tooltip id="cloud" place="top" effect="solid">
//         Cloud
//       </Tooltip>
//       <Tooltip id="linux" place="top" effect="solid">
//         Linux Administration
//       </Tooltip>
//     </div>
//   );
// };

// export default Media;


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLaptopCode,
  faDatabase,
  faPuzzlePiece,
  faWallet,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "react-tooltip";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      {/* Social Media Section */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            target="_blank"
            href="https://github.com/muzamilpukhtun"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon" data-tooltip-id="github">
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/muhammadmuzamilkhan/"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon" data-tooltip-id="linkedin">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </span>
          </a>
        </div>
      </div>

      {/* Best Skills Section */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Best Skill On
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon" data-tooltip-id="frontend">
            <FontAwesomeIcon icon={faLaptopCode} />
          </span>
          <span className="bannerIcon" data-tooltip-id="backend">
            <FontAwesomeIcon icon={faCode} />
          </span>
          <span className="bannerIcon" data-tooltip-id="database">
            <FontAwesomeIcon icon={faDatabase} />
          </span>
          <span className="bannerIcon" data-tooltip-id="ai">
            <FontAwesomeIcon icon={faBrain} />
          </span>
          <span className="bannerIcon" data-tooltip-id="wallet">
            <FontAwesomeIcon icon={faWallet} />
          </span>
          <span className="bannerIcon" data-tooltip-id="integration">
            <FontAwesomeIcon icon={faPuzzlePiece} />
          </span>
        </div>
      </div>

      {/* Tooltips */}
      <Tooltip id="github" place="top" effect="solid">
        GitHub
      </Tooltip>
      <Tooltip id="linkedin" place="top" effect="solid">
        LinkedIn
      </Tooltip>
      <Tooltip id="frontend" place="top" effect="solid">
        Frontend Development (React, Next.js)
      </Tooltip>
      <Tooltip id="backend" place="top" effect="solid">
        Backend Development (.NET, Node.js, Express)
      </Tooltip>
      <Tooltip id="database" place="top" effect="solid">
        Database Integration (SQL, MongoDB)
      </Tooltip>
      <Tooltip id="ai" place="top" effect="solid">
        AI Integration
      </Tooltip>
      <Tooltip id="wallet" place="top" effect="solid">
        Wallet Integration (Web3/Solana/Metamask)
      </Tooltip>
      <Tooltip id="integration" place="top" effect="solid">
        Full Stack & API Integration
      </Tooltip>
    </div>
  );
};

export default Media;
