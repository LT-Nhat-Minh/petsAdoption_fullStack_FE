import React from "react";
import "./style1.scss";

function VolunteerList(props) {
  return (
  <div class="volunteer-introduction">
    <div class="text-content">
      <h2>Giới Thiệu Tình Nguyện Viên Cứu Hộ Chó Mèo</h2>
      <hr />
      <p>
        Hoạt động cứu hộ của Hanoi Pet Adoption chỉ có thể thành công nhờ sự chung sức từ cộng đồng và các Tình nguyện viên.
        Có nhiều cách để bạn đóng góp phần của mình để thay đổi cuộc sống của một chú chó hay mèo: trở thành Người chăm sóc tạm thời
        (Foster), Tình nguyện tại nhà chung hay Tình nguyện viên cứu hộ. Hãy tham khảo thêm thông tin bên dưới.
      </p>
    </div>
    <div class="image-content">
      <img src="https://www.hanoipetadoption.com/admin/user-content/5d4d003a-2692-4ba4-aa87-34721ef49644.jpg" alt="Volunteer" />
    </div>
  </div>
  );
}

export default VolunteerList;
