import React, { useState, useEffect } from "react";

import "./Home.css";
import { Portfolio } from "../Portfolio/Portfolio";
import { Contact } from "../Contact/Contact";
import { AboutMe } from "../AboutMe/AboutMe";
import EmailForm from '../../Features/EmailForm/EmailForm'
import AOS from "aos";
import "aos/dist/aos.css";
// import { jsPDF } from "jspdf";

export const Home = () => {
  //   const [save, setSave] = useState();
  // function saveResume() {

  //   setSave(true)
  //   const doc = new jsPDF('portrait','px','a4',false);
  // doc.addImage("https://i.ibb.co/3TJ5Cgj/Yehooda-Ishta-Resume-1.png", 10, 10);
  // doc.save("YehoodaIshtaResume.pdf",'PNG',0,0,417,653); // will save the file in the current working directory
  // setSave(false)
  // }

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="containerHome">
        <div className="description">
          <h5>
            <p
              data-aos-offset="200"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="7000"
            >
              I am a React Front-end Developer.
            </p>

            <br />
            <p
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="9000"
            >
              Creating Responsive Websites For My Clients ,
            </p>
            <br />
            <p
              data-aos-offset="200"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              I play soccer at league EIFL⚽, Like to surf 🏄
            </p>
          </h5>
        </div>
        <div className="pic">
          <img
            src="../../../img/linkdin.png"
            alt="useReducer"
            className="picUseReducer "
          />
        </div>
      </div>
      <br />
      <Portfolio />
      <Contact />
      <AboutMe />
      
    </>
  );
};
