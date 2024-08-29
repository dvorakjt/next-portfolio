"use client";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/theme-context";
import styles from "./styles.module.css";

export const ThemeToggler = () => {
  const { theme, setTheme } = useContext(ThemeContext)!;

  return (
    <div className={styles.toggler}>
      <label
        className={`${styles.label} ${
          theme === "light" ? "lightModeText" : "darkModeText"
        }`}
        htmlFor="color-toggler"
      >
        TOGGLE ME!
      </label>
      <label className={styles.switch}>
        <input
          type="checkbox"
          id="color-toggler"
          onChange={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};
