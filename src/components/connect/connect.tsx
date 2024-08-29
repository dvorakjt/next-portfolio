"use client";
import { useContext } from "react";
import Image from "next/image";
import { AnimationContext } from "@/contexts/animation-context";
import { ThemeContext } from "@/contexts/theme-context";
import gmailIcon from "@/../public/static/images/gmail-icon.png";
import githubIcon from "@/../public/static/images/github-icon.png";
import linkedInIcon from "@/../public/static/images/linkedin-icon.png";
import codewarsIcon from "@/../public/static/images/codewars-icon.png";
import htmlIcon from "@/../public/static/images/html-icon.png";
import cssIcon from "@/../public/static/images/css-icon.png";
import jsIcon from "@/../public/static/images/js-icon.png";
import nodeIcon from "@/../public/static/images/node-icon.png";
import codeIcon from "@/../public/static/images/code-icon.png";
import styles from "./styles.module.css";

export const Connect = () => {
  const { animationStage } = useContext(AnimationContext)!;
  const { theme } = useContext(ThemeContext)!;

  return animationStage > 2 ? (
    <>
      <section
        className={`${styles.screenContainer} ${
          theme === "light" ? "darkMode" : "lightMode"
        }`}
        id="connect"
      >
        <div className={styles.innerContainer}>
          <h1>Let&apos;s Connect</h1>
          <div className={styles.iconsContainer}>
            <a href="mailto:dvorakjt@gmail.com">
              <Image src={gmailIcon} alt="email me" className={styles.icon} />
            </a>
            <a
              href="https://github.com/dvorakjt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={githubIcon}
                alt="visit my github page"
                className={styles.icon}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/joseph-dvorak-developer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={linkedInIcon}
                alt="visit my linkedIn page"
                className={styles.icon}
              />
            </a>
            <a
              href="https://www.codewars.com/users/dvorakjt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={codewarsIcon}
                alt="visit my codewars page"
                className={styles.icon}
              />
            </a>
          </div>
        </div>
      </section>
      <footer
        className={`${styles.footer} ${
          theme === "light" ? "lightMode" : "darkMode"
        }`}
      >
        <ul className={styles.attribList}>
          <li>
            <Image src={htmlIcon} alt="HTML" className={styles.tinyIcon} />
            <Image src={cssIcon} alt="CSS" className={styles.tinyIcon} />
            <Image
              src={linkedInIcon}
              alt="LinkedIn"
              className={styles.tinyIcon}
            />{" "}
            icons by{" "}
            <a
              href="https://www.iconfinder.com/zlaten"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixel Bazaar
            </a>{" "}
            under CC.
          </li>
          <li>
            <Image src={githubIcon} alt="Github" className={styles.tinyIcon} />
            <Image src={jsIcon} alt="Javascript" className={styles.tinyIcon} />
            <Image src={nodeIcon} alt="Node.js" className={styles.tinyIcon} />
            icons by{" "}
            <a
              href="https://www.iconfinder.com/Flatart"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flatart
            </a>{" "}
            under CC.
          </li>
          <li>
            <Image
              src={codewarsIcon}
              alt="Codewars"
              className={styles.tinyIcon}
            />{" "}
            icon by{" "}
            <a
              href="https://www.iconfinder.com/iconfinder"
              target="_blank"
              rel="noopener noreferrer"
            >
              Iconfinder
            </a>{" "}
            under CC.
          </li>
          <li>
            <Image src={codeIcon} alt="Code" className={styles.tinyIcon} /> icon
            by{" "}
            <a
              href="https://www.iconfinder.com/justui"
              target="_blank"
              rel="noopener noreferrer"
            >
              Just UI
            </a>
            .
          </li>
        </ul>
      </footer>
    </>
  ) : null;
};
