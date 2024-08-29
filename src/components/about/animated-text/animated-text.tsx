"use client";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "@/contexts/theme-context";
import { animateTyping } from "@/utils/animate-typing";
import type { AnimatedTextLineState } from "@/model/animated-text-line-state";
import styles from "./styles.module.css";

interface AnimatedTextProps {
  lines: string[];
}

export const AnimatedText = ({ lines }: AnimatedTextProps) => {
  const { theme } = useContext(ThemeContext)!;
  const [isMounted, setIsMounted] = useState(false);
  const [textState, setTextState] = useState<AnimatedTextLineState[]>([
    {
      isCurrentLine: true,
      text: "",
    },
  ]);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      animateTyping(lines, 0, 0, textState, setTextState);
    }
  }, [textState, isMounted, lines]);

  return (
    <h1
      className={`${styles.typedText} ${
        theme === "light" ? "lightModeText" : "darkModeText"
      } ${
        textState[0].isCurrentLine
          ? styles[`blinkingCursor${theme === "light" ? "LM" : "DM"}`]
          : ""
      }`}
    >
      {textState[0].text}
    </h1>
  );
};
