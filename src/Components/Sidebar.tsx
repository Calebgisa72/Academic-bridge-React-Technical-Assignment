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
import logo from "../../public/Screenshot 2024-10-28 145042.png";
import AvatarMaker from "./AvatarMaker";
import { Link } from "react-router-dom";
import { setviewMenuBar } from "../Redux/Reducers/appReducer";
import { useDispatch } from "react-redux";
import SideNavLink from "./SideNavLink";

const Sidebar = () => {
  const dispatch = useDispatch();
  const handleCloseSidebar = () => {
    dispatch(setviewMenuBar(false));
  };
  return (
    <div className="relative flex flex-col items-center p-5 border-r-[1px] h-full border-[#dbdbdb] bg-card dark:bg-card-dark overflow-y-auto custom-scrollbar">
      <img src={logo} alt="" />
      {/* <i className="fa-solid fa-train text-[22px] text-foreground dark:text-foreground-dark"></i> */}
      <div className="absolute z-30 flex flex-col gap-1 items-center top-14 mb-10 mt-2 w-full py-3">
        <SideNavLink onClick={handleCloseSidebar} to="/home">
          <House
            className="text-description w-[21px] cursor-pointer"
            strokeWidth={1.7}
          />
        </SideNavLink>
        <SideNavLink onClick={handleCloseSidebar} to="/messages">
          <div className="relative">
            <Mail
              className="text-description w-[21px] cursor-pointer"
              strokeWidth={1.7}
            />
            <div className="absolute w-2 h-2 rounded-full bg-red-600 top-[1px] right-[-1px]"></div>
          </div>
        </SideNavLink>
        <SideNavLink onClick={handleCloseSidebar} to="/notes">
          <FileText
            className="text-description w-[21px] cursor-pointer"
            strokeWidth={1.7}
          />
        </SideNavLink>
        <SideNavLink onClick={handleCloseSidebar} to="/">
          <FolderMinus
            className="text-description w-[21px] cursor-pointer"
            strokeWidth={1.7}
          />
        </SideNavLink>
        <SideNavLink onClick={handleCloseSidebar} to="/performance">
          <SquarePercent
            className="text-description w-[21px] cursor-pointer"
            strokeWidth={1.7}
          />
        </SideNavLink>
      </div>
      <div className="py-5 mt-[280px] border-y-[1px] border-[#dbdbdb] flex flex-col gap-4 items-center">
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
      <div className="absolute z-30 flex flex-col gap-1 items-center bottom-0 w-full py-2">
        <SideNavLink onClick={handleCloseSidebar} to="/settings">
          <Settings
            className="text-description w-[21px] cursor-pointer"
            strokeWidth={2}
          />
        </SideNavLink>
        <SideNavLink onClick={handleCloseSidebar} to="/profile">
          <User
            className="text-description w-[21px] cursor-pointer"
            strokeWidth={2}
          />
        </SideNavLink>
      </div>
    </div>
  );
};

export default Sidebar;
