import React from "react";

//css file
import "./Music.css";
// icon
import musicIcon from "../assets/musicIcon.svg";
import backIcon from "../assets/backIcon.svg";

export default function Music() {
  const renderedMusicList = () => {};
  return (
    <div className="music">
      <img src={musicIcon} />
      <div className="back">
        <img src={backIcon} />
      </div>
    </div>
  );
}
