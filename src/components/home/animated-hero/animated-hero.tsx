"use client";
import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimationContext } from "@/contexts/animation-context";
import planetEarth from "@/../public/static/images/planet-earth.png";
import reactIcon from "@/../public/static/images/react-icon.png";
import htmlIcon from "@/../public/static/images/html-icon.png";
import cssIcon from "@/../public/static/images/css-icon.png";
import jsIcon from "@/../public/static/images/js-icon.png";
import nodeIcon from "@/../public/static/images/node-icon.png";
import styles from "./styles.module.css";

const icons = [reactIcon, htmlIcon, cssIcon, jsIcon, nodeIcon];

export const AnimatedHero = () => {
  const { animationStage } = useContext(AnimationContext)!;
  const [timerStarted, setTimerStarted] = useState(false);
  const rotation = useRef(0);
  const icon = useRef(0);
  const [currentRotation, setCurrentRotation] = useState(rotation.current);

  useEffect(() => {
    if (!timerStarted && animationStage > 2) {
      //delay the start of the rotation timer
      setTimeout(() => {
        //set a flag to indicate timer has started
        setTimerStarted(true);
        setInterval(() => {
          //update the image every 1st and 3rd rotation
          //update the rotation every iteration
          rotation.current++;
          if (rotation.current > 3) rotation.current = 0;
          setCurrentRotation(rotation.current);
        }, 2000);
      }, 2000);
    }
  }, [animationStage, timerStarted]);

  useEffect(() => {
    if (timerStarted) {
      if (currentRotation === 0 || currentRotation === 2) {
        icon.current++;
        if (icon.current >= icons.length) {
          icon.current = 0;
        }
      }
    }
  }, [currentRotation, timerStarted]);

  const determineClass = (rotationStarted: boolean, rotationCount: number) => {
    if (!rotationStarted) {
      return `${styles.reactIcon} ${styles.fadeInDelay}`;
    } else {
      let partialClass;
      switch (rotationCount) {
        case 0:
          partialClass = styles.rot90;
          break;
        case 1:
          partialClass = styles.rot360;
          break;
        case 2:
          partialClass = styles.rot90;
          break;
        case 3:
          partialClass = styles.rot360;
          break;
        default:
          partialClass = styles.reactIcon;
      }
      const cssClass = `${styles.spinningIcon} ${partialClass}`;
      return cssClass;
    }
  };

  return (
    <div className={`${styles.imagesContainer} ${styles.shrink}`}>
      <div className={styles.imageWrapper}>
        <Image
          alt="Planet Earth"
          src={planetEarth}
          className={`${styles.worldImage} ${styles.fadeInThenOut}`}
          priority={true}
        />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          alt="React JS Icon"
          src={icons[icon.current]}
          className={determineClass(timerStarted, currentRotation)}
          priority={true}
        />
      </div>
    </div>
  );
};
