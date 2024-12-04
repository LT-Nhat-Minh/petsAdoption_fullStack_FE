import React from "react";
import "../Product/style.scss";
import ToSupport from "../../components/ToSupport";
import { useNavigate } from "react-router-dom";
import product1 from "../../asset/Product/e5acaa6d-13e9-4770-a1c3-c6071a0c77a6.jpg";

function Product(props) {
  const navigate = useNavigate();
  return (
    <div className="product_content">
      <div className="banner">
        <div className="container">
          <h1 className="title">{props.isEnglish ? "Products" : "Sản Phẩm"}</h1>
          <p className="breadcrumbs">
            <span className="root" onClick={() => navigate("/")}>
              {props.isEnglish ? "Home" : "Trang Chủ"}
            </span>{" "}
            {">"}{" "}
            <span className="current">
              {props.isEnglish ? "Product" : "Sản Phẩm"}
            </span>
          </p>
        </div>
      </div>

      <div className="muahang">
        <button className="fw white inbox up">
          {props.isEnglish ? "Inbox to Buy" : "inbox mua hàng"}
        </button>
        <button className="fw white shoppe up">
          {props.isEnglish ? "Buy on Shopee" : "mua hàng shoppe"}
        </button>
      </div>

      <div className="grid1">
        {[...Array(4)].map((_, index) => (
          <div className="grid_ite" key={index}>
            <img src={product1} alt="" />
            <p>
              {props.isEnglish
                ? "Tote Bag Designed by Hpa for Fundraising"
                : "Túi Tote Do Hpa Thiết Kế Bán Gây Quỹ"}
            </p>
            <hr className="hr1" />
            <strong>120,000 VNĐ</strong>
          </div>
        ))}
      </div>

      <ul className="productslider fw">
        <li>{"<"}</li>
        <li className="prli">1</li>
        <li>{">"}</li>
      </ul>

      <ToSupport isEnglish={props.isEnglish} />
    </div>
  );
}

export default Product;
