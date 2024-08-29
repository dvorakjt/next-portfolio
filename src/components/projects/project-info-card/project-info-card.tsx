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
      <p>
        **Please note that I am currently in the process of refactoring the
        projects in this section, and updating it.**
      </p>
      <h6>README.md</h6>
      <hr />
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        <Image
          src={githubIcon}
          alt={`View ${project.name} on Github`}
          className={styles.githubIcon}
        />
      </a>
      <ReactMarkdown linkTarget="_blank">{project.readMe}</ReactMarkdown>
    </div>
  );
};
