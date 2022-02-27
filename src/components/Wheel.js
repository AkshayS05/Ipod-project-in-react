import React, { useEffect, useState } from "react";
import "./Wheel.css";
import useWheel from "../hooks/useWheel";

import Screen from "./Screen";
//importing zingtouch library
import ZingTouch from "zingtouch";
import Rotate from "zingtouch/src/gestures/Rotate.js";

//icons
import leftIcon from "../assets/leftIcon.svg";
import rightIcon from "../assets/rightIcon.svg";
import playIcon from "../assets/playIcon.svg";
import pauseIcon from "../assets/pauseIcon.svg";
import menuIcon from "../assets/menuIcon.svg";
import pressButtonIcon from "../assets/pressButtonIcon.svg";
export default function Wheel({
  list,
  handleItem,
  handleScreen,
  
}) {
  useWheel(list, handleItem);

  // useEffect(() => {
  //   //Using a layer on top of the entire page for "fat-finger" detection on mobile devices.
  //   let currentAngle = 0;
  //   let currentIndex = 3;
  //   let touchArea = document.getElementById("wheel");
  //   let myRegion = new ZingTouch.Region(touchArea);
  //   myRegion.bind(touchArea, "rotate", function (e) {
  //     let rotatable = document.getElementsByClassName("menuList");
  //     currentAngle += e.detail.distanceFromLast;

  //     if (currentAngle > 15) {
  //       if (currentIndex < 3) {
  //         currentIndex += 1;
  //       } else {
  //         currentIndex = 0;
  //       }
  //       handleItem(currentIndex);
  //       currentAngle = 0;
  //     }
  //     if (currentAngle < -15) {
  //       if (currentIndex > 0) {
  //         currentIndex -= 1;
  //       } else {
  //         currentIndex = 3;
  //       }
  //       currentAngle = 0;
  //       handleItem(currentIndex);
  //     }
  //   });
  // }, [handleItem]);

  const wheelComponent = (
    <>
      <div className="outerSurface">
        <div className="buttonControls" id="wheel">
          <div
            className="innerSurface"
            onClick={() => handleScreen()}
            id="menu"
          >
            <img src={pressButtonIcon} />
          </div>
          <div className="menuButton">
            <img src={menuIcon} />
          </div>
          <div className="leftButton">
            <img src={leftIcon} />
          </div>
          <div className="rightButton">
            <img src={rightIcon} />
          </div>
          <div className="playButton">
            <img src={playIcon} />
          </div>
          <div className="pauseButton">
            <img src={pauseIcon} />
          </div>
        </div>
      </div>
    </>
  );

  return <div>{wheelComponent}</div>;
}
