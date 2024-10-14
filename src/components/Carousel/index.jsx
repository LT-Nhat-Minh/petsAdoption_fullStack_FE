import React, { useEffect, useRef, useState } from "react";
import img1 from "../../asset/Carousel/1.jpeg";
import img2 from "../../asset/Carousel/2.jpeg";
import img3 from "../../asset/Carousel/3.jpeg";
import img4 from "../../asset/Carousel/4.jpeg";
import img5 from "../../asset/Carousel/5.jpg";
import img6 from "../../asset/Carousel/6.jpg";
import img7 from "../../asset/Carousel/7.jpg";
import "./style.scss";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

function Carousel() {
  const imgs = [img1, img2, img3, img4, img5, img6, img7];
  const itemsRef = useRef([]);

  const handleClickPrev = () => {
    const currentIndex = itemsRef.current.findIndex((item) =>
      item.classList.contains("active")
    );
    const prevIndex = currentIndex === 0 ? imgs.length - 1 : currentIndex - 1;
    updateActiveItem(prevIndex);
  };

  const handleClickNext = () => {
    const currentIndex = itemsRef.current.findIndex((item) =>
      item.classList.contains("active")
    );
    const nextIndex = currentIndex === imgs.length - 1 ? 0 : currentIndex + 1;
    updateActiveItem(nextIndex);
  };

  const updateActiveItem = (newIndex) => {
    itemsRef.current.forEach((item, index) => {
      if (
        index === newIndex
          ? item.classList.add("active")
          : item.classList.remove("active")
      );
    });
  };

  React.useEffect(() => {
    if (itemsRef.current.length > 0) {
      itemsRef.current[0].classList.add("active");
    }
  }, []);

  return (
    <div className="carousel">
      <div className="list">
        {imgs.map((img, index) => (
          <div
            className="item"
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <img src={img} alt="" />
            <div className="content">
              <h2>Title{index}</h2>
              <p>Description</p>
              <button>button{index}</button>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <div className="prev" onClick={handleClickPrev}>
          <LeftOutlined />
        </div>
        <div className="next" onClick={handleClickNext}>
          <RightOutlined />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
