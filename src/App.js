import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Adopt from "./pages/Adopt";
import Contact from "./pages/Contact";
import Donation from "./pages/Donation";
import HomePage from "./pages/Home";
import Product from "./pages/Product";
import Volunteer from "./pages/Volunteer";
import "./App.scss";
import "normalize.css";
import thumbnail1 from "./asset/ListThumbnail/1.jpeg";
import thumbnail2 from "./asset/ListThumbnail/2.jpeg";
import thumbnail3 from "./asset/ListThumbnail/3.jpeg";
import thumbnail4 from "./asset/ListThumbnail/4.jpeg";
import thumbnail5 from "./asset/ListThumbnail/5.jpeg";
import thumbnail6 from "./asset/ListThumbnail/6.jpeg";
import thumbnail7 from "./asset/ListThumbnail/7.jpeg";
import thumbnail8 from "./asset/ListThumbnail/8.jpeg";
import thumbnail9 from "./asset/ListThumbnail/9.jpg";
import thumbnail10 from "./asset/ListThumbnail/10.jpeg";
import thumbnail11 from "./asset/ListThumbnail/11.jpeg";
import thumbnail12 from "./asset/ListThumbnail/12.jpg";
import News from "./pages/News";
import Bai1 from "./pages/News/Bai1";
import NewsDetail from "./pages/News/NewsDetail";
import PetInfo from "./pages/Adopt/AllPet/PetInfo";
import AllPet from "./pages/Adopt/AllPet";
import newThumbnail1 from "./asset/News_Thumbnail/6401c039-e6be-49a2-a146-c8ce5afed5ee.jpeg"
import newThumbnail2 from "./asset/News_Thumbnail/10e00460-d5cc-4cf4-9133-d429b85642cb.jpg"
import newThumbnail3 from "./asset/News_Thumbnail/inu_pha_game.jpg"
import newThumbnail4 from "./asset/News_Thumbnail/chu_meo_buon_ba.jpg"
import newThumbnail5 from "./asset/News_Thumbnail/cun_ghe_bi_bo_roi.jpg"
import newThumbnail6 from "./asset/News_Thumbnail/meo_trang_bi_bo_roi.png"
import newThumbnail7 from "./asset/News_Thumbnail/cho-con-lang-thang.jpg"
import newThumbnail8 from "./asset/News_Thumbnail/meo-con-tim-me.jpg"
import newThumbnail9 from "./asset/News_Thumbnail/meo-gay-bao.png";
import newThumbnail10 from "./asset/News_Thumbnail/meo-va-dem.png";
import newThumbnail11 from "./asset/News_Thumbnail/meo-hoang.png";
import newThumbnail12 from "./asset/News_Thumbnail/cho-demodex.png";
import newThumbnail13 from "./asset/News_Thumbnail/mun-liet-4-chan.jpg";
import newThumbnail14 from "./asset/News_Thumbnail/phuc-hoi-cua-gau.jpg";
import newThumbnail15 from "./asset/News_Thumbnail/phuc-hoi-cua-cam.jpg";
import newThumbnail16 from "./asset/News_Thumbnail/cun-con-bi-bao-hanh.jpg";

