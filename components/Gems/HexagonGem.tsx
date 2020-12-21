import { FunctionComponent } from "react";
import { GemShapeProps } from "../VariableGem";

import styles from "../../styles/Gems.module.css";

export const HexagonGem: FunctionComponent<GemShapeProps> = ({
  color,
}: GemShapeProps) => {
  return (
    <svg
      className={[styles.svgGem, styles[`${color}Gem`]].join(" ")}
      viewBox="0 0 132.29 132.29"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          transform="scale(.26458)"
          d="m100.91 338.32-1.0879-0.62109-0.85352-172.65-66.877-37.619 2.8027 250 66.016-39.107z"
          fillOpacity=".64777"
        />
        <path
          transform="scale(.26458)"
          d="m100.91 338.32-66.016 39.107 212.3 119.42v-75.031l-146.29-83.498z"
          fillOpacity=".80162"
        />
        <path
          transform="scale(.26458)"
          d="m247.2 0-215.11 127.43 66.877 37.619-0.005859-1.2539 148.23-86.563v-77.229z"
          fillOpacity=".49798"
        />
        <path
          transform="scale(.26458)"
          d="m467.91 372.57-66.877-37.619 0.00586 1.2539-150.18 87.697-3.6621-2.0898v75.031l5.6055 3.1523 215.11-127.43z"
          fillOpacity=".64777"
        />
        <path
          transform="scale(.26458)"
          d="m465.11 122.57-66.016 39.107 1.0879 0.62109 0.85352 172.65 66.877 37.619-2.8027-250z"
          fillOpacity=".49798"
        />
        <path
          transform="scale(.26458)"
          d="m247.2 0v77.229l1.9434-1.1348 149.95 85.588 66.016-39.107-217.91-122.57z"
          fillOpacity=".39676"
        />
        <path
          transform="scale(.26458)"
          d="m175.4 380.26-75.458-43.063-0.0025-70.087c-0.0014-38.548-0.24147-77.467-0.53354-86.488l-0.53104-16.401 74.594-43.441c41.026-23.893 75.084-43.441 75.683-43.441s34.647 19.143 75.663 42.54l74.574 42.54 0.6084 60.3c0.33461 33.165 0.48138 72.269 0.32618 86.897l-0.28221 26.597-65.605 38.325c-36.083 21.079-69.648 40.679-74.591 43.556l-8.9857 5.2307z"
          fillOpacity=".2753"
        />
      </g>
    </svg>
  );
};
