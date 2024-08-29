"use client";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "@/contexts/theme-context";
import styles from "./styles.module.css";

interface NavbarProps {
  links: any[];
  hide: boolean;
}

export const Navbar = ({ links, hide }: NavbarProps) => {
  const { theme } = useContext(ThemeContext)!;
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      role="navigation"
      aria-label="Main Menu"
      style={{ display: hide ? "none" : "flex" }}
      className={`${styles.nav} ${
        theme === "light" ? "lightMode" : "darkMode"
      } ${toggle ? styles.responsive : ""}`}
    >
      <ul>
        {links.map((link, index) => {
          return (
            <li
              key={`${link.text}-${index}`}
              className={`${
                theme === "light"
                  ? "lightMode lightModeHighlight"
                  : "darkMode darkModeHighlight"
              }`}
            >
              <a
                onClick={() => setToggle(false)}
                href={link.url}
                style={{
                  animation: `fade-in 1s ease-out ${index * 0.1}s 1 forwards`,
                }}
                className={`${theme === "light" ? "lightMode" : "darkMode"}`}
              >
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => setToggle(!toggle)}
        aria-expanded={toggle}
        aria-label={`${toggle ? "Close" : "Open"} Mobile Navigation Menu`}
        className={`${styles.hamburger} ${
          theme === "light"
            ? "lightMode lightModeHighlight"
            : "darkMode darkModeHighlight"
        }`}
      >
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>
    </nav>
  );
};
