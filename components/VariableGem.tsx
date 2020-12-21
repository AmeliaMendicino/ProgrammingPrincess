import { FunctionComponent } from "react";
import { HexagonGem } from "./Gems/HexagonGem";

import styles from "../styles/Gems.module.css";

export type GemProps = {
  value: string;
  name: string;
  kind: string;
  type: string;
};

export type GemShapeProps = {
  color: string;
};

export const VariableGem: FunctionComponent<GemProps> = ({
  value,
  name,
  kind,
  type,
}: GemProps) => {
  const color = "blue";
  console.log(kind, type);
  return (
    <figure className={styles.container}>
      <figure className={styles.gem}>
        <figcaption className={styles.gemText}>
          {JSON.stringify(value)}
        </figcaption>
        <HexagonGem color={color} />
      </figure>
      <figcaption className={[styles.variableText, styles[`${color}Text`]].join(" ")}>
        {name}
      </figcaption>
    </figure>
  );
};
