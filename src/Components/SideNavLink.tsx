import React, { ReactNode, useContext } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  name?: string;
  children: ReactNode;
  onClick: () => void;
  className?: string;
  // any other props that come into the component
}

export default function SideNavLink({
  to,
  name,
  onClick,
  children,
  className = "",
  ...props
}: Props) {
  return (
    <div
      className={`${className} w-full h-10 flex justify-center items-center`}
      {...props}
    >
      <NavLink
        onClick={onClick}
        to={to}
        className={(navData) =>
          `transition-all group-hover:transition-all flex flex-row gap-4 ${
            navData.isActive
              ? "font-bold w-full h-full bg-gradient-to-r items-center justify-center from-purple-200 dark:from-background-dark via-transparent to-transparent"
              : ""
          }`
        }
      >
        <div className="h-full ml-[-29px] w-[5px] bg-primary rounded-r-full"></div>
        <div className="flex flex-row justify-center items-center">{children}</div>
      </NavLink>
    </div>
  );
}
