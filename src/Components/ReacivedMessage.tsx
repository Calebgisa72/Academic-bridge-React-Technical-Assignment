import React from 'react';
import AvatarMaker from './AvatarMaker';
import { Info } from 'lucide-react';
import VoiceNote from './VoiceNote';

interface ReacivedMessageProps {
  profileImage: string;
  name: string;
  time: string;
  message?: string;
  voiceNoteMessage?: boolean;
}

const ReacivedMessage = ({
  profileImage,
  name,
  time,
  message,
  voiceNoteMessage
}: ReacivedMessageProps) => {
  return (
    <div className="w-full flex gap-2">
      <div>
        <AvatarMaker imgSrc={profileImage} />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          <p className="font-semibold leading-[15px]">{name}</p>
          <p className="text-[12px] font-medium text-description">{time}</p>
        </div>
        {message && (
          <div className="group p-2 flex items-center gap-1 w-full rounded-[10px] rounded-tl-none bg-background dark:bg-background-dark">
            <div className="text-sm">{message}</div>
            <div className="relative text-primary ml-auto hidden group-hover:flex">
              <Info className="text-primary w-[21px] cursor-pointer" strokeWidth={2}></Info>
              <div className="absolute z-50 right-[-21px] top-[-40px] hidden group-hover:flex flex-col items-center justify-center">
                <div className=" rounded-[8px] text-white bg-primary px-2 py-1">Report</div>
                <div className="w-[7px] h-1 rounded-b-full bg-primary "></div>
              </div>
            </div>
          </div>
        )}
        {voiceNoteMessage && <VoiceNote />}
      </div>
    </div>
  );
};

export default ReacivedMessage;
