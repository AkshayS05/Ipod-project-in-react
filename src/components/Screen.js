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
  // const changeThemes = [
  //   "linear-gradient(90deg, #cb2d3e 0%, #ef4731 100%)",
  //   "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)",
  //   "linear-gradient(180deg, #D3CCE3 0%, #E9E4F0 100%)",
  //   "linear-gradient(180deg, #444444 0%, #666 100%)",
  // ];
  // const handleColorChange = () => {
  //   if (activeScreen === "Theme Firewatch") {
  //     changeColor(changeThemes[0]);
  //   }
  //   if (activeScreen === "Theme Crystal Blue") {
  //     changeColor(changeThemes[1]);
  //   }
  //   if (activeScreen === "Theme Delicate") {
  //     changeColor(changeThemes[2]);
  //   }
  //   if (activeScreen === "Theme Royal Black") {
  //     changeColor(changeThemes[3]);
  //   }
  //   redirect();
  // };
  // useEffect(() => {
  //   // if (activeScreen) {
  //   //   if (activeScreen.includes("Theme")) {
  //   //     handleColorChange();
  //   //   }
  //   if (activeScreen.includes("Change Display")) {
  //     setActiveScreen();
  //   }
  // }, [activeScreen]);
  /////////////////////////
  //Display Theme
  console.log("Active screen from screen", activeScreen);
  if (activeScreen.includes("Theme")) {
    console.log("Yes it does");
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
