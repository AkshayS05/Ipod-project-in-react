import React, { useState } from "react";
import Wheel from "./components/Wheel";
import Screen from "./components/Screen";
const Menubar = ["Settings", "Music", "Games", "Pictures"];
const musicMenu = ["Youtube", "All Songs"];

export default function App() {
  //callback function--prop to wheel
  const [activeItem, setActiveItem] = useState("");
  const [activeScreen, setActiveScreen] = useState("");
  // const[musicMenuItem, setMusicMenuItem];
  // const handleMusicMenuChange=(indexM)=>{
  //   setMusicMenuItem(indexM)
  // }

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
        // handleMusicScreen={handleMusicMenuChange}
      />
    </div>
  );
}
