import React, { useState, useEffect } from "react";
import Wheel from "./components/Wheel";
import Screen from "./components/Screen";
import PowerOff from "./components/PowerOff";
import Date from "./components/Time";
//custom hook for changing theme
import { useTheme } from "./hooks/useTheme";
import TopComp from "./components/TopComp";
const Menubar = ["Settings", "Music", "Games", "Pictures"];
const changeTheme = [
  "Theme Firewatch",
  "Theme Crystal Blue",
  "Theme Delicate",
  "Theme Royal Black",
];

const musicMenu = ["Youtube", "All Songs"];
const gamesMenu = ["Game1", "Game2"];
const pictureMenu = ["Media", "All Pictures"];
const poweroff = ["Power Off"];

export default function App() {
  //callback function--prop to wheel

  const [activeItem, setActiveItem] = useState("");
  const [activeScreen, setActiveScreen] = useState("");
  const [currentMenu, setCurrentMenu] = useState(Menubar);
  const [showMenu, setShowMenu] = useState(true);
  const [colorChange, setColorChange] = useState("red");
  const [controlPower, setControlPower] = useState(true);
  // const [menuCheck, setMenuCheck] = useState(Menubar);
  const handleMenuChange = (index) => {
    setActiveItem(index);
  };

  const redirectScreen = () => {
    setCurrentMenu(Menubar);
    setActiveScreen("");
  };
  const PowerScreen = () => {
    setControlPower(!controlPower);
    setCurrentMenu(poweroff);
    if (controlPower === true) {
      setCurrentMenu(Menubar);
    }
  };
  console.log(currentMenu);
  useEffect(() => {
    if (activeScreen === "Settings") {
      setCurrentMenu(changeTheme);
    } else if (activeScreen === "Games") {
      setCurrentMenu(gamesMenu);
    } else if (activeScreen === "Pictures") {
      setCurrentMenu(pictureMenu);
    } else if (activeScreen === "Music") {
      setCurrentMenu(musicMenu);
    } else if (activeScreen === "Power Off") {
      console.log("Yesssss!11");
    }
  }, [activeScreen]);
  const handleScreenChange = () => {
    setActiveScreen(currentMenu[activeItem]);
  };
  return (
    <div>
      <TopComp>
        <div className="components">
          <Screen
            items={currentMenu}
            activeItem={activeItem}
            activeScreen={activeScreen}
            showMenu={showMenu}
            redirect={redirectScreen}
            controlPower={controlPower}
          />
        </div>

        <div className="wheelComponent">
          <Wheel
            list={currentMenu}
            handleItem={handleMenuChange}
            handleScreen={handleScreenChange}
            color={colorChange}
            redirect={redirectScreen}
            Power={PowerScreen}
          />
        </div>
      </TopComp>
    </div>
  );
}
