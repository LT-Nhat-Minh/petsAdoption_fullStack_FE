import React, { useEffect } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
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
  const isEnglish = useSelector((state) => state.language.isEnglish);

  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse(); // This triggers the parsing of all Facebook elements like comments
    }
  }, []);

  return (
    <div className="news_detail">
      <div className="banner">
        <div className="container">
          <h1 className="title">{isEnglish ? "News" : "Tin Tức"}</h1>
          <p className="breadcrumbs">
            <span className="root" onClick={() => navigate("/")}>
              {isEnglish ? "Home" : "Trang Chủ"}
            </span>{" "}
            {">"}{" "}
            <span className="root" onClick={() => navigate("/news")}>
              {isEnglish ? "News" : "Tin Tức"}
            </span>{" "}
            {">"}{" "}
            <span className="current">
              {isEnglish
                ? "Rescuing a Flea-Infected Puppy Abandoned in Phu Tho"
                : "Cứu hộ bé cún ghẻ bị bỏ rơi ở Phú Thọ"}
            </span>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="post">
          <div className="title">
            <h1>
              {isEnglish
                ? "Rescuing the Abandoned Mange Puppy in Phu Tho"
                : "Cứu hộ bé cún ghẻ bị bỏ rơi ở Phú Thọ"}
            </h1>
            <p>
              <img src={petLeg} alt="" />
              {isEnglish ? "20/02/2020 by" : "20/02/2020 bởi"}
              <span style={{ color: "#018AE0" }}> OnceMoreLife</span>
            </p>
          </div>
          <hr />
          <div className="content">
            <p>
              {isEnglish
                ? "This is an article reporting the news:"
                : "Bài viết của em báo tin:"}
            </p>
            <p>
              {isEnglish
                ? "The other day, I passed by and saw this dog digging through trash to find something to eat."
                : "Hôm trước mình có đi lượn qua và thấy chú chó này đang bới rác để tìm thứ lót dạ."}
            </p>
            <img src={anh1} alt="" />
            <p>
              {isEnglish
                ? "At first, I was shocked when I saw it, as it was all black, with almost no fur, very thin and weak. There were wounds on its body, as if it had been beaten by its owner and thrown away. I couldn’t keep it, so I went home to get some food and brought it to the dog."
                : "Lúc đầu nhìn thấy nó mình giật mình, bề ngoài đen thui, lông rụng gần hết, gầy gò ốm yếu, trên người còn có những vết thương nữa như kiểu bị chủ đánh đập rồi đem vứt đi vậy. Mình không nuôi thêm nó đc nên đành về nhà lấy đồ ăn rồi đem ra cho nó."}
            </p>
            <img src={anh2} alt="" />
            <p>
              {isEnglish
                ? "In the afternoon, I went back to check on the dog, but it was gone. I only saw another bag of rice and some bread next to it, so I thought someone had taken it home."
                : "Chiều ngay hôm đó đi ra xem tình hình chú chó thế nào thì không thấy nó đâu, chỉ thấy thêm 1 túi cơm nữa và mấy cái bánh bên cạnh nên Ngọc nghĩ có người đem nó về rồi."}
            </p>
            <img src={anh3} alt="" />
            <p>
              {isEnglish
                ? "But when I passed by today, I saw the dog lying curled up by the side of the road, trembling. Ngọc and I went home to get food for it. I didn’t know what would happen if it rained tonight."
                : "Ai ngờ hôm nay đi qua lại thấy chú chó nằm co rúm bên lề đường, người run rẩy. Ngọc với em họ lại về nhà lấy đồ ăn cho nó, còn không bt nếu tối nay trời mưa thì nó sẽ thế nào."}
            </p>
            <img src={anh4} alt="" />
            <p>
              {isEnglish
                ? "That night, I thought it would be impossible to rescue it. At midnight, I asked a volunteer to drive up to Phu Tho to catch the dog because I was afraid it would die of cold on the street. We arrived at 1 am, but I fell asleep. I was at home, trying to search the Google Map and calling around, but we didn’t know the exact location. The volunteer couldn’t find it and had to turn back. The next afternoon at 2 pm, Như and Nhung took a motorcycle to Phu Tho to catch the dog. When we got there, the dog was very scared, so the three of us played a game of tag for almost an hour. When we finally caught it, we headed back to Hanoi and arrived at 10 pm. Nhung, who stays in a dormitory, was so late that the dormitory door was closed, and she had to climb over the wall to get in. It was both funny and pitiful."
                : "Ngày ý tưởng ko cứu được nó. Nửa đêm nhờ tnv chạy ô tô lên Phú Thọ bắt chó vì sợ nó lang thang ngoài đường chết lạnh. 1h sáng đến nơi thì em báo tin ngủ quên. Mình ngồi nhà mò google map với gọi đt loạn lên mà ko biết địa điểm cụ thể ở đâu. Bạn tnv thang lang ko tìm được đường đành đi về. Chiều hôm sau 2h nhờ em Như với Nhung hai đứa đèo nhau bằng xe máy lên Phú Thọ bắt chó.. Lên đến nơi thì em chó nhát người, thế là 3 đứa chơi trò đuổi bắt nhau trên đó chắc cả tiếng đồng hồ. Bắt được thì kẹp 3 đi về đến Hn lúc 10h tối...! Cái Nhung ở trọ trong ký túc xá, về muộn quá ktx đóng cửa nên phải trèo tường vào vừa buồn cười vừa thương...."}
            </p>
            <img src={anh5} alt="" />
            <p>
              {isEnglish
                ? "But in the end, Thor didn’t disappoint us! Now he’s fat and handsome, and only understands English commands, not Vietnamese. He’s almost a Vietnamese-American now... I wish every animal could be as lucky as him."
                : "Nhưng cuối cùng thì Thor nó cũng ko phụ công anh chị! Giờ vừa béo vừa đẹp trai, chỉ hiểu lệnh tiếng Anh chứ ko biết tiếng Việt sắp thành Việt kiều đến nơi rồi... Ước gì đứa nào cũng sướng được như nó.."}
            </p>
            <img src={anh6} alt="" />
            <p>
              {isEnglish
                ? "Let’s take a look at the result of the collective efforts of the volunteers, the doctors, and the donors! We’ve made it! Even though it's not much, we will always try our best!"
                : "Cùng xem thành quả của cả một tập thể, những tnv, các bác sĩ và mạnh thường quân nhé!! Chúng ta đã làm được!! Dù không nhiều nhưng sẽ luôn cố gắng!!"}
            </p>
            <img src={anh7} alt="" />
          </div>
          <div
            className="fb-comments"
            data-href="https://www.hanoipetadoption.com/vi/tin-tuc/chu-cho-corgi-sinh-ra-voi-1-mat-va-2-mui-song-sot-ky-dieu-82"
            data-width="863"
            data-numposts="1"
            style={{ margin: "20px 0" }}
          ></div>
        </div>

        <SideBar category={props.category} setCategory={props.setCategory} />
      </div>
      <AnotherNews news={props.news} />
      <ToSupport />
    </div>
  );
}

export default NewsDetail;
