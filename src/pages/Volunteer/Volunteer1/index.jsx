import React from "react";
import "./style1.scss";
import icon from "../../../asset/Icon/petleg.png"

function VolunteerIn4(props) {
  return (
  
<div class="List">
    <h1>THÔNG TIN TÌNH NGUYỆN VIÊN</h1>
    <img src={icon} alt="" class="PawIcon"/>
    <div class="content">
        <div class="profile-image">
            <img src="https://www.hanoipetadoption.com/admin/user-content/Volunteer/220885ad-73cd-4f2f-96e4-df481fb11400.jpg" alt="Profile Image" />
        </div>
        <div class="description">
            <h2>TNV Foster</h2>
            <p>Foster là người giúp nhóm chăm sóc tạm thời trong thời gian các bé chưa tìm được chủ. Đây có thể là các bé khỏe mạnh hoặc cần chăm sóc đặc biệt hơn. Nếu bạn không thể nhận nuôi, hãy mở cửa để cho các bé một mái ấm tạm thời, giúp các bé khỏe mạnh hơn, ngoan ngoãn hơn cũng như tận hưởng tình thương từ một người yêu động vật, đồng thời giúp chúng tôi giảm tải khối lượng công việc.</p>
            <div class="info-box">
                <ul>
                    <li>Người nhận nuôi tạm thời (Foster) chịu trách nhiệm cung cấp nơi ở, thức ăn, nước uống, các vật dụng cần thiết và tình thương cho bé.</li>
                    <li>Trong trường hợp cần thiết, foster đảm nhận việc theo dõi quá trình chữa trị cho bé, đảm bảo chế độ ăn theo yêu cầu và giúp huấn luyện bé. Mọi chi phí y tế sẽ do Hanoi Pet Adoption chi trả. Foster có thể đóng góp vào chi phí này nhưng không bắt buộc.</li>
                    <li>Foster cần thông báo ngay cho người phụ trách bé nếu có bất cứ phát sinh gì xảy ra: ốm đau, biểu hiện lạ, hành vi khác thường v.v…</li>
                    <li>Không tự ý chuyển động vật mà tôi nhận chăm sóc tạm thời sang người khác chăm sóc hoặc nhận nuôi nếu không có sự đồng ý từ nhóm HPA.</li>
                </ul>
            </div>
        </div>
    </div>
    <hr></hr>
</div>
  );
}

export default VolunteerIn4;