import { FunctionComponent } from "react";
import { HexagonGem } from "./Gems/HexagonGem";
import { OctogonGem } from "./Gems/OctogonGem";
import { DiamondGem } from "./Gems/DiamondGem";
import { TriGem } from "./Gems/TriGem";
import { Sparkle } from "./Gems/Sparkle";

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
  let isPrimitive = true;
  let color;
  let GemShape;
  let displayValue = value;

  switch (type) {
    case "":
    case "undefined":
      color = "gray";
      break;
    case "boolean":
      color = "purple";
      break;
    case "number":
      color = "blue";
      break;
    case "bigint":
      color = "navy";
      displayValue = value.toString();
      break;
    case "string":
      color = "pink";
      break;
    case "symbol":
      color = "yellow";
      break;
    case "function":
      color = "green";
      isPrimitive = false;
      break;
    case "object":
    default:
      isPrimitive = false;
      if (Array.isArray(value)) {
        color = "red";
      } else if (value === null) {
        color = "black";
      } else {
        color = "orange";
      }
      break;
  }

  switch (kind) {
    case "const":
      GemShape = isPrimitive ? HexagonGem : OctogonGem;
      break;
    case "let":
    case "var":
    default:
      GemShape = isPrimitive ? TriGem : DiamondGem;
      break;
  }

  return (
    <figure className={styles.container}>
      <figure className={styles.gem}>
        <figcaption className={styles.gemText}>
          {JSON.stringify(displayValue)}
        </figcaption>
        <GemShape color={color} />
        <Sparkle className={styles.sparkle1} />
        <Sparkle className={styles.sparkle2} />
      </figure>
      <figcaption
        className={[styles.variableText, styles[`${color}Text`]].join(" ")}
      >
        {name}
      </figcaption>
    </figure>
  );
};
