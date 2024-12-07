import React from "react";
import "./style.scss";

function SideBar(props) {
  return (
    <div className="sidebar">
      <div>
        <h2>{props.isEnglish ? "Categories" : "Chuyên Mục"}</h2>
        <hr />
        <div>
          <p>{props.isEnglish ? "Loving Corner" : "Góc Yêu Thương"}</p>
          <p>
            {props.isEnglish ? "Volunteer Activities" : "Hoạt động tình nguyện"}
          </p>
          <p>
            {props.isEnglish
              ? "Knowledge on Raising Pets"
              : "Kiến thức nuôi boss"}
          </p>
          <p>{props.isEnglish ? "Rescue Process" : "Quá trình cứu hộ"}</p>
          <p>{props.isEnglish ? "News and Events" : "Tin tức và sự kiện"}</p>
          <p>{props.isEnglish ? "Videos" : "Video"}</p>
          <p>{props.isEnglish ? "Cute Moments" : "Dễ thương"}</p>
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
