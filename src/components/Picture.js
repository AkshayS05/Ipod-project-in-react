import React from "react";

//css
import "./Picture.css";
//icon
import pictureIcon from "../assets/pictureIcon.svg";
import backIcon from "../assets/backIcon.svg";

export default function Picture() {
  return (
    <div className="pictures">
      <img src={pictureIcon} />
      <div className="back">
        <img src={backIcon} />
      </div>
    </div>
  );
}
