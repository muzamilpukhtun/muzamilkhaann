import React from "react";
import { Profile } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full mb-10 lgl:w-1/2 flex justify-center items-end relative h-[600px]">
      <img
        className="w-[300px] h-[400px] object-contain lgl:w-[500px] lgl:h-[480px] z-10 absolute bottom-1/3"
        src={Profile}
        alt="bannerImg"
      />
      {/*<div className="absolute bottom-0 w-full h-[300px] lgl:h-[300px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center overflow-hidden"></div>*/}
    </div>
  );
};

export default RightBanner;
