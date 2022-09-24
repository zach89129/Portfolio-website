import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import styled from "styled-components";

const NavBar = () => {
  const myRef = useRef();
  const [applyUnderline, setApplyUnderline] = useState(0);
  const buttons = document.querySelectorAll("button");
  console.log(buttons);
  //   const deactivateButtons = () => {
  //     buttons.forEach((button) => {
  //       if (button.id == "active") {
  //         button.id == "inactive";
  //       }
  //     });

  // }
  //   };
  //   const activate = (e) => {
  //     buttons.forEach((e) => {
  //       e.className = "inactive";
  //       return;
  //     });
  //     if (e.className === "inactive") {
  //       e.className = "active";
  //     }
  //   };

  return (
    <>
      <div className="navBar">
        <Link to={"/About"}>
          <button
            onClick={() => setApplyUnderline(1)}
            style={{
              textDecoration: applyUnderline === 1 ? "underline" : "none",
            }}
          >
            About
          </button>
        </Link>
        {/* <Link to={"/Skills"}>
          <button
            onClick={() => setApplyUnderline(2)}
            style={{
              textDecoration: applyUnderline === 2 ? "underline" : "none",
            }}
          >
            Skills
          </button>
        </Link> */}
        <Link to={"/Projects"}>
          <button
            onClick={() => setApplyUnderline(3)}
            style={{
              textDecoration: applyUnderline === 3 ? "underline" : "none",
            }}
          >
            Projects
          </button>
        </Link>
        <Link to={"/ContactMe"}>
          <button
            onClick={() => setApplyUnderline(4)}
            style={{
              textDecoration: applyUnderline === 4 ? "underline" : "none",
            }}
          >
            Contact Me
          </button>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
