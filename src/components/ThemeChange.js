import React, { useState, useEffect } from "react";
import ThemeChange from "./ThemeChange";

import { useTheme } from "../hooks/useTheme";
import Date from "./Time";
import Music from "./Music";
import Game from "./Game";
import Picture from "./Picture";

import PowerOff from "./PowerOff";
//css file
import "./ThemeChange.css";
//icons
import settingsIcon from "../assets/settingsIcon.svg";
import backIcon from "../assets/backIcon.svg";
export default function Settings({
  items,
  activeItem,
  activeScreen,
  redirect,
  controlPower,
  setMenu,
}) {
  const { color, changeColor } = useTheme();
  const changeThemes = [
    "linear-gradient(90deg, #cb2d3e 0%, #ef4731 100%)",
    "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)",
    "linear-gradient(180deg, #D3CCE3 0%, #E9E4F0 100%)",
    "linear-gradient(180deg, #444444 0%, #666 100%)",
  ];
  const handleColorChange = () => {
    console.log("Reaching here though");
    if (activeScreen === "Theme Firewatch") {
      changeColor(changeThemes[0]);
      console.log("Also after reaching here");
    }
    if (activeScreen === "Theme Crystal Blue") {
      changeColor(changeThemes[1]);
    }
    if (activeScreen === "Theme Delicate") {
      changeColor(changeThemes[2]);
    }
    if (activeScreen === "Theme Royal Black") {
      changeColor(changeThemes[3]);
    }

    redirect();
  };
  console.log(activeScreen);
  console.log("active Screen check", activeScreen.includes("Theme"));
  useEffect(() => {
    if (activeScreen) {
      if (activeScreen.includes("Theme")) {
        console.log("Inside useEffect");
        handleColorChange();
      }
    }
  }, [activeScreen]);

  return (
    <div>
      <div className="menuBar" style={{ backgroundImage: color }}>
        <Date controlPower={controlPower} />
      </div>
    </div>
  );
}
