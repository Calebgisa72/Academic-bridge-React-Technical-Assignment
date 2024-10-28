import { CalendarDays, EllipsisVertical, Mic, Minus } from "lucide-react";
import { RiTeamLine } from "react-icons/ri";
import avatar1 from "../assets/Avatar1.png";
import avatar2 from "../assets/Avatar2.png";
import avatar3 from "../assets/Avatar3.png";
import avatar4 from "../assets/Avatar4.png";
import avatar5 from "../assets/Avatar5.png";
import avatar6 from "../assets/Avatar2.png";
import { CiStar } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import React, { useEffect, useRef } from "react";
import ReacivedMessage from "./ReacivedMessage";
import SentMessage from "./SentMessage";

const allProfiles = [avatar1, avatar2, avatar3, avatar4, avatar5];

const RightSidebar = () => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, []);
  return (
    <div className="flex flex-col w-[90%] sm:w-[325px] h-full bg-card dark:bg-card-dark text-foreground dark:text-foreground-dark p-5 gap-5">
      <div className="flex justify-between">
        <h3 className="font-medium">Project Overview</h3>
        <p className="text-description text-sm cursor-pointer">See all</p>
      </div>
      <div className="px-5 py-3 text-sm grid grid-cols-2 gap-y-2 font-medium bg-background dark:bg-background-dark rounded-[8px]">
        <div className="flex gap-2 items-center text-description">
          <CalendarDays className="w-[18px] cursor-pointer" strokeWidth={1.5} />
          <p>Timeline:</p>
        </div>
        <p className="text-foreground dark:text-foreground-dark">
          Apr 14 - May 7
        </p>

        <div className="flex gap-2 items-center text-description">
          <RiTeamLine size={19} />
          <p>Team:</p>
        </div>
        <div
          className="flex flex-wrap gap-y-[1px]"
          style={{ maxWidth: "200px" }}
        >
          {allProfiles.map((imageScr, index) => (
            <div
              key={imageScr}
              className="relative w-[30x] h-[30px] rounded-full overflow-hidden border-[2px] border-card -ml-[6px]"
              style={{ zIndex: index }}
            >
              <img
                src={imageScr}
                alt="Team member"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex gap-2 items-center text-description">
          <CiStar size={21} />
          <p>Status:</p>
        </div>
        <p className="text-foreground dark:text-foreground-dark">In Progress</p>
      </div>

      <div className="flex flex-col gap-[6px] h-full">
        <div className="flex items-center">
          <div className="flex gap-2 items-center">
            <p className="text-[15px] font-medium text-foreground dark:text-foreground-dark">
              Team Chart
            </p>
            <p className="text-[13px] text-description">24 April 2023</p>
          </div>
          <div className="ml-auto">
            <EllipsisVertical className="w-[21px] cursor-pointer" />
          </div>
          <div></div>
        </div>
        <div
          ref={messagesEndRef}
          className="h-[340px] w-full flex flex-col gap-3 rounded-[8px] overflow-y-auto custom-scrollbar pr-1"
        >
          <ReacivedMessage
            profileImage={avatar3}
            name="Rebeca Hosty"
            time="12:33 AM"
            message="Have a great working week!"
          />
          <ReacivedMessage
            profileImage={avatar1}
            name="Devid Mackurat"
            time="12:33 AM"
            message="Have a great working week!"
          />
          <SentMessage
            profileImage={avatar5}
            name="Kate Watson"
            time="12:34 AM"
            message="What do you think about new Team Section?"
          />
          <ReacivedMessage
            profileImage={avatar3}
            name="Rebeca Hosty"
            time="12:35 AM"
            voiceNoteMessage={true}
          />
          <SentMessage
            profileImage={avatar5}
            name="Kate Watson"
            time="12:40 AM"
            message="Ok, thanks for the tips!"
          />
        </div>
        <div className="w-full mt-auto bg-background dark:bg-background-dark h-[36x] flex items-center px-[4px] overflow-hidden rounded-[8px]">
          <input
            type="text"
            placeholder="Your Message..."
            className="w-[70%] text-sm placeholder:text-sm bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark h-full outline-none py-2 pr-[8px]
         pl-[6px]"
          />
          <div className="flex ml-auto items-center w-[70px]">
            <Mic
              className="text-description w-[24px] cursor-pointer"
              strokeWidth={2.7}
            />
            <Minus className="text-description w-[40px] rotate-90" />
            <IoIosSend size={32} className="text-primary cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
