import React from "react";
import "./Time.css";
export default function Time() {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const hour = now.getHours();
  const min = now.getMinutes();
  const time = `${hour}:${min}`;
  return <div className="time">{time}</div>;
}
