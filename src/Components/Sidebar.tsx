import {
  FileText,
  FolderMinus,
  House,
  Mail,
  Plus,
  Settings,
  SquarePercent,
  User,
} from "lucide-react";
import avatar1 from "../assets/Avatar1.png";
import avatar2 from "../assets/Avatar4.png";
import avatar3 from "../assets/Avatar3.png";
import React from "react";
import AvatarMaker from "./AvatarMaker";
import { Link } from "react-router-dom";
import { setviewMenuBar } from "../Redux/Reducers/appReducer";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const handleCloseSidebar = () => {
    dispatch(setviewMenuBar(false));
  };
  return (
    <div className="flex flex-col items-center p-5 border-r-[1px] h-full border-[#dbdbdb] bg-card dark:bg-card-dark overflow-y-auto custom-scrollbar">
      <i className="fa-solid fa-train text-[22px] text-foreground dark:text-foreground-dark"></i>
      <div className="flex flex-col gap-4 items-center my-9">
        <Link to={"/home"}>
          <House
            onClick={handleCloseSidebar}
            className="text-description w-[21px] cursor-pointer"
            strokeWidth={1.7}
          />
        </Link>
        <Link to={"/messages"}>
          <div className="relative">
            <Mail
              onClick={handleCloseSidebar}
              className="text-description w-[21px] cursor-pointer"
              strokeWidth={1.7}
            />
            <div className="absolute w-2 h-2 rounded-full bg-red-600 top-[1px] right-[-1px]"></div>
          </div>
        </Link>
        <Link to={"/notes"}>
          <FileText
            onClick={handleCloseSidebar}
            className="text-description w-[21px] cursor-pointer"
            strokeWidth={1.7}
          />
        </Link>
        <Link to={"/"}>
          <FolderMinus
            onClick={handleCloseSidebar}
            className="text-description w-[21px] cursor-pointer"
            strokeWidth={1.7}
          />
        </Link>
        <Link to={"/performance"}>
          <SquarePercent
            onClick={handleCloseSidebar}
            className="text-description w-[21px] cursor-pointer"
            strokeWidth={1.7}
          />
        </Link>
      </div>
      <div className="py-5 border-y-[1px] border-[#dbdbdb] flex flex-col gap-4 items-center">
        <AvatarMaker imgSrc={avatar1} active={true} />
        <AvatarMaker imgSrc={avatar2} active={true} />
        <AvatarMaker imgSrc={avatar3} />
        <div className="w-[30px] h-[30px] rounded-full border-[2px] border-dashed border-[#dbdbdb] flex items-center justify-center cursor-pointer">
          <Plus
            className="text-description w-[17px] cursor-pointer"
            strokeWidth={1.7}
          />
        </div>
      </div>
      <div className="mt-auto flex flex-col gap-4">
        <Link to={"/settings"}>
          <Settings
            onClick={handleCloseSidebar}
            className="text-description w-[21px] cursor-pointer"
            strokeWidth={2}
          />
        </Link>
        <Link to={"/profile"}>
          <User
            onClick={handleCloseSidebar}
            className="text-description w-[21px] cursor-pointer"
            strokeWidth={2}
          />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
