import React from "react";
import "../../pages/Donation/style.scss"
import img1 from "../../asset/Icon/dona2.jpg"
import Sponsors from "../../components/Sponsors";
import chancho from "../../asset/Icon/pet.png"
import ta from "../../asset/Icon/ta.jpg"
import quanao from "../../asset/Icon/quanao.jpg"
import thucan from "../../asset/Icon/thucan.jpg"
import dauchan from "../../asset/Footer/pattern1.png"
import AdoptSlider from "../../components/AdoptSlider";
import RecoverSlider from "../../components/RecoverSlider";

function Donation(props) {
  return <div className="donation_content">
        <div className="donation donabanner"> 
          <div className="title">
            <h1 className="title1 fw white mlr110">Ủng Hộ</h1>
            <a class="a_tag mlr110" href="/"><span className="trang_chu white">Trang chủ  </span> <span className="ung_ho"> {">"} Ủng Hộ</span></a>
          </div>
        </div>
        <div className="content grid grid_dona mlr110">
          <div className="content_text">
              <h1>Tôi Muốn Ủng Hộ</h1>
              <hr className="hru" />
              <p>Mọi hoạt động cứu hộ của Hanoi Pet Adoption hoàn toàn dựa trên các khoản quyên góp từ cộng đồng. Chi phí hàng tháng của nhóm bao gồm tiền thuê nhà, tiền viện phí, thức ăn, điện, nước, thuốc men và đồ dùng, bỉm tã, lương hỗ trợ các bạn tnv dọn dẹp... Nhóm rất cần sự giúp đỡ của các bạn để có thể duy trì nhà chung cũng như đội cứu hộ. Chỉ cần cố định 50k - 100k hàng tháng là các bạn đã giúp đỡ được cho nhóm và cách bé rất nhiều!</p>
              <p>Chi phí sẽ được chia đều cho các bé khác còn nằm viện và gây dựng nhà chung. Ngoài ra Nhóm cũng tiếp nhận quyên góp bằng hiện vật như quần áo cũ (để lót chuồng), bỉm, găng tay y tế, thức ăn, cát vệ sinh v.v...</p>
              <p>*Lưu ý: nhóm không dùng zalo và KHÔNG BAO GIỜ yêu cầu Mạnh Thường Quân cung cấp thông tin thẻ hoặc mã OTP</p>
              <p>*Danh sách mạnh thường quân quyên góp cho nhóm sẽ được cập nhật tại đây:</p>
              <ul>
                <li>2024:<a href="">Xem tại đây</a></li>
                <li>2023:<a href="">Xem tại đây</a></li>
                <li>2022:<a href="">Xem tại đây</a></li>
                <li>2021<a href="">Xem tại đây</a></li>
                <li>2020<a href="">Xem tại đây</a></li>
                <li>2019<a href="">Xem tại đây</a></li>
                <li>2018<a href="">Xem tại đây</a></li>
              </ul>
              <ul>
              <li>Link thống kê viện phí 2024:<a href="">Xem tại đây</a></li>
                <li>Link thống kê viện phí 2023:<a href="">Xem tại đây</a></li>
                <li>Link thống kê viện phí 2022:<a href="">Xem tại đây</a></li>
                <li>Link thống kê viện phí 2021<a href="">Xem tại đây</a></li>
                <li>Link thống kê viện phí 2020<a href="">Xem tại đây</a></li>
                <li>Link thống kê viện phí 2019<a href="">Xem tại đây</a></li>
              </ul>
              <p>Tài khoản nhận quyên góp của nhóm. Chi phí sẽ được chia đều cho các bé khác còn nằm viện và gây dựng nhà chung.</p>
              <p>Vietcombank<br></br>
                  Pham Thanh Hang<br></br>
                  0011004054939</p>
              <hr className="hr2"/>
              <p>Techcombank<br></br>
                  Phạm Thanh Hằng<br></br>
                  19031456730888</p>
              <p>Paypal: hanoipetadoptionorg@gmail.com<br></br>
                  Momo 0393201068</p>
              <p>Địa điểm đặt hòm quyên góp:<br></br>
                  Better World Hanoi số 44 Quảng An Hà Nội<br></br>
                  Phòng khám Animal Care: nhà 20 ngõ 424 Thuỵ Khuê</p>
              <button className="unghongay white fw">ỦNG HỘ NGAY</button>
          </div>
              <img className="content_img" src={img1}></img>
        </div>
        <div className="hotro">
          <Sponsors />
        </div>
        <div className="khac">
            <p className="fw">các phương thức hỗ trợ khác</p>
                <span><img src={chancho} alt="" className="chancho" /></span>
            <div className="phuongthuc grid_tem2 mlr110">
                <span><img src={ta} className="tem2" alt="" /></span>
                <span><img src={quanao} className="tem2" alt="" /></span>
                <span><img src={thucan} className="tem2" alt="" /></span>
            </div>
            <div className="phuongthuc_text grid grid_tem2 fw">
                <p>bỉm</p>
                <p>quần áo</p>
                <p>thức ăn</p>
            </div>
            <button className="lienhespa white fw">LIÊN HỆ SPA</button>
            <div className="dauchan"></div>
        </div>
        <div className="manhthuongquan banner ">
            <div className="manhthuongquan_content">
              <h2 className="white fw mlr110 mt5">Danh Sách Mạnh Thường Quân</h2>
              <button className="thongtin white fw">XEM THÔNG TIN</button>
            </div>
        </div>
        <div>
          <AdoptSlider />
        </div>
        <div>
          <RecoverSlider />
        </div>
        
  </div>;
}

export default Donation;
