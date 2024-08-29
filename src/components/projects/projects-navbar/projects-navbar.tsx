"use client";
import { useState } from "react";
import { ProjectIcon } from "../project-icon";
import styles from "./styles.module.css";

interface ProjectsNavbarProps {
  projects: any[];
  setParentState: any;
}

export const ProjectsNavbar = ({
  projects,
  setParentState,
}: ProjectsNavbarProps) => {
  //default to the middle item in the array being selected
  const [selected, setSelected] = useState(0);

  return (
    <div className={styles.projectsNav}>
      <ul>
        {projects.map((project, index) => {
          return (
            <li
              key={`${project.name}-${index}`}
              className={`${styles.icon} ${
                selected === index ? styles.selected : ""
              }`}
            >
              <ProjectIcon
                source={project.image}
                onClickFunc={() => {
                  setSelected(index);
                  setParentState(index);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
