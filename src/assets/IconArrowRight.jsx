import React from "react";
import { twMerge } from "tailwind-merge";

function IconArrowRight({ className, svgClassName, ...rest }) {
  return (
    <div
      className={twMerge(
        "flex items-center justify-center",
        "w-[526px] h-[305px]",
        className
      )}
      {...rest}
    >
      <svg
        width="22"
        height="15"
        viewBox="0 0 22 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={twMerge("w-full h-full", svgClassName)}
      >
        <path
          d="M1.37958 6.52167C0.827293 6.52167 0.379578 6.96938 0.379578 7.52167C0.379578 8.07395 0.827293 8.52167 1.37958 8.52167L1.37958 6.52167ZM21.1267 8.22877C21.5172 7.83825 21.5172 7.20508 21.1267 6.81456L14.7627 0.450599C14.3722 0.0600743 13.739 0.0600743 13.3485 0.450599C12.958 0.841123 12.958 1.47429 13.3485 1.86481L19.0053 7.52167L13.3485 13.1785C12.958 13.569 12.958 14.2022 13.3485 14.5927C13.739 14.9833 14.3722 14.9833 14.7627 14.5927L21.1267 8.22877ZM1.37958 8.52167L20.4196 8.52167L20.4196 6.52167L1.37958 6.52167L1.37958 8.52167Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export default IconArrowRight;
