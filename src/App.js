import React, { useState } from "react";
import Wheel from "./components/Wheel";
import Screen from "./components/Screen";
const Menubar = ["Settings", "Music", "Games", "Pictures"];
// const Menubar = (
//   <ul className="menuList">
//     <li id="item1">Settings</li>
//     <li id="item2">Music</li>
//     <li id="item3">Games</li>
//     <li id="item4">Pictures</li>
//   </ul>
// );
export default function App() {
  //callback function--prop to wheel
  const [activeItem, setActiveItem] = useState(0);
  const [activeScreen, setActiveScreen] = useState("");
  const handleMenuChange = (index) => {
    setActiveItem(index);
  };
  const handleScreenChange = () => {
    setActiveScreen(Menubar[activeItem]);
  };
  return (
    <div>
      <Screen
        items={Menubar}
        activeItem={activeItem}
        activeScreen={activeScreen}
      />
      <Wheel
        list={Menubar}
        handleItem={handleMenuChange}
        handleScreen={handleScreenChange}
      />
    </div>
  );
}
