import React, { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import ThemeChange from "./ThemeChange";
import Music from "./Music";
import Game from "./Game";
import Picture from "./Picture";
import Date from "./Time";
import PowerOff from "./PowerOff";

//css
import "./Screen.css";
//icon
import menuRightIcon from "../assets/menuRightIcon.svg";
import OuterScreen from "./OuterScreen";

export default function Screen({
  items,
  activeItem,
  activeScreen,
  showMenu,
  redirect,
  controlPower,
  setActiveScreen,
}) {
  // const [selected, setSelected] = useState(null);
  // highlighting an active index
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
  /////////////////////////////////////////////////////
  const { color } = useTheme();

  /////////////////////////
  //Display Theme
  if (activeScreen.includes("Theme")) {
    return (
      <ThemeChange
        activeItem={activeItem}
        activeScreen={activeScreen}
        redirect={redirect}
        controlPower={controlPower}
      />
    );
  }
  if (activeScreen === "Game1") {
    //////////////////////////////////////
    //Game pages
    return (
      <Game
        items={items}
        activeItem={activeItem}
        activeScreen={activeScreen}
        showMenu={showMenu}
        redirect={redirect}
        controlPower={controlPower}
      />
    );
  } else if (activeScreen === "Game2") {
    return (
      <Game
        items={items}
        activeItem={activeItem}
        activeScreen={activeScreen}
        showMenu={showMenu}
        redirect={redirect}
        controlPower={controlPower}
      />
    );
  }

  ///////////////////////////////////////
  /////////////////////////////////////
  //Power off page rendering
  if (items[0].includes("Power")) {
    return <PowerOff />;
  }
  ///////////////////////////////////
  //Picture page
  if (activeScreen === "Pictures") {
    return (
      <Picture
        items={items}
        activeItem={activeItem}
        activeScreen={activeScreen}
        showMenu={showMenu}
        redirect={redirect}
        controlPower={controlPower}
      />
    );
  }
  //////////////////////////////////
  return (
    <div>
      <div className="menuBar" style={{ backgroundImage: color }}>
        <Date controlPower={controlPower} /> {renderedItems}
      </div>
    </div>
  );
}
