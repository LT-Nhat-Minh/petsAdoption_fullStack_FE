import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.scss";
import AdoptionOnline from "../Adopt/components/AdoptionOnline";
import FindPetTable from "../Adopt/components/FindPetTable";

function AllPet(props) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="all_pet">
      <div className="banner">
        <div className="container">
          <h1 className="title">Tất Cả Các Bé</h1>
          <p className="breadcrumbs">
            <span className="root" onClick={() => navigate("/")}>
              {" "}
              Trang Chủ{" "}
            </span>
            {">"}
            <span className="root" onClick={() => navigate("/nhan-nuoi")}>
              {" "}
              Nhận Nuôi{" "}
            </span>
            {">"}
            <span className="current"> Tất Cả Các Bé </span>
          </p>
        </div>
      </div>
      <FindPetTable list={props.list} pageSize={12} />
      <AdoptionOnline />
    </div>
  );
}

export default AllPet;
