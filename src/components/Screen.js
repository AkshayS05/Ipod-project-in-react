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
}) {
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
  const changeThemes = [
    "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%",
    "linear-gradient(90deg, #1CB5E0 0%, #000851 100%",
  ];

  console.log(changeThemes[0]);
  const { color, changeColor } = useTheme();
  const handleColorChange = () => {
    if (activeScreen === "colorOne") {
      changeColor(changeThemes[0]);
    }
    if (activeScreen === "colorTwo") {
      changeColor(changeThemes[1]);
    }
    // if (activeScreen === "colorThree") {
    //   changeColor(themeColors[2]);
    // }
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (activeScreen) {
      handleColorChange();
    }
  }, [activeScreen]);
  // menun--items as props
  // const checkDisplayScreen = (activeScreen, activeItem) => {
  //   if (activeItem === "colorOne") {
  //     console.log("changing color");
  //     return <Settings activeItem={activeItem} activeScreen={activeScreen} />;
  //   } else if (activeScreen === "Music") {
  //     return <Music activeItem={activeItem} activeScreen={activeScreen} />;
  //   } else if (activeScreen === "Games") {
  //     return <Game activeItem={activeItem} activeScreen={activeScreen} />;
  //   } else if (activeScreen === "Pictures") {
  //     return <Picture activeItem={activeItem} activeScreen={activeScreen} />;
  //   }

  return (
    <div>
      {showMenu && (
        <div className="menuBar" style={{ backgroundImage: color }}>
          <Date /> {renderedItems}
        </div>
      )}
      {/* {checkDisplayScreen(activeScreen)} */}
    </div>
  );
}
