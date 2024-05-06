import React from "react";
import { IconProps } from "./icons.constant";

export default function IconDownload({ fill }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill={fill ? fill : "#79797B"}
    >
      <path
        d="M5.99935 8.66797L2.66602 5.33464L3.59935 4.36797L5.33268 6.1013V0.667969H6.66602V6.1013L8.39935 4.36797L9.33268 5.33464L5.99935 8.66797ZM1.99935 11.3346C1.63268 11.3346 1.3189 11.2042 1.05802 10.9433C0.797127 10.6824 0.66646 10.3684 0.666016 10.0013V8.0013H1.99935V10.0013H9.99935V8.0013H11.3327V10.0013C11.3327 10.368 11.2022 10.682 10.9413 10.9433C10.6805 11.2046 10.3665 11.3351 9.99935 11.3346H1.99935Z"
        fill={fill ? fill : "#79797B"}
      />
    </svg>
  );
}
