import React from "react";
import { twMerge } from "tailwind-merge";

function IconArrowLeft({ className, svgClassName, ...rest }) {
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
          d="M20.0439 8.57281C20.5961 8.57281 21.0439 8.1251 21.0439 7.57282C21.0439 7.02053 20.5961 6.57281 20.0439 6.57281L20.0439 8.57281ZM0.296707 6.86571C-0.0938167 7.25623 -0.0938168 7.8894 0.296707 8.27992L6.66067 14.6439C7.05119 15.0344 7.68436 15.0344 8.07488 14.6439C8.46541 14.2534 8.46541 13.6202 8.07488 13.2297L2.41803 7.57281L8.07488 1.91596C8.46541 1.52544 8.46541 0.892271 8.07488 0.501746C7.68436 0.111222 7.05119 0.111222 6.66067 0.501746L0.296707 6.86571ZM20.0439 6.57281L1.00381 6.57281L1.00381 8.57281L20.0439 8.57281L20.0439 6.57281Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export default IconArrowLeft;
