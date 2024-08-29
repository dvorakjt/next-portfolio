"use client";
import { useContext } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { ThemeContext } from "@/contexts/theme-context";
import githubIcon from "@/../public/static/images/github-icon.png";
import styles from "./styles.module.css";

interface ProjectInfoCardProps {
  project: any;
}

//info card that displays markdown for each project
export const ProjectInfoCard = ({ project }: ProjectInfoCardProps) => {
  const { theme } = useContext(ThemeContext)!;

  return (
    <div
      className={`${styles.fullCard} ${
        theme === "light" ? "lightMode" : "darkMode"
      }`}
    >
      {" "}
      <h6>README.md</h6>
      <hr />
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <Image
            src={githubIcon}
            alt={`View ${project.name} on Github`}
            className={styles.githubIcon}
          />
        </a>
      )}
      <ReactMarkdown
        linkTarget="_blank"
        className={
          theme === "light" ? styles.markdownLight : styles.markdownDark
        }
      >
        {project.readMe}
      </ReactMarkdown>
    </div>
  );
};
