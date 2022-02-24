import React, { useEffect, useState } from "react";
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
export default function Wheel({ list, handleItem, handleScreen }) {
  console.log(list);
  // const items = list.map((li, index) =>  console.log(li, index));
  // const [item, setItem] = useState(items[index]);
  // const handleUpdate = () => {
  //   setItem(list[0]);
  // };
  // const [elem1, elem2, elem3, elem4] = list;
  // console.log(elem1);
  // console.log(elem2);
  // console.log(elem3);
  // console.log(elem4);
  useEffect(() => {
    //Using a layer on top of the entire page for "fat-finger" detection on mobile devices.
    // const renderedItems = list.map((item, index) => {
    // const active = index === selector ? "active" : "";
    let currentAngle = 0;
    let currentIndex = 3;
    let touchArea = document.getElementById("wheel");
    let myRegion = new ZingTouch.Region(touchArea);
    myRegion.bind(touchArea, "rotate", function (e) {
      let rotatable = document.getElementsByClassName("menuList");
      currentAngle += e.detail.distanceFromLast;

      console.log(currentAngle);
      if (currentAngle > 15) {
        if (currentIndex < 3) {
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
          currentIndex = 3;
        }
        currentAngle = 0;
        handleItem(currentIndex);
      }
      ////////////////////////////////////////////////////////
      // if (currentAngle < 0) {
      //   if (currentIndex > 0) {
      //     currentIndex -= 1;
      //   } else if (currentIndex === 0) {
      //     currentIndex = 3;
      //   }

      //   handleItem(currentIndex);
      // }
      // if (currentAngle > 0) {
      //   if (currentIndex < 3) {
      //     currentIndex += 1;
      //   } else if (currentIndex === 3) {
      //     currentIndex = 0;
      //   }

      //   handleItem(currentIndex);
      // }
      /////////////////////////////////////////////////
      // if (currentAngle > 0) {
      //   // if (incremental === 100) {
      //   if (currentIndex < 3) {
      //     currentIndex = currentIndex + 1;
      //   } else {
      //     currentIndex = 0;
      //   }
      //   handleItem(currentIndex);
      //   // }
      //   // currentAngle = 0;
      // } else {
      //   if (currentIndex > 0) {
      //     currentIndex = currentIndex - 1;
      //   } else {
      //     currentIndex = 3;
      //   }
      //   handleItem(currentIndex);

      //   // currentAngle = 0;
      // }

      setOutput([
        ["Gesture", "Rotate"],
        ["angle", Math.floor(e.detail.angle) + "°"],
        ["distanceFromOrigin", Math.floor(e.detail.distanceFromOrigin) + "°"],
        ["distanceFromLast", Math.floor(e.detail.distanceFromLast) + "°"],
      ]);

      function setOutput(list) {
        var outputStr = "> ";
        for (var i = 0; i < list.length; i++) {
          outputStr +=
            list[i][0] +
            ": " +
            list[i][1] +
            (i === list.length - 1 ? "" : " , ");
        }
        var output = document.getElementById("output");
        output.innerHTML = outputStr;
      }
    });
  }, [handleItem]);
  const wheelComponent = (
    <>
      <div className="outerSurface">
        <div className="buttonControls" id="wheel">
          <div
            className="innerSurface"
            onClick={() => handleScreen()}
            id="menu"
          ></div>
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
      <div id="output"> Interaction meta will output here.</div>
    </>
  );

  return <div>{wheelComponent}</div>;
}
