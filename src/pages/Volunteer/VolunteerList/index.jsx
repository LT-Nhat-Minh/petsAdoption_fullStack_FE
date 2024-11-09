import React from "react";
import "./style.scss";
import JoinUs from "../JoinUs";
import icon from "../../../asset/Icon/petleg.png";

function VolunteerList(props) {
  return (
    <div className="volunteer-list">
      <div className="header">
        <h1>THÔNG TIN TÌNH NGUYỆN VIÊN</h1>
        <img src={icon} alt="" class="PawIcon" />
      </div>
      <div class="volunteer 1">
        <div class="content">
          <div class="profile-image">
            <img
              src="https://www.hanoipetadoption.com/admin/user-content/Volunteer/220885ad-73cd-4f2f-96e4-df481fb11400.jpg"
              alt="Profile Image"
            />
          </div>
          <div class="description">
            <h2>TNV Foster</h2>
            <p>
              Foster là người giúp nhóm chăm sóc tạm thời trong thời gian các bé
              chưa tìm được chủ. Đây có thể là các bé khỏe mạnh hoặc cần chăm
              sóc đặc biệt hơn. Nếu bạn không thể nhận nuôi, hãy mở cửa để cho
              các bé một mái ấm tạm thời, giúp các bé khỏe mạnh hơn, ngoan ngoãn
              hơn cũng như tận hưởng tình thương từ một người yêu động vật, đồng
              thời giúp chúng tôi giảm tải khối lượng công việc.
            </p>
            <div class="info-box">
              <ul>
                <li>
                  Người nhận nuôi tạm thời (Foster) chịu trách nhiệm cung cấp
                  nơi ở, thức ăn, nước uống, các vật dụng cần thiết và tình
                  thương cho bé.
                </li>
                <li>
                  Trong trường hợp cần thiết, foster đảm nhận việc theo dõi quá
                  trình chữa trị cho bé, đảm bảo chế độ ăn theo yêu cầu và giúp
                  huấn luyện bé. Mọi chi phí y tế sẽ do Hanoi Pet Adoption chi
                  trả. Foster có thể đóng góp vào chi phí này nhưng không bắt
                  buộc.
                </li>
                <li>
                  Foster cần thông báo ngay cho người phụ trách bé nếu có bất cứ
                  phát sinh gì xảy ra: ốm đau, biểu hiện lạ, hành vi khác thường
                  v.v…
                </li>
                <li>
                  Không tự ý chuyển động vật mà tôi nhận chăm sóc tạm thời sang
                  người khác chăm sóc hoặc nhận nuôi nếu không có sự đồng ý từ
                  nhóm HPA.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
      <div class="volunteer 2">
        <div class="content">
          <div class="description">
            <h2>TNV Dọn Dẹp Nhà Chung</h2>
            <p>
              Các bé chó mèo sau khi được cứu hộ và đã ổn định sẽ được chuyển về
              nhà chung trong quá trình chờ tìm chủ/foster. Các bé cần người
              giúp cho ăn uống đúng chế độ, dọn dẹp và chăm sóc y tế nếu cần.
              Tình nguyện viên nhà chung đảm nhận khối lượng công việc lớn khi
              phải quản lý khoảng 70 bé mèo và hơn 10 bé chó. Công việc này cần
              tính kiên nhẫn, cẩn thận, trách nhiệm cao và có tình thương với
              chó mèo. Tình nguyện viên có thể đăng ký giúp theo buổi lẻ. Với
              những người có thể làm cố định theo ca và làm 5 ngày mỗi tuần có
              thể được nhận trợ cấp công việc.
            </p>
            <div class="info-box">
              <ul>
                <li>Tuổi 20+.</li>
                <li>Có kinh nghiệm nuôi chó/mèo.</li>
                <li>Chăm chỉ, sạch sẽ và có trách nhiệm.</li>
                <li>Đảm bảo được thời gian đến nhà chung.</li>
                <li>
                  Đảm bảo giữ bí mật địa chỉ nhà chung để tránh những thành phần
                  xấu và chủ nuôi vô trách nhiệm đến vứt bỏ các bé.
                </li>
                <li>Không ngại bẩn khi dọn vệ sinh, không sợ mùi</li>
              </ul>
            </div>
          </div>
          <div class="profile-image">
            <img
              src="https://www.hanoipetadoption.com/admin/user-content/Volunteer/7686847e-4f9a-45e2-ba09-262c24439752.jpg"
              alt="Profile Image"
            />
          </div>
        </div>
        <hr></hr>
      </div>
      <div class="volunteer 3">
        <div class="content">
          <div class="profile-image">
            <img
              src="https://www.hanoipetadoption.com/admin/user-content/Volunteer/262d40ba-c398-4f3f-85b3-cd9d18d0d373.jpeg"
              alt="Profile Image"
            />
          </div>
          <div class="description">
            <h2>TNV Cứu hộ</h2>
            <p>
              Khi một bé chó hay mèo gặp nạn, cần cứu các bé càng sớm càng tốt
              để tránh trường hợp các bé lang thang gặp kẻ xấu hoặc bị xe tông.
              Vì thế, Tình nguyện viên cứu hộ đóng vai trò quan trọng trong việc
              các bé có sống sót và được giải cứu kịp thời hay không. Công việc
              này đòi hỏi việc di chuyển bất ngờ, thậm chí vào đêm khuya hay
              ngày nghỉ, có thể phải đi xa. Ngoài ra, Tình nguyện viên cũng cần
              được trang bị kiến thức để bảo đảm an toàn cho bản thân khi cứu
              hộ.
            </p>
            <div class="info-box">
              <ul>
                <li>Tuổi 20+.</li>
                <li>Có kinh nghiệm với chó/mèo.</li>
                <li>
                  Có khả năng tiếp cận hiện trường trong các khung giờ linh
                  hoạt.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
      <div class="volunteer 4">
        <div class="content">
          <div class="description">
            <h2>TNV Vận Chuyển</h2>
            <p>
              Ngoài các tình huống cứu hộ, Hanoi Pet Adoption còn cần các bạn
              giúp vận chuyển chó/mèo từ nhà chung tới bệnh viện, nhà foster
              hoặc chủ nuôi v.v... Hoặc nhận đồ quyên góp cho Nhóm và chuyển về
              nhà chung.
            </p>
            <div class="info-box">
              <ul>
                <li>Tuổi 20+.</li>
                <li>
                  Có phương tiện di chuyển riêng và có tinh thần trách nhiệm.
                </li>
              </ul>
            </div>
          </div>
          <div class="profile-image">
            <img
              src="https://www.hanoipetadoption.com/admin/user-content/Volunteer/dd863f3e-1762-45a9-9730-922987085e97.jpeg"
              alt="Profile Image"
            />
          </div>
        </div>
      </div>
      <JoinUs />
    </div>
  );
}

export default VolunteerList;
