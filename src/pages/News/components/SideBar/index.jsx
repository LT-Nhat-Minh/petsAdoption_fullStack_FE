import React from "react";
import "./style.scss";

function SideBar(props) {
  return (
    <div className="sidebar">
      <div>
        <h2>Chuyên Mục</h2>
        <hr />
        <div>
          <p>Góc Yêu Thương</p>
          <p>Hoạt động tình nguyện</p>
          <p>Kiến thức nuôi boss</p>
          <p>Quá trình cứu hộ</p>
          <p>Tin tức và sự kiện</p>
          <p>Video</p>
          <p>Dễ thương</p>
        </div>
      </div>
      <div>
        <h2>Video về chúng tôi</h2>
        <hr />
        <div className="video-container">
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fhanoipetadoption%2Fvideos%2F2113706232215555%2F&show_text=false&width=560&t=0"
            width="90%"
            height="270"
            style={{ border: "none", overflow: "hidden", margin: "0 auto" }}
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
