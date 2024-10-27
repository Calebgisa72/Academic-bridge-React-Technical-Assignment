import React from "react";

interface AvatarMakerProps {
  imgSrc: string;
  active?: boolean;
}

const AvatarMaker = ({ imgSrc, active }: AvatarMakerProps) => {
  return (
    <div className="relative flex items-center">
      <div className="w-[30px] h-[30px] rounded-full object-contain overflow-hidden cursor-pointer">
        <img src={imgSrc} alt="" className="w-full" />
      </div>
      {active && (
        <div className="absolute w-[13px] h-[13px] rounded-full border-[2px] border-card bg-green-600 top-[-4px] right-[-3px]"></div>
      )}
    </div>
  );
};

export default AvatarMaker;
