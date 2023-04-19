import { EastOutlined, WestOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import "./slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  const data = [
    "https://img.freepik.com/premium-photo/flowers-style-watercolor-art-luxurious-floral-elements-botanical-background-wallpaper-design-prints-invitations-postcards-small-pink-flowers-3d-illustration_76964-2203.jpg?size=626&ext=jpg&ga=GA1.2.1277636258.1681925990",
    "https://img.freepik.com/premium-photo/flowers-style-watercolor-art-luxurious-floral-elements-botanical-background-wallpaper-design-prints-invitations-postcards-small-pink-flowers-3d-illustration_76964-2203.jpg?size=626&ext=jpg&ga=GA1.2.1277636258.1681925990",
    "https://img.freepik.com/premium-photo/flowers-style-watercolor-art-luxurious-floral-elements-botanical-background-wallpaper-design-prints-invitations-postcards-small-pink-flowers-3d-illustration_76964-2203.jpg?size=626&ext=jpg&ga=GA1.2.1277636258.1681925990",
  ];
  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX( -${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="x" />
        <img src={data[1]} alt="a" />
        <img src={data[2]} alt="b" />
        <img src={data[2]} alt="b" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlined />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlined />
        </div>
      </div>
    </div>
  );
};

export default Slider;
