import React from "react";

//css
import "./Game.css";

//icons
import gameIcon from "../assets/gameIcon.svg";
import backIcon from "../assets/backIcon.svg";
export default function Game() {
  return (
    <div className="games">
      <img src={gameIcon} />
      <div className="back">
        <img src={backIcon} />
      </div>
    </div>
  );
}
