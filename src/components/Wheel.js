import React, { useEffect, useState } from "react";
import "./Wheel.css";
//importing zingtouch library
import ZingTouch from "zingtouch";

//icons
import leftIcon from "../assets/leftIcon.svg";
import rightIcon from "../assets/rightIcon.svg";
import playIcon from "../assets/playIcon.svg";
import pauseIcon from "../assets/pauseIcon.svg";
import menuIcon from "../assets/menuIcon.svg";
export default function Wheel() {
  const [enter, setEnter] = useState("");
  useEffect(() => {
    const currentAngle = 15;
    //Using a layer on top of the entire page for "fat-finger" detection on mobile devices.
    const touchArea = document.getElementById("wheel");
    const myRegion = new ZingTouch.Region(touchArea);
    myRegion.bind(touchArea, "rotate", function (e) {
      console.log("Rotate");
    });
    // document.getElementById("wheel").style.transform = "rotate(15deg)";

    //   var target = document.getElementById("menu");
    //   var region = new ZingTouch.Region(target);

    //   region.bind(target, "rotate", function (e) {
    //     var rotatable = document.getElementById("wheel");
    //     currentAngle += e.detail.distanceFromLast;
    //     rotatable.style.transform = "rotate(" + currentAngle + "deg)";
    //   });
  });

  return (
    <div>
      <div className="outerSurface">
        <div className="buttonControls" id="wheel">
          <div className="innerSurface" id="menu"></div>
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
    </div>
  );
}
