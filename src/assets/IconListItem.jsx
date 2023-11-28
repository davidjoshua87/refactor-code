import React from "react";
import { twMerge } from "tailwind-merge";

function IconListItem({ className, svgClassName, ...rest }) {
  return (
    <div
      className={twMerge(
        "flex items-center justify-center",
        "w-10 h-10",
        className
      )}
      {...rest}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="2"
        fill="none"
        viewBox="0 0 26 2"
        className={twMerge(
          "w-full h-full",
          svgClassName
        )}
      >
        <path fill="currentColor" d="M0 0H26V2H0z"></path>
      </svg>
    </div>
  );
}

export default IconListItem;
