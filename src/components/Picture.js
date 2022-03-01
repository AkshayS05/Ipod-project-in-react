import React, { useState, useEffect } from "react";

//css
import "./Picture.css";
//icon
import pictureIcon from "../assets/pictureIcon.svg";
import backIcon from "../assets/backIcon.svg";

export default function Picture() {
  const [cards, setCards] = useState([]);
  const images = [
    {
      src: "/img/image1.jpg",
    },
    {
      src: "/img/image2.jpg",
    },
    {
      src: "/img/image3.jpg",
    },
    {
      src: "/img/image4.jpg",
    },
    {
      src: "/img/image5.jpg",
    },
    {
      src: "/img/image6.jpg",
    },
    {
      src: "/img/image7.jpg",
    },
    {
      src: "/img/image8.jpg",
    },
  ];

  const pictures = images.map((image, index) => {
    return (
      <div key={index}>
        <img src={images[index].src} />
      </div>
    );
  });

  return (
    <div className="pictures">
      <div className="gallery">{pictures}</div>
    </div>
  );
}
