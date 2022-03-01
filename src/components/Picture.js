import React, { useState, useEffect } from "react";

//css
import "./Picture.css";
//icon
import pictureIcon from "../assets/pictureIcon.svg";
import backIcon from "../assets/backIcon.svg";
//images
// import image1 from "../../public/img/image1.jpg";
// import image2 from "../../public/img/image2.jpg";
// import image3 from "../../public/img/image3.jpg";
// import image4 from "../../public/img/image4.jpg";
// import image5 from "../../public/img/image5.jpg";
// import image6 from "../../public/img/image6.jpg";
// import image7 from "../../public/img/image7.jpg";
// import image8 from "../../public/img/image8.jpg";

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
