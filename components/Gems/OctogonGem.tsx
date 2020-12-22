import { FunctionComponent } from "react";
import { GemShapeProps } from "../VariableGem";

import styles from "../../styles/Gems.module.css";

export const OctogonGem: FunctionComponent<GemShapeProps> = ({
  color,
}: GemShapeProps) => {
  return (
    <svg
      version="1.1"
      viewBox="0 0 132.29 132.29"
      xmlns="http://www.w3.org/2000/svg"
      className={[styles.svgGem, styles[`${color}Gem`]].join(" ")}
    >
      <g>
        <path
          transform="scale(.26458)"
          d="m114.94 379.51-52.314-132.74 0.30078-0.68945-62.926-1.3223 69.512 178.31 45.428-43.559z"
          fillOpacity=".65182"
        />
        <path
          transform="scale(.26458)"
          d="m246.07 437.07-130.86-56.869-0.27539-0.69922-45.428 43.559 175.24 76.936 1.3223-62.926z"
          fillOpacity=".80162"
        />
        <path
          transform="scale(.26458)"
          d="m246.07 437.07-1.3223 62.926 178.31-69.512-43.559-45.428-132.74 52.314-0.68945-0.30078z"
          fillOpacity=".65182"
        />
        <path
          transform="scale(.26458)"
          d="m76.936 69.512-76.936 175.24 62.926 1.3223 56.869-130.86 0.69922-0.27539-43.559-45.428z"
          fillOpacity=".49798"
        />
        <path
          transform="scale(.26458)"
          d="m255.25 0-178.31 69.512 43.559 45.428 132.74-52.314 0.68945 0.30078 1.3223-62.926z"
          fillOpacity=".40081"
        />
        <path
          transform="scale(.26458)"
          d="m500 255.25-62.926-1.3223-56.869 130.86-0.69922 0.27539 43.559 45.428 76.936-175.24z"
          fillOpacity=".50202"
        />
        <path
          transform="scale(.26458)"
          d="m430.49 76.936-45.428 43.559 52.314 132.74-0.30078 0.68945 62.926 1.3223-69.512-178.31z"
          fillOpacity=".39676"
        />
        <path
          transform="scale(.26458)"
          d="m255.25 0-1.3223 62.926 130.86 56.869 0.27539 0.69922 45.428-43.559-175.24-76.936z"
          fillOpacity=".35223"
        />
        <path
          transform="matrix(.92625 .26543 -.26543 .92625 22.435 -12.679)"
          d="m110.71 91.876-31.247 23.977-39.049-5.1409-23.977-31.247 5.1409-39.049 31.247-23.977 39.049 5.1409 23.977 31.247z"
          fillOpacity=".25101"
        />
      </g>
    </svg>
  );
};
