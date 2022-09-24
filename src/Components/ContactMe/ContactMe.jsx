import React from "react";
import "./ContactMe.css";
import { FaGithub, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactMe = () => {
  return (
    <div className="main">
      <h1>Contact Me</h1>
      <p>
        <FaEnvelopeSquare />
        zacharym.lv@gmail.com
        <FaEnvelopeSquare />
      </p>
      <p>
        <FaGithub />
        <a href="github.com/zach89129">github.com/zach89129</a>
        <FaGithub />
      </p>
      <p>
        <FaLinkedin />
        <a href="https://www.linkedin.com/in/zacharym-lv/">
          https://www.linkedin.com/in/zacharym-lv/
        </a>
        <FaLinkedin />
      </p>
    </div>
  );
};

export default ContactMe;
