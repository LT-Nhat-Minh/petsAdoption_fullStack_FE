import React from "react";
import "./style.scss";
import thumbnail from "../../../asset/AboutUs/6b3f64c8-37c1-427e-b76f-9bba6444c92e.jpg";

function AboutUs(props) {
  return (
    <div className="aboutus">
      <div>
        <h1>
          {props.isEnglish
            ? "Pet Adoption - Once More Life"
            : "Nhận nuôi thú cưng - Once More Life"}
        </h1>
        <span>
          <img src={thumbnail} alt="" />
        </span>
        <p>
          {props.isEnglish
            ? "We are a young group of Vietnamese volunteers and some foreign friends, all working together out of love for animals. Our mission is to never give up on any animal, no matter how sick or disabled they are, because every pet deserves a chance for a better future. We strive to take the best care possible, to make up for the damage done to the animals we rescue, whether they are stray, lost, abandoned, or abused. Additionally, we are always looking for a loving forever home for the pets. Finally, we aim to raise awareness about the responsibility of pet owners through social media and charity activities."
            : "Chúng tôi là một nhóm trẻ gồm tình nguyện viên Việt Nam và một số bạn nước ngoài, cùng hoạt động vì tình yêu chó mèo. Tôn chỉ hoạt động của chúng tôi là không từ bỏ nỗ lực với bất kỳ con vật nào, dù bé có ốm yếu hay tàn tật tới đâu, bởi mỗi thú cưng đều cần có cơ hội hi vọng vào một tương lai tốt đẹp. Chúng tôi cố gắng chăm sóc tốt nhất có thể, phần nào bù đắp lại những tổn thương cho các bé được cứu hộ về dù là hoang, lạc, bị bỏ rơi hay bạo hành. Ngoài ra, chúng tôi cũng luôn nỗ lực tìm mái ấm yêu thương các bé trọn đời. Và cuối cùng, chúng tôi giúp nâng cao nhận thức về trách nhiệm của chủ nuôi thông qua mạng xã hội và các hoạt động thiện nguyện."}
        </p>
        <p>
          {props.isEnglish
            ? "As one of the few pet rescue stations in Hồ Chí Minh, operating since 2015, our group has helped rescue over 4,000 dogs and cats that were abandoned, lost, or abused, and found new homes for hundreds of them."
            : "Là một trong những trạm cứu hộ thú cưng ít ỏi tại Hồ Chí Minh, hoạt động từ năm 2015 đến nay, Nhóm đã góp phần cứu giúp trên 4,000 ca chó mèo bị bỏ rơi, hoang lạc, bị bạo hành, đồng thời tìm mái ấm mới cho hàng trăm bé."}
        </p>
      </div>
      <div className="button_container">
        <button>{props.isEnglish ? "ABOUT US" : "VỀ CHÚNG TÔI"}</button>
      </div>
    </div>
  );
}

export default AboutUs;
