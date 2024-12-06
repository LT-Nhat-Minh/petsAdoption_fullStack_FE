import {
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import React from "react";
import "./style.scss";
import { FacebookEmbed } from "react-social-media-embed";
import logo from "../../asset/Logo/Logo.png";

function Footer(props) {
  const htmlString = `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%2F%3Ffbid%3D556869793147502%26set%3Da.556869763147505&show_text=true&width=500" width="500" height="614" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`;

  return (
    <div className="footer">
      <div className="footer_container" style={{ margin: "100px 0 50px 0" }}>
        <div className="footer_content">
          <div>
            <img
              src={logo}
              alt=""
              style={{ height: "60px", margin: "0 10px" }}
            />
            <div>
              <a href="https://www.facebook.com/hanoipetadoption/">
                <FacebookOutlined />
              </a>
              <a href="https://www.youtube.com/channel/UCdLb536ht3xSJ6YJ-LF8r3g">
                <YoutubeOutlined />
              </a>
              <a href="https://www.instagram.com/hanoipetadoption/">
                <InstagramOutlined />
              </a>
            </div>
          </div>
          <div>
            <div>
              <h3>{props.isEnglish ? "About Us" : "Về chúng tôi"}</h3>
              <hr />
              <p>
                {props.isEnglish
                  ? "A group of young Vietnamese and international volunteers, working for the love of dogs and cats."
                  : "Nhóm trẻ tình nguyện viên Việt Nam và quốc tế, hoạt động vì tình yêu chó mèo."}
              </p>
              <h3>
                {props.isEnglish ? "Contact Information" : "Thông tin liên hệ"}
              </h3>
              <hr />
              <ul style={{ all: "unset", listStyleType: "none" }}>
                <li>
                  <p>
                    <a href="/contact">
                      <PhoneOutlined style={{ marginRight: "10px" }} />
                      <span style={{ color: "#018ae0" }}>(+84) 09090909009</span>
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="/email">
                      <MailOutlined style={{ marginRight: "10px" }} />
                      <span style={{ color: "#018ae0" }}>
                        oncemorelife@gmail.com
                      </span>
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <EnvironmentOutlined style={{ marginRight: "10px" }} />
                    {props.isEnglish
                      ? "Ho Chi Minh City - Vietnam"
                      : "TP Hồ Chí Minh - Việt Nam"}
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <div dangerouslySetInnerHTML={{ __html: htmlString }} />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer_credits">
        {props.isEnglish
          ? "Copyright 2019 / Designed by BMBSoft VietNam"
          : "Copyright 2019 / Designed by BMBSoft VietNam"}
      </div>
    </div>
  );
}

export default Footer;
