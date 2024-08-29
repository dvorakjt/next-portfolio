"use client";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/theme-context";
import type { StaticImageData } from "next/image";
import styles from "./styles.module.css";

interface ProjectViewportProps {
  source: StaticImageData;
  href: any;
}

export const ProjectViewport = ({ source, href }: ProjectViewportProps) => {
  const { theme } = useContext(ThemeContext)!;

  return (
    <div
      className={`${styles.outerContainer} ${
        theme === "light" ? styles.borderLM : styles.borderDM
      }`}
    >
      {href !== "no link" ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <div
            className={styles.innerContainer}
            style={{ backgroundImage: `url(${source.src})` }}
          ></div>
        </a>
      ) : (
        <div
          className={styles.innerContainer}
          style={{ backgroundImage: `url(${source.src})` }}
        ></div>
      )}
    </div>
  );
};
