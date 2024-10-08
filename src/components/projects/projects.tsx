"use client";
import {
  useContext,
  useRef,
  useEffect,
  useState,
  useLayoutEffect,
} from "react";
import Image, { type StaticImageData } from "next/image";
import { AnimationContext } from "@/contexts/animation-context";
import { ThemeContext } from "@/contexts/theme-context";
import { ProjectsNavbar } from "./projects-navbar";
import { ProjectViewport } from "./project-viewport/project-viewport";
import { ProjectInfoCard } from "./project-info-card";
import { MARKDOWN } from "../../markdown";
import pianoWithAkira from "@/../public/static/images/piano-with-akira.png";
import fullyFormed from "@/../public/static/images/fully-formed.png";
import abcNotationTransposition from "@/../public/static/images/abc-notation-transposition.png";
import githubIcon from "@/../public/static/images/github-icon.png";
import styles from "./styles.module.css";

interface Project {
  image: StaticImageData;
  name: string;
  link: string;
  github?: string;
  shortDesc: string;
  readMe: string;
}

const projects: Project[] = [
  {
    image: pianoWithAkira,
    name: "Piano with Akira",
    link: "https://pianowithakira.com",
    shortDesc:
      "Lesson scheduling site for pianist/educator/YouTuber Akira Ikegami",
    readMe: MARKDOWN[0],
  },
  {
    image: fullyFormed,
    name: "Fully Formed",
    github: "https://github.com/dvorakjt/fully-formed",
    link: "https://www.npmjs.com/package/fully-formed",
    shortDesc: "An object-oriented form state management library for React.",
    readMe: MARKDOWN[1],
  },
  {
    image: abcNotationTransposition,
    name: "ABC Notation Transposition",
    github: "https://github.com/dvorakjt/abc-notation-transposition",
    link: "https://www.npmjs.com/package/abc-notation-transposition",
    shortDesc:
      "A robust utility for transposing abc notation strings by any number of half steps. ",
    readMe: MARKDOWN[2],
  },
];

export const Projects = () => {
  const { animationStage } = useContext(AnimationContext)!;
  const { theme } = useContext(ThemeContext)!;
  const jumboWrapper = useRef(null);

  /*the angle to rotate the jumbo text by. this is calculated using the inverse tangent of 15% of the
  window height divided by the window width (or the height and width of the jumbo wrapper, if it exists in the dom*/
  const [angle, setAngle] = useState("");
  const [currentProject, setCurrentProject] = useState(0);

  useLayoutEffect(() => {
    setAngle(
      `${Math.atan((window.innerHeight * 0.15) / window.innerWidth)}rad`
    );
  }, []);

  //attach an event listener to the window so that when the screen is resized, the angle of the jumbo text changes
  useEffect(() => {
    const updateAngle = () => {
      if (jumboWrapper.current) {
        const a = (jumboWrapper.current as any).offsetHeight;
        const b = (jumboWrapper.current as any).offsetWidth;
        const alpha = Math.atan(a / b);
        setAngle(`${alpha}rad`);
      }
    };
    window.addEventListener("resize", updateAngle);
  }, [setAngle]);

  //if the opening animation hasn't finished, display nothing
  return animationStage > 2 ? (
    <section
      id="projects"
      className={`${styles.screenContainer} ${
        theme === "light" ? "lightMode" : "darkMode"
      }`}
    >
      <div
        className={`${styles.jumboSpacer} ${
          theme === "light" ? styles.jumboSpacerLM : styles.jumboSpacerDM
        }`}
      ></div>
      <div className={styles.jumboWrapperInvis}>
        <h1
          className={styles.jumboText}
          style={{ transform: `rotate(${angle})` }}
        >
          Projects
        </h1>
      </div>
      <div
        className={`${styles.jumboWrapper} ${
          theme === "light" ? styles.jumboWrapperLM : styles.jumboWrapperDM
        }`}
        ref={jumboWrapper}
      >
        <h1
          className={styles.jumboText}
          style={{ transform: `rotate(${angle})` }}
        >
          Projects
        </h1>
      </div>
      <ProjectsNavbar projects={projects} setParentState={setCurrentProject} />
      {projects[currentProject].github && (
        <a
          href={projects[currentProject].github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={githubIcon}
            alt={`View ${projects[currentProject].name} on Github`}
            className={styles.githubIcon}
          />
        </a>
      )}
      <div className={styles.spacer}></div>
      <h2>{projects[currentProject].name}</h2>
      <ProjectViewport
        source={projects[currentProject].image}
        href={projects[currentProject].link || "no link"}
      />
      <ProjectInfoCard project={projects[currentProject]} />
    </section>
  ) : null;
};
