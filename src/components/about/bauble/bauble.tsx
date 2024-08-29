import type { CSSProperties } from "react";
import type { StaticImageData } from "next/image";
import styles from "./styles.module.css";

interface BaubleProps {
  source: StaticImageData;
  size: string;
  style: CSSProperties;
}

export const Bauble = ({ source, size = "50px", style }: BaubleProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${source})`,
        height: size,
        width: size,
        ...style,
      }}
      className={styles.bauble}
    ></div>
  );
};
