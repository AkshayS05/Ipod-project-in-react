import React, { useState, useEffect } from "react";
import Wheel from "./components/Wheel";
import Screen from "./components/Screen";
import PowerOff from "./components/PowerOff";
import Date from "./components/Time";
//custom hook for changing theme
import { useTheme } from "./hooks/useTheme";
import TopComp from "./components/TopComp";
//All the menus for the app
const Menubar = ["Settings", "Music", "Games", "Pictures"];
// const SettingSubMenu = ["Change Display"];
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
  const handleMenuChange = (index) => {
    setActiveItem(index);
  };
  // after choosing a particular item in a submenu, this function will be called and display the main menu i.e menubar
  const redirectScreen = () => {
    setCurrentMenu(Menubar);
    setActiveScreen("");
  };
  //the power button icon functinality is handlded by this button. When button is pressed the control power becomes requal to false, which further show the "powerOff" screen.
  const PowerScreen = () => {
    setControlPower(!controlPower);
    setCurrentMenu(poweroff);
    if (controlPower === true) {
      setCurrentMenu(Menubar);
    }
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

  // when active item is clicked, this function will display the relevant menu on the basis of the activeIndex of the screen
  const handleScreenChange = () => {
    setActiveScreen(currentMenu[activeItem]);
  };
  return (
    <div>
      {/* displaying all the components */}
      <TopComp>
        {/* passing down all the functions and settings to the child as props */}
        <div className="components">
          <Screen
            items={currentMenu}
            activeItem={activeItem}
            activeScreen={activeScreen}
            redirect={redirectScreen}
            controlPower={controlPower}
            setActiveScreen={setActiveScreen}
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
