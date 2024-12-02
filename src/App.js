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

const list = [
  {
    id: 1,
    name: "Pepsi",
    gender: "Đực",
    age: "Trưởng thành",
    vaccined: true,
    url: thumbnail1, //Ảnh thumbnail
    current: 1, //Trang hiển thị
  },
  {
    id: 2,
    name: "Milo",
    gender: "Đực",
    age: "Trưởng thành",
    vaccined: true,
    url: thumbnail2,
    current: 1,
  },
  {
    id: 3,
    name: "Mita",
    gender: "Đực",
    age: "Trưởng thành",
    vaccined: true,
    url: thumbnail3,
    current: 1,
  },
  {
    id: 4,
    name: "Quýt",
    gender: "Đực",
    age: "Trẻ",
    vaccined: false,
    url: thumbnail4,
    current: 1,
  },
  {
    id: 5,
    name: "Bông",
    gender: "Cái",
    age: "Trưởng thành",
    vaccined: false,
    url: thumbnail5,
    current: 1,
  },
  {
    id: 6,
    name: "Dưa",
    gender: "Đực",
    age: "Trẻ",
    vaccined: false,
    url: thumbnail6,
    current: 1,
  },
  {
    id: 7,
    name: "Lucky",
    gender: "Đực",
    age: "Trẻ",
    vaccined: false,
    url: thumbnail7,
    current: 1,
  },
  {
    id: 8,
    name: "Mochi",
    gender: "Cái",
    age: "Trưởng thành",
    vaccined: false,
    url: thumbnail8,
    current: 1,
  },
  {
    id: 9,
    name: "Ki",
    gender: "Cái",
    age: "Trưởng thành",
    vaccined: true,
    url: thumbnail9,
    current: 1,
  },
  {
    id: 10,
    name: "Ruby",
    gender: "Cái",
    age: "Trẻ",
    vaccined: false,
    url: thumbnail10,
    current: 1,
  },
  {
    id: 11,
    name: "Mây",
    gender: "Cái",
    age: "Trẻ",
    vaccined: false,
    url: thumbnail11,
    current: 1,
  },
  {
    id: 12,
    name: "Lily",
    gender: "Cái",
    age: "Trẻ",
    vaccined: false,
    url: thumbnail12,
    current: 1,
  },
  {
    id: 13,
    name: "Mita",
    gender: "Đực",
    age: "Trưởng thành",
    vaccined: true,
    url: thumbnail3,
    current: 2, //Trang hiển thị
  },
  {
    id: 14,
    name: "Dưa",
    gender: "Đực",
    age: "Trẻ",
    vaccined: false,
    url: thumbnail6,
    current: 2,
  },
  {
    id: 15,
    name: "Pepsi",
    gender: "Đực",
    age: "Trưởng thành",
    vaccined: true,
    url: thumbnail1,
    current: 2,
  },
  {
    id: 16,
    name: "Quýt",
    gender: "Đực",
    age: "Trẻ",
    vaccined: false,
    url: thumbnail4,
    current: 2,
  },
  {
    id: 17,
    name: "Ki",
    gender: "Cái",
    age: "Trưởng thành",
    vaccined: true,
    url: thumbnail9,
    current: 2,
  },
  {
    id: 18,
    name: "Milo",
    gender: "Đực",
    age: "Trưởng thành",
    vaccined: true,
    url: thumbnail2,
    current: 2,
  },
  {
    id: 19,
    name: "Ruby",
    gender: "Cái",
    age: "Trẻ",
    vaccined: false,
    url: thumbnail10,
    current: 2,
  },
  {
    id: 20,
    name: "Lucky",
    gender: "Đực",
    age: "Trẻ",
    vaccined: false,
    url: thumbnail7,
    current: 2,
  },
  {
    id: 21,
    name: "Bông",
    gender: "Cái",
    age: "Trưởng thành",
    vaccined: false,
    url: thumbnail5,
    current: 2,
  },
  {
    id: 22,
    name: "Mochi",
    gender: "Cái",
    age: "Trưởng thành",
    vaccined: false,
    url: thumbnail8,
    current: 2,
  },
  {
    id: 23,
    name: "Lily",
    gender: "Cái",
    age: "Trẻ",
    vaccined: false,
    url: thumbnail12,
    current: 2,
  },
  {
    id: 24,
    name: "Mây",
    gender: "Cái",
    age: "Trẻ",
    vaccined: false,
    url: thumbnail11,
    current: 2,
  },
  {
    id: 25,
    name: "Lily",
    gender: "Cái",
    age: "Trẻ",
    vaccined: false,
    url: thumbnail12,
    current: 3, //Trang hiển thị
  },
  {
    id: 26,
    name: "Mita",
    gender: "Đực",
    age: "Trưởng thành",
    vaccined: true,
    url: thumbnail3,
    current: 3,
  },
  {
    id: 27,
    name: "Lucky",
    gender: "Đực",
    age: "Trẻ",
    vaccined: false,
    url: thumbnail7,
    current: 3,
  },
  {
    id: 28,
    name: "Milo",
    gender: "Đực",
    age: "Trưởng thành",
    vaccined: true,
    url: thumbnail2,
    current: 3,
  },
  {
    id: 29,
    name: "Quýt",
    gender: "Đực",
    age: "Trẻ",
    vaccined: false,
    url: thumbnail4,
    current: 3,
  },
  {
    id: 30,
    name: "Dưa",
    gender: "Đực",
    age: "Trẻ",
    vaccined: false,
    url: thumbnail6,
    current: 3,
  },
  {
    id: 31,
    name: "Mây",
    gender: "Cái",
    age: "Trẻ",
    vaccined: false,
    url: thumbnail11,
    current: 3,
  },
  {
    id: 32,
    name: "Ki",
    gender: "Cái",
    age: "Trưởng thành",
    vaccined: true,
    url: thumbnail9,
    current: 3,
  },
  {
    id: 33,
    name: "Mochi",
    gender: "Cái",
    age: "Trưởng thành",
    vaccined: false,
    url: thumbnail8,
    current: 3,
  },
  {
    id: 34,
    name: "Ruby",
    gender: "Cái",
    age: "Trẻ",
    vaccined: false,
    url: thumbnail10,
    current: 3,
  },
  {
    id: 35,
    name: "Bông",
    gender: "Cái",
    age: "Trưởng thành",
    vaccined: false,
    url: thumbnail5,
    current: 3,
  },
  {
    id: 36,
    name: "Pepsi",
    gender: "Đực",
    age: "Trưởng thành",
    vaccined: true,
    url: thumbnail1, 
    current: 3,
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
