"use client";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { AnimatedText } from "../animated-text";
import { Bauble } from "../bauble";
import reactIcon from "@/../public/static/images/react-icon.png";
import htmlIcon from "@/../public/static/images/html-icon.png";
import cssIcon from "@/../public/static/images/css-icon.png";
import jsIcon from "@/../public/static/images/js-icon.png";
import nodeIcon from "@/../public/static/images/node-icon.png";
import styles from "./styles.module.css";

export const Skillset = () => {
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
              source={htmlIcon}
              style={{
                position: "absolute",
                top: "5vh",
                left: "-5vw",
                animationDelay: "2.25s",
              }}
              size="17vw"
            />
            <Bauble
              source={cssIcon}
              style={{
                position: "absolute",
                bottom: "0vw",
                left: "10vw",
                animationDelay: "2.5s",
              }}
              size="23vw"
            />
            <Bauble
              source={jsIcon}
              style={{
                position: "absolute",
                top: "-10vw",
                left: "35vw",
                animationDelay: "2.75s",
              }}
              size="30vw"
            />
            <Bauble
              source={reactIcon}
              style={{
                position: "absolute",
                bottom: "-5vw",
                right: "20vw",
                animationDelay: "3s",
              }}
              size="20vw"
            />
            <Bauble
              source={nodeIcon}
              style={{
                position: "absolute",
                top: "20vh",
                right: "0vw",
                animationDelay: "3.25s",
              }}
              size="20vw"
            />
            <div className={styles.innerWrapper}>
              <AnimatedText lines={["Skillset"]} />
              <p>
                <b>Languages:</b> HTML, CSS, JavaScript, TypeScript, Java, SQL
                <br />
                <b>CSS Preprocessors:</b> Sass/SCSS
                <br />
                <b>Databases:</b> MySQL, MongoDB
                <br />
                <b>Frameworks:</b> React.js, Angular, Spring Boot, Node.js
                <br />
                <b>Version Control:</b> Git/Github
                <br />
                <b>CI/CD:</b> Github Actions
                <br />
                <b>Containerization:</b> Docker
                <br />
                <b>Testing/Code Coverage:</b> Jest, Jasmine, JUnit, <br />
                Spring TestContext Framework, Mockito, OpenClover, JaCoCo
                <br />
                <b>Cloud Technology:</b> AWS (EC2, ECR, ElasticBeanstalk, RDS,
                S3, Route 53 SES, and more)
                <br />
                <b>Other:</b> WebRTC API, RxJS, RESTful APIs, Firebase, MongoDB
                Atlas, Stripe, Figma
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
