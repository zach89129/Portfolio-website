import React from "react";
import { useState } from "react";
import img from "./profile.png";
import styled from "styled-components";
import "./About.css";

const BodyDiv = styled.div`
  height: fit-content;
  position: relative;
  top: 5vh;
  width: 50vw;
  background-color: #ffffff52;
  padding: 20px;
  border-radius: 50px;
`;

const Portait = styled.img`
  margin: 30px;
  height: 300px;
  width: auto;
  border-radius: 360px;
`;

const Name = styled.div`
  font-size: 70px;
  text-decoration: underline;
  font-family: "Electrolize", sans-serif;
`;

const Statement = styled.div`
  font-size: 30px;
  padding-top: 20px;
  font-family: "Electrolize", sans-serif;
`;

const About = () => {
  return (
    <BodyDiv>
      <Portait src={img}></Portait>
      <Name>Zachary Miller</Name>
      <h3>Software Engineer, CCT-Paramedic FTO</h3>
      <Statement>
        I am an aspiring Software Developer with a background in Emergency
        Medicine. I work to tackle technical problems by utilizing my strengths
        in critical thinking, deductive reasoning, and problem solving that I
        have honed over my career as a provider. My background in Emergency
        Medicine and my experience with Full Stack Development enables me to
        approach each project or problem with a unique perspective.
      </Statement>
    </BodyDiv>
  );
};

export default About;
