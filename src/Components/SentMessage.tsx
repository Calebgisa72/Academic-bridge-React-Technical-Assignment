import React from "react";
import AvatarMaker from "./AvatarMaker";

interface SenderMessageProps {
  profileImage: string;
  name: string;
  time: string;
  message: string;
}

const SentMessage = ({
  profileImage,
  name,
  time,
  message,
}: SenderMessageProps) => {
  return (
    <div className="w-full flex gap-2 justify-end">
      <div className="flex flex-col gap-1">
        <div className="flex gap-1 justify-end">
          <p className="text-[12px] font-medium text-description">{time}</p>
          <p className="font-semibold leading-[15px]">{name}</p>
        </div>
        <div className="p-2 flex justify-end items-center gap-1 w-full rounded-[10px] rounded-tr-none bg-background dark:bg-background-dark">
          <div className="text-sm">{message}</div>
        </div>
      </div>
      <div>
        <AvatarMaker imgSrc={profileImage} />
      </div>
    </div>
  );
};

export default SentMessage;
