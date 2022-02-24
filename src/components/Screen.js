import React, { useState } from "react";
import "./Screen.css";
//icon
import menuRightIcon from "../assets/menuRightIcon.svg";
export default function Screen({ items, activeItem, activeScreen }) {
  const [selected, setSelected] = useState(null);
  // const handleClick = (index) => {
  //   setSelected(index);
  // };

  //   const rendredItems = items.map((item, index) => {
  //     const active = index === selected ? "active" : "";
  //     return (
  //   <div key={item.id} id="menuItems" onClick={() => handleClick(index)}>
  //     <div className={"menuList"} id="menuList">
  //       <ul>
  //         <li id="listItem" className={`${active}`}>
  //           {item.name}
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // );
  //   });

  // using array
  // const selectedScreen = items[activeItem];
  // console.log(selectedScreen);
  // function render screen-- condition to call new component
  // rendere screen
  // </menuBar>

  // menubar omponent
  const renderedItems = items.map((item, index) => {
    const active = activeItem === index ? "active" : "";
    return (
      <div key={index}>
        <ul className="menuList" id="menuList">
          <li className={`menuItem ${active}`}>{item}</li>
        </ul>
      </div>
    );
  });
  return activeScreen === "Settings" ? (
    <div>Settings</div>
  ) : (
    <div className="menuBar">{renderedItems}</div>
  );
}
