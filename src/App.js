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
    b: "t",
    c: "f",
    ///
    d: "t",
    e: "u",
    f: "u",
    ///
    g: "t",
    h: "f",
    des: "Một bạn nhặt được ngoài đường rồi bỏ lại ở phòng khám",
    url: thumbnail1, //Ảnh thumbnail
    current: 1, //Trang hiển thị
    type: "cat"
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
    c: "u",
    ///
    d: "t",
    e: "f",
    f: "t",
    ///
    g: "u",
    h: "t",
    des: "Bé đi lang thang chân phải đau, mắt trái đục giác mạc. Milo, đực, 5-6 tháng, đã tiêm một mũi. Một mắt bị nhòe. Hơi nhát, ăn tham.",
    url: thumbnail2, //Ảnh thumbnail
    current: 1, //Trang hiển thị
    type: "cat"
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
    a: "f",
    b: "u",
    c: "u",
    ///
    d: "u",
    e: "t",
    f: "t",
    ///
    g: "t",
    h: "u",
    des: "Bé cún lang thang ở nghĩa trang.",
    url: thumbnail3, //Ảnh thumbnail
    current: 1, //Trang hiển thị
    type: "dog"
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
    c: "t",
    ///
    d: "u",
    e: "t",
    f: "u",
    ///
    g: "t",
    h: "f",
    des: "Bé mèo lang thang ở sảnh chung cư, chơi với trẻ con nhưng ko ai nuôi.",
    url: thumbnail4, //Ảnh thumbnail
    current: 1, //Trang hiển thị
    type: "cat"
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
    b: "f",
    c: "u",
    ///
    d: "u",
    e: "u",
    f: "t",
    ///
    g: "t",
    h: "t",
    des: "Bé đi lang thang, gầy đói, đau mắt ở khu vực Bác Khoa không ai nhận.",
    url: thumbnail5, //Ảnh thumbnail
    current: 1, //Trang hiển thị
    type: "cat"
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
    d: "f",
    e: "u",
    f: "u",
    ///
    g: "u",
    h: "t",
    des: "Bé đi lang thang, ăn ót, phân hơi nát. Còn nhát.",
    url: thumbnail6, //Ảnh thumbnail
    current: 1, //Trang hiển thị
    type: "cat"
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
    b: "f",
    c: "u",
    ///
    d: "t",
    e: "t",
    f: "t",
    ///
    g: "u",
    h: "f",
    des: "Bị thương cong gập 1 chân sau, ve rận bị bỏ ở xã Bàu Lâm, Huyện Xuyên Mộc, Vũng Tàu.",
    url: thumbnail7, //Ảnh thumbnail
    current: 1, //Trang hiển thị
    type: "dog"
},

  //
  {
    name: "Mochi",
    breed: "Mèo Tây",
    color: "Xám",
    age: "Nhỡ",
    weight: "2.5",
    gender: "Đực",
    id: "M4532",
    a: "u",
    b: "t",
    c: "f",
    d: "t",
    e: "u",
    f: "f",
    g: "t",
    h: "u",
    des: "Bị nấm và viêm phổi. Hiện đã khỏi.",
    url: thumbnail8, //Ảnh thumbnail
    current: 1, //Trang hiển thị
    type: "cat"
  },
  {
    name: "Ki",
    breed: "Chó Ta",
    color: "Trắng Nâu",
    age: "Thanh niên",
    weight: "20",
    gender: "Cái",
    id: "K4624",
    a: "t",
    b: "u",
    c: "t",
    d: "f",
    e: "u",
    f: "t",
    g: "u",
    h: "f",
    des: "Ki khoảng 3 tuổi, là con gái, khoảng 20kg, đã tiêm phòng dại. To xác nhưng hay e thẹn. Ban đầu nhát nhưng cho ăn sẽ nhanh quen, thích được xoa đầu gãi bụng. Đam mê ăn uống.",
    url: thumbnail9, //Ảnh thumbnail
    current: 1, //Trang hiển thị
    type: "dog"
  },
  {
    name: "Ruby",
    breed: "Chó Tây",
    color: "Đen",
    age: "Nhỡ",
    weight: "3",
    gender: "Cái",
    id: "R4558",
    a: "f",
    b: "u",
    c: "t",
    d: "t",
    e: "f",
    f: "u",
    g: "t",
    h: "u",
    des: "Thiếu canxi, biến dạng xương 1 chân bị bỏ ở Ngọc Hà. Nhóm đã chữa khỏi cho bé.",
    url: thumbnail10, //Ảnh thumbnail
    current: 1, //Trang hiển thị
    type: "dog"
  },
  {
    name: "Mây",
    breed: "Chó Lai",
    color: "Trắng",
    age: "Nhỡ",
    weight: "10",
    gender: "Cái",
    id: "M4611",
    a: "u",
    b: "t",
    c: "f",
    d: "u",
    e: "t",
    f: "f",
    g: "t",
    h: "u",
    des: "Chủ bỏ vì nấm.",
    url: thumbnail11, //Ảnh thumbnail
    current: 1, //Trang hiển thị
    type: "dog"
  },
  {
    name: "Lily",
    breed: "Chó ta",
    color: "Nâu",
    age: "Nhỡ",
    weight: "15",
    gender: "Cái",
    id: "L4623",
    a: "f",
    b: "u",
    c: "t",
    d: "u",
    e: "t",
    f: "t",
    g: "u",
    h: "f",
    des: "Thân thiện, quấn người, ham ăn ham vui. Thích được bế và ôm.",
    url: thumbnail12, //Ảnh thumbnail
    current: 1, //Trang hiển thị
    type: "dog"
  },
  {
    name: "Lily",
    breed: "Chó ta",
    color: "Nâu",
    age: "Nhỡ",
    weight: "15",
    gender: "Cái",
    id: "L4623",
    a: "t",
    b: "u",
    c: "f",
    d: "t",
    e: "u",
    f: "f",
    g: "u",
    h: "t",
    des: "Thân thiện, quấn người, ham ăn ham vui. Thích được bế và ôm.",
    url: thumbnail12, //Ảnh thumbnail
    current: 2, //Trang hiển thị
    type: "dog"
  },
  {
    name: "Mây",
    breed: "Chó Lai",
    color: "Trắng",
    age: "Nhỡ",
    weight: "10",
    gender: "Cái",
    id: "M4611",
    a: "u",
    b: "u",
    c: "t",
    d: "f",
    e: "f",
    f: "t",
    g: "u",
    h: "t",
    des: "Chủ bỏ vì nấm.",
    url: thumbnail11, //Ảnh thumbnail
    current: 2, //Trang hiển thị
    type: "dog"
  },
  {
    name: "Ruby",
    breed: "Chó Tây",
    color: "Đen",
    age: "Nhỡ",
    weight: "3",
    gender: "Cái",
    id: "R4558",
    a: "f",
    b: "t",
    c: "u",
    d: "t",
    e: "u",
    f: "f",
    g: "u",
    h: "t",
    des: "Thiếu canxi, biến dạng xương 1 chân bị bỏ ở Ngọc Hà. Nhóm đã chữa khỏi cho bé.",
    url: thumbnail10, //Ảnh thumbnail
    current: 2, //Trang hiển thị
    type: "dog"
  },
  {
    name: "Ki",
    breed: "Chó Ta",
    color: "Trắng Nâu",
    age: "Thanh niên",
    weight: "20",
    gender: "Cái",
    id: "K4624",
    a: "u",
    b: "t",
    c: "f",
    d: "f",
    e: "u",
    f: "t",
    g: "t",
    h: "u",
    des: "Ki khoảng 3 tuổi, là con gái, khoảng 20kg, đã tiêm phòng dại. To xác nhưng hay e thẹn. Ban đầu nhát nhưng cho ăn sẽ nhanh quen, thích được xoa đầu gãi bụng. Đam mê ăn uống.",
    url: thumbnail9, //Ảnh thumbnail
    current: 2, //Trang hiển thị
    type: "dog"
  },
  
  //
  {
    name: "Mochi",
    breed: "Mèo Tây",
    color: "Xám",
    age: "Nhỡ",
    weight: "2.5",
    gender: "Đực",
    id: "M4532",
    a: "t",
    b: "f",
    c: "u",
    d: "u",
    e: "t",
    f: "f",
    g: "t",
    h: "u",
    des: "Bị nấm và viêm phổi. Hiện đã khỏi.",
    url: thumbnail8, //Ảnh thumbnail
    current: 2, //Trang hiển thị
    type: "cat"
  },
  {
    name: "Lucky",
    breed: "Chó Ta",
    color: "Đen Trắng",
    age: "Nhí",
    weight: "3",
    gender: "Đực",
    id: "L4581",
    a: "f",
    b: "t",
    c: "u",
    d: "t",
    e: "f",
    f: "u",
    g: "t",
    h: "t",
    des: "Bị thương cong gập 1 chân sau, ve rận bị bỏ ở xã Bàu Lâm, Huyện Xuyên Mộc, Vũng Tàu.",
    url: thumbnail7, //Ảnh thumbnail
    current: 2, //Trang hiển thị
    type: "dog"
  },
  {
    name: "Dưa",
    breed: "Mèo Tây",
    color: "Xám",
    age: "Nhí",
    weight: "3",
    gender: "Đực",
    id: "D4582",
    a: "u",
    b: "t",
    c: "f",
    d: "f",
    e: "u",
    f: "t",
    g: "u",
    h: "f",
    des: "Bé đi lang thang, ăn ót, phân hơi nát. Còn nhát.",
    url: thumbnail6, //Ảnh thumbnail
    current: 2, //Trang hiển thị
    type: "cat"
  },
  {
    name: "Bông",
    breed: "Mèo Lai",
    color: "Trắng",
    age: "Nhỡ",
    weight: "2",
    gender: "Cái",
    id: "B4585",
    a: "u",
    b: "f",
    c: "t",
    d: "u",
    e: "t",
    f: "f",
    g: "u",
    h: "t",
    des: "Bé đi lang thang, gầy đói, đau mắt ở khu vực Bác Khoa không ai nhận.",
    url: thumbnail5, //Ảnh thumbnail
    current: 2, //Trang hiển thị
    type: "cat"
  },
  {
    name: "Quýt",
    breed: "Mèo ta",
    color: "Vàng",
    age: "Nhí",
    weight: "0.8",
    gender: "Đực",
    id: "Q4592",
    a: "t",
    b: "u",
    c: "f",
    d: "u",
    e: "f",
    f: "t",
    g: "u",
    h: "t",
    des: "Bé mèo lang thang ở sảnh chung cư, chơi với trẻ con nhưng ko ai nuôi.",
    url: thumbnail4, //Ảnh thumbnail
    current: 2, //Trang hiển thị
    type: "cat"
  },
  {
    name: "Michan",
    breed: "Poodle",
    color: "Trắng",
    age: "Thanh niên",
    weight: "5",
    gender: "Đực",
    id: "M4593",
    a: "u",
    b: "u",
    c: "t",
    d: "t",
    e: "u",
    f: "t",
    g: "t",
    h: "f",
    des: "Bé cún lang thang ở nghĩa trang.",
    url: thumbnail3, //Ảnh thumbnail
    current: 2, //Trang hiển thị
    type: "dog"
  },
  {
    name: "Milo",
    breed: "Mèo Tây",
    color: "Đen Trắng",
    age: "Nhỡ",
    weight: "3",
    gender: "Đực",
    id: "M4560",
    a: "f",
    b: "u",
    c: "t",
    d: "u",
    e: "t",
    f: "f",
    g: "t",
    h: "u",
    des: "Bé đi lang thang chân phải đau, mắt trái đục giác mạc. Milo, đực, 5-6 tháng, đã tiêm một mũi. Một mắt bị nhòe. Hơi nhát, ăn tham.",
    url: thumbnail2, //Ảnh thumbnail
    current: 2, //Trang hiển thị
    type: "cat"
  },
  {
    name: "Pepsi",
    breed: "Mèo Ta",
    color: "Trắng Vàng",
    age: "Nhí",
    weight: "1",
    gender: "Đực",
    id: "P4597",
    a: "t",
    b: "f",
    c: "u",
    d: "u",
    e: "u",
    f: "t",
    g: "f",
    h: "t",
    des: "Một bạn nhặt được ngoài đường rồi bỏ lại ở phòng khám",
    url: thumbnail1, //Ảnh thumbnail
    current: 2, //Trang hiển thị
    type: "cat"
  },
  //
  {
    name: "Bông",
    breed: "Mèo Lai",
    color: "Trắng",
    age: "Nhỡ",
    weight: "2",
    gender: "Cái",
    id: "B4585",
    a: "u",
    b: "f",
    c: "t",
    d: "u",
    e: "t",
    f: "u",
    g: "f",
    h: "t",
    des: "Bé đi lang thang, gầy đói, đau mắt ở khu vực Bác Khoa không ai nhận.",
    url: thumbnail5, //Ảnh thumbnail
    current: 3, //Trang hiển thị
    type: "cat"
},
{
    name: "Dưa",
    breed: "Mèo Tây",
    color: "Xám",
    age: "Nhí",
    weight: "3",
    gender: "Đực",
    id: "D4582",
    a: "f",
    b: "u",
    c: "u",
    d: "t",
    e: "u",
    f: "t",
    g: "u",
    h: "f",
    des: "Bé đi lang thang, ăn ót, phân hơi nát. Còn nhát.",
    url: thumbnail6, //Ảnh thumbnail
    current: 3, //Trang hiển thị
    type: "cat"
},
{
    name: "Mochi",
    breed: "Mèo Tây",
    color: "Xám",
    age: "Nhỡ",
    weight: "2.5",
    gender: "Đực",
    id: "M4532",
    a: "t",
    b: "u",
    c: "f",
    d: "u",
    e: "t",
    f: "u",
    g: "t",
    h: "f",
    des: "Bị nấm và viêm phổi. Hiện đã khỏi.",
    url: thumbnail8, //Ảnh thumbnail
    current: 3, //Trang hiển thị
    type: "cat"
},
{
    name: "Lucky",
    breed: "Chó Ta",
    color: "Đen Trắng",
    age: "Nhí",
    weight: "3",
    gender: "Đực",
    id: "L4581",
    a: "u",
    b: "u",
    c: "t",
    d: "f",
    e: "t",
    f: "u",
    g: "u",
    h: "t",
    des: "Bị thương cong gập 1 chân sau, ve rận bị bỏ ở xã Bàu Lâm, Huyện Xuyên Mộc, Vũng Tàu.",
    url: thumbnail7, //Ảnh thumbnail
    current: 3, //Trang hiển thị
    type: "dog"
},
{
    name: "Pepsi",
    breed: "Mèo Ta",
    color: "Trắng Vàng",
    age: "Nhí",
    weight: "1",
    gender: "Đực",
    id: "P4597",
    a: "u",
    b: "t",
    c: "f",
    d: "u",
    e: "t",
    f: "f",
    g: "t",
    h: "u",
    des: "Một bạn nhặt được ngoài đường rồi bỏ lại ở phòng khám",
    url: thumbnail1, //Ảnh thumbnail
    current: 3, //Trang hiển thị
    type: "cat"
},
{
    name: "Milo",
    breed: "Mèo Tây",
    color: "Đen Trắng",
    age: "Nhỡ",
    weight: "3",
    gender: "Đực",
    id: "M4560",
    a: "f",
    b: "u",
    c: "u",
    d: "t",
    e: "f",
    f: "t",
    g: "u",
    h: "t",
    des: "Bé đi lang thang chân phải đau, mắt trái đục giác mạc. Milo, đực, 5-6 tháng, đã tiêm một mũi. Một mắt bị nhòe. Hơi nhát, ăn tham.",
    url: thumbnail2, //Ảnh thumbnail
    current: 3, //Trang hiển thị
    type: "cat"
},
{
    name: "Michan",
    breed: "Poodle",
    color: "Trắng",
    age: "Thanh niên",
    weight: "5",
    gender: "Đực",
    id: "M4593",
    a: "u",
    b: "f",
    c: "u",
    d: "t",
    e: "u",
    f: "t",
    g: "f",
    h: "t",
    des: "Bé cún lang thang ở nghĩa trang.",
    url: thumbnail3, //Ảnh thumbnail
    current: 3, //Trang hiển thị
    type: "dog"
},

  //
  {
    name: "Quýt",
    breed: "Mèo ta",
    color: "Vàng",
    age: "Nhí",
    weight: "0.8",
    gender: "Đực",
    id: "Q4592",
    a: "u",
    b: "t",
    c: "f",
    d: "u",
    e: "t",
    f: "f",
    g: "u",
    h: "t",
    des: "Bé mèo lang thang ở sảnh chung cư, chơi với trẻ con nhưng ko ai nuôi.",
    url: thumbnail4, //Ảnh thumbnail
    current: 3, //Trang hiển thị
    type: "cat"
},
{
    name: "Ki",
    breed: "Chó Ta",
    color: "Trắng Nâu",
    age: "Thanh niên",
    weight: "20",
    gender: "Cái",
    id: "K4624",
    a: "u",
    b: "f",
    c: "t",
    d: "t",
    e: "u",
    f: "f",
    g: "u",
    h: "t",
    des: "Ki khoảng 3 tuổi, là con gái, khoảng 20kg, đã tiêm phòng dại. To xác nhưng hay e thẹn. Ban đầu nhát nhưng cho ăn sẽ nhanh quen, thích được xoa đầu gãi bụng. Đam mê ăn uống.",
    url: thumbnail9, //Ảnh thumbnail
    current: 3, //Trang hiển thị
    type: "dog"
},
{
    name: "Ruby",
    breed: "Chó Tây",
    color: "Đen",
    age: "Nhỡ",
    weight: "3",
    gender: "Cái",
    id: "R4558",
    a: "f",
    b: "u",
    c: "t",
    d: "u",
    e: "t",
    f: "u",
    g: "f",
    h: "t",
    des: "Thiếu canxi, biến dạng xương 1 chân bị bỏ ở Ngọc Hà. Nhóm đã chữa khỏi cho bé.",
    url: thumbnail10, //Ảnh thumbnail
    current: 3, //Trang hiển thị
    type: "dog"
},
{
    name: "Mây",
    breed: "Chó Lai",
    color: "Trắng",
    age: "Nhỡ",
    weight: "10",
    gender: "Cái",
    id: "M4611",
    a: "u",
    b: "t",
    c: "f",
    d: "u",
    e: "t",
    f: "u",
    g: "t",
    h: "u",
    des: "Chủ bỏ vì nấm.",
    url: thumbnail11, //Ảnh thumbnail
    current: 3, //Trang hiển thị
    type: "dog"
},
{
    name: "Lily",
    breed: "Chó ta",
    color: "Nâu",
    age: "Nhỡ",
    weight: "15",
    gender: "Cái",
    id: "L4623",
    a: "t",
    b: "f",
    c: "u",
    d: "u",
    e: "t",
    f: "f",
    g: "t",
    h: "u",
    des: "Thân thiện, quấn người, ham ăn ham vui. Thích được bế và ôm.",
    url: thumbnail12, //Ảnh thumbnail
    current: 3, //Trang hiển thị
    type: "dog"
},

];

