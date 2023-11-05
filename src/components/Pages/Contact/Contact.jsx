import React from "react";
import "./Contact.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import EmailForm from '../../Features/EmailForm/EmailForm'
export const Contact = () => {
  return (
    <div className="">
          <h3>Contact Me</h3>
      <div className="form " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <EmailForm />
      </div>
    </div>
  );
};
