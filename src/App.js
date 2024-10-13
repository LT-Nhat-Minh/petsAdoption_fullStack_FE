import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Adopt from "./pages/Adopt";
import Contact from "./pages/Contact";
import Donation from "./pages/Donation";
import HomePage from "./pages/Home";
import Product from "./pages/Product";

const Layout = () => {
  return(
    <div className="layout-app"><Header />
    <Outlet />
    <Footer /></div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children:[
      {index: true, element: <HomePage />},
      {
        path: "/nhan-nuoi",
        element: <Adopt />,
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
        path: "/donation",
        element: <Donation />,
      },

    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
