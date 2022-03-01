import React from "react";
import Screen from "./Screen";
import { useTheme } from "../hooks/useTheme";
//css
import "./TopComp.css";
//icons
import cameraIcon from "../assets/cameraIcon.svg";

export default function TopComp({ children }) {
  const { color } = useTheme();
  return (
    <div className="topbar" style={{ backgroundImage: color }}>
      <img className="cameraIcon" src={cameraIcon} /> {children}
    </div>
  );
}
