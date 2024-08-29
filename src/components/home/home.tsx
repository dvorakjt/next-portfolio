"use client";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/theme-context";
import { AnimationContext } from "@/contexts/animation-context";
import { Navbar } from "./navbar/navbar";
import { AnimatedText } from "./animated-text";
import { AnimatedHero } from "./animated-hero";
import styles from "./styles.module.css";

const links = [
  {
    text: "Home",
    url: "#",
  },
  {
    text: "About",
    url: "#about",
  },
  {
    text: "Projects",
    url: "#projects",
  },
  {
    text: "Connect",
    url: "#connect",
  },
];

// animated home screen
export const Home = () => {
  const { theme } = useContext(ThemeContext)!;
  const { animationStage } = useContext(AnimationContext)!;

  return (
    <>
      <Navbar links={links} hide={animationStage < 3 ? true : false} />
      <section
        className={`${styles.screenContainer} ${
          theme === "light" ? "lightMode" : "darkMode"
        }`}
      >
        <AnimatedText />
        <AnimatedHero />
      </section>
    </>
  );
};
