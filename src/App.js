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
import PetInfo from "./pages/Adopt/PetInfo";
import AllPet from "./pages/AllPet";

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
    url: thumbnail2, //Ảnh thumbnail
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
          element: <News list={list} isEnglish={isEnglish} />,
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
