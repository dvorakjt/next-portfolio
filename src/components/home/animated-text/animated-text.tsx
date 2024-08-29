"use client";
import { useState, useEffect, useContext } from "react";
import { AnimationContext } from "@/contexts/animation-context";
import { ThemeContext } from "@/contexts/theme-context";
import { animateTyping } from "@/utils/animate-typing";
import type { AnimatedTextLineState } from "@/model/animated-text-line-state";
import styles from "./styles.module.css";

const text = [
  "Hello, World!",
  "I'm Joe, a developer.",
  "Welcome to my portfolio!",
];

export const AnimatedText = () => {
  const { theme } = useContext(ThemeContext)!;
  const { setAnimationStage } = useContext(AnimationContext)!;
  const [isMounted, setIsMounted] = useState(false);
  const [textState, setTextState] = useState<AnimatedTextLineState[]>([
    {
      isCurrentLine: true,
      text: "",
    },
    {
      isCurrentLine: false,
      text: "",
    },
    {
      isCurrentLine: false,
      text: "",
    },
  ]);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      animateTyping(text, 0, 0, textState, setTextState, setAnimationStage);
    }
  }, [setAnimationStage, textState, isMounted]);

  return (
    <div className={styles.textWrapper}>
      <h1
        className={`${styles.heading} ${
          theme === "light" ? "lightModeText" : "darkModeText"
        } ${
          textState[0].isCurrentLine
            ? styles[`blinkingCursor${theme === "light" ? "LM" : "DM"}`]
            : ""
        }`}
      >
        {textState[0].text}
      </h1>
      <h2
        className={`${styles.subHeading} ${
          theme === "light" ? "lightModeText" : "darkModeText"
        } ${
          textState[1].isCurrentLine
            ? styles[`blinkingCursor${theme === "light" ? "LM" : "DM"}`]
            : ""
        }`}
      >
        {textState[1].text}
      </h2>
      <h2
        className={`${styles.subHeading} ${
          theme === "light" ? "lightModeText" : "darkModeText"
        } ${
          textState[2].isCurrentLine
            ? styles[`blinkingCursor${theme === "light" ? "LM" : "DM"}`]
            : ""
        }`}
      >
        {textState[2].text}
      </h2>
    </div>
  );
};
