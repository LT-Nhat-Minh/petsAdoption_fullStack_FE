import React from "react";
import "../Product/style.scss";
import ToSupport from "../../components/ToSupport";

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
        {[...Array(4)].map((_, index) => (
          <div className="grid_ite" key={index}>
            <img src="https://www.hanoipetadoption.com/admin/user-content/Shop/e5acaa6d-13e9-4770-a1c3-c6071a0c77a6.jpg" alt="" />
            <p>Túi Tote Do Hpa Thiết Kế Bán Gây Quỹ</p>
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
      <ToSupport />
    </div>
  );
}

export default Product;
