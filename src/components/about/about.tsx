"use client";
import { useContext, useState } from "react";
import { ThemeContext } from "@/contexts/theme-context";
import { AnimationContext } from "@/contexts/animation-context";
import { Skillset } from "./skillset";
import { Bio } from "./bio";
import { ScreenToggler } from "./screen-toggler";
import styles from "./styles.module.css";

export const About = () => {
  // get the animationStage from the animation context so that the page only renders after the intro animation is done
  const { animationStage } = useContext(AnimationContext)!;
  const { theme } = useContext(ThemeContext)!;

  // pageToShow can either be set to bio or skillset
  const [pageToShow, setPageToShow] = useState<"skillset" | "bio">("bio");

  return animationStage > 2 ? (
    <section
      id="about"
      className={`${styles.screenContainer} ${
        theme === "light" ? "lightMode" : "darkMode"
      }`}
    >
      <div className={styles.jumboWrapperInvis}>
        <h1 className={styles.jumboText}>About</h1>
      </div>
      <div
        className={`${styles.jumboWrapper} ${
          theme === "light" ? styles.jumboWrapperLM : styles.jumboWrapperDM
        }`}
      >
        <h1 className={styles.jumboText}>About</h1>
      </div>
      <div>{pageToShow === "skillset" ? <Skillset /> : <Bio />}</div>
      <div
        className={`${styles.lowerAccent} ${
          theme === "light" ? styles.jumboWrapperLM : styles.jumboWrapperDM
        }`}
      ></div>
      <ScreenToggler setParentState={setPageToShow} />
    </section>
  ) : null;
};
