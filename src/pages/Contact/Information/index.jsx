import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUniversity,
  FaPaypal,
} from "react-icons/fa";
import "./style.scss";

function VolunteerBanner1(props) {
  return (
    <div className="container3">
      <div className="contact-info3">
        <h2>Thông Tin Liên Hệ</h2>
        <p>
          <FaEnvelope /> oncemorelife@gmail.com
        </p>
        <p>
          <FaPhone /> (+84) 09090909009
        </p>
        <p>
          <FaMapMarkerAlt /> TP Hồ Chí Minh - Việt Nam
        </p>

        <h2>Tài Khoản Quyên Góp</h2>
        <p>
          Chi phí sẽ được chia đều cho các bé khác còn nằm viện và gây dựng nhà
          chung.
        </p>

        <div className="bank-info3">
          <div>
            <h3>
              <FaUniversity /> Vietcombank
            </h3>
            <p>Ngô Trường Nhân</p>
            <p>0924787585250</p>
            <p>Sở giao dịch Vietcombank</p>
          </div>
          <div>
            <h3>
              <FaUniversity /> Mbbank
            </h3>
            <p>Mai Võ Hoài Tiên</p>
            <p>0353705423</p>
            <p>Chi Nhánh TP Hồ Chí Minh</p>
          </div>
          <div>
            <h3>
              <FaUniversity /> Momo
            </h3>
            <p>Mai Võ Hoài Tiên</p>
            <p>0353705423</p>
            <p>Chi Nhánh TP Hồ Chí Minh</p> 
          </div>
          <div>
            <h3>
              <FaPaypal /> Paypal
            </h3>
            <p>oncemorelife@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="feedback-form3">
        <h1>Gửi Góp Ý</h1>
        <form action="#" method="post">
          <label htmlFor="name">Họ và tên *</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Tiêu đề *</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Nội dung *</label>
          <textarea id="message" name="message" required></textarea>

          <div className="captcha3">
            <input type="checkbox" id="captcha" name="captcha" />
            <label htmlFor="captcha">I'm not a robot</label>
          </div>

          <button type="submit">GỬI TIN NHẮN</button>
        </form>
      </div>
    </div>
  );
}

export default VolunteerBanner1;
