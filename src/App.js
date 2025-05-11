import "normalize.css";
import { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import "./App.scss";
import thumbnail7_4 from "./asset/News_Thumbnail/Category/Dễ thương/cho-demodex.png";
import thumbnail7_1 from "./asset/News_Thumbnail/Category/Dễ thương/meo-gay-bao.png";
import thumbnail7_3 from "./asset/News_Thumbnail/Category/Dễ thương/meo-hoang.png";
import thumbnail7_2 from "./asset/News_Thumbnail/Category/Dễ thương/meo-va-dem.png";
import thumbnail1_1 from "./asset/News_Thumbnail/Category/Góc yêu thương/10e00460-d5cc-4cf4-9133-d429b85642cb.jpg";
import thumbnail1_8 from "./asset/News_Thumbnail/Category/Góc yêu thương/cho-so-canh-sat.jpg";
import thumbnail1_3 from "./asset/News_Thumbnail/Category/Góc yêu thương/chu_meo_buon_ba.jpg";
import thumbnail1_7 from "./asset/News_Thumbnail/Category/Góc yêu thương/doi-11nam.jpg";
import thumbnail1_2 from "./asset/News_Thumbnail/Category/Góc yêu thương/inu_pha_game.jpg";
import thumbnail1_6 from "./asset/News_Thumbnail/Category/Góc yêu thương/lap-xuong.png";
import thumbnail1_4 from "./asset/News_Thumbnail/Category/Góc yêu thương/meo-ta.jpeg";
import thumbnail1_5 from "./asset/News_Thumbnail/Category/Góc yêu thương/meo_lem_linh.jpg";
import thumbnail2_5 from "./asset/News_Thumbnail/Category/Hoạt động tình nguyện/be-miu.png";
import thumbnail2_3 from "./asset/News_Thumbnail/Category/Hoạt động tình nguyện/cho-con-lang-thang.jpg";
import thumbnail2_1 from "./asset/News_Thumbnail/Category/Hoạt động tình nguyện/cun_ghe_bi_bo_roi.jpg";
import thumbnail2_4 from "./asset/News_Thumbnail/Category/Hoạt động tình nguyện/meo-con-tim-me.jpg";
import thumbnail2_2 from "./asset/News_Thumbnail/Category/Hoạt động tình nguyện/meo_trang_bi_bo_roi.png";
import thumbnail3_4 from "./asset/News_Thumbnail/Category/Kiến thức nuôi boss/10-su-that-ve-meo.jpg";
import thumbnail3_1 from "./asset/News_Thumbnail/Category/Kiến thức nuôi boss/co-nen-nuoi-cho-khong.jpg";
import thumbnail3_3 from "./asset/News_Thumbnail/Category/Kiến thức nuôi boss/meo-den-xui-xeo.jpg";
import thumbnail3_2 from "./asset/News_Thumbnail/Category/Kiến thức nuôi boss/tieng-meo-ren.jpg";
import thumbnail3_5 from "./asset/News_Thumbnail/Category/Kiến thức nuôi boss/vi-sao-meo-khong-ngu.jpg";
import thumbnail4_3 from "./asset/News_Thumbnail/Category/Quá trình cứu hộ/be_slime.png";
import thumbnail4_2 from "./asset/News_Thumbnail/Category/Quá trình cứu hộ/Be_sua.png";
import thumbnail4_6 from "./asset/News_Thumbnail/Category/Quá trình cứu hộ/meo_con.png";
import thumbnail4_4 from "./asset/News_Thumbnail/Category/Quá trình cứu hộ/Meo_Muop.png";
import thumbnail5_1 from "./asset/News_Thumbnail/Category/Tin tức và sự kiện/ban-lich-gay-quy.jpeg";
import thumbnail5_2 from "./asset/News_Thumbnail/Category/Tin tức và sự kiện/chuyen-gia-phan-bac.jpeg";
import thumbnail5_3 from "./asset/News_Thumbnail/Category/Tin tức và sự kiện/so-huu-luot-theo-doi.jpg";
import thumbnail6_4 from "./asset/News_Thumbnail/Category/Video/con-bi-chu-cu-bao-hanh.jpg";
import thumbnail6_1 from "./asset/News_Thumbnail/Category/Video/mun-liet-4-chan.jpg";
import thumbnail6_3 from "./asset/News_Thumbnail/Category/Video/phuc-hoi-cua-cam.jpg";
import thumbnail6_2 from "./asset/News_Thumbnail/Category/Video/phuc-hoi-cua-gau.jpg";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Admin from "./pages/Admin";
import Adopt from "./pages/Adopt";
import AllPet from "./pages/Adopt/AllPet";
import PetInfo from "./pages/Adopt/AllPet/PetInfo";
import Contact from "./pages/Contact";
import Donation from "./pages/Donation";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import News from "./pages/News";
import NewsDetail from "./pages/News/NewsDetail";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Volunteer from "./pages/Volunteer";
import {
  doGetAccountAction,
  doLoginAction,
} from "./redux/account/accountSlice";
import { store } from "./redux/store";
import { callFetchAccount } from "./services/api";
import ProtectedRoute from "./components/ProtectedRoute";
import HashLoader from "react-spinners/HashLoader";

const news = [
  {
    title: "bán lịch gây quỹ Once More Life 2025...",
    title_english: "Selling 2025 Once More Life Charity Calendars...",
    author: "Once More Life",
    date: "23/11/2024",
    des: "Mỗi chú chó, mèo mà Once More Life cứu hộ đều mang trong mình một câu chuyện đầy xúc động, một khát khao được yêu thương và có một mái ấm...",
    des_english:
      "Each dog or cat rescued by Once More Life carries a touching story, a longing for love and a home. By purchasing a calendar, you're not just receiving adorable photos, but also offering hope for these small lives...",
    url: thumbnail5_1,
    category: ["5"],
  },
  {
    title: "Chuyên gia phản bác khả năng chó nhiễm nCoV",
    title_english: "Expert Refutes the Possibility of Dogs Contracting nCoV",
    author: "Once More Life",
    date: "05/03/2020",
    des: "Các báo cáo tuần trước cho thấy một chú chó cưng ở Hong Kong dương tính yếu với virus corona. Chú chó thuộc giống chó phốc sóc Pomeranian được coi là một bệnh nhân nhiễm Covid-19. Chú chó sau đó xét nghiệm thêm vào ngày 29/2 để xem liệu có thực sự bị nhiễm bệnh hay không.",
    des_english:
      "Reports last week showed that a pet dog in Hong Kong tested weakly positive for the coronavirus. The Pomeranian was considered a Covid-19 patient. The dog was subsequently tested again on February 29th to determine whether it was truly infected.",
    url: thumbnail5_2,
    category: ["5"],
  },
  {
    title:
      "Sở hữu lượt người theo dõi khủng trên MXH, 'mèo mắt lác' gây quỹ từ thiện gần 300 triệu chỉ nhờ bán hình ảnh của mình",
    title_english:
      "With Huge Social Media Following, 'Cross-eyed Cat' Raises Nearly 300 Million VND Just by Selling Its Photos",
    author: "Once More Life",
    date: "17/02/2020",
    des: 'Chú mèo giống Nebelung tên là Belarus này mắc phải hội chứng strabismus hay lé mắt, điều khiến nó có một đôi mắt đặc biệt hết sức. Và hơn hết, chính nhờ vẻ ngoài này mà Belarus đã "đánh cắp" trái tim của nhiều người yêu mèo trên toàn thế giới. Tài khoản Instagram của chú mèo này lên tới hơn 254.000 người theo dõi',
    des_english:
      "This Nebelung cat named Belarus suffers from strabismus, or crossed eyes, which gives it a very unique look. More importantly, Belarus' distinctive appearance has won the hearts of many cat lovers worldwide. The cat’s Instagram account has over 254,000 followers.",
    url: thumbnail5_3,
    category: ["5"],
  },
  {
    title: "Chú chó Corgi sinh ra với 1 mắt và 2 mũi sống sót kỳ diệu",
    title_english:
      "A Corgi Born with One Eye and Two Noses Has an Amazing Survival Story",
    author: "Once More Life",
    date: "23/09/2020",
    des: "Dị tật bẩm sinh di truyền đã khiến chú chó Corgi này sinh ra với ngoại hình khác biệt. Ngoài những đặc điểm trên mặt như chỉ có 1 mắt hay 2 mũi thì chú chó còn có 2 đốt sống hợp nhất...",
    des_english:
      "A congenital genetic defect caused this Corgi to be born with a unique appearance. Along with features such as only one eye or two noses, the dog also has two fused vertebrae...",
    url: thumbnail1_1,
    category: ["1"],
  },
  {
    title: "Chú chó Shiba Inu nổi tiếng khắp thế giới vì trình 'phá game'",
    title_english:
      "The Shiba Inu Famous Worldwide for Its 'Game Breaking' Skills",
    author: "Once More Life",
    date: "23/09/2020",
    des: "Chụp ảnh nhóm cùng bạn bè là một cách lưu lại kỷ niệm và những khoảnh khắc đáng nhớ. Tuy nhiên, trong hội bạn thân nào cũng có ai đó chuyên gia 'phá game'...",
    des_english:
      "Group photos with friends are a way to capture memories and special moments. However, every group has that one person who specializes in 'breaking the game'...",
    url: thumbnail1_2,
    category: ["1"],
  },
  {
    title: "'Chú mèo buồn bã nhất thế giới' ngày ấy - bây giờ",
    title_english: "'The Saddest Cat in the World' Then and Now",
    author: "Once More Life",
    date: "23/09/2020",
    des: "Đây là chú mèo có tên Mister Bruce Willis – một 'chiến binh' thực thụ. Mister Willis từng được gọi là 'con mèo buồn nhất thế giới' khi phải đi lang thang khắp các nẻo đường...",
    des_english:
      "This is Mister Bruce Willis, a true 'warrior'. Mister Willis was once known as 'the saddest cat in the world' as it wandered through streets alone...",
    url: thumbnail1_3,
    category: ["1"],
  },
  {
    title: "Câu chuyện về một con mèo ta",
    title_english: "The story of a domestic cat",
    author: "Once More Life",
    date: "19/04/2020",
    des: "Đây là Mỡ. Con mèo hiền lành, đôn hậu và đần độn của mình 😂 ",
    des_english: "This is Mỡ, my gentle, kind-hearted, and goofy cat 😂",
    url: thumbnail1_4,
    category: ["1"],
  },
  {
    title:
      "Cô mèo lém lỉnh mở hộp bánh rồi cắn mỗi cái một ít khiến chủ nhân 'cạn lời",
    title_english:
      "The mischievous cat opens a box of cookies and bites each one, leaving the owner speechless.",
    author: "Once More Life",
    date: "12/04/2020",
    des: "Kể từ khi cô mèo có tên Nellie được 2 chủ nhân nhận nuôi, họ đã phát hiện ra nó rất thích ăn đồ vặt, đặc biệt là bánh ngọt. Nellie luôn đánh hơi thức ăn chuyên nghiệp như những chú chó. Sự yêu thích ăn uống giúp cho cô mèo phát triển một vài mánh khoé để tìm kiếm thức ăn.",
    des_english:
      "Since the mischievous cat named Nellie was adopted by her two owners, they discovered that she loves snacks, especially sweets. Nellie sniffs out food like a professional dog. Her love for food has helped her develop some tricks to find snacks.",
    url: thumbnail1_5,
    category: ["1"],
  },
  {
    title:
      "Cách li mùa dịch: Chú chó lạp xưởng thành shipper chuyên nghiệp lấy đồ ăn cho cô chủ",
    title_english:
      "Quarantine season: The Dachshund becomes a professional delivery dog for her owner.",
    author: "Once More Life",
    date: "12/04/2020",
    des: 'Đối với những ai nuôi thú cưng, chó chính là người bạn gần gũi đồng hành trong mùa cách li hiện hiện tại. Mới đây, hình ảnh của một chú chó lạp xưởng đang mang túi đồ ăn nhanh Mc Donald tung tăng chạy trên đường phố trở nên "bão" trên mạng xã hội.',
    des_english:
      "For pet owners, dogs have become close companions during the current quarantine season. Recently, the image of a Dachshund joyfully carrying a McDonald's fast food bag through the streets has gone viral on social media.",
    url: thumbnail1_6,
    category: ["1"],
  },
  {
    title:
      "Chú chó trung thành đợi chủ suốt 11 năm bên cửa sổ, cho đến một ngày nó bỏ cuộc",
    title_english:
      "The loyal dog waited by the window for 11 years for its owner, until one day it gave up.",
    author: "Once More Life",
    date: "12/03/2020",
    des: "Cách đây 11 năm, cô bạn gái của anh chàng Roman đem một chú chó khoảng 2 tuổi về ngôi nhà chung của họ ở Chicago. Tình bạn giữa Roman và Toby (tên chú chó) bắt đầu bằng việc nó ị một bãi trên tấm thảm ngay giữa căn phòng khách của họ.",
    des_english:
      "Eleven years ago, Roman's girlfriend brought a 2-year-old dog to their shared home in Chicago. The friendship between Roman and Toby (the dog) began with Toby pooping on the living room carpet.",
    url: thumbnail1_7,
    category: ["1"],
  },
  {
    title:
      "Nửa đêm, chú chó lạ tự bước vào sở cảnh sát để báo án về vụ mất tích của...chính mình",
    title_english:
      "At midnight, a strange dog walked into the police station to report... its own disappearance.",
    author: "Nguyen Thanh Hien",
    date: "26/02/2020",
    des: "Tuần trước, sở cảnh sát Odessa ở tiểu bang Texas (Mỹ) đã bất ngờ đón một vị khách lạ vào lúc nửa đêm. Một chú chó thân thiện đã bước vào và nhảy lên phía trước quầy tiếp khách. Trông điệu bộ của nó có vẻ đang muốn trình báo tai nạn hoặc là một vụ đi lạc của ai đó.",
    des_english:
      "Last week, the Odessa Police Department in Texas, USA, unexpectedly welcomed a strange guest at midnight. A friendly dog walked in and jumped up to the front desk. Its demeanor suggested it was there to report an accident or its own disappearance.",
    url: thumbnail1_8,
    category: ["1"],
  },
  {
    title: "Cứu hộ bé cún ghẻ bị bỏ rơi ở Phú Thọ",
    title_english: "Rescuing a Flea-Infected Puppy Abandoned in Phu Tho",
    author: "Once More Life",
    date: "20/02/2020",
    des: "Ngày ý tưởng ko cứu được nó. Nửa đêm nhờ tnv chạy ô tô lên Phú Thọ bắt chó vì sợ nó lang thang ngoài đường chết lạnh...",
    des_english:
      "At first, we thought we couldn't save it. In the middle of the night, we asked a volunteer to drive to Phu Tho to rescue the dog, fearing it would die alone in the cold streets...",
    url: thumbnail2_1,
    category: ["2", "4"],
  },
  {
    title: "Mèo trắng bị bỏ rơi",
    title_english: "The Abandoned White Cat",
    author: "nch180297@gmail.com",
    date: "03/12/2019",
    des: "Người ta thường bỏ những chú tiểu hổ con vào thùng cạc-tông và lén để ở những nhà kho, bãi đất trống...",
    des_english:
      "People often leave small tiger cubs in cardboard boxes and secretly drop them off in warehouses or vacant lots...",
    url: thumbnail2_2,
    category: ["2", "4"],
  },
  {
    title: "Chó con lang thang bãi rác",
    title_english: "Puppy Wandering in a Trash Dump",
    author: "nch180297@gmail.com",
    date: "29/11/2019",
    des: "Chó con lang thang bãi rác",
    des_english: "A puppy wandering in a trash dump",
    url: thumbnail2_3,
    category: ["2", "3"],
  },
  {
    title: "Mèo con ngơ ngác tìm mẹ",
    title_english: "Kitten Lost and Searching for Its Mother",
    author: "nch180297@gmail.com",
    date: "29/11/2019",
    des: "Mèo con ngơ ngác tìm mẹ",
    des_english: "A kitten lost and searching for its mother",
    url: thumbnail2_4,
    category: ["2"],
  },
  {
    title: "TNV cứu hộ khẩn cấp bé Miu trên nóc nhà",
    title_english: "Volunteer Rescues Baby Miu from the Roof",
    author: "nch180297@gmail.com",
    date: "29/11/2019",
    des: "Hoạt động tình nguyện 1",
    des_english: "Volunteer Activity 1",
    url: thumbnail2_5,
    category: ["2"],
  },
  {
    title: "Có Nên Nuôi Chó Hay Không Khi Bạn Quá Bận Rộn?",
    title_english: "Should You Own a Dog When You're Too Busy?",
    author: "Once More Life",
    date: "19/02/2020",
    des: "Chó là một trong những loại động vật có đặc tính xã hội, vì vậy theo quy luật chung, chúng sẽ cảm thấy vui vẻ, hạnh phúc nhất chính là khi được ở cạnh bên những thành viên thân thiết trong gia đình của mình. Rất nhiều chú chó đã hình thành một sợi dây gắn bó tình cảm sâu sắc với người chủ đến nỗi chúng trở nên đặc biệt lo lắng, sợ hãi và cảm thấy không an toàn khi người chủ ra khỏi nhà. Hơn nữa, các cún cưng cũng sẽ cảm thấy rất buồn chán, nhất là khi chúng phải ở một mình trong khoảng thời gian quá dài. Và điều này có thể dẫn đến một số vấn đề khiến bạn phải lo lắng.",
    des_english:
      "Dogs are one of the most social animals, and according to common rules, they feel the happiest and most joyful when they are with their close family members. Many dogs have formed a deep emotional bond with their owners to the point where they become especially anxious, scared, and feel unsafe when their owners leave the house. Furthermore, dogs can get very bored, especially when they are left alone for too long. This can lead to some issues that will make you worry.",
    url: thumbnail3_1,
    category: ["3"],
  },
  {
    title: "Điều Kì Diệu của Tiếng Mèo Rên",
    title_english: "The Miracle of Cat Purring",
    author: "Once More Life",
    date: "29/11/2019",
    des: "Tiếng kêu rừ … rừ … rừ ... là biểu hiện của sự hài lòng.Những chú mèo thường kêu như vậy khi chúng cảm thấy vui vẻ, hoặc khi chúng đang ăn. Tuy nhiên gần đây các nhà khoa học đã phát hiện ra những tác dụng tích cực của tiếng kêu này tới sức khỏe con người. Thêm một lí do nữa để bạn quyết định nuôi mèo trong tương lai!",
    des_english:
      "The purring sound of cats is a sign of contentment. Cats usually purr when they feel happy or when they are eating. Recently, scientists have discovered the positive effects of this purring sound on human health. This is another reason why you might want to consider owning a cat in the future!",
    url: thumbnail3_2,
    category: ["3"],
  },
  {
    title: "Mèo Đen Có Thực Sự Mang Lại Xui Xẻo?",
    title_english: "Do Black Cats Really Bring Bad Luck?",
    author: "Once More Life",
    date: "19/02/2020",
    des: "Vào năm 1233, loài mèo đen không chỉ bị xem là hiện thân của quỷ Satan, chúng còn bị xem là tay sai thân tín của những mụ phù thủy và bị thiêu sống trong các cuộc săn lùng phù thủy của con người. Thậm chí ngày nay, vẫn có người cho rằng mèo đen mang lại nhiều điềm xui xẻo cho công việc, sự nghiệp của họ. Mèo đen cũng thường bị nói là khó được nhận nuôi hơn các mèo màu khác. Thế nhưng, những điều này có thực sự đúng...?",
    des_english:
      "In 1233, black cats were not only considered embodiments of Satan but were also seen as loyal companions to witches and were burned alive during witch hunts. Even today, some people still believe black cats bring bad luck to their work or career. Black cats are also often said to be harder to adopt than other cats. But is this really true...?",
    url: thumbnail3_3,
    category: ["3"],
  },
  {
    title: "10 Sự Thật Về Mèo Ít Ai Biết",
    title_english: "10 Little-Known Facts About Cats",
    author: "Once More Life",
    date: "19/02/2020",
    des: "",
    des_english: "",
    url: thumbnail3_4,
    category: ["3"],
  },
  {
    title: "Vì Sao Mèo Không Ngủ Về Đêm?",
    title_english: "Why Do Cats Not Sleep at Night?",
    author: "Once More Life",
    date: "19/02/2020",
    des: "Các chú mèo hay có thói quen kì quặc là rất hay phá phách, thậm chí đánh thức bạn trong đêm. Có một số lí do và cả giải pháp để giải quyết vấn đề có vẻ nan giải này!",
    des_english:
      "Cats often have the quirky habit of being very mischievous, even waking you up during the night. There are some reasons for this behavior, as well as solutions to solve this seemingly troublesome issue!",
    url: thumbnail3_5,
    category: ["3"],
  },
  {
    title:
      "Gặp Gỡ Chú Mèo Gây Bão Cộng Đồng Mạng Với Cánh Tay Nghịch Ngợm Của Mình",
    title_english: "Meet the Cat Who Went Viral for Its Mischievous Hand",
    author: "Minh Chau",
    date: "18/05/2020",
    des: "Chú mèo tên Carrot đã gây bão mạng xã hội khi chú thò bàn tay nghịch ngợm vào tủ lạnh để “ăn trộm” đồ ăn...",
    des_english:
      "Carrot the cat went viral on social media when it mischievously reached its hand into the refrigerator to 'steal' food...",
    url: thumbnail7_1,
    category: ["7"],
  },
  {
    title: "Những Boss Mèo Cùng Chiếc Đệm Đáng Yêu Của Chúng",
    title_english: "Cat Bosses with Their Cute Cushions",
    author: "Minh Chau",
    date: "18/05/2020",
    des: "Có rất nhiều trò giải trí thú vị trong thời gian giãn cách xã hội: một số người sẽ dành thời gian xem Netflix, một số người lại dùng thời gian đó để theo đuổi những sở thích của họ...",
    des_english:
      "During the social distancing period, many people found interesting ways to pass the time: some watched Netflix, while others pursued their hobbies or crafted new things...",
    url: thumbnail7_2,
    category: ["7"],
  },
  {
    title:
      "Chú Mèo Hoang May Mắn Tìm Được Mái Ấm Và Sự Thay Đổi Đáng Kinh Ngạc",
    title_english:
      "A Lucky Stray Cat Finds a Home and an Amazing Transformation",
    author: "Minh Chau",
    date: "17/05/2020",
    des: "Câu chuyện của những chú mèo hoang nghe như những câu chuyện cổ tích ngoài đời thực. Chúng bị bỏ rơi và phải chật vật tìm cách sinh tồn...",
    des_english:
      "The story of stray cats is like a real-life fairy tale. They were abandoned and had to struggle to survive on the streets...",
    url: thumbnail7_3,
    category: ["7"],
  },
  {
    title: "Chú Chó Mắc Bệnh Ghẻ Demodex Và Hành Trình Phục Hồi Diệu Kì",
    title_english:
      "A Dog with Demodex Mange and Its Miraculous Recovery Journey",
    author: "Minh Chau",
    date: "04/05/2020",
    des: "Lainey bị bệnh ghẻ demodex và nhiễm trùng thứ phát. Sau khi được phát hiện, Lainey đã phải trải qua những liệu trình điều trị rất mạnh...",
    des_english:
      "Lainey suffered from Demodex mange and secondary infections. After being discovered, Lainey underwent intensive treatments...",
    url: thumbnail7_4,
    category: ["7"],
  },
  {
    title: "Mun liệt 4 chân bị bỏ rơi ở bãi xe",
    title_english:
      "Mun, Paralyzed in All Four Legs, Abandoned in a Parking Lot",
    author: "Once More Life",
    date: "19/02/2020",
    des: "Chó mẹ nuôi ở bãi giữ xe đẻ được 5 bé cún con, rồi một ngày chó mẹ bị xe ô tô cán chết...",
    des_english:
      "A mother dog gave birth to five puppies in a parking lot, but one day, the mother was hit by a car...",
    url: thumbnail6_1,
    category: ["6"],
  },
  {
    title: "Quá trình phục hồi kì diệu của Gấu liệt",
    title_english: "The Miraculous Recovery of the Paralyzed Bear",
    author: "Once More Life",
    date: "19/02/2020",
    des: "Có chị đi làm thấy bé bị bỏ ở chỗ tập kết rác. Cả người bẩn thỉu, bị liệt hai chân sau, cơ phần mông teo lại, các xương biến dạng.. Trên người bé có 3 vết thương một vết cắt ở cổ và hai vết loét ở mông. Chúng mình đã tiếp nhận và đưa bé đi điều trị ở các phòng khám.",
    des_english:
      "A woman found the bear abandoned at a garbage collection point. It was dirty, paralyzed in both hind legs, with atrophied muscles, and deformed bones. The bear had three injuries: a cut on its neck and two sores on its back. We took it in and provided treatment at veterinary clinics.",
    url: thumbnail6_2,
    category: ["6"],
  },
  {
    title: "HÀNH TRÌNH PHỤC HỒI CỦA BÉ CAM",
    title_english: "The Recovery Journey of Baby Cam",
    author: "Once More Life",
    date: "19/02/2020",
    des: "Bé được cứu ngày 21/07/2019 tại một bãi rác, chủ em để em gầy tới mức như một bộ xương khô, hai chân sau co cơ không thể đi lại được. Em không thể chạy đi đâu được vì chân đã gần như liệt, kiến bu khắp người. Nếu không được các anh chị Trạm Cứu trợ Động vật Hải Phòng tới cứu kịp thời thì có lẽ em sẽ không trụ nổi vài ngày với cơ thể đó và nhiệt độ ngoài trời mưa nắng thất thường. Chủ em chỉ coi em như đồ vật trang trí, có thể vứt em đi bất cứ lúc nào khi không còn giá trị.",
    des_english:
      "Baby Cam was rescued on July 21, 2019, from a garbage dump. Its owner had allowed it to become so thin, resembling a skeleton, with paralyzed hind legs that prevented it from walking. It couldn’t escape as its legs were almost paralyzed, and ants swarmed its body. Without the timely rescue from the Hải Phòng Animal Rescue Station, Baby Cam wouldn't have survived the harsh weather conditions. The owner treated it as a mere decorative object and could discard it at any time when no longer useful.",
    url: thumbnail6_3,
    category: ["6"],
  },
  {
    title: "Cún con bị chủ cũ bạo hành",
    title_english: "Puppy Abused by Previous Owner",
    author: "Once More Life",
    date: "19/02/2020",
    des: "Các bạn theo dõi nhóm lâu chắc hẳn sẽ nhớ bé. Đây là bé cún bị chủ cũ bạo hành mà chúng mình cứu được ngày 4/3/2019. Thật sự đây không phải lần đầu bé bị đánh hay bé cún đầu tiên bị người chủ này bạo hành.. Tuy nhiên luật pháp của chúng ta chưa có luật bảo vệ động vật.. Chủ còn có quyền giết thịt chú chó mà họ nuôi.. nói chi đến đánh đập.",
    des_english:
      "Those who have been following our group for a while will surely remember this puppy. This is the puppy we rescued from its abusive previous owner on March 4, 2019. Unfortunately, this wasn’t the first time the puppy had been beaten or the first dog this owner had abused. However, our country's laws do not yet have protections for animals. The owner even had the right to slaughter the dog they kept, let alone beat it.",
    url: thumbnail6_4,
    category: ["6"],
  },
  {
    title: "Trước và sau của bé Sữa",
    title_english: "Before and After Baby Sữa",
    author: "NCH",
    date: "04/12/2019",
    des: "Trước và sau của bé Sữa thay đổi được tăng từ 3 kg đến 5 kgs xinh đẹp và đáng yêu hơn, tinh thần hay vui đùa nô nghịch cùng bạn bè.",
    des_english:
      "The transformation of Baby Sữa went from 3 kg to 5 kg, becoming more beautiful and adorable, full of energy and playful with friends.",
    url: thumbnail4_2,
    category: ["4"],
  },
  {
    title: "Trước và sau bé Smile được nhận nuôi",
    title_english: "Before and After Smile's Adoption",
    author: "NCH",
    date: "04/12/2019",
    des: "Sự khác biệt biệt khi em được yêu thương và chăm sóc 😘 từ 12kg lên 19kg. Đây là bé cún ghẻ được nhóm cứu ở Hà Giang, bé tên là Smile",
    des_english:
      "The difference when Smile was loved and cared for 😘, growing from 12 kg to 19 kg. Smile is a rescued dog from Hà Giang, and now, after being adopted, it's thriving.",
    url: thumbnail4_3,
    category: ["4"],
  },
  {
    title: "Chú mèo mướp bị cô độc trong đói rét",
    title_english: "The Stray Tabby Cat Left Alone in Hunger and Cold",
    author: "nch180297@gmail.com",
    date: "03/12/2019",
    des: "Trái tim bạn có xao động khi nhìn thấy vẻ mặt bi thương của chú mèo mướp Lionel bên trái không? Ngay cả khi đã được an toàn trong tay của những người yêu động vật, chú ta vẫn chưa hết lo sợ, hoảng hốt. Nhưng giờ thì sao nào, chàng đã được nuôi nấng ở trong một gia đình mới tràn đầy hạnh phúc, nơi mà cu cậu có thể thoải mái tận hưởng những giây phút an bình, không lo bị đánh đập, đói rét. Rồi thì bộ dạng ốm yếu ngày nào đã bị che lấp bởi mỡ và bộ lông dài dày mượt, thấy là muốn nựng liền!",
    des_english:
      "Does your heart ache when you see the sad face of the tabby cat Lionel on the left? Even after being rescued and safe in the hands of animal lovers, he still feared and panicked. But now, Lionel is nurtured in a new, happy home, where he enjoys peaceful moments without the worry of being beaten or starved. His once frail body has transformed with fat and a thick, glossy coat that you can't help but want to cuddle!",
    url: thumbnail4_4,
    category: ["4"],
  },
  {
    title: "Mèo con trước và sau nhận nuôi",
    title_english: "Before and After the Adoption of the Kitten",
    author: "nch180297@gmail.com",
    date: "03/12/2019",
    des: "Scout là một cô nàng tam thể xinh đẹp. Với bộ lông dài mượt và đôi mắt long lanh, tính tình hiền ngoan dễ bảo, không ai tin trước đây bạn ấy là một chú mèo hoang vô cùng tội nghiệp. Chủ của Scout kể lại, vào một buổi sáng, họ bắt gặp cô nàng đang lang thang ở hiên nhà. Lúc đó ẻm nhỏ thó, gầy guộc và trông rất mệt mỏi, rờ vô là đụng trúng xương xẩu, cứ tưởng là mèo con không hà dù đã gần hai năm tuổi rồi. Thế là họ quyết định sẽ cưu mang em ấy, và sau gần một năm, bạn thấy đấy, ẻm đã lột xác hoàn toàn! Chủ của Scout thương bé đến nỗi họ chỉ mong nàng mão có thể xóa sạch ký ức đau thương lúc trước khi về đội của họ, để sống an yên suốt quãng đời còn lại trong sự bảo bọc của mọi người.",
    des_english:
      "Scout is a beautiful tortoiseshell cat with long, silky fur and sparkling eyes, known for her gentle and obedient nature. No one would believe that she was once a very pitiful stray cat. Scout's owners recall finding her one morning, wandering in their yard. At that time, she was tiny, emaciated, and looked exhausted, her bones easily felt, despite being nearly two years old. They decided to take her in, and after nearly a year, look at her now! Her owners love her so much and wish for her to erase the painful memories from her past and live a peaceful life surrounded by love and care.",
    url: thumbnail4_6,
    category: ["4"],
  },
];

function App() {
  const [category, setCategory] = useState("all");
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.account.isLoading);
  const access_token = localStorage.getItem("access_token");
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const getAccount = async () => {
    await delay(1000);
    if (
      window.location.pathname === "/login" ||
      window.location.pathname === "/register"
    )
      return;
    const res = await callFetchAccount();
    if (res && res.data) {
      dispatch(doGetAccountAction(res.data));
    }
  };

  useEffect(() => {
    getAccount();
    // REACT_APP_BACKEND_URL = https://petsadoption-fullstack-be.onrender.com/v1/api
    // REACT_APP_BACKEND_PUBLIC_URL = https://petsadoption-fullstack-be.onrender.com
    console.log(
      "REACT_APP_BACKEND_URL = ",
      process.env.REACT_APP_BACKEND_URL,
      "\n",
      "REACT_APP_BACKEND_PUBLIC_URL = ",
      process.env.REACT_APP_BACKEND_PUBLIC_URL
    );
  }, []);

  const Layout = () => {
    const [activated, setActivated] = useState("");
    const location = useLocation();

    useEffect(() => {
      setActivated(location.pathname);
      window.scrollTo(0, 0);
    });

    return (
      <div className="layout-app">
        <Header activated={activated} />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/nhan-nuoi",
          element: <Adopt news={news} />,
          children: [
            {
              path: "tat-ca-cac-be/:id",
              element: <PetInfo />,
            },
          ],
        },
        {
          path: "/nhan-nuoi/tat-ca-cac-be",
          element: <AllPet />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: "/news", // Route cha
          element: (
            <News category={category} setCategory={setCategory} news={news} />
          ),
          children: [
            {
              path: ":title",
              element: (
                <NewsDetail
                  category={category}
                  setCategory={setCategory}
                  news={news}
                />
              ),
            },
          ],
        },
        {
          path: "/donation",
          element: <Donation news={news} />,
        },
        {
          path: "/volunteer",
          element: <Volunteer />,
        },
      ],
    },
    // Trang admin
    {
      path: "/admin",
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/profile",
      element: (
        <ProtectedRoute>
          <div>profile</div>
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div>
      {isLoading === false ||
      window.location.pathname === "/login" ||
      window.location.pathname === "/register" ||
      (window.location.pathname === "/" && !access_token) ? (
        <RouterProvider router={router} />
      ) : (
        <HashLoader
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          size={100}
          color="#d61C62"
        />
      )}
    </div>
  );
}

export default App;
