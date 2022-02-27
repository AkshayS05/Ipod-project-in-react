import React, { useEffect, useState } from "react";
import ZingTouch from "zingtouch";
import Rotate from "zingtouch/src/gestures/Rotate.js";
//css
import "./useWheel.css";
//icons
import leftIcon from "../assets/leftIcon.svg";
import rightIcon from "../assets/rightIcon.svg";
import playIcon from "../assets/playIcon.svg";
import pauseIcon from "../assets/pauseIcon.svg";
import menuIcon from "../assets/menuIcon.svg";
import pressButtonIcon from "../assets/pressButtonIcon.svg";
export default function useWheel(list, handleItem, handleScreen) {
  useEffect(() => {
    //Using a layer on top of the entire page for "fat-finger" detection on mobile devices.
    let currentAngle = 0;
    let currentIndex = list.length - 1;

    let touchArea = document.getElementById("wheel");
    let myRegion = new ZingTouch.Region(touchArea);
    myRegion.bind(touchArea, "rotate", function (e) {
      let rotatable = document.getElementsByClassName("colorList");
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
  }, [handleItem]);
}
