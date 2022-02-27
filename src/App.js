import React, { useState, useEffect } from "react";
import Wheel from "./components/Wheel";
import Screen from "./components/Screen";
import Date from "./components/Time";
//custom hook for changing theme
import { useTheme } from "./hooks/useTheme";
const Menubar = ["Settings", "Music", "Games", "Pictures"];
const changeTheme = ["colorOne", "colorTwo", "white"];

const musicMenu = ["Youtube", "All Songs"];
const gamesMenu = ["Game1", "Game2"];
const pictureMenu = ["Media", "All Pictures"];

export default function App() {
  //callback function--prop to wheel

  const [activeItem, setActiveItem] = useState("");
  const [activeScreen, setActiveScreen] = useState("");
  const [currentMenu, setCurrentMenu] = useState(Menubar);
  const [showMenu, setShowMenu] = useState(true);
  const [colorChange, setColorChange] = useState("red");
  // const [menuCheck, setMenuCheck] = useState(Menubar);
  const handleMenuChange = (index) => {
    setActiveItem(index);
  };
  // const handleColor = (col) => {
  //   setColorChange(col);
  // };
  // const redirectScreen = () => {
  //   setCurrentMenu(Menubar);
  // };

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
      <div className="components">
        <Screen
          items={currentMenu}
          activeItem={activeItem}
          activeScreen={activeScreen}
          showMenu={showMenu}
        />
      </div>

      <div className="wheelComponent">
        <Wheel
          list={currentMenu}
          handleItem={handleMenuChange}
          handleScreen={handleScreenChange}
          color={colorChange}
        />
      </div>
    </div>
  );
}
