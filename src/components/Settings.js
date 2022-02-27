import React, { useState } from "react";
//css file
import "./Settings.css";
//icons
import settingsIcon from "../assets/settingsIcon.svg";
import backIcon from "../assets/backIcon.svg";
// import useWheel from "../hooks/useWheel";
import Wheel from "./Wheel";
export default function Settings(activeItem, activeScreen) {
  // const [active, setActive] = useState("");
  // // const [activeScreen, setActiveScreen] = useState("");

  // const handleMenuChange = (index) => {
  //   setActive(index);
  // };
  // console.log(active);
  // console.log(activeScreen);
  // useWheel(changeTheme, handleMenuChange);
  // console.log(activeItem);
  // if (activeItem === "colorOne") {
  //   console.log(true);
  // }
  // const colorChange = changeTheme.map((theme, index) => {
  //   const active = activeItem === index ? "active" : "";
  //   return (
  //     <div key={index}>
  //       <ul className="menuList" id="colorList">
  //         <li className={`colorItem ${active}`}>{theme}</li>
  //       </ul>
  //     </div>
  //   );
  // });
  // const showScreen = (active) => {
  //   if (active === 0) {
  //     console.log("Its color one");
  //   }
  //   if (active === "colorTwo") {
  //     console.log("Its color two");
  //   }
  //   if (active === "colorThree") {
  //     console.log("Its color three");
  //   }
  // };
  // showScreen();
  console.log("in settings page", activeItem);
  console.log("in settings page", activeScreen);
  return (
    <div className="setting">
      <img src={settingsIcon} />
      <div className="back">
        <img src={backIcon} />
      </div>
    </div>
  );
}
