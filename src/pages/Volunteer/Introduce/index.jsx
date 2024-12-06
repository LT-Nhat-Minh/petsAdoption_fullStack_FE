import React from "react";
import "./style.scss";

function VolunteerIntroduce(props) {
  return (
    <div className="volunteer-introduction">
      <div className="text-content">
        <h2>
          {props.isEnglish
            ? "Introduction to Dog and Cat Rescue Volunteers"
            : "Giới Thiệu Tình Nguyện Viên Cứu Hộ Chó Mèo"}
        </h2>
        <hr />
        <p>
          {props.isEnglish
            ? "The rescue activities of Hanoi Pet Adoption can only be successful with the collective effort of the community and volunteers. There are many ways you can contribute to changing the life of a dog or cat: become a Foster Carer, volunteer at the shelter, or a rescue volunteer. Please refer to the information below."
            : "Hoạt động cứu hộ của Hanoi Pet Adoption chỉ có thể thành công nhờ sự chung sức từ cộng đồng và các Tình nguyện viên. Có nhiều cách để bạn đóng góp phần của mình để thay đổi cuộc sống của một chú chó hay mèo: trở thành Người chăm sóc tạm thời (Foster), Tình nguyện tại nhà chung hay Tình nguyện viên cứu hộ. Hãy tham khảo thêm thông tin bên dưới."}
        </p>
      </div>
      <div className="image-content">
        <img
          src="https://www.hanoipetadoption.com/admin/user-content/5d4d003a-2692-4ba4-aa87-34721ef49644.jpg"
          alt={props.isEnglish ? "Volunteer" : "Tình Nguyện Viên"}
        />
      </div>
    </div>
  );
}

export default VolunteerIntroduce;
