import React, { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";

import "./Wheel.css";
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
import powerIcon from "../assets/powerIcon.svg";

export default function Wheel({
  list,
  handleItem,
  handleScreen,
  redirect,
  Power,
}) {
  const { color } = useTheme();
  const handleShowMainMenu = () => {
    redirect();
  };
  const PowerControl = () => {
    Power();
  };
  useEffect(() => {
    //Using a layer on top of the entire page for "fat-finger" detection on mobile devices.
    let currentAngle = 0;
    let currentIndex = list.length - 1;

    let touchArea = document.getElementById("wheel");
    let myRegion = new ZingTouch.Region(touchArea);
    myRegion.bind(touchArea, "rotate", function (e) {
      let rotatable = document.getElementsByClassName("menuList");
      currentAngle += e.detail.distanceFromLast;

      if (currentAngle > 15) {
        if (currentIndex < list.length - 1) {
          currentIndex += 1;
        } else {
          currentIndex = 0;
        }
        handleItem(currentIndex);
        currentAngle = 0;
      }
      if (currentAngle < -15) {
        if (currentIndex > 0) {
          currentIndex -= 1;
        } else {
          currentIndex = list.length - 1;
        }
        currentAngle = 0;
        handleItem(currentIndex);
      }
    });
  }, [list]);
  const wheelComponent = (
    <>
      <div className="outerSurface" style={{ backgroundImage: color }}>
        <div className="buttonControls" id="wheel">
          <div
            className="innerSurface"
            onClick={() => handleScreen()}
            onTouchStart={() => handleScreen()}
            id="menu"
          >
            <img
              className="pressBtnClass"
              src={pressButtonIcon}
              // onClick={() => handleScreen()}
            />
          </div>
          <div className="menuButton">
            <img
              src={menuIcon}
              onClick={() => handleShowMainMenu()}
              onTouchStart={() => handleShowMainMenu()}
            />
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
          <div className="powerIcon">
            <img
              src={powerIcon}
              onClick={() => PowerControl()}
              onTouchStart={() => PowerControl()}
            />
          </div>
        </div>
      </div>
    </>
  );

  return <div>{wheelComponent}</div>;
}
