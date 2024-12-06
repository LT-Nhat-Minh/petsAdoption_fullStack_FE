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
import { useNavigate } from "react-router-dom";
import ToSupport from "../../components/ToSupport";

function Donation(props) {
  const navigate = useNavigate();
  return (
    <div className="donation_content">
      <div className="banner">
        <div className="container">
          <h1 className="title">{props.isEnglish ? "Donate" : "Ủng Hộ"}</h1>
          <p className="breadcrumbs">
            <span className="root" onClick={() => navigate("/")}>
              {props.isEnglish ? "Home" : "Trang Chủ"}
            </span>{" "}
            {">"}{" "}
            <span className="current">
              {props.isEnglish ? "Donate" : "Ủng Hộ"}
            </span>
          </p>
        </div>
      </div>

      <div className="content grid grid_dona mt5 mlr110">
        <div className="content_text">
          <h1>{props.isEnglish ? "I Want to Donate" : "Tôi Muốn Ủng Hộ"}</h1>
          <hr className="hru" />
          <p>
            {props.isEnglish
              ? "All rescue operations of One More Life are entirely based on donations from the community. The group's monthly expenses include rent, medical bills, food, utilities, medicines, diapers, and support for volunteers... The group urgently needs your help to maintain the shelter and the rescue team. A fixed donation of 50k - 100k per month will help a lot!"
              : "Mọi hoạt động cứu hộ của One More Life hoàn toàn dựa trên các khoản quyên góp từ cộng đồng. Chi phí hàng tháng của nhóm bao gồm tiền thuê nhà, tiền viện phí, thức ăn, điện, nước, thuốc men và đồ dùng, bỉm tã, lương hỗ trợ các bạn tnv dọn dẹp... Nhóm rất cần sự giúp đỡ của các bạn để có thể duy trì nhà chung cũng như đội cứu hộ. Chỉ cần cố định 50k - 100k hàng tháng là các bạn đã giúp đỡ được cho nhóm và cách bé rất nhiều!"}
          </p>
          <p>
            {props.isEnglish
              ? "The funds will be evenly distributed to other animals still in the hospital and for maintaining the shelter. The group also accepts material donations such as old clothes (for bedding), diapers, medical gloves, food, cat litter, etc."
              : "Chi phí sẽ được chia đều cho các bé khác còn nằm viện và gây dựng nhà chung. Ngoài ra Nhóm cũng tiếp nhận quyên góp bằng hiện vật như quần áo cũ (để lót chuồng), bỉm, găng tay y tế, thức ăn, cát vệ sinh v.v..."}
          </p>
          <p>
            {props.isEnglish
              ? "*Note: The group does not use Zalo and will NEVER ask donors for card information or OTP codes."
              : "*Lưu ý: nhóm không dùng zalo và KHÔNG BAO GIỜ yêu cầu Mạnh Thường Quân cung cấp thông tin thẻ hoặc mã OTP"}
          </p>
          <p>
            {props.isEnglish
              ? "*The list of donors will be updated here:"
              : "*Danh sách mạnh thường quân quyên góp cho nhóm sẽ được cập nhật tại đây:"}
          </p>
          <ul>
            <li>
              {props.isEnglish ? "2024: " : "2024: "}
              <a href="">{props.isEnglish ? "View here" : "Xem tại đây"}</a>
            </li>
            <li>
              {props.isEnglish ? "2023: " : "2023: "}
              <a href="">{props.isEnglish ? "View here" : "Xem tại đây"}</a>
            </li>
            <li>
              {props.isEnglish ? "2022: " : "2022: "}
              <a href="">{props.isEnglish ? "View here" : "Xem tại đây"}</a>
            </li>
            {/* Repeat for other years */}
          </ul>
          <ul>
            <li>
              {props.isEnglish
                ? "Link to medical cost statistics 2024: "
                : "Link thống kê viện phí 2024: "}
              <a href="">{props.isEnglish ? "View here" : "Xem tại đây"}</a>
            </li>
            {/* Repeat for other years */}
          </ul>
          <p>
            {props.isEnglish
              ? "Donation accounts for the group. The funds will be distributed to animals in the hospital and for maintaining the shelter."
              : "Tài khoản nhận quyên góp của nhóm. Chi phí sẽ được chia đều cho các bé khác còn nằm viện và gây dựng nhà chung."}
          </p>
          <p>
            {props.isEnglish ? "Vietcombank" : "Vietcombank"}
            <br />
            {props.isEnglish ? "Ngo Truong Nhan" : "Ngô Trường Nhân"}
            <br />
            {props.isEnglish ? "0924787585250" : "0924787585250"}
          </p>
          <hr className="hr2" />
          <p>
            {props.isEnglish ? "Mbbank" : "Mbbank"}
            <br />
            {props.isEnglish ? "Mai Vo Hoai Tien" : "Mai Võ Hoài Tiên"}
            <br />
            {props.isEnglish ? "0353705423" : "0353705423"}
          </p>
          <p>
            {props.isEnglish
              ? "Paypal: oncemorelife@gmail.com"
              : "Paypal: oncemorelife@gmail.com"}
            <br />
            {props.isEnglish ? "Momo 0353705423" : "Momo 0353705423"}
          </p>
          <hr className="hr2" />
          <p>
            {props.isEnglish
              ? "Donation box locations:"
              : "Địa điểm đặt hòm quyên góp:"}
            <br />
            {props.isEnglish ? "IE104.CNVN Store" : "IE104.CNVN Store"}
            <br />
            {props.isEnglish
              ? "UIT Clinic: 01 Han Thuyen, Linh Trung Ward, Thu Duc City, HCMC"
              : "Phòng khám UIT: 01 Hàn Thuyên, P. Linh Trung, TP. Thủ Đức, TP. HCM"}
          </p>
          <button className="unghongay white fw">
            {props.isEnglish ? "Donate Now" : "ỦNG HỘ NGAY"}
          </button>
        </div>
        <img className="content_img_dona" src={img1} />
      </div>
      <Sponsors isEnglish={props.isEnglish} />
      <Listsponsor isEnglish={props.isEnglish} />
      <SupportOption isEnglish={props.isEnglish} />
      <ToSupport isEnglish={props.isEnglish} />
      <AdoptSlider isEnglish={props.isEnglish} list={props.list} />
      <RecoverSlider isEnglish={props.isEnglish} />
    </div>
  );
}

export default Donation;
