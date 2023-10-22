import React from "react";
import "./AboutMe.css";
import AOS from "aos";
import Typewriter from "typewriter-effect"; 
import "aos/dist/aos.css";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoDocker } from "react-icons/bi";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoPython } from "react-icons/bi";
import { BiLogoVisualStudio } from "react-icons/bi";
import { BiLogoShopify } from "react-icons/bi";
export const AboutMe = () => {
  const StyleIconPerple = { color: "purple", fontSize: "x-large" };
  const StyleIconRed = { color: "red", fontSize: "x-large" };
  const StyleIconYellow = { color: "yellow", fontSize: "x-large" };
  const StyleIconGold = { color: "gold", fontSize: "x-large" };
  const StyleIconGreen = { color: "green", fontSize: "x-large" };
  const StyleIconBlue = { color: "#1877F2", fontSize: "x-large" };
  const StyleIconBlack = { color: "black", fontSize: "x-large" };
  const StyleIconWhite = { color: "white", fontSize: "x-large" };
  const StyleIconAqua = { color: "aqua", fontSize: "x-large" };
  return (
    <div className="containerAboutMe">
      <h2>About Me</h2>

      <div>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 40,
            delay: 150,
            strings: [
              "Welcome To My Portfolio",
              "My Name Is Yehooda Ishta",
              "2020-2021 Full Stack Developer Tech-Career Technological Training Center,",
              "800 Hours Web Application Development ,Course contents as part of bootcamp.",
            ],
          }}
        ></Typewriter>
        <a href="Yehooda-Ishta-Resume.pdf" download="Yehooda-Ishta-Resume.pdf">
          Download CV
        </a>
      </div>
      <div className="skills">
        <br />
        <h3>Skills:</h3>
        <br />
        <div className="aboutMeContainer">
          <p>Github            <AiOutlineGithub style={StyleIconPerple} /> </p>
          
          <p>Css3 <BiLogoCss3 style={StyleIconRed} /></p>
          <p>Mongodb <BiLogoMongodb style={StyleIconBlue} /></p>
          <p>Python <BiLogoPython style={StyleIconBlack} /></p>
          <p>VisualStudio  <BiLogoVisualStudio style={StyleIconAqua} /></p>
        </div>
        <div className="icons ">
          <span>
            <AiOutlineGithub style={StyleIconPerple} />
          </span>
          <span>
            <BiLogoCss3 style={StyleIconRed} />
          </span>
          <span>
            <BiLogoDocker style={StyleIconYellow} />
          </span>
          <span>
            <BiLogoJavascript style={StyleIconGreen} />
          </span>
          <span>
            <BiLogoMongodb style={StyleIconBlue} />
          </span>
          <span>
            <BiLogoHtml5 style={StyleIconGold} />
          </span>
          <span>
            <BiLogoPython style={StyleIconBlack} />
          </span>
          <span>
            <BiLogoVisualStudio style={StyleIconAqua} />
          </span>
          <span>
            <BiLogoShopify style={StyleIconWhite} />
          </span>
          <br />
        </div>
      </div>
    </div>
  );
};
