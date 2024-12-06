import React from "react";
import "../Product/style.scss";
import ToSupport from "../../components/ToSupport";
import ite1 from "../../asset/Icon/ite1.jpg";
import ite2 from "../../asset/Icon/ite2.jpg";
import ite3 from "../../asset/Icon/ite3.jpg";
import ite4 from "../../asset/Icon/ite4.jpg";

function Product() {
  return (
    <div className="product_content">
      <div className="banner">
        <div className="title">
          <h1 className="title1 fw white">Sản Phẩm</h1>
          <a className="a_tag" href="/">
            <span className="trang_chu white">Trang chủ</span>
            <span className="ung_ho"> {">"} Sản Phẩm</span>
          </a>
        </div>
      </div>
      <div className="muahang">
        <button className="fw white inbox up">inbox mua hàng</button>
        <button className="fw white shoppe up">mua hàng shoppe</button>
      </div>
      <div className="grid1">
        <div className="grid_ite">
          <img src={ite1} alt="" />
          <p>Túi Tote Do Hpa Thiết Kế Bán Gây Quỹ</p>
          <hr className="hr1" />
          <strong>120,000 VNĐ</strong>
        </div>
        <div className="grid_ite">
          <img src={ite2} alt="" />
          <p>Túi Tote Do Hpa Thiết Kế Bán Gây Quỹ</p>
          <hr className="hr1" />
          <strong>150,000 VNĐ</strong>
        </div>
        <div className="grid_ite">
          <img src={ite3} alt="" />
          <p>Túi Tote Do Hpa Thiết Kế Bán Gây Quỹ</p>
          <hr className="hr1" />
          <strong>100,000 VNĐ</strong>
        </div>
        <div className="grid_ite">
          <img src={ite4} alt="" />
          <p>móc khoá chó mèo gây quỹ hpa</p>
          <hr className="hr1" />
          <strong>40,000 VNĐ</strong>
        </div>
      </div>
      <ul className="productslider fw">
        <li>{"<"}</li>
        <li className="prli">1</li>
        <li>{">"}</li>
      </ul>
      <ToSupport />
    </div>
  );
}


export default Product;
