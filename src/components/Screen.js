import React, { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { useNavigate } from "react-router-dom";
import Settings from "./Settings";
import Music from "./Music";
import Game from "./Game";
import Picture from "./Picture";
import Date from "./Time";

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
}) {
  const [selected, setSelected] = useState(null);
  const renderedItems = items.map((item, index) => {
    const active = activeItem === index ? "active" : "";
    const inActive = !controlPower ? "inActive" : "";

    return (
      <div key={index}>
        <ul className="menuList" id="menuList">
          <li className={`menuItem ${active} ${inActive}`}>{item}</li>
        </ul>
      </div>
    );
  });
  const changeThemes = [
    "linear-gradient(90deg, #cb2d3e 0%, #ef4731 100%)",
    "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)",
    "linear-gradient(180deg, #D3CCE3 0%, #E9E4F0 100%)",
  ];
  const { color, changeColor } = useTheme();
  const handleColorChange = () => {
    if (activeScreen === "Theme Firewatch") {
      changeColor(changeThemes[0]);
    }
    if (activeScreen === "Theme Crystal Blue") {
      changeColor(changeThemes[1]);
    }
    if (activeScreen === "Theme Delicate") {
      changeColor(changeThemes[2]);
    }
    redirect();
  };
  useEffect(() => {
    if (activeScreen) {
      if (activeScreen.includes("Theme")) {
        handleColorChange();
      }
    }
  }, [activeScreen]);

  return (
    <div>
      {showMenu && (
        <div className="menuBar" style={{ backgroundImage: color }}>
          <Date controlPower={controlPower} /> {renderedItems}
        </div>
      )}
      {/* {checkDisplayScreen(activeScreen)} */}
    </div>
  );
}
