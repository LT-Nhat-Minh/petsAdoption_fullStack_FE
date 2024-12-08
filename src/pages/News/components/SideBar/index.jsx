import React from "react";
import "./style.scss";
import { useNavigate, useOutletContext } from "react-router-dom";

function SideBar(props) {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div>
        <h2>{props.isEnglish ? "Categories" : "Chuyên Mục"}</h2>
        <hr />
        <div>
          <p
            onClick={() => {
              navigate("/news");
              props.setCategory("all");
            }}
          >
            {props.isEnglish ? "All" : "Tất Cả"}
          </p>
          <p
            onClick={() => {
              navigate("/news");
              props.setCategory("1");
            }}
          >
            {props.isEnglish ? "Loving Corner" : "Góc Yêu Thương"}
          </p>
          <p
            onClick={() => {
              navigate("/news");
              props.setCategory("2");
            }}
          >
            {props.isEnglish ? "Volunteer Activities" : "Hoạt động tình nguyện"}
          </p>
          <p
            onClick={() => {
              navigate("/news");
              props.setCategory("3");
            }}
          >
            {props.isEnglish
              ? "Knowledge on Raising Pets"
              : "Kiến thức nuôi boss"}
          </p>
          <p
            onClick={() => {
              navigate("/news");
              props.setCategory("4");
            }}
          >
            {props.isEnglish ? "Rescue Process" : "Quá trình cứu hộ"}
          </p>
          <p
            onClick={() => {
              navigate("/news");
              props.setCategory("5");
            }}
          >
            {props.isEnglish ? "News and Events" : "Tin tức và sự kiện"}
          </p>
          <p
            onClick={() => {
              navigate("/news");
              props.setCategory("6");
            }}
          >
            {props.isEnglish ? "Videos" : "Video"}
          </p>
          <p
            onClick={() => {
              navigate("/news");
              props.setCategory("7");
            }}
          >
            {props.isEnglish ? "Cute Moments" : "Dễ thương"}
          </p>
        </div>
      </div>
      <div>
        <h2>{props.isEnglish ? "Our Videos" : "Video về chúng tôi"}</h2>
        <hr />
        <div className="video-container">
          <iframe
            title="sidebar"
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fhanoipetadoption%2Fvideos%2F2113706232215555%2F&show_text=false&width=560&t=0"
            width="90%"
            height="270"
            style={{ border: "none", overflow: "hidden", margin: "0 auto" }}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