const list = [
  {
    name: "Pepsi",
    breed: "Mèo Ta",
    color: "Trắng Vàng",
    age: "Nhí",
    weight: "1",
    gender: "Đực",
    id: "P4597",
    ///
    a: "u",
    b: "u",
    c: "t",
    ///
    d: "t",
    e: "u",
    f: "t",
    ///
    g: "u",
    h: "t",
    des: "Một bạn nhặt được ngoài đường rồi bỏ lại ở phòng khám",
    url: thumbnail1, //Ảnh thumbnail
    current: 1, //Trang hiển thị
  },
  {
    name: "Milo",
    breed: "Mèo Tây",
    color: "Đen Trắng",
    age: "Nhỡ",
    weight: "3",
    gender: "Đực",
    id: "M4560",
    ///
    a: "u",
    b: "u",
    c: "t",
    ///
    d: "t",
    e: "u",
    f: "t",
    ///
    g: "u",
    h: "t",
    des: "Bé đi lang thang chân phải đau, mắt trái đục giác mạc. Milo, đực, 5-6 tháng, đã tiêm một mũi. Một mắt bị nhòe. Hơi nhát, ăn tham.",
    url: thumbnail2, //Ảnh thumbnail
    current: 1, //Trang hiển thị
  },
  {
    name: "Michan",
    breed: "Poodle",
    color: "Trắng",
    age: "Thanh niên",
    weight: "5",
    gender: "Đực",
    id: "M4593",
    ///
    a: "u",
    b: "u",
    c: "u",
    ///
    d: "t",
    e: "t",
    f: "u",
    ///
    g: "t",
    h: "u",
    des: "Bé cún lang thang ở nghĩa trang.",
    url: thumbnail3, //Ảnh thumbnail
    current: 1, //Trang hiển thị
  },
  {
    name: "Quýt",
    breed: "Mèo ta",
    color: "Vàng",
    age: "Nhí",
    weight: "0.8",
    gender: "Đực",
    id: "Q4592",
    ///
    a: "u",
    b: "u",
    c: "u",
    ///
    d: "t",
    e: "u",
    f: "t",
    ///
    g: "u",
    h: "t",
    des: "Bé mèo lang thang ở sảnh chung cư, chơi với trẻ con nhưng ko ai nuôi.",
    url: thumbnail4, //Ảnh thumbnail
    current: 1, //Trang hiển thị
  },
  {
    name: "Bông",
    breed: "Mèo Lai",
    color: "Trắng",
    age: "Nhỡ",
    weight: "2",
    gender: "Cái",
    id: "B4585",
    ///
    a: "u",
    b: "u",
    c: "u",
    ///
    d: "t",
    e: "u",
    f: "t",
    ///
    g: "u",
    h: "t",
    des: "Bé đi lang thang, gầy đói, đau mắt ở khu vực Bác Khoa không ai nhận.",
    url: thumbnail5, //Ảnh thumbnail
    current: 1, //Trang hiển thị
  },
  {
    name: "Dưa",
    breed: "Mèo Tây",
    color: "Xám",
    age: "Nhí",
    weight: "3",
    gender: "Đực",
    id: "D4582",
    ///
    a: "u",
    b: "u",
    c: "u",
    ///
    d: "t",
    e: "u",
    f: "u",
    ///
    g: "u",
    h: "t",
    des: "Bé đi lang thang, ăn ót, phân hơi nát. Còn nhát.",
    url: thumbnail6, //Ảnh thumbnail
    current: 1, //Trang hiển thị
  },
  {
    name: "Lucky",
    breed: "Chó Ta",
    color: "Đen Trắng",
    age: "Nhí",
    weight: "3",
    gender: "Đực",
    id: "L4581",
    ///
    a: "u",
    b: "u",
    c: "u",
    ///
    d: "t",
    e: "t",
    f: "u",
    ///
    g: "t",
    h: "u",
    des: "Bị thương cong gập 1 chân sau, ve rận bị bỏ ở xã Bàu Lâm, Huyện Xuyên Mộc, Vũng Tàu.",
    url: thumbnail7, //Ảnh thumbnail
    current: 1, //Trang hiển thị
  },
  {
    name: "Mochi",
    breed: "Mèo Tây",
    color: "Xám",
    age: "Nhỡ",
    weight: "2.5",
    gender: "Đực",
    id: "M4532",
    ///
    a: "u",
    b: "u",
    c: "t",
    ///
    d: "t",
    e: "u",
    f: "t",
    ///
    g: "u",
    h: "t",
    des: "Bị nấm và viêm phổi. Hiện đã khỏi.",
    url: thumbnail8, //Ảnh thumbnail
    current: 1, //Trang hiển thị
  },
  {
    name: "Ki",
    breed: "Chó Ta",
    color: "Trắng Nâu",
    age: "Thanh niên",
    weight: "20",
    gender: "Cái",
    id: "K4624",
    ///
    a: "u",
    b: "t",
    c: "u",
    ///
    d: "t",
    e: "t",
    f: "u",
    ///
    g: "t",
    h: "u",
    des: "Ki khoảng 3 tuổi, là con gái, khoảng 20kg, đã tiêm phòng dại. To xác nhưng hay e thẹn. Ban đầu nhát nhưng cho ăn sẽ nhanh quen, thích được xoa đầu gãi bụng. Đam mê ăn uống.",
    url: thumbnail9, //Ảnh thumbnail
    current: 1, //Trang hiển thị
  },
  {
    name: "Ruby",
    breed: "Chó Tây",
    color: "Đen",
    age: "Nhỡ",
    weight: "3",
    gender: "Cái",
    id: "R4558",
    ///
    a: "u",
    b: "u",
    c: "t",
    ///
    d: "t",
    e: "t",
    f: "u",
    ///
    g: "t",
    h: "u",
    des: "Thiếu canxi, biến dạng xương 1 chân bị bỏ ở Ngọc Hà. Nhóm đã chữa khỏi cho bé.",
    url: thumbnail10, //Ảnh thumbnail
    current: 1, //Trang hiển thị
  },
  {
    name: "Mây",
    breed: "Chó Lai",
    color: "Trắng",
    age: "Nhỡ",
    weight: "10",
    gender: "Cái",
    id: "M4611",
    ///
    a: "u",
    b: "u",
    c: "u",
    ///
    d: "u",
    e: "u",
    f: "u",
    ///
    g: "u",
    h: "u",
    des: "Chủ bỏ vì nấm.",
    url: thumbnail11, //Ảnh thumbnail
    current: 1, //Trang hiển thị
  },
  {
    name: "Lily",
    breed: "Chó ta",
    color: "Nâu",
    age: "Nhỡ",
    weight: "15",
    gender: "Cái",
    id: "L4623",
    ///
    a: "f",
    b: "u",
    c: "t",
    ///
    d: "t",
    e: "t",
    f: "u",
    ///
    g: "t",
    h: "u",
    des: "Thân thiện, quấn người, ham ăn ham vui. Thích được bế và ôm.",
    url: thumbnail12, //Ảnh thumbnail
    current: 1, //Trang hiển thị
  },
  {
    name: "Lily",
    breed: "Chó ta",
    color: "Nâu",
    age: "Nhỡ",
    weight: "15",
    gender: "Cái",
    id: "L4623",
    ///
    a: "f",
    b: "u",
    c: "t",
    ///
    d: "t",
    e: "t",
    f: "u",
    ///
    g: "t",
    h: "u",
    des: "Thân thiện, quấn người, ham ăn ham vui. Thích được bế và ôm.",
    url: thumbnail12, //Ảnh thumbnail
    current: 2, //Trang hiển thị
  },
  {
    name: "Mây",
    breed: "Chó Lai",
    color: "Trắng",
    age: "Nhỡ",
    weight: "10",
    gender: "Cái",
    id: "M4611",
    ///
    a: "u",
    b: "u",
    c: "u",
    ///
    d: "u",
    e: "u",
    f: "u",
    ///
    g: "u",
    h: "u",
    des: "Chủ bỏ vì nấm.",
    url: thumbnail11, //Ảnh thumbnail
    current: 2, //Trang hiển thị
  },
  {
    name: "Ruby",
    breed: "Chó Tây",
    color: "Đen",
    age: "Nhỡ",
    weight: "3",
    gender: "Cái",
    id: "R4558",
    ///
    a: "u",
    b: "u",
    c: "t",
    ///
    d: "t",
    e: "t",
    f: "u",
    ///
    g: "t",
    h: "u",
    des: "Thiếu canxi, biến dạng xương 1 chân bị bỏ ở Ngọc Hà. Nhóm đã chữa khỏi cho bé.",
    url: thumbnail10, //Ảnh thumbnail
    current: 2, //Trang hiển thị
  },
  {
    name: "Ki",
    breed: "Chó Ta",
    color: "Trắng Nâu",
    age: "Thanh niên",
    weight: "20",
    gender: "Cái",
    id: "K4624",
    ///
    a: "u",
    b: "t",
    c: "u",
    ///
    d: "t",
    e: "t",
    f: "u",
    ///
    g: "t",
    h: "u",
    des: "Ki khoảng 3 tuổi, là con gái, khoảng 20kg, đã tiêm phòng dại. To xác nhưng hay e thẹn. Ban đầu nhát nhưng cho ăn sẽ nhanh quen, thích được xoa đầu gãi bụng. Đam mê ăn uống.",
    url: thumbnail9, //Ảnh thumbnail
    current: 2, //Trang hiển thị
  },
  {
    name: "Mochi",
    breed: "Mèo Tây",
    color: "Xám",
    age: "Nhỡ",
    weight: "2.5",
    gender: "Đực",
    id: "M4532",
    ///
    a: "u",
    b: "u",
    c: "t",
    ///
    d: "t",
    e: "u",
    f: "t",
    ///
    g: "u",
    h: "t",
    des: "Bị nấm và viêm phổi. Hiện đã khỏi.",
    url: thumbnail8, //Ảnh thumbnail
    current: 2, //Trang hiển thị
  },
  {
    name: "Lucky",
    breed: "Chó Ta",
    color: "Đen Trắng",
    age: "Nhí",
    weight: "3",
    gender: "Đực",
    id: "L4581",
    ///
    a: "u",
    b: "u",
    c: "u",
    ///
    d: "t",
    e: "t",
    f: "u",
    ///
    g: "t",
    h: "u",
    des: "Bị thương cong gập 1 chân sau, ve rận bị bỏ ở xã Bàu Lâm, Huyện Xuyên Mộc, Vũng Tàu.",
    url: thumbnail7, //Ảnh thumbnail
    current: 2, //Trang hiển thị
  },
  {
    name: "Dưa",
    breed: "Mèo Tây",
    color: "Xám",
    age: "Nhí",
    weight: "3",
    gender: "Đực",
    id: "D4582",
    ///
    a: "u",
    b: "u",
    c: "u",
    ///
    d: "t",
    e: "u",
    f: "u",
    ///
    g: "u",
    h: "t",
    des: "Bé đi lang thang, ăn ót, phân hơi nát. Còn nhát.",
    url: thumbnail6, //Ảnh thumbnail
    current: 2, //Trang hiển thị
  },
  {
    name: "Bông",
    breed: "Mèo Lai",
    color: "Trắng",
    age: "Nhỡ",
    weight: "2",
    gender: "Cái",
    id: "B4585",
    ///
    a: "u",
    b: "u",
    c: "u",
    ///
    d: "t",
    e: "u",
    f: "t",
    ///
    g: "u",
    h: "t",
    des: "Bé đi lang thang, gầy đói, đau mắt ở khu vực Bác Khoa không ai nhận.",
    url: thumbnail5, //Ảnh thumbnail
    current: 2, //Trang hiển thị
  },
  {
    name: "Quýt",
    breed: "Mèo ta",
    color: "Vàng",
    age: "Nhí",
    weight: "0.8",
    gender: "Đực",
    id: "Q4592",
    ///
    a: "u",
    b: "u",
    c: "u",
    ///
    d: "t",
    e: "u",
    f: "t",
    ///
    g: "u",
    h: "t",
    des: "Bé mèo lang thang ở sảnh chung cư, chơi với trẻ con nhưng ko ai nuôi.",
    url: thumbnail4, //Ảnh thumbnail
    current: 2, //Trang hiển thị
  },
  {
    name: "Michan",
    breed: "Poodle",
    color: "Trắng",
    age: "Thanh niên",
    weight: "5",
    gender: "Đực",
    id: "M4593",
    ///
    a: "u",
    b: "u",
    c: "u",
    ///
    d: "t",
    e: "t",
    f: "u",
    ///
    g: "t",
    h: "u",
    des: "Bé cún lang thang ở nghĩa trang.",
    url: thumbnail3, //Ảnh thumbnail
    current: 2, //Trang hiển thị
  },
  {
    name: "Milo",
    breed: "Mèo Tây",
    color: "Đen Trắng",
    age: "Nhỡ",
    weight: "3",
    gender: "Đực",
    id: "M4560",
    ///
    a: "u",
    b: "u",
    c: "t",
    ///
    d: "t",
    e: "u",
    f: "t",
    ///
    g: "u",
    h: "t",
    des: "Bé đi lang thang chân phải đau, mắt trái đục giác mạc. Milo, đực, 5-6 tháng, đã tiêm một mũi. Một mắt bị nhòe. Hơi nhát, ăn tham.",
    url: thumbnail2, //Ảnh thumbnail
    current: 2, //Trang hiển thị
  },
  {
    name: "Pepsi",
    breed: "Mèo Ta",
    color: "Trắng Vàng",
    age: "Nhí",
    weight: "1",
    gender: "Đực",
    id: "P4597",
    ///
    a: "u",
    b: "u",
    c: "t",
    ///
    d: "t",
    e: "u",
    f: "t",
    ///
    g: "u",
    h: "t",
    des: "Một bạn nhặt được ngoài đường rồi bỏ lại ở phòng khám",
    url: thumbnail1, //Ảnh thumbnail
    current: 2, //Trang hiển thị
  },
  {
    name: "Bông",
    breed: "Mèo Lai",
    color: "Trắng",
    age: "Nhỡ",
    weight: "2",
    gender: "Cái",
    id: "B4585",
    ///
    a: "u",
    b: "u",
    c: "u",
    ///
    d: "t",
    e: "u",
    f: "t",
    ///
    g: "u",
    h: "t",
    des: "Bé đi lang thang, gầy đói, đau mắt ở khu vực Bác Khoa không ai nhận.",
    url: thumbnail5, //Ảnh thumbnail
    current: 3, //Trang hiển thị
  },
  {
    name: "Dưa",
    breed: "Mèo Tây",
    color: "Xám",
    age: "Nhí",
    weight: "3",
    gender: "Đực",
    id: "D4582",
    ///
    a: "u",
    b: "u",
    c: "u",
    ///
    d: "t",
    e: "u",
    f: "u",
    ///
    g: "u",
    h: "t",
    des: "Bé đi lang thang, ăn ót, phân hơi nát. Còn nhát.",
    url: thumbnail6, //Ảnh thumbnail
    current: 3, //Trang hiển thị
  },
  {
    name: "Mochi",
    breed: "Mèo Tây",
    color: "Xám",
    age: "Nhỡ",
    weight: "2.5",
    gender: "Đực",
    id: "M4532",
    ///
    a: "u",
    b: "u",
    c: "t",
    ///
    d: "t",
    e: "u",
    f: "t",
    ///
    g: "u",
    h: "t",
    des: "Bị nấm và viêm phổi. Hiện đã khỏi.",
    url: thumbnail8, //Ảnh thumbnail
    current: 3, //Trang hiển thị
  },
  {
    name: "Lucky",
    breed: "Chó Ta",
    color: "Đen Trắng",
    age: "Nhí",
    weight: "3",
    gender: "Đực",
    id: "L4581",
    ///
    a: "u",
    b: "u",
    c: "u",
    ///
    d: "t",
    e: "t",
    f: "u",
    ///
    g: "t",
    h: "u",
    des: "Bị thương cong gập 1 chân sau, ve rận bị bỏ ở xã Bàu Lâm, Huyện Xuyên Mộc, Vũng Tàu.",
    url: thumbnail7, //Ảnh thumbnail
    current: 3, //Trang hiển thị
  },
  {
    name: "Pepsi",
    breed: "Mèo Ta",
    color: "Trắng Vàng",
    age: "Nhí",
    weight: "1",
    gender: "Đực",
    id: "P4597",
    ///
    a: "u",
    b: "u",
    c: "t",
    ///
    d: "t",
    e: "u",
    f: "t",
    ///
    g: "u",
    h: "t",
    des: "Một bạn nhặt được ngoài đường rồi bỏ lại ở phòng khám",
    url: thumbnail1, //Ảnh thumbnail
    current: 3, //Trang hiển thị
  },
  {
    name: "Milo",
    breed: "Mèo Tây",
    color: "Đen Trắng",
    age: "Nhỡ",
    weight: "3",
    gender: "Đực",
    id: "M4560",
    ///
    a: "u",
    b: "u",
    c: "t",
    ///
    d: "t",
    e: "u",
    f: "t",
    ///
    g: "u",
    h: "t",
    des: "Bé đi lang thang chân phải đau, mắt trái đục giác mạc. Milo, đực, 5-6 tháng, đã tiêm một mũi. Một mắt bị nhòe. Hơi nhát, ăn tham.",
    url: thumbnail2, //Ảnh thumbnail
    current: 3, //Trang hiển thị
  },
  {
    name: "Michan",
    breed: "Poodle",
    color: "Trắng",
    age: "Thanh niên",
    weight: "5",
    gender: "Đực",
    id: "M4593",
    ///
    a: "u",
    b: "u",
    c: "u",
    ///
    d: "t",
    e: "t",
    f: "u",
    ///
    g: "t",
    h: "u",
    des: "Bé cún lang thang ở nghĩa trang.",
    url: thumbnail3, //Ảnh thumbnail
    current: 3, //Trang hiển thị
  },
  {
    name: "Quýt",
    breed: "Mèo ta",
    color: "Vàng",
    age: "Nhí",
    weight: "0.8",
    gender: "Đực",
    id: "Q4592",
    ///
    a: "u",
    b: "u",
    c: "u",
    ///
    d: "t",
    e: "u",
    f: "t",
    ///
    g: "u",
    h: "t",
    des: "Bé mèo lang thang ở sảnh chung cư, chơi với trẻ con nhưng ko ai nuôi.",
    url: thumbnail4, //Ảnh thumbnail
    current: 3, //Trang hiển thị
  },
  {
    name: "Ki",
    breed: "Chó Ta",
    color: "Trắng Nâu",
    age: "Thanh niên",
    weight: "20",
    gender: "Cái",
    id: "K4624",
    ///
    a: "u",
    b: "t",
    c: "u",
    ///
    d: "t",
    e: "t",
    f: "u",
    ///
    g: "t",
    h: "u",
    des: "Ki khoảng 3 tuổi, là con gái, khoảng 20kg, đã tiêm phòng dại. To xác nhưng hay e thẹn. Ban đầu nhát nhưng cho ăn sẽ nhanh quen, thích được xoa đầu gãi bụng. Đam mê ăn uống.",
    url: thumbnail9, //Ảnh thumbnail
    current: 3, //Trang hiển thị
  },
  {
    name: "Ruby",
    breed: "Chó Tây",
    color: "Đen",
    age: "Nhỡ",
    weight: "3",
    gender: "Cái",
    id: "R4558",
    ///
    a: "u",
    b: "u",
    c: "t",
    ///
    d: "t",
    e: "t",
    f: "u",
    ///
    g: "t",
    h: "u",
    des: "Thiếu canxi, biến dạng xương 1 chân bị bỏ ở Ngọc Hà. Nhóm đã chữa khỏi cho bé.",
    url: thumbnail10, //Ảnh thumbnail
    current: 3, //Trang hiển thị
  },
  {
    name: "Mây",
    breed: "Chó Lai",
    color: "Trắng",
    age: "Nhỡ",
    weight: "10",
    gender: "Cái",
    id: "M4611",
    ///
    a: "u",
    b: "u",
    c: "u",
    ///
    d: "u",
    e: "u",
    f: "u",
    ///
    g: "u",
    h: "u",
    des: "Chủ bỏ vì nấm.",
    url: thumbnail11, //Ảnh thumbnail
    current: 3, //Trang hiển thị
  },
  {
    name: "Lily",
    breed: "Chó ta",
    color: "Nâu",
    age: "Nhỡ",
    weight: "15",
    gender: "Cái",
    id: "L4623",
    ///
    a: "f",
    b: "u",
    c: "t",
    ///
    d: "t",
    e: "t",
    f: "u",
    ///
    g: "t",
    h: "u",
    des: "Thân thiện, quấn người, ham ăn ham vui. Thích được bế và ôm.",
    url: thumbnail12, //Ảnh thumbnail
    current: 3, //Trang hiển thị
  },
];

