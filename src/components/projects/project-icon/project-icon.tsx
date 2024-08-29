import type { StaticImageData } from "next/image";
import styles from "./styles.module.css";

interface ProjectIconProps {
  source: StaticImageData;
  onClickFunc: any;
  style?: any;
}

//clickable icon to display within projects taskbar
export const ProjectIcon = ({
  source,
  onClickFunc,
  style,
}: ProjectIconProps) => {
  return (
    <button
      style={{
        border: "none",
        backgroundImage: `url(${source.src})`,
        ...style,
      }}
      className={styles.projectIcon}
      onClick={onClickFunc}
    ></button>
  );
};
