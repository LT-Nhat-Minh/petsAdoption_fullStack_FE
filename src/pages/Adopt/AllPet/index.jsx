import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.scss";
import FindPetTable from "../components/FindPetTable";
import AdoptionOnline from "../components/AdoptionOnline";
import { useSelector } from "react-redux";

function AllPet(props) {
  const navigate = useNavigate();
  const isEnglish = useSelector((state) => state.language.isEnglish);
  return (
    <div className="all_pet">
      <div className="banner">
        <div className="container">
          <h1 className="title">{isEnglish ? "All Pets" : "Tất Cả Các Bé"}</h1>
          <p className="breadcrumbs">
            <span className="root" onClick={() => navigate("/")}>
              {isEnglish ? "Home" : "Trang Chủ"}
            </span>
            {">"}
            <span className="root" onClick={() => navigate("/nhan-nuoi")}>
              {isEnglish ? "Adopt" : "Nhận Nuôi"}
            </span>
            {">"}
            <span className="current">
              {isEnglish ? "All Pets" : "Tất Cả Các Bé"}
            </span>
          </p>
        </div>
      </div>

      <FindPetTable isEnglish={isEnglish} list={props.list} pageSize={12} />
      <AdoptionOnline isEnglish={isEnglish} />
    </div>
  );
}

export default AllPet;
