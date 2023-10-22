import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import "./Footer.css"
const StyleIconLinkedin = { color: "#0A66C2", fontSize: "x-large" };

const StyleIconGit = { color: "#161B22", fontSize: "x-large" };

const StyleIconFacebook = { color: "#1877F2", fontSize: "x-large" };
export const Footer = () => {
  return (
    <div>
      <div className="iocnFooter">
      <p>copyright: Juda Master</p>
        <a href="http://linkedin.com/in/yehooda-ishta-ba9a9a202">
          <FaLinkedin style={StyleIconLinkedin} />
        </a>

        <a href="https://github.com/yehooda">
          <FaGithubSquare style={StyleIconGit} />
        </a>

        <a href="https://www.facebook.com/yehooda">
          <FaFacebookSquare style={StyleIconFacebook} />
        </a>
      </div>
    </div>
  )
}
