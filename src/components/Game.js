import React from "react";

//css
import "./Game.css";

//icons
import gameIcon from "../assets/gameIcon.svg";
import backIcon from "../assets/backIcon.svg";
export default function Game(changeGame, activeItem, activeScreen) {
  const gameChange = changeGame.map((theme, index) => {
    const active = activeItem === index ? "active" : "";
    return (
      <div key={index}>
        <ul className="menuList" id="colorList">
          <li className={`colorItem ${active}`}>{theme}</li>
        </ul>
      </div>
    );
  });
  return (
    <div className="games">
      <img src={gameIcon} />
      <div className="back">
        <img src={backIcon} />
      </div>
    </div>
  );
}
