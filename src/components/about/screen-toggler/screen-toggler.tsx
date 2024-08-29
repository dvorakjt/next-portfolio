"use client";
import {
  useState,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";
import { ThemeContext } from "@/contexts/theme-context";
import styles from "./styles.module.css";

interface ScreenTogglerProps {
  setParentState: Dispatch<SetStateAction<"skillset" | "bio">>;
}

export const ScreenToggler = ({ setParentState }: ScreenTogglerProps) => {
  const { theme } = useContext(ThemeContext)!;

  //choice determines which option is enlarged
  const [choice, setChoice] = useState(1);

  return (
    <div className={styles.toggler}>
      <button
        className={`${
          theme !== "light"
            ? "lightModeText lightModeHighlight"
            : "darkModeText darkModeHighlight"
        } ${!choice ? `${styles.selected}` : ""}`}
        onClick={() => {
          setChoice(0);
          setParentState("skillset");
        }}
      >
        Skillset
      </button>
      <button
        className={`${
          theme !== "light"
            ? "lightModeText lightModeHighlight"
            : "darkModeText darkModeHighlight"
        } ${choice ? `${styles.selected}` : ""}`}
        onClick={() => {
          setChoice(1);
          setParentState("bio");
        }}
      >
        Bio
      </button>
    </div>
  );
};
