import React from 'react';
import { FaCirclePlay } from 'react-icons/fa6';

const VoiceNote = () => {
  return (
    <div className="flex items-center bg-background dark:bg-background-dark rounded-[8px] p-2 space-x-3">
      <FaCirclePlay size={35} className="text-primary cursor-pointer" />

      <div
        data-testid="voice-note"
        className="flex space-x-[2px] items-center w-full rounded-[10px] rounded-tl-none bg-background dark:bg-background-dark"
      >
        <div className="w-[3px] h-2 bg-primary rounded-sm"></div>
        <div className="w-[3px] h-4 bg-primary rounded-sm"></div>
        <div className="w-[3px] h-1 bg-primary rounded-sm"></div>
        <div className="w-[3px] h-3 bg-primary rounded-sm"></div>
        <div className="w-[3px] h-6 bg-primary rounded-sm"></div>
        <div className="w-[3px] h-1 bg-primary rounded-sm"></div>
        <div className="w-[3px] h-4 bg-primary rounded-sm"></div>
        <div className="w-[3px] h-3 bg-primary rounded-sm"></div>
        <div className="w-[3px] h-2 bg-primary rounded-sm"></div>
        <div className="w-[3px] h-5 bg-primary rounded-sm"></div>
        <div className="w-[3px] h-1 bg-primary rounded-sm"></div>
        <div className="w-[3px] h-6 bg-primary rounded-sm"></div>
        <div className="w-[3px] h-1 bg-primary rounded-sm"></div>
        <div className="w-[3px] h-4 bg-primary rounded-sm"></div>
        <div className="w-[3px] h-3 bg-primary rounded-sm"></div>
        <div className="w-[3px] h-2 bg-primary rounded-sm"></div>
        <div className="w-[3px] h-5 bg-primary rounded-sm"></div>
        <div className="w-[3px] h-1 bg-primary rounded-sm"></div>
      </div>
    </div>
  );
};

export default VoiceNote;
