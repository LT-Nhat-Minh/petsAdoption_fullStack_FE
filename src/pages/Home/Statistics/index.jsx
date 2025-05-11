import React, { useEffect, useState, useRef } from "react";
import "./style.scss";
import icon1 from "../../../asset/Icon/pet hospital.png";
import icon2 from "../../../asset/Icon/pet-house.png";
import icon3 from "../../../asset/Icon/interaction.png";
import icon4 from "../../../asset/Icon/dog-resting-on-a-pet-hotel-bed.png";
import { Value } from "sass";
import { useLanguageContext } from "../../../context/language.provider";

function Statistics(props) {
  const { isEnglish, setIsEnglish } = useLanguageContext();
  const icons = [icon1, icon2, icon3, icon4];
  const numbers = [2536, 1069, 339, 150];
  const thumbnailViet = [
    "Ca Cứu Hộ",
    "Đã Có Chủ",
    "Chờ Tìm Chủ",
    "Chưa Sẵn Sàng Tìm Chủ",
  ];
  const thumbnailEng = [
    "Rescued",
    "Has Owner",
    "Waiting for Owner",
    "Not Ready for Adoption",
  ];

  const [currentNumber, setCurrentNumber] = useState(icons.map(() => 0));
  const [hasCounted, setHasCounted] = useState(false);
  const statisticsRef = useRef(null);

  const CountUp = (numbers) => {
    numbers.forEach((targetValue, index) => {
      let value = 0;
      const duration = 3000;
      const increment = targetValue / (duration / 10);

      const interval = setInterval(() => {
        value += increment;
        if (value >= targetValue) {
          value = targetValue;
          clearInterval(interval);
        }

        setCurrentNumber((prevNumber) => {
          const newValue = [...prevNumber];
          newValue[index] = Math.floor(value);
          return newValue;
        });
      }, 10);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasCounted) {
          CountUp(numbers);
          setHasCounted(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (statisticsRef.current) {
      observer.observe(statisticsRef.current);
    }

    return () => {
      if (statisticsRef.current) {
        observer.unobserve(statisticsRef.current);
      }
    };
  }, [hasCounted, numbers]);

  return (
    <div className="statistics" ref={statisticsRef}>
      {icons.map((icon, index) => (
        <div key={index}>
          <div className="icon_container">
            <div className="icon">
              <img src={icon} alt="" />
            </div>
          </div>
          <h1>{currentNumber[index]}</h1>
          <h4>{(isEnglish ? thumbnailEng : thumbnailViet)[index]}</h4>
        </div>
      ))}
    </div>
  );
}

export default Statistics;
