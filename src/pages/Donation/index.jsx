import React from "react";
import "../../pages/Donation/style.scss";
import img1 from "../../asset/Icon/dona2.jpg";
import Sponsors from "../../components/Sponsors";
import chancho from "../../asset/Icon/pet.png";
import ta from "../../asset/Icon/ta.jpg";
import quanao from "../../asset/Icon/quanao.jpg";
import thucan from "../../asset/Icon/thucan.jpg";
import dauchan from "../../asset/Footer/pattern1.png";
import AdoptSlider from "../../components/AdoptSlider";
import RecoverSlider from "../../components/RecoverSlider";
import SupportOption from "../../components/SuportOption";
import Listsponsor from "../../components/ListSponsor";

function Donation(props) {
  return (
    <div className="donation_content">
      <div className="dona banner">
        <div className="overlay">
          <h1 className="title1 fw white mlr110">Ủng Hộ</h1>
          <a className="a_tag mlr110" href="/">
            <span className="trang_chu white">Trang chủ </span>{" "}
            <span className="ungho"> {">"} Ủng Hộ</span>
          </a>
        </div>
      </div>
      <div className="content grid grid_dona mt5 mlr110">
        <div className="content_text">
          <h1>Tôi Muốn Ủng Hộ</h1>
          <hr className="hru" />
          <p>
            Mọi hoạt động cứu hộ của Hanoi Pet Adoption hoàn toàn dựa trên các
            khoản quyên góp từ cộng đồng. Chi phí hàng tháng của nhóm bao gồm
            tiền thuê nhà, tiền viện phí, thức ăn, điện, nước, thuốc men và đồ
            dùng, bỉm tã, lương hỗ trợ các bạn tnv dọn dẹp... Nhóm rất cần sự
            giúp đỡ của các bạn để có thể duy trì nhà chung cũng như đội cứu hộ.
            Chỉ cần cố định 50k - 100k hàng tháng là các bạn đã giúp đỡ được cho
            nhóm và cách bé rất nhiều!
          </p>
          <p>
            Chi phí sẽ được chia đều cho các bé khác còn nằm viện và gây dựng
            nhà chung. Ngoài ra Nhóm cũng tiếp nhận quyên góp bằng hiện vật như
            quần áo cũ (để lót chuồng), bỉm, găng tay y tế, thức ăn, cát vệ sinh
            v.v...
          </p>
          <p>
            *Lưu ý: nhóm không dùng zalo và KHÔNG BAO GIỜ yêu cầu Mạnh Thường
            Quân cung cấp thông tin thẻ hoặc mã OTP
          </p>
          <p>
            *Danh sách mạnh thường quân quyên góp cho nhóm sẽ được cập nhật tại
            đây:
          </p>
          <ul>
            <li>
              2024: <a href="">Xem tại đây</a>
            </li>
            <li>
              2023: <a href="">Xem tại đây</a>
            </li>
            <li>
              2022: <a href="">Xem tại đây</a>
            </li>
            <li>
              2021: <a href="">Xem tại đây</a>
            </li>
            <li>
              2020: <a href="">Xem tại đây</a>
            </li>
            <li>
              2019: <a href="">Xem tại đây</a>
            </li>
            <li>
              2018: <a href="">Xem tại đây</a>
            </li>
          </ul>
          <ul>
            <li>
              Link thống kê viện phí 2024: <a href="">Xem tại đây</a>
            </li>
            <li>
              Link thống kê viện phí 2023: <a href="">Xem tại đây</a>
            </li>
            <li>
              Link thống kê viện phí 2022: <a href="">Xem tại đây</a>
            </li>
            <li>
              Link thống kê viện phí 2021: <a href="">Xem tại đây</a>
            </li>
            <li>
              Link thống kê viện phí 2020: <a href="">Xem tại đây</a>
            </li>
            <li>
              Link thống kê viện phí 2019: <a href="">Xem tại đây</a>
            </li>
          </ul>
          <p>
            Tài khoản nhận quyên góp của nhóm. Chi phí sẽ được chia đều cho các
            bé khác còn nằm viện và gây dựng nhà chung.
          </p>
          <p>
            Vietcombank<br></br>
            Ngô Trường Nhân<br></br>
            0924787585250
          </p>
          <hr className="hr2" />
          <p>
            Mbbank<br></br>
            Mai Võ Hoài Tiên<br></br>
            0353705423
          </p>
          <p>
            Paypal: oncemorelife@gmail.com<br></br>
            Momo 0353705423
          </p>
          <hr className="hr2" />
          <p>
            Địa điểm đặt hòm quyên góp:<br></br>
            IE104.CNVN Store<br></br>
            Phòng khám UIT: 01 Hàn Thuyên, P. Linh Trung, TP. Thủ Đức, TP. HCM
          </p>
          <button className="unghongay white fw">ỦNG HỘ NGAY</button>
        </div>
        <img className="content_img_dona" src={img1} />
      </div>
      <Sponsors />
      <SupportOption />
      <Listsponsor />
      <AdoptSlider list={props.list} />
      <RecoverSlider />
    </div>
  );
}

export default Donation;
