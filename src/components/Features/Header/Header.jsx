import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export const Header = () => {
  return (
    <div className="container">
      <h4>
      <Link to="/">
            {" "}
            <span>HOME</span> |
          </Link> 
      <Link to="/PORTFOLIO">
            {" "}
            <span>PORTFOLIO</span> |
          </Link> 
      <Link to="/CONTACT">
            {" "}
            <span>CONTACT</span> |
          </Link> 
      <Link to="/ABOUTME">
            {" "}
            <span>ABOUT ME</span> 
          </Link> 
      </h4>
    </div>
  );
};
