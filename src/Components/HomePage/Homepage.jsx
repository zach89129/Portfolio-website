import { flexbox } from "@mui/system";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./homepage.css";

const Homepage = () => {
  return (
    <div className="parent">
      <div className="typeWriterParent" style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <div className="typeWriter" style={{ paddingRight: 20 }}>
            I am{" "}
          </div>
          {/* <div
            className="typeWriter"
            style={{ color: "#c95045cd", textDecoration: "underline" }}
          > */}
          <span
            className="typeWriter"
            style={{ color: "#c95045cd", textDecoration: "underline" }}
          >
            <Typewriter
              loop={1}
              words={[" a Paramedic", " an Educator", " a Software Engineer"]}
            />
          </span>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
