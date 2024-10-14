import React from "react";
import "./style.scss";
import Carousel from "../../components/Carousel";
import NavSlider from "../../components/NavSlider";

function HomePage() {
  return (
    <div className="homepage">
      <Carousel />
      <div className="content1">
        <div>
          <h1>nhận nuôi thú cưng - hanoi pet adoption</h1>
          <span>
            <img
              src="https://www.hanoipetadoption.com/admin/user-content/072e6acf-1c7f-4fc8-b7ab-5ea496ede8f4.jpg"
              alt=""
            />
          </span>
          <p>
            Chúng tôi là một nhóm trẻ gồm tình nguyện viên Việt Nam và một số
            bạn nước ngoài, cùng hoạt động vì tình yêu chó mèo. Tôn chỉ hoạt
            động của chúng tôi là không từ bỏ nỗ lực với bất kỳ con vật nào, dù
            bé có ốm yếu hay tàn tật tới đâu, bởi mỗi thú cưng đều cần có cơ hội
            hi vọng vào một tương lai tốt đẹp. Chúng tôi cố gắng chăm sóc tốt
            nhất có thể, phần nào bù đắp lại những tổn thương cho các bé được
            cứu hộ về dù là hoang, lạc, bị bỏ rơi hay bạo hành. Ngoài ra, chúng
            tôi cũng luôn nỗ lực tìm mái ấm yêu thương các bé trọn đời. Và cuối
            cùng, chúng tôi giúp nâng cao nhận thức về trách nhiệm của chủ nuôi
            thông qua mạng xã hội và các hoạt động thiện nguyện.
          </p>
          <p>
            Là một trong những trạm cứu hộ thú cưng ít ỏi tại Hà Nội, hoạt động
            từ năm 2015 đến nay, Nhóm đã góp phần cứu giúp trên 4,000 ca chó mèo
            bị bỏ rơi, hoang lạc, bị bạo hành, đồng thời tìm mái ấm mới cho hàng
            trăm bé.
          </p>
        </div>
        <div>
          <button>VỀ CHÚNG TÔI</button>
        </div>
      </div>
      <NavSlider />
    </div>
  );
}

export default HomePage;
