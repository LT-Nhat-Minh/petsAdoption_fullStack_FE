import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUniversity,
  FaPaypal,
} from "react-icons/fa";
import "./style.scss";
import { useSelector } from "react-redux";

function VolunteerBanner1(props) {
  const isEnglish = useSelector((state) => state.language.isEnglish);
  return (
    <div className="container3">
      <div className="contact-info3">
        <h2>{isEnglish ? "Contact Information" : "Thông Tin Liên Hệ"}</h2>
        <p>
          <FaEnvelope />{" "}
          {isEnglish ? "oncemorelife@gmail.com" : "oncemorelife@gmail.com"}
        </p>
        <p>
          <FaPhone /> {isEnglish ? "(+84) 09090909009" : "(+84) 09090909009"}
        </p>
        <p>
          <FaMapMarkerAlt />{" "}
          {isEnglish
            ? "Ho Chi Minh City, Vietnam"
            : "TP Hồ Chí Minh - Việt Nam"}
        </p>

        <h2>{isEnglish ? "Donation Account" : "Tài Khoản Quyên Góp"}</h2>
        <p>
          {isEnglish
            ? "The cost will be shared equally for other puppies still in the hospital and for building the common house."
            : "Chi phí sẽ được chia đều cho các bé khác còn nằm viện và gây dựng nhà chung."}
        </p>

        <div className="bank-info3">
          <div>
            <h3>
              <FaUniversity /> Vietcombank
            </h3>
            <p>{isEnglish ? "Ngo Truong Nhan" : "Ngô Trường Nhân"}</p>
            <p>0924787585250</p>
            <p>
              {isEnglish
                ? "Vietcombank Transaction Office"
                : "Sở giao dịch Vietcombank"}
            </p>
          </div>
          <div>
            <h3>
              <FaUniversity /> Mbbank
            </h3>
            <p>{isEnglish ? "Mai Vo Hoai Tien" : "Mai Võ Hoài Tiên"}</p>
            <p>0353705423</p>
            <p>
              {isEnglish
                ? "Ho Chi Minh City Branch"
                : "Chi Nhánh TP Hồ Chí Minh"}
            </p>
          </div>
          <div>
            <h3>
              <FaUniversity /> Momo
            </h3>
            <p>{isEnglish ? "Mai Vo Hoai Tien" : "Mai Võ Hoài Tiên"}</p>
            <p>0353705423</p>
            <p>
              {isEnglish
                ? "Ho Chi Minh City Branch"
                : "Chi Nhánh TP Hồ Chí Minh"}
            </p>
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
        <h1>{isEnglish ? "Send Feedback" : "Gửi Góp Ý"}</h1>
        <form action="#" method="post">
          <label htmlFor="name">
            {isEnglish ? "Full Name *" : "Họ và tên *"}
          </label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">{isEnglish ? "Email *" : "Email *"}</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">
            {isEnglish ? "Subject *" : "Tiêu đề *"}
          </label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">
            {isEnglish ? "Message *" : "Nội dung *"}
          </label>
          <textarea id="message" name="message" required></textarea>

          <div className="captcha3">
            <input type="checkbox" id="captcha" name="captcha" />
            <label htmlFor="captcha">
              {isEnglish ? "I'm not a robot" : "I'm not a robot"}
            </label>
          </div>

          <button type="submit">
            {isEnglish ? "SEND MESSAGE" : "GỬI TIN NHẮN"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default VolunteerBanner1;
