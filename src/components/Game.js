import React from "react";

//css
import "./Game.css";

//icons
import gameIcon from "../assets/gameIcon.svg";
import backIcon from "../assets/backIcon.svg";
//images
// import mario from "../public/img/marioImage.jpg";

import { useTheme } from "../hooks/useTheme";
export default function Game(
  changeGame,
  activeItem,
  activeScreen,
  showMenu,
  redirect,
  controlPower
) {
  const { color } = useTheme();

  return (
    <div className="games" style={{ backgroundImage: color }}>
      <img src={gameIcon} />
      <div className="gameIcon">
        <img src="/img/marioImage.jpg" />
      </div>
      <button className="playBtn">Play Now</button>
    </div>
  );
}
