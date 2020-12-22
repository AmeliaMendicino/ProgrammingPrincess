import { FunctionComponent } from "react";
import { GemShapeProps } from "../VariableGem";

import styles from "../../styles/Gems.module.css";

export const DiamondGem: FunctionComponent<GemShapeProps> = ({
  color,
}: GemShapeProps) => {
  return (
    <svg
      className={[styles.svgGem, styles[`${color}Gem`]].join(" ")}
      version="1.1"
      viewBox="0 0 132.29 132.29"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          transform="scale(.26458)"
          d="m88.475 217.32 161.42 281.36 161.42-281.36h-322.83z"
          fillOpacity=".49798"
        />
        <path
          transform="scale(.26458)"
          d="m0 200.8 249.89 297.87-161.42-281.36-88.475-16.514z"
          fillOpacity=".79757"
        />
        <path
          transform="scale(.26458)"
          d="m500 199.34-88.693 17.973-161.42 281.36 250.11-299.33z"
          fillOpacity=".59919"
        />
        <path
          transform="scale(.26458)"
          d="m88.475 217.32 61.354-133.09-78.098-16.844-71.73 133.42 88.475 16.514z"
          fillOpacity=".59919"
        />
        <path
          transform="scale(.26458)"
          d="m411.31 217.32-76.189-136.64-185.29 3.5469-61.354 133.09h322.83z"
          fillOpacity=".25101"
        />
        <path
          transform="scale(.26458)"
          d="m408.23 60.479-73.113 20.197 76.189 136.64 88.693-17.973-91.77-138.87z"
          fillOpacity=".35223"
        />
        <path
          transform="scale(.26458)"
          d="m156.92 32.861-85.189 34.518 78.098 16.844 185.29-3.5469 73.113-20.197-80.207-27.539-171.1-0.078125z"
          fillOpacity=".39676"
        />
      </g>
    </svg>
  );
};
