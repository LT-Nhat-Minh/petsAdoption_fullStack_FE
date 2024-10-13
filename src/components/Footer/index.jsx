import {
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import React from "react";
import "./style.scss";
import { FacebookEmbed } from "react-social-media-embed";
import logo from "../../asset/Logo/hanoi-adoption-logo.png";

function Footer(props) {
  const htmlString = `<div class="fb-post" data-href="https://www.facebook.com/photo/?fbid=556869793147502&amp;set=a.556869763147505" data-width="500" data-show-text="true"><blockquote cite="https://www.facebook.com/photo.php?fbid=556869793147502&amp;set=a.556869763147505&amp;type=3" class="fb-xfbml-parse-ignore"><p>THÔNG TIN NHẬN QUYÊN GÓP - Nhận Nuôi Thú Cưng - Hanoi Pet Adoption
Điều mong ước lớn nhất của nhóm hiện tại là sẽ xây...</p>Người đăng: <a href="https://www.facebook.com/hanoipetadoption">Nhận Nuôi Thú Cưng - Hanoi Pet Adoption</a> vào&nbsp;<a href="https://www.facebook.com/photo.php?fbid=556869793147502&amp;set=a.556869763147505&amp;type=3">Thứ Tư, 25 tháng 1, 2023</a></blockquote></div>`;

  return (
    <div className="footer">
      <hr />
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
              <h3>Về chúng tôi</h3>
              <hr />
              <p>
                Nhóm trẻ tình nguyện viên Việt Nam và quốc tế, hoạt động vì tình
                yêu chó mèo.
              </p>
              <h3>Thông tin liên hệ</h3>
              <hr />
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <a href="/contact">
                    <PhoneOutlined />
                    (+84)39 320 1068
                  </a>
                </li>
                <li>
                  <a href="/email">
                    <MailOutlined />
                    hanoipetadoption@gmail.com
                  </a>
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
        Copyright 2019 / Designed by BMBSoft VietNam
      </div>
    </div>
  );
}

export default Footer;
