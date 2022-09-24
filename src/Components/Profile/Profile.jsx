import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import blackjack from "./blackjack.png";
import pokeclone from "./pokeclone.png";
import pinit from "./pinit.png";
import "./Profile.css";
import styled from "styled-components";

// <h1>https://pokeclone-zm.herokuapp.com/</h1>
// <h1>https://jmmz-ga-p3places-ui.herokuapp.com/</h1>
// <h1>https://zach89129.github.io/Blackjack-Project-1/</h1>

const PokeProject = styled.div`
  position: relative;
  top: 30vh;
  height: 380px;
  width: 350px;
  font-family: "Electrolize", sans-serif;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 25px;
  :hover {
    box-shadow: #5a1b1b 0px 5px 30px;
  }
  margin: 30px;
  background-color: #ffffffb9;
`;

const PokeCard = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  background-color: #ffffffb9;
  border-radius: 25px;
`;

const PokeImg = styled.div`
  background-image: url(${pokeclone});
  background-size: contain;
  height: 200px;
  width: 350px;
  border-radius: 20px;
  margin-bottom: 10px;
`;
const PinProject = styled.div`
  position: relative;
  top: 30vh;
  height: 380px;
  width: 350px;
  font-family: "Electrolize", sans-serif;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 25px;
  :hover {
    box-shadow: #5a1b1b 0px 5px 30px;
  }
  margin: 30px;
  background-color: #ffffffb9;
`;

const PinCard = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  background-color: #ffffffb9;
  border-radius: 25px;
`;

const PinImg = styled.div`
  background-image: url(${pinit});
  background-size: contain;
  height: 200px;
  width: 350px;
  border-radius: 20px;
  margin-bottom: 10px;
`;
const BlackjackProject = styled.div`
  position: relative;
  top: 30vh;
  height: 380px;
  width: 350px;
  font-family: "Electrolize", sans-serif;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 25px;
  :hover {
    box-shadow: #5a1b1b 0px 5px 30px;
  }
  margin: 30px;
  background-color: #ffffffb9;
`;

const BlackjackCard = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  background-color: #ffffffb9;
  border-radius: 25px;
`;

const BlackjackImg = styled.div`
  background-image: url(${blackjack});
  background-size: contain;
  height: 200px;
  width: 350px;
  border-radius: 20px;
  margin-bottom: 10px;
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleDiv = styled.div`
  font-size: 30px;
  text-decoration: underline;
`;

const Projects = () => {
  return (
    <MainDiv>
      <PokeProject
        onClick={(event) =>
          (window.location.href = "https://pokeclone-zm.herokuapp.com/")
        }
      >
        <TitleDiv>PokeClone</TitleDiv>
        <PokeCard>
          <PokeImg></PokeImg>
          <div className="description">
            PokeClone is an app I created as my final project in my bootcamp.
            Inspired by a youtube tutorial, I took on the challenge of expanding
            and reformatting the tutorial idea into a react app utilizing
            pokeAPI.
            <div style={{ fontSize: 10 }}>
              **Be sure to check out /secretlogin for a little extra
              functionality
            </div>
          </div>
        </PokeCard>
      </PokeProject>

      <PinProject
        onClick={(event) =>
          (window.location.href = "https://jmmz-ga-p3places-ui.herokuapp.com/")
        }
      >
        <TitleDiv>PinIt</TitleDiv>
        <PinCard>
          <PinImg></PinImg>
          <div className="description">
            PinIt is a full stack React app with an express/mongoDB backend
            built to let people show their favorite "off the grid" places. I was
            Lead Dev on this project with a group of 3 others. We utilized
            GoogleMaps as well as cloudinary and some other fun libraries to
            bring our app to life. Sign in to check it out!
          </div>
        </PinCard>
      </PinProject>
      <BlackjackProject
        onClick={(event) =>
          (window.location.href =
            "https://zach89129.github.io/Blackjack-Project-1")
        }
      >
        <TitleDiv>Blackjack</TitleDiv>
        <BlackjackCard>
          <BlackjackImg></BlackjackImg>
          <div className="description">
            This is a Blackjack browser game I made as my first project in
            bootcamp. I utilized vanilla JavaScript with basic HTML and CSS as
            well as the DeckofCards API. It is a single player, single deck
            blackjack game against the computer. Being born and raised in Las
            Vegas it seemed like a fitting first step into the tech world.
          </div>
        </BlackjackCard>
      </BlackjackProject>
    </MainDiv>
  );
};

export default Projects;
