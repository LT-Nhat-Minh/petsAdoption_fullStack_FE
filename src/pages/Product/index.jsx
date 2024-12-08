import React from "react";
import "../Product/style.scss";
import { useNavigate } from "react-router-dom";
import ToSupport from "../../components/ToSupport";
import ite1 from "../../asset/Icon/ite1.jpg";
import ite2 from "../../asset/Icon/ite2.jpg";
import ite3 from "../../asset/Icon/ite3.jpg";
import ite4 from "../../asset/Icon/ite4.jpg";

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
        <div className="grid_ite">
          <img src={ite1} alt="" />
          <p>
            {props.isEnglish
              ? "Tote Bag Designed by Hpa for Charity Sale"
              : "Túi Tote Do Hpa Thiết Kế Bán Gây Quỹ"}
          </p>
          <hr className="hr1" />
          <strong>120,000 VNĐ</strong>
        </div>
        <div className="grid_ite">
          <img src={ite2} alt="" />
          <p>
            {props.isEnglish
              ? "Tote Bag Designed by Hpa for Charity Sale"
              : "Túi Tote Do Hpa Thiết Kế Bán Gây Quỹ"}
          </p>
          <hr className="hr1" />
          <strong>150,000 VNĐ</strong>
        </div>
        <div className="grid_ite">
          <img src={ite3} alt="" />
          <p>
            {props.isEnglish
              ? "Tote Bag Designed by Hpa for Charity Sale"
              : "Túi Tote Do Hpa Thiết Kế Bán Gây Quỹ"}
          </p>
          <hr className="hr1" />
          <strong>100,000 VNĐ</strong>
        </div>
        <div className="grid_ite">
          <img src={ite4} alt="" />
          <p>
            {props.isEnglish
              ? "Dog & Cat Keychain for Hpa Charity"
              : "Móc khoá chó mèo gây quỹ hpa"}
          </p>
          <hr className="hr1" />
          <strong>40,000 VNĐ</strong>
        </div>
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
