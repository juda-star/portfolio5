import React from "react";
import "./Contact.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div className="">
          <h3>Contact Me</h3>
      <div className="form " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <form>
          <br />
          <label>Your Name</label>
          <input id="name" name="name" type="text"></input>
          <label>Email</label>
          <input id="userEmail" name="userEmail" type="email"></input>
          <label>Subject</label>
          <input id="subject" name="subject" type="text"></input>
          <label>Message</label>
          <textarea
            name="message"
            id="message"
            rows="6"
            placeholder="Type your message here ..."
          ></textarea>
          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};
