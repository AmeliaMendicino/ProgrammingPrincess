import { FunctionComponent } from "react";

// import styles from "../../styles/Gems.module.css";

type SparkleProps = {
  className: string;
};

export const Sparkle: FunctionComponent<SparkleProps> = ({
  className,
}: SparkleProps) => {
  return (
    <svg className={className} version="1.1" viewBox="0 0 132.29 132.29">
      <path
        d="m65.982 129.81-14.013-54.879-49.324-10.418 48.67-11.399 14.666-50.631 14.666 51.611 48.997 9.1113-49.651 11.399z"
        fill="#feffff"
      />
    </svg>
  );
};
