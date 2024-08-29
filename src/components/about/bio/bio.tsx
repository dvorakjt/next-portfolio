"use client";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { AnimatedText } from "../animated-text";
import { Bauble } from "../bauble";
import musicIcon from "@/../public/static/images/music-icon.png";
import codeIcon from "@/../public/static/images/code-icon.png";
import styles from "./styles.module.css";

export const Bio = () => {
  /* if the element has not entered view, don't render the animated elements. Set Partial visibility
  to true for small screens */
  const [hasEnteredView, setHasEnteredView] = useState(false);

  return (
    <VisibilitySensor
      partialVisibility={true}
      onChange={(isVisible: boolean) => {
        if (!hasEnteredView) {
          setHasEnteredView(isVisible);
        }
      }}
    >
      <div className={styles.outerWrapper}>
        {hasEnteredView ? (
          <>
            <Bauble
              source={codeIcon}
              style={{
                position: "absolute",
                bottom: "0px",
                left: "-5vw",
                animationDelay: "0.75s",
                minWidth: "300px",
                minHeight: "300px",
              }}
              size="35vw"
            />
            <Bauble
              source={musicIcon}
              style={{
                position: "absolute",
                top: "0vh",
                right: "5vw",
                animationDelay: "1s",
                minWidth: "250px",
                minHeight: "250px",
              }}
              size="25vw"
            />
            <div className={styles.innerWrapper}>
              <AnimatedText lines={["Bio"]} />
              <p className={styles.fadeIn}>
                I&apos;m a California-based full stack web developer who spends
                a lot of time working with modern JavaScript/TypeScript frontend
                frameworks like React and Angular, as well as Java frameworks
                like Spring Boot. I grew up near Philadelphia, PA, and I&apos;ve
                been coding since high school, when I began programming simple
                computer games in BASIC. Besides being a programmer, I&apos;m a
                classically trained musician, and also enjoy cooking vegetarian
                food.
              </p>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </VisibilitySensor>
  );
};
