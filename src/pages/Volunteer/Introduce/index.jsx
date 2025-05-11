import React from "react";
import "./style.scss";
import BGVLT from "../../../asset/Background/BGVLT.jpg";
import { useSelector } from "react-redux";

function VolunteerIntroduce(props) {
  const isEnglish = useSelector((state) => state.language.isEnglish);
  return (
    <div className="volunteer-introduction">
      <div className="text-content">
        <h2>
          {isEnglish
            ? "Introduction to Dog and Cat Rescue Volunteers"
            : "Giới Thiệu Tình Nguyện Viên Cứu Hộ Chó Mèo"}
        </h2>
        <hr />
        <p>
          {isEnglish
            ? "The rescue activities of Once More Life can only be successful with the collective effort of the community and volunteers. There are many ways you can contribute to changing the life of a dog or cat: become a Foster Carer, volunteer at the shelter, or a rescue volunteer. Please refer to the information below."
            : "Hoạt động cứu hộ của Once More Life chỉ có thể thành công nhờ sự chung sức từ cộng đồng và các Tình nguyện viên. Có nhiều cách để bạn đóng góp phần của mình để thay đổi cuộc sống của một chú chó hay mèo: trở thành Người chăm sóc tạm thời (Foster), Tình nguyện tại nhà chung hay Tình nguyện viên cứu hộ. Hãy tham khảo thêm thông tin bên dưới."}
        </p>
      </div>
      <div className="image-content">
        <img src={BGVLT} alt={isEnglish ? "Volunteer" : "Tình Nguyện Viên"} />
      </div>
    </div>
  );
}

export default VolunteerIntroduce;
