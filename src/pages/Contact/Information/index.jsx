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
        <h2>{props.isEnglish ? "Contact Information" : "Thông Tin Liên Hệ"}</h2>
        <p>
          <FaEnvelope /> hanoipetadoption@gmail.com
        </p>
        <p>
          <FaPhone /> (+84)39 320 1068
        </p>
        <p>
          <FaMapMarkerAlt /> Hanoi - Vietnam
        </p>

        <h2>{props.isEnglish ? "Donation Account" : "Tài Khoản Quyên Góp"}</h2>
        <p>
          {props.isEnglish
            ? "The cost will be shared equally for other puppies still in the hospital and for building the common house."
            : "Chi phí sẽ được chia đều cho các bé khác còn nằm viện và gây dựng nhà chung."}
        </p>

        <div className="bank-info3">
          <div>
            <h3>
              <FaUniversity /> Vietcombank
            </h3>
            <p>{props.isEnglish ? "Pham Thanh Hang" : "Phạm Thanh Hằng"}</p>
            <p>0011004054939</p>
            <p>
              {props.isEnglish
                ? "Vietcombank Transaction Office"
                : "Sở giao dịch Vietcombank"}
            </p>
          </div>
          <div>
            <h3>
              <FaUniversity /> BIDV
            </h3>
            <p>{props.isEnglish ? "Pham Thanh Hang" : "Phạm Thanh Hằng"}</p>
            <p>12610000951797</p>
            <p>{props.isEnglish ? "Ba Dinh Branch" : "Chi Nhánh Ba Đình"}</p>
          </div>
          <div>
            <h3>
              <FaUniversity /> Techcombank
            </h3>
            <p>{props.isEnglish ? "Pham Thanh Hang" : "Phạm Thanh Hằng"}</p>
            <p>19031456730888</p>
            <p>{props.isEnglish ? "Hanoi Branch" : "Chi Nhánh Hà Nội"}</p>
          </div>
          <div>
            <h3>
              <FaPaypal /> Paypal
            </h3>
            <p>hanoipetadoptionorg@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="feedback-form3">
        <h1>{props.isEnglish ? "Send Feedback" : "Gửi Góp Ý"}</h1>
        <form action="#" method="post">
          <label htmlFor="name">
            {props.isEnglish ? "Full Name *" : "Họ và tên *"}
          </label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">
            {props.isEnglish ? "Email *" : "Email *"}
          </label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">
            {props.isEnglish ? "Subject *" : "Tiêu đề *"}
          </label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">
            {props.isEnglish ? "Message *" : "Nội dung *"}
          </label>
          <textarea id="message" name="message" required></textarea>

          <div className="captcha3">
            <input type="checkbox" id="captcha" name="captcha" />
            <label htmlFor="captcha">
              {props.isEnglish ? "I'm not a robot" : "I'm not a robot"}
            </label>
          </div>

          <button type="submit">
            {props.isEnglish ? "SEND MESSAGE" : "GỬI TIN NHẮN"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default VolunteerBanner1;