const news = [
  {
    title: "bán lịch gây quỹ hanoi petadoption 2025...",
    author: "Hanoi Pet Adoption (English only)",
    date: "23/11/2024",
    des: "Mỗi chú chó, mèo mà Hanoi Pet Adoption cứu hộ đều mang trong mình một câu chuyện đầy xúc động, một khát khao được yêu thương và có một mái ấm. Khi bạn mua một cuốn lịch của chúng mình, bạn không chỉ nhận về những bức ảnh đáng yêu, mà còn tiếp thêm hy vọng cho những sinh mệnh bé nhỏ này. Mỗi cuốn lịch là một tấm lòng, mỗi sự hỗ trợ là một bước tiến lớn trong hành trình giúp đỡ những chú chó, mèo tìm được gia đình yêu thương. Hãy cùng chúng mình mang đến một năm mới đầy ý nghĩa, với những hành động nhỏ nhưng đầy tình cảm. Cảm ơn bạn đã cùng chung tay vì một tương lai tươi đẹp cho các bé thú cưng!",
    url: newThumbnail1,
    category: ""
  },
  {
    title: "Chú chó Corgi sinh ra với 1 mắt và 2 mũi sống sót kỳ diệu",
    author: "Hanoi Pet Adoption (English only)",
    date: "23/09/2020",
    des: "Dị tật bẩm sinh di truyền đã khiến chú chó Corgi này sinh ra với ngoại hình khác biệt. Ngoài những đặc điểm trên mặt như chỉ có 1 mắt hay 2 mũi thì chú chó còn có 2 đốt sống hợp nhất. Do đó, bác sĩ thú y đã đề xuất sẽ an tử để kết thúc cuộc đời không như mong muốn cho nó.",
    url: newThumbnail2,
    category: "1",
  },
  {
    title: "Chú chó Shiba Inu nổi tiếng khắp thế giới vì trình 'phá game'",
    author: "Hanoi Pet Adoption (English only)",
    date: "23/09/2020",
    des: "Chụp ảnh nhóm cùng bạn bè là một cách lưu lại kỷ niệm và những khoảnh khắc đáng nhớ. Tuy nhiên, trong hội bạn thân nào cũng có ai đó chuyên gia 'phá game', cả đám tạo dáng đồng đều riêng mình nó lại muốn khác biệt. Nhưng không chỉ 'hooman', nhóm bạn chó Shiba Inu sau cũng có một thành viên chuyên gia làm hỏng các bức ảnh đẹp.",
    url: newThumbnail3,
    category: "1",
  },
  {
    title: "'Chú mèo buồn bã nhất thế giới' ngày ấy - bây giờ",
    author: "Hanoi Pet Adoption (English only)",
    date: "23/09/2020",
    des: "Đây là chú mèo có tên Mister Bruce Willis – một 'chiến binh' thực thụ. Mister Willis từng được gọi là 'con mèo buồn nhất thế giới' khi phải đi lang thang khắp các nẻo đường trong nhiều năm để tìm được người thật lòng yêu thương mình.",
    url: newThumbnail4,
  },
  {
    title: "Cứu hộ bé cún ghẻ bị bỏ rơi ở Phú Thọ",
    author: "HanoiPetAdoption",
    date: "20/02/2020",
    des: "Ngày ý tưởng ko cứu được nó. Nửa đêm nhờ tnv chạy ô tô lên Phú Thọ bắt chó vì sợ nó lang thang ngoài đường chết lạnh. 1h sáng đến nơi thì em báo tin ngủ quên. Mình ngồi nhà mò google map với gọi đt loạn lên mà ko biết địa điểm cụ thể ở đâu. Bạn tnv thang lang ko tìm được đường đành đi về. Chiều hôm sau 2h nhờ em Như với Nhung hai đứa đèo nhau bằng xe máy lên Phú Thọ bắt chó.. Lên đến nơi thì em chó nhát người, thế là 3 đứa chơi trò đuổi bắt nhau trên đó chắc cả tiếng đồng hồ. Bắt được thì kẹp 3 đi về đến Hn lúc 10h tối...! Cái Nhung ở trọ trong ký túc xá, về muộn quá ktx đóng cửa nên phải trèo tường vào  vừa buồn cười vừa thương....",
    url: newThumbnail5,
  },
  {
    title: "Mèo trắng bị bỏ rơi",
    author: "nch180297@gmail.com",
    date: "03/12/2019",
    des: "Người ta thường bỏ những chú tiểu hổ con vào thùng cạc-tông và lén để ở những nhà kho, bãi đất trống. Thường thì mấy bé sẽ bị chết do thiếu sữa mẹ, thức ăn, do lạnh, cóng, hiếm lắm mới có người nhìn thấy chúng và nhận nuôi. Thế nên việc chú thợ săn chuột tên Utopia trong ảnh trên là một trường hợp đặc biệt giữa rất nhiều đồng loại xấu số.",
    url: newThumbnail6,
  },
  {
    title: "Chó con lang thang bãi rác",
    author: "nch180297@gmail.com",
    date: "29/11/2019",
    des: "Chó con lang thang bãi rác",
    url: newThumbnail7,
  },
  {
    title: "Mèo con ngơ ngác tìm mẹ",
    author: "nch180297@gmail.com",
    date: "29/11/2019",
    des: "Mèo con ngơ ngác tìm mẹ",
    url: newThumbnail8,
  },
  {
    title: "Gặp Gỡ Chú Mèo Gây Bão Cộng Đồng Mạng Với Cánh Tay Nghịch Ngợm Của Mình",
    author: "Minh Chau",
    date: "18/05/2020",
    des: "Chú mèo tên Carrot đã gây bão mạng xã hội khi chú thò bàn tay nghịch ngợm vào tủ lạnh để “ăn trộm” đồ ăn, tuy nhiên, điều khiến cư dân mạng tò mò là bên cánh tủ lạnh có dán biển cảnh báo “Đề phòng tay mèo khi đóng tủ lạnh”. Chắc hẳn hành vi lén lút này của Carrot đã diễn ra quá thường xuyên nên chủ của chú mèo mới phải dán biển cảnh báo như vậy.",
    url: newThumbnail9,
  },
  {
    title: "Những Boss Mèo Cùng Chiếc Đệm Đáng Yêu Của Chúng",
    author: "Minh Chau",
    date: "18/05/2020",
    des: "Có rất nhiều trò giải trí thú vị trong thời gian giãn cách xã hội: một số người sẽ dành thời gian xem Netflix, một số người lại dùng thời gian đó để theo đuổi những sở thích của họ hoặc thử sức làm những đồ thủ công mới. Và cũng trong khoảng thời gian này, mọi người nhận ra rằng họ có thể làm được rất nhiều thứ chỉ với vài cuộn len và trí tưởng tượng bay xa. Nếu bạn có niềm đam mê may vá hay bạn là fan hâm mộ của những chú mèo, hãy xem những bức ảnh dưới đây và thử sức may những chiếc đệm xinh xắn cho chúng nhé!",
    url: newThumbnail10,
  },
  {
    title: "Chú Mèo Hoang May Mắn Tìm Được Mái Ấm Và Sự Thay Đổi Đáng Kinh Ngạc",
    author: "Minh Chau",
    date: "17/05/2020",
    des: "Câu chuyện của những chú mèo hoang nghe như những câu chuyện cổ tích ngoài đời thực. Chúng bị bỏ rơi và phải chật vật tìm cách sinh tồn trên những con phố, vào một ngày đẹp trời, những người tốt bụng tìm thấy chúng và mang chúng về nhà. Kể từ khi ấy, cuộc đời của những chú mèo hoang thay đổi hoàn toàn. Dinah là một chú mèo như vậy – chú đã may mắn tìm được mái ấm của mình sau những ngày lang thang phiêu bạt trên phố.",
    url: newThumbnail11,
  },
  {
    title: "Chú Chó Mắc Bệnh Ghẻ Demodex Và Hành Trình Phục Hồi Diệu Kì",
    author: "Minh Chau",
    date: "04/05/2020",
    des: "Lainey bị bệnh ghẻ demodex và nhiễm trùng thứ phát. Sau khi được phát hiện, Lainey đã phải trải qua những liệu trình điều trị rất mạnh. Tuy nhiên, với tình yêu thương mà cô Buckley đã dành cho Lainey, chú chó nhỏ đã điều trị thành công.",
    url: newThumbnail12,
  },
  {
    title: "Mun liệt 4 chân bị bỏ rơi ở bãi xe",
    author: "HanoiPetAdoption",
    date: "19/02/2020",
    des: "Chó mẹ nuôi ở bãi giữ xe đẻ được 5 bé cún con, rồi một ngày chó mẹ bị xe ô tô cán chết. 5 bé chó con không ai chăm sóc và cứ thế chết dần, có đứa cũng bị xe cán chết giống mẹ nó.. Khi bạn báo tin phát hiện ra thì chỉ còn mình bé này. Nằm bẹp một chỗ chờ chết..",
    url: newThumbnail13,
  },
  {
    title: "Quá trình phục hồi kì diệu của Gấu liệt",
    author: "HanoiPetAdoption",
    date: "19/02/2020",
    des: "Có chị đi làm thấy bé bị bỏ ở chỗ tập kết rác. Cả người bẩn thỉu, bị liệt hai chân sau, cơ phần mông teo lại, các xương biến dạng.. Trên người bé có 3 vết thương một vết cắt ở cổ và hai vết loét ở mông. Chúng mình đã tiếp nhận và đưa bé đi điều trị ở các phòng khám.",
    url: newThumbnail14,
  },
  {
    title: "HÀNH TRÌNH PHỤC HỒI CỦA BÉ CAM",
    author: "HanoiPetAdoption",
    date: "19/02/2020",
    des: "Bé được cứu ngày 21/07/2019 tại một bãi rác, chủ em để em gầy tới mức như một bộ xương khô, hai chân sau co cơ không thể đi lại được. Em không thể chạy đi đâu được vì chân đã gần như liệt, kiến bu khắp người. Nếu không được các anh chị Trạm Cứu trợ Động vật Hải Phòng tới cứu kịp thời thì có lẽ em sẽ không trụ nổi vài ngày với cơ thể đó và nhiệt độ ngoài trời mưa nắng thất thường. Chủ em chỉ coi em như đồ vật trang trí, có thể vứt em đi bất cứ lúc nào khi không còn giá trị.",
    url: newThumbnail15,
  },
  {
    title: "Cún con bị chủ cũ bạo hành",
    author: "HanoiPetAdoption",
    date: "19/02/2020",
    des: "Các bạn theo dõi nhóm lâu chắc hẳn sẽ nhớ bé. Đây là bé cún bị chủ cũ bạo hành mà chúng mình cứu được ngày 4/3/2019. Thật sự đây không phải lần đầu bé bị đánh hay bé cún đầu tiên bị người chủ này bạo hành.. Tuy nhiên luật pháp của chúng ta chưa có luật bảo vệ động vật.. Chủ còn có quyền giết thịt chú chó mà họ nuôi.. nói chi đến đánh đập.",
    url: newThumbnail16,
  },
]

