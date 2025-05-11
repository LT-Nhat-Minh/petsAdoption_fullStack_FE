import React from "react";
import "./style.scss";

import icon from "../../../asset/Icon/petleg.png";
import volunteer1 from "../../../asset/Volunteer_List/220885ad-73cd-4f2f-96e4-df481fb11400.jpg";
import volunteer2 from "../../../asset/Volunteer_List/7686847e-4f9a-45e2-ba09-262c24439752.jpg";
import volunteer3 from "../../../asset/Volunteer_List/262d40ba-c398-4f3f-85b3-cd9d18d0d373.jpeg";
import volunteer4 from "../../../asset/Volunteer_List/dd863f3e-1762-45a9-9730-922987085e97.jpeg";
import JoinUs from "./JoinUs";
import { useLanguageContext } from "../../../context/language.provider";

function VolunteerList(props) {
  const { isEnglish, setIsEnglish } = useLanguageContext();

  return (
    <div className="volunteer-list">
      <div className="header">
        <h1>
          {isEnglish ? "VOLUNTEER INFORMATION" : "THÔNG TIN TÌNH NGUYỆN VIÊN"}
        </h1>
        <img src={icon} alt="" className="PawIcon" />
      </div>

      <div className="volunteer 1">
        <div className="content">
          <div className="profile-image">
            <img src={volunteer1} alt="Profile Image" />
          </div>
          <div className="description">
            <h2>{isEnglish ? "Foster Volunteer" : "TNV Foster"}</h2>
            <p>
              {isEnglish
                ? "Foster volunteers help the group by providing temporary care for animals who haven't found permanent homes. These could be healthy or special needs animals. If you cannot adopt, open your home to provide a temporary shelter, helping the animals grow healthier, more obedient, and enjoy the love of an animal lover, while also lightening the workload for the team."
                : "Foster là người giúp nhóm chăm sóc tạm thời trong thời gian các bé chưa tìm được chủ. Đây có thể là các bé khỏe mạnh hoặc cần chăm sóc đặc biệt hơn. Nếu bạn không thể nhận nuôi, hãy mở cửa để cho các bé một mái ấm tạm thời, giúp các bé khỏe mạnh hơn, ngoan ngoãn hơn cũng như tận hưởng tình thương từ một người yêu động vật, đồng thời giúp chúng tôi giảm tải khối lượng công việc."}
            </p>
            <div className="info-box">
              <ul>
                <li>
                  {isEnglish
                    ? "The Foster volunteer is responsible for providing shelter, food, water, necessary supplies, and love for the animal."
                    : "Người nhận nuôi tạm thời (Foster) chịu trách nhiệm cung cấp nơi ở, thức ăn, nước uống, các vật dụng cần thiết và tình thương cho bé."}
                </li>
                <li>
                  {isEnglish
                    ? "If needed, the foster volunteer will monitor the animal's treatment, ensure proper diet, and assist in training. All medical costs will be covered by Once More Life. Foster volunteers may contribute to the costs but it's not mandatory."
                    : "Trong trường hợp cần thiết, foster đảm nhận việc theo dõi quá trình chữa trị cho bé, đảm bảo chế độ ăn theo yêu cầu và giúp huấn luyện bé. Mọi chi phí y tế sẽ do Once More Life chi trả. Foster có thể đóng góp vào chi phí này nhưng không bắt buộc."}
                </li>
                <li>
                  {isEnglish
                    ? "The foster volunteer must immediately inform the responsible person if any issue arises: illness, strange behavior, unusual symptoms, etc."
                    : "Foster cần thông báo ngay cho người phụ trách bé nếu có bất cứ phát sinh gì xảy ra: ốm đau, biểu hiện lạ, hành vi khác thường v.v…"}
                </li>
                <li>
                  {isEnglish
                    ? "Do not transfer the animal you are fostering to another person without the approval of the HPA team."
                    : "Không tự ý chuyển động vật mà tôi nhận chăm sóc tạm thời sang người khác chăm sóc hoặc nhận nuôi nếu không có sự đồng ý từ nhóm HPA."}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div className="volunteer 2">
        <div className="content">
          <div className="description">
            <h2>
              {isEnglish
                ? "Shelter House Cleaner Volunteer"
                : "TNV Dọn Dẹp Nhà Chung"}
            </h2>
            <p>
              {isEnglish
                ? "After being rescued and stabilized, the animals are transferred to the shelter while waiting for adoption or foster care. They need volunteers to help with feeding, cleaning, and medical care if necessary. Shelter volunteers manage a large workload, handling around 70 cats and over 10 dogs. This job requires patience, carefulness, high responsibility, and love for animals. Volunteers can register for single shifts, and those who commit to fixed shifts (five days a week) may receive a work subsidy."
                : "Các bé chó mèo sau khi được cứu hộ và đã ổn định sẽ được chuyển về nhà chung trong quá trình chờ tìm chủ/foster. Các bé cần người giúp cho ăn uống đúng chế độ, dọn dẹp và chăm sóc y tế nếu cần. Tình nguyện viên nhà chung đảm nhận khối lượng công việc lớn khi phải quản lý khoảng 70 bé mèo và hơn 10 bé chó. Công việc này cần tính kiên nhẫn, cẩn thận, trách nhiệm cao và có tình thương với chó mèo. Tình nguyện viên có thể đăng ký giúp theo buổi lẻ. Với những người có thể làm cố định theo ca và làm 5 ngày mỗi tuần có thể được nhận trợ cấp công việc."}
            </p>
            <div className="info-box">
              <ul>
                <li>{isEnglish ? "Age 20+" : "Tuổi 20+."}</li>
                <li>
                  {isEnglish
                    ? "Experience in raising dogs/cats."
                    : "Có kinh nghiệm nuôi chó/mèo."}
                </li>
                <li>
                  {isEnglish
                    ? "Hardworking, clean, and responsible."
                    : "Chăm chỉ, sạch sẽ và có trách nhiệm."}
                </li>
                <li>
                  {isEnglish
                    ? "Ensure arrival on time to the shelter."
                    : "Đảm bảo được thời gian đến nhà chung."}
                </li>
                <li>
                  {isEnglish
                    ? "Ensure the confidentiality of the shelter's location to avoid undesirable individuals or irresponsible pet owners dumping animals."
                    : "Đảm bảo giữ bí mật địa chỉ nhà chung để tránh những thành phần xấu và chủ nuôi vô trách nhiệm đến vứt bỏ các bé."}
                </li>
                <li>
                  {isEnglish
                    ? "Not afraid of getting dirty when cleaning, not sensitive to smells."
                    : "Không ngại bẩn khi dọn vệ sinh, không sợ mùi"}
                </li>
              </ul>
            </div>
          </div>
          <div className="profile-image">
            <img src={volunteer2} alt="Profile Image" />
          </div>
        </div>
        <hr />
      </div>

      <div className="volunteer 3">
        <div className="content">
          <div className="profile-image">
            <img src={volunteer3} alt="Profile Image" />
          </div>
          <div className="description">
            <h2>{isEnglish ? "Rescue Volunteer" : "TNV Cứu hộ"}</h2>
            <p>
              {isEnglish
                ? "When a dog or cat is in danger, it is crucial to rescue them as soon as possible to prevent them from wandering into dangerous situations or being hit by a vehicle. Rescue volunteers play an essential role in saving the lives of animals. This job requires unexpected movements, sometimes at night or during holidays, and may involve traveling long distances. Volunteers should also be equipped with knowledge to ensure their own safety during rescue operations."
                : "Khi một bé chó hay mèo gặp nạn, cần cứu các bé càng sớm càng tốt để tránh trường hợp các bé lang thang gặp kẻ xấu hoặc bị xe tông. Vì thế, Tình nguyện viên cứu hộ đóng vai trò quan trọng trong việc các bé có sống sót và được giải cứu kịp thời hay không. Công việc này đòi hỏi việc di chuyển bất ngờ, thậm chí vào đêm khuya hay ngày nghỉ, có thể phải đi xa. Ngoài ra, Tình nguyện viên cũng cần được trang bị kiến thức để bảo đảm an toàn cho bản thân khi cứu hộ."}
            </p>
            <div className="info-box">
              <ul>
                <li>{isEnglish ? "Age 20+" : "Tuổi 20+."}</li>
                <li>
                  {isEnglish
                    ? "Experience with dogs/cats."
                    : "Có kinh nghiệm với chó/mèo."}
                </li>
                <li>
                  {isEnglish
                    ? "Ability to reach the scene during flexible hours."
                    : "Có khả năng tiếp cận hiện trường trong các khung giờ linh hoạt."}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div className="volunteer 4">
        <div className="content">
          <div className="description">
            <h2>{isEnglish ? "Transportation Volunteer" : "TNV Vận Chuyển"}</h2>
            <p>
              {isEnglish
                ? "In addition to rescue situations, Once More Life needs volunteers to transport animals to the shelter, veterinary clinics, foster homes, or owners. Volunteers may also be responsible for collecting donated items and delivering them to the shelter."
                : "Ngoài các tình huống cứu hộ, Once More Life còn cần các bạn giúp vận chuyển chó/mèo từ nhà chung tới bệnh viện, nhà foster hoặc chủ nuôi v.v... Hoặc nhận đồ quyên góp cho Nhóm và chuyển về nhà chung."}
            </p>
            <div className="info-box">
              <ul>
                <li>{isEnglish ? "Age 20+" : "Tuổi 20+."}</li>
                <li>
                  {isEnglish
                    ? "Own a vehicle and have a sense of responsibility."
                    : "Có phương tiện di chuyển riêng và có tinh thần trách nhiệm."}
                </li>
              </ul>
            </div>
          </div>
          <div className="profile-image">
            <img src={volunteer4} alt="Profile Image" />
          </div>
        </div>
      </div>

      <JoinUs isEnglish={isEnglish} />
    </div>
  );
}

export default VolunteerList;
