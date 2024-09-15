import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faToolbox, faCogs, faNetworkWired, faCube } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Tooltip } from 'react-tooltip';

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
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
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon" data-tooltip-id="cicd">
            <FontAwesomeIcon icon={faToolbox} />
          </span>
          <span className="bannerIcon" data-tooltip-id="orchestration">
            <FontAwesomeIcon icon={faCogs} />
          </span>
          <span className="bannerIcon" data-tooltip-id="kubernetes">
            <FontAwesomeIcon icon={faCube} />
          </span>
          <span className="bannerIcon" data-tooltip-id="vpn">
            <FontAwesomeIcon icon={faNetworkWired} />
          </span>
          <span className="bannerIcon" data-tooltip-id="cloud">
            <FontAwesomeIcon icon={faCloud} />
          </span>
        </div>
      </div>
      <Tooltip id="github" place="top" effect="solid">
        GitHub
      </Tooltip>
      <Tooltip id="linkedin" place="top" effect="solid">
        LinkedIn
      </Tooltip>
      <Tooltip id="cicd" place="top" effect="solid">
        CI/CD
      </Tooltip>
      <Tooltip id="orchestration" place="top" effect="solid">
        Orchestration
      </Tooltip>
      <Tooltip id="kubernetes" place="top" effect="solid">
        Kubernetes
      </Tooltip>
      <Tooltip id="vpn" place="top" effect="solid">
        VPN
      </Tooltip>
      <Tooltip id="cloud" place="top" effect="solid">
        Cloud
      </Tooltip>
    </div>
  );
};

export default Media;
