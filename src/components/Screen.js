import React, { useState } from "react";
import Settings from "./Settings";
import Music from "./Music";
import Game from "./Game";
import Picture from "./Picture";

//css
import "./Screen.css";
//icon
import menuRightIcon from "../assets/menuRightIcon.svg";

export default function Screen({ items, activeItem, activeScreen }) {
  const [selected, setSelected] = useState(null);
  const renderedItems = items.map((item, index) => {
    const active = activeItem === index ? "active" : "";
    return (
      <div key={index}>
        <ul className="menuList" id="menuList">
          <li className={`menuItem ${active}`}>{item}</li>
        </ul>
      </div>
    );
  });
  const checkDisplayScreen = (activeScreen) => {
    if (activeScreen === "Settings") {
      return <Settings activeItem={activeItem} activeScreen={activeScreen} />;
    } else if (activeScreen === "Music") {
      return <Music />;
    } else if (activeScreen === "Games") {
      return <Game />;
    } else if (activeScreen === "Pictures") {
      return <Picture />;
    }
  };
  return (
    checkDisplayScreen(activeScreen) || (
      <div className="menuBar">{renderedItems}</div>
    )
  );
}
