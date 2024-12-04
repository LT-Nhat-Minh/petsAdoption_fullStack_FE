import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.scss";
import FindPetTable from "../components/FindPetTable";
import AdoptionOnline from "../components/AdoptionOnline";

function AllPet(props) {
  const navigate = useNavigate();
  return (
    <div className="all_pet">
      <div className="banner">
        <div className="container">
          <h1 className="title">
            {props.isEnglish ? "All Pets" : "Tất Cả Các Bé"}
          </h1>
          <p className="breadcrumbs">
            <span className="root" onClick={() => navigate("/")}>
              {props.isEnglish ? "Home" : "Trang Chủ"}
            </span>
            {">"}
            <span className="root" onClick={() => navigate("/nhan-nuoi")}>
              {props.isEnglish ? "Adopt" : "Nhận Nuôi"}
            </span>
            {">"}
            <span className="current">
              {props.isEnglish ? "All Pets" : "Tất Cả Các Bé"}
            </span>
          </p>
        </div>
      </div>

      <FindPetTable
        isEnglish={props.isEnglish}
        list={props.list}
        pageSize={12}
      />
      <AdoptionOnline isEnglish={props.isEnglish} />
    </div>
  );
}

export default AllPet;
