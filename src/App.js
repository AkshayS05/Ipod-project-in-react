import React, { useState, useEffect } from "react";
import Wheel from "./components/Wheel";
import Screen from "./components/Screen";
const Menubar = ["Settings", "Music", "Games", "Pictures"];
const changeTheme = ["colorOne", "colorTwo", "colorThree"];

const musicMenu = ["Youtube", "All Songs"];
const gamesMenu = ["Game1", "Game2"];
const pictureMenu = ["Media", "All Pictures"];

export default function App() {
  //callback function--prop to wheel

  const [activeItem, setActiveItem] = useState("");
  const [activeScreen, setActiveScreen] = useState("");
  const [currentMenu, setCurrentMenu] = useState(Menubar);
  const [showMenu, setShowMenu] = useState(true);
  // const [menuCheck, setMenuCheck] = useState(Menubar);
  const handleMenuChange = (index) => {
    setActiveItem(index);
  };
  useEffect(() => {
    if (activeScreen === "Settings") {
      setCurrentMenu(changeTheme);
    } else if (activeScreen === "Games") {
      setCurrentMenu(gamesMenu);
    } else if (activeScreen === "Pictures") {
      setCurrentMenu(pictureMenu);
    } else if (activeScreen === "Music") {
      setCurrentMenu(musicMenu);
    }
  }, [activeScreen]);
  const handleScreenChange = () => {
    setActiveScreen(currentMenu[activeItem]);
  };

  return (
    <div>
      <Screen
        items={currentMenu}
        activeItem={activeItem}
        activeScreen={activeScreen}
        showMenu={showMenu}
      />
      <Wheel
        list={currentMenu}
        handleItem={handleMenuChange}
        handleScreen={handleScreenChange}
      />
    </div>
  );
}
