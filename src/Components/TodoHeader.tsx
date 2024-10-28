import React, { useState } from "react";
import { ChevronDown, ChevronRight, Plus } from "lucide-react";
import { PiLineVerticalThin } from "react-icons/pi";
import { PiLinkSimpleHorizontalBold } from "react-icons/pi";
import { PiEqualsFill } from "react-icons/pi";
import { CiGrid41 } from "react-icons/ci";
import { BiLockOpen } from "react-icons/bi";

import avatar1 from "../assets/Avatar1.png";
import avatar2 from "../assets/Avatar2.png";
import avatar3 from "../assets/Avatar3.png";
import avatar4 from "../assets/Avatar4.png";
import TodoForm from "./TodoForm";

const allProfiles = [avatar1, avatar2, avatar3, avatar4];

const TodoHeader = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center text-description text-sm">
            <p className="cursor-pointer">Workspace</p>
            <ChevronRight className="w-[21px]" strokeWidth={1.7} />
            <p className="cursor-pointer">Creative</p>
            <ChevronRight className="w-[21px]" strokeWidth={1.7} />
            <p className="font-medium text-foreground dark:text-foreground-dark">
              Creative Website
            </p>
          </div>
          <div className="text-3xl font-semibold">Website Design</div>
        </div>
        <div className="flex flex-row justify-end mt-3 mb-1 sm:mt-0 sm:mb-0 sm:justify-normal sm:flex-col gap-2 items-end">
          <div className="font-medium text-sm">From 23 April</div>
          <div className="flex gap-2 items-center">
            <div className="w-[8px] h-[8px] rounded-full bg-green-600"></div>
            <div className="text-description text-sm">Updated 12 mins ago</div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row gap-2 justify-between sm:items-center">
          <div className="flex gap-2 items-center ">
            <div className="flex items-center min-w-36 gap-[5px]">
              <BiLockOpen />
              <p className="font-medium text-sm sm:text-[15px]">Limited access</p>
              <ChevronDown
                className="w-[21px] cursor-pointer mt-[3px]"
                strokeWidth={1.7}
              />
            </div>
            <PiLineVerticalThin size={26} className="text-description" />
            <div
              className="flex items-center gap-y-[1px]"
              style={{ maxWidth: "200px" }}
            >
              {allProfiles.map((imageScr, index) => (
                <div
                  key={imageScr}
                  className="relative w-[32x] h-[32px] rounded-full overflow-hidden border-[2px] border-card -ml-[6px]"
                  style={{ zIndex: index }}
                >
                  <img
                    src={imageScr}
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div
                className="relative w-[32px] h-[32px] text-white rounded-full flex items-center justify-center bg-gray-500 border-[2px] border-card -ml-[6px] cursor-pointer"
                style={{ zIndex: allProfiles.length }}
              >
                <Plus className="w-[12px] cursor-pointer" strokeWidth={2.2} />
                <p className="text-[13px]">2</p>
              </div>
            </div>
            <div className="w-[30px] h-[30px] rounded-full bg-primary flex items-center justify-center cursor-pointer">
              <Plus
                className="text-white w-[17px] cursor-pointer"
                strokeWidth={2.2}
              />
            </div>
          </div>
          <div className="flex gap-4 sm:gap-1  text-primary items-center">
            <div className="group relative cursor-pointer">
              <PiLinkSimpleHorizontalBold size={19} className="-rotate-45" />

              <div className="absolute z-10 w-[85px] right-[-35px] top-[30px] hidden group-hover:flex justify-center items-center rounded-[8px] text-white text-sm bg-primary px-2 py-1">
                Copy Link
              </div>
            </div>

            <PiLineVerticalThin
              size={26}
              className="text-description cursor-pointer"
            />
            <PiEqualsFill size={26} className="cursor-pointer" />
            <CiGrid41
              size={20}
              className="text-description ml-1 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoHeader;
