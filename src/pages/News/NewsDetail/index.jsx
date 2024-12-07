import React, { useEffect } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import petLeg from "../../../asset/Icon/pets.png";
import anh1 from "../../../asset/News_Thumbnail/Bai1/1.jpg";
import anh2 from "../../../asset/News_Thumbnail/Bai1/2.jpg";
import anh3 from "../../../asset/News_Thumbnail/Bai1/3.jpg";
import anh4 from "../../../asset/News_Thumbnail/Bai1/4.jpg";
import anh5 from "../../../asset/News_Thumbnail/Bai1/5.jpg";
import anh6 from "../../../asset/News_Thumbnail/Bai1/6.jpg";
import anh7 from "../../../asset/News_Thumbnail/Category/Quá trình cứu hộ/cun_ghe_bi_bo_roi.jpg";
import BeforeAndAfter from "../../../components/AnotherNews";
import AnotherNews from "../../../components/AnotherNews";
import ToSupport from "../../../components/ToSupport";

function NewsDetail(props) {
  const navigate = useNavigate();

  useEffect(() => {
    // Load Facebook SDK
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="news_detail">
      <div className="banner">
        <div className="container">
          <h1 className="title">{props.isEnglish ? "News" : "Tin Tức"}</h1>
          <p className="breadcrumbs">
            <span className="root" onClick={() => navigate("/")}>
              {props.isEnglish ? "Home" : "Trang Chủ"}
            </span>{" "}
            {">"}{" "}
            <span className="root" onClick={() => navigate("/news")}>
              {props.isEnglish ? "News" : "Tin Tức"}
            </span>{" "}
            {">"}{" "}
            <span className="current">
              {props.isEnglish
                ? "Rescuing a Flea-Infected Puppy Abandoned in Phu Tho"
                : "Cứu hộ bé cún ghẻ bị bỏ rơi ở Phú Thọ"}
            </span>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="post">
          <div className="title">
            <h1>Cứu hộ bé cún ghẻ bị bỏ rơi ở Phú Thọ</h1>
            <p>
              <img src={petLeg} alt="" />
              20/02/2020 bởi
              <span style={{ color: "#018AE0" }}> HanoiPetAdoption</span>
            </p>
          </div>
          <hr />
          <div className="content">
            <p>Bài viết của em báo tin:</p>
            <p>
              " Hôm trước mình có đi lượn qua và thấy chú chó này đang bới rác
              để tìm thứ lót dạ.
            </p>
            <img src={anh1} alt="" />
            <p>
              Lúc đầu nhìn thấy nó mình giật mình, bề ngoài đen thui, lông rụng
              gần hết, gầy gò ốm yếu, trên người còn có những vết thương nữa như
              kiểu bị chủ đánh đập rồi đem vứt đi vậy. Mình không nuôi thêm nó
              đc nên đành về nhà lấy đồ ăn rồi đem ra cho nó.
            </p>
            <img src={anh2} alt="" />
            <p>
              Chiều ngay hôm đó đi ra xem tình hình chú chó thế nào thì không
              thấy nó đâu, chỉ thấy thêm 1 túi cơm nữa và mấy cái bánh bên cạnh
              nên Ngọc nghĩ có người đem nó về rồi.
            </p>
            <img src={anh3} alt="" />
            <p>
              Ai ngờ hôm nay đi qua lại thấy chú chó nằm co rúm bên lề đường,
              người run rẩy. Ngọc với em họ lại về nhà lấy đồ ăn cho nó, còn
              không bt nếu tối nay trời mưa thì nó sẽ thế nào. "
            </p>
            <img src={anh4} alt="" />
            <p>
              Ngày ý tưởng ko cứu được nó. Nửa đêm nhờ tnv chạy ô tô lên Phú Thọ
              bắt chó vì sợ nó lang thang ngoài đường chết lạnh. 1h sáng đến nơi
              thì em báo tin ngủ quên. Mình ngồi nhà mò google map với gọi đt
              loạn lên mà ko biết địa điểm cụ thể ở đâu. Bạn tnv thang lang ko
              tìm được đường đành đi về. Chiều hôm sau 2h nhờ em Như với Nhung
              hai đứa đèo nhau bằng xe máy lên Phú Thọ bắt chó.. Lên đến nơi thì
              em chó nhát người, thế là 3 đứa chơi trò đuổi bắt nhau trên đó
              chắc cả tiếng đồng hồ. Bắt được thì kẹp 3 đi về đến Hn lúc 10h
              tối...! Cái Nhung ở trọ trong ký túc xá, về muộn quá ktx đóng cửa
              nên phải trèo tường vào vừa buồn cười vừa thương....
            </p>
            <img src={anh5} alt="" />
            <p>
              Nhưng cuối cùng thì Thor nó cũng ko phụ công anh chị! Giờ vừa béo
              vừa đẹp trai, chỉ hiểu lệnh tiếng Anh chứ ko biết tiếng Việt sắp
              thành Việt kiều đến nơi rồi... Ước gì đứa nào cũng sướng được như
              nó..
            </p>
            <img src={anh6} alt="" />
            <p>
              Cùng xem thành quả của cả một tập thể, những tnv, các bác sĩ và
              mạnh thường quân nhé!! Chúng ta đã làm được!! Dù không nhiều nhưng
              sẽ luôn cố gắng!!
            </p>
            <img src={anh7} alt="" />
          </div>
          <div
            className="fb-comments"
            data-href="https://www.hanoipetadoption.com/vi/tin-tuc/chu-cho-corgi-sinh-ra-voi-1-mat-va-2-mui-song-sot-ky-dieu-82"
            data-width="863"
            data-numposts="1"
          ></div>
        </div>
        <SideBar isEnglish={props.isEnglish} />
      </div>
      <AnotherNews news={props.news} />
      <ToSupport />
    </div>
  );
}

export default NewsDetail;
