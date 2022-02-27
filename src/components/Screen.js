import React, { useEffect, useState } from "react";
import Settings from "./Settings";
import Music from "./Music";
import Game from "./Game";
import Picture from "./Picture";

//css
import "./Screen.css";
//icon
import menuRightIcon from "../assets/menuRightIcon.svg";

export default function Screen({ items, activeItem, activeScreen, showMenu }) {
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
  const handleColorChange = () => {
    console.log("Color changes to red");
  };
  useEffect(() => {
    if (activeScreen === "colorOne") {
      handleColorChange();
    }
  }, [activeScreen]);
  // menun--items as props
  const checkDisplayScreen = (activeScreen, activeItem) => {
    if (activeItem === "colorOne") {
      console.log("changing color");
      return <Settings activeItem={activeItem} activeScreen={activeScreen} />;
    } else if (activeScreen === "Music") {
      return <Music activeItem={activeItem} activeScreen={activeScreen} />;
    } else if (activeScreen === "Games") {
      return <Game activeItem={activeItem} activeScreen={activeScreen} />;
    } else if (activeScreen === "Pictures") {
      return <Picture activeItem={activeItem} activeScreen={activeScreen} />;
    }
  };
  checkDisplayScreen();
  return (
    <div>
      {showMenu && <div className="menuBar">{renderedItems}</div>}
      {/* {checkDisplayScreen(activeScreen)} */}
    </div>
  );
}
