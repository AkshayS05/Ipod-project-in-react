import React, { useState } from "react";
//css file
import "./Settings.css";
//icons
import settingsIcon from "../assets/settingsIcon.svg";
import backIcon from "../assets/backIcon.svg";

export default function Settings({ activeItem, activeScreen }) {
  console.log(activeItem);
  const [active, setActive] = useState(activeItem);
  console.log(active);
  const changeTheme = ["colorOne", "colorTwo", "colorThree", "colorFour"];
  const colorChange = changeTheme.map((theme, index) => {
    const active = activeItem === index ? "active" : "";
    return (
      <div key={index}>
        <ul className="colorList" id="colorList">
          <li className={`colorItem ${active}`}>{theme}</li>
        </ul>
      </div>
    );
  });
  console.log(activeScreen);

  return (
    <div className="setting">
      <img src={settingsIcon} />
      <div>{colorChange}</div>
      <div className="back">
        <img src={backIcon} />
      </div>
    </div>
  );
}