function App() {
  const [isEnglish, setIsEnglish] = useState(false);

  const Layout = () => {
    const [activated, setActivated] = useState("");
    const location = useLocation();
    useEffect(() => {
      setActivated(location.pathname);
      window.scrollTo(0, 0);
    });
    return (
      <div className="layout-app">
        <Header
          activated={activated}
          isEnglish={isEnglish}
          setIsEnglish={setIsEnglish}
        />
        <Outlet />
        <Footer isEnglish={isEnglish} />
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
          element: <HomePage list={list} isEnglish={isEnglish} />,
        },
        {
          path: "/nhan-nuoi",
          element: <Adopt list={list} isEnglish={isEnglish} />,
          children: [
            {
              path: "tat-ca-cac-be/:id",
              element: <PetInfo list={list} isEnglish={isEnglish} />,
            }
          ]
        },
        {
          path: "/nhan-nuoi/tat-ca-cac-be",
          element: <AllPet list={list} isEnglish={isEnglish} />,
        },
        {
          path: "/contact",
          element: <Contact isEnglish={isEnglish} />,
        },
        {
          path: "/product",
          element: <Product isEnglish={isEnglish} />,
        },
        {
          path: "news", // Route cha
          element: <News news={news} list={list} isEnglish={isEnglish} />,
          children: [
            {
              path: ":id", // Route con
              element: <NewsDetail isEnglish={isEnglish} />,
            },
          ],
        },
        {
          path: "bai1", // No leading slash
          element: <Bai1 isEnglish={isEnglish} />,
        },
        {
          path: "/donation",
          element: <Donation list={list} isEnglish={isEnglish} />,
        },
        {
          path: "/volunteer",
          element: <Volunteer list={list} isEnglish={isEnglish} />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