const news = [
  {
    title: "bán lịch gây quỹ hanoi petadoption 2025...",
    title_english: "Selling 2025 Hanoi Pet Adoption Charity Calendars...",
    author: "Hanoi Pet Adoption (English only)",
    date: "23/11/2024",
    des: "Mỗi chú chó, mèo mà Hanoi Pet Adoption cứu hộ đều mang trong mình một câu chuyện đầy xúc động, một khát khao được yêu thương và có một mái ấm...",
    des_english: "Each dog or cat rescued by Hanoi Pet Adoption carries a touching story, a longing for love and a home. By purchasing a calendar, you're not just receiving adorable photos, but also offering hope for these small lives...",
    url: newThumbnail1,
    category: ""
  },
  {
    title: "Chú chó Corgi sinh ra với 1 mắt và 2 mũi sống sót kỳ diệu",
    title_english: "A Corgi Born with One Eye and Two Noses Has an Amazing Survival Story",
    author: "Hanoi Pet Adoption (English only)",
    date: "23/09/2020",
    des: "Dị tật bẩm sinh di truyền đã khiến chú chó Corgi này sinh ra với ngoại hình khác biệt. Ngoài những đặc điểm trên mặt như chỉ có 1 mắt hay 2 mũi thì chú chó còn có 2 đốt sống hợp nhất...",
    des_english: "A congenital genetic defect caused this Corgi to be born with a unique appearance. Along with features such as only one eye or two noses, the dog also has two fused vertebrae...",
    url: newThumbnail2,
    category: "1",
  },
  {
    title: "Chú chó Shiba Inu nổi tiếng khắp thế giới vì trình 'phá game'",
    title_english: "The Shiba Inu Famous Worldwide for Its 'Game Breaking' Skills",
    author: "Hanoi Pet Adoption (English only)",
    date: "23/09/2020",
    des: "Chụp ảnh nhóm cùng bạn bè là một cách lưu lại kỷ niệm và những khoảnh khắc đáng nhớ. Tuy nhiên, trong hội bạn thân nào cũng có ai đó chuyên gia 'phá game'...",
    des_english: "Group photos with friends are a way to capture memories and special moments. However, every group has that one person who specializes in 'breaking the game'...",
    url: newThumbnail3,
    category: "1",
  },
  {
    title: "'Chú mèo buồn bã nhất thế giới' ngày ấy - bây giờ",
    title_english: "'The Saddest Cat in the World' Then and Now",
    author: "Hanoi Pet Adoption (English only)",
    date: "23/09/2020",
    des: "Đây là chú mèo có tên Mister Bruce Willis – một 'chiến binh' thực thụ. Mister Willis từng được gọi là 'con mèo buồn nhất thế giới' khi phải đi lang thang khắp các nẻo đường...",
    des_english: "This is Mister Bruce Willis, a true 'warrior'. Mister Willis was once known as 'the saddest cat in the world' as it wandered through streets alone...",
    url: newThumbnail4,
  },
  {
    title: "Cứu hộ bé cún ghẻ bị bỏ rơi ở Phú Thọ",
    title_english: "Rescuing a Flea-Infected Puppy Abandoned in Phu Tho",
    author: "HanoiPetAdoption",
    date: "20/02/2020",
    des: "Ngày ý tưởng ko cứu được nó. Nửa đêm nhờ tnv chạy ô tô lên Phú Thọ bắt chó vì sợ nó lang thang ngoài đường chết lạnh...",
    des_english: "At first, we thought we couldn't save it. In the middle of the night, we asked a volunteer to drive to Phu Tho to rescue the dog, fearing it would die alone in the cold streets...",
    url: newThumbnail5,
  },
  {
    title: "Mèo trắng bị bỏ rơi",
    title_english: "The Abandoned White Cat",
    author: "nch180297@gmail.com",
    date: "03/12/2019",
    des: "Người ta thường bỏ những chú tiểu hổ con vào thùng cạc-tông và lén để ở những nhà kho, bãi đất trống...",
    des_english: "People often leave small tiger cubs in cardboard boxes and secretly drop them off in warehouses or vacant lots...",
    url: newThumbnail6,
  },
  {
    title: "Chó con lang thang bãi rác",
    title_english: "Puppy Wandering in a Trash Dump",
    author: "nch180297@gmail.com",
    date: "29/11/2019",
    des: "Chó con lang thang bãi rác",
    des_english: "A puppy wandering in a trash dump",
    url: newThumbnail7,
  },
  {
    title: "Mèo con ngơ ngác tìm mẹ",
    title_english: "Kitten Lost and Searching for Its Mother",
    author: "nch180297@gmail.com",
    date: "29/11/2019",
    des: "Mèo con ngơ ngác tìm mẹ",
    des_english: "A kitten lost and searching for its mother",
    url: newThumbnail8,
  },
  {
    title: "Gặp Gỡ Chú Mèo Gây Bão Cộng Đồng Mạng Với Cánh Tay Nghịch Ngợm Của Mình",
    title_english: "Meet the Cat Who Went Viral for Its Mischievous Hand",
    author: "Minh Chau",
    date: "18/05/2020",
    des: "Chú mèo tên Carrot đã gây bão mạng xã hội khi chú thò bàn tay nghịch ngợm vào tủ lạnh để “ăn trộm” đồ ăn...",
    des_english: "Carrot the cat went viral on social media when it mischievously reached its hand into the refrigerator to 'steal' food...",
    url: newThumbnail9,
  },
  {
    title: "Những Boss Mèo Cùng Chiếc Đệm Đáng Yêu Của Chúng",
    title_english: "Cat Bosses with Their Cute Cushions",
    author: "Minh Chau",
    date: "18/05/2020",
    des: "Có rất nhiều trò giải trí thú vị trong thời gian giãn cách xã hội: một số người sẽ dành thời gian xem Netflix, một số người lại dùng thời gian đó để theo đuổi những sở thích của họ...",
    des_english: "During the social distancing period, many people found interesting ways to pass the time: some watched Netflix, while others pursued their hobbies or crafted new things...",
    url: newThumbnail10,
  },
  {
    title: "Chú Mèo Hoang May Mắn Tìm Được Mái Ấm Và Sự Thay Đổi Đáng Kinh Ngạc",
    title_english: "A Lucky Stray Cat Finds a Home and an Amazing Transformation",
    author: "Minh Chau",
    date: "17/05/2020",
    des: "Câu chuyện của những chú mèo hoang nghe như những câu chuyện cổ tích ngoài đời thực. Chúng bị bỏ rơi và phải chật vật tìm cách sinh tồn...",
    des_english: "The story of stray cats is like a real-life fairy tale. They were abandoned and had to struggle to survive on the streets...",
    url: newThumbnail11,
  },
  {
    title: "Chú Chó Mắc Bệnh Ghẻ Demodex Và Hành Trình Phục Hồi Diệu Kì",
    title_english: "A Dog with Demodex Mange and Its Miraculous Recovery Journey",
    author: "Minh Chau",
    date: "04/05/2020",
    des: "Lainey bị bệnh ghẻ demodex và nhiễm trùng thứ phát. Sau khi được phát hiện, Lainey đã phải trải qua những liệu trình điều trị rất mạnh...",
    des_english: "Lainey suffered from Demodex mange and secondary infections. After being discovered, Lainey underwent intensive treatments...",
    url: newThumbnail12,
  },
  {
    title: "Mun liệt 4 chân bị bỏ rơi ở bãi xe",
    title_english: "Mun, Paralyzed in All Four Legs, Abandoned in a Parking Lot",
    author: "HanoiPetAdoption",
    date: "19/02/2020",
    des: "Chó mẹ nuôi ở bãi giữ xe đẻ được 5 bé cún con, rồi một ngày chó mẹ bị xe ô tô cán chết...",
    des_english: "A mother dog gave birth to five puppies in a parking lot, but one day, the mother was hit by a car...",
    url: newThumbnail13,
  }
];


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
