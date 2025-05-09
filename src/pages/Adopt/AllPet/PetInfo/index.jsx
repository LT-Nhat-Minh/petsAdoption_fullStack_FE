import { CheckOutlined, QuestionOutlined } from "@ant-design/icons";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.scss";
import ToSupport from "../../../../components/ToSupport";
import { callFetchPets } from "../../../../services/api";

function PetInfo(props) {
  const { id } = useParams();
  const [petData, setPetData] = useState({});
  const navigate = useNavigate();

  const item = useMemo(() => {
    return props.list.find((pet) => pet.id === "M4560");
  }, [id, props.list]);

  useEffect(() => {
    const fetchPetByID = async () => {
      const res = await callFetchPets(id);
      if (res && res.data) {
        const rawList = res.data.data;
        setPetData(rawList);
      }
    };
    fetchPetByID();
    console.log(petData);
  }, [petData]);

  return (
    <div className="pet_info">
      <div className="banner">
        <div className="container">
          <h1 className="title">
            {props.isEnglish ? "Pet Information" : "Thông Tin Từng Boss"}
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
            <span
              className="root"
              onClick={() => navigate("/nhan-nuoi/tat-ca-cac-be")}
            >
              {props.isEnglish ? "All Pets" : "Tất Cả Các Bé"}
            </span>
            {">"}
            <span className="current">{petData._id}</span>
          </p>
        </div>
      </div>
      <div className="content">
        <div className="info">
          <div className="photo">
            <img
              src={
                `${process.env.REACT_APP_BACKEND_PUBLIC_URL}` +
                "/images/" +
                petData.image
              }
              alt=""
            />
          </div>
          <div className="descriptions">
            <h1>{petData.name}</h1>
            <p>
              <strong>{props.isEnglish ? "Breed:" : "Giống:"}</strong>{" "}
              {petData.breed}
            </p>
            <hr />
            <p>
              <strong>{props.isEnglish ? "Color:" : "Màu sắc:"}</strong>{" "}
              {petData.color}
            </p>
            <hr />
            <p>
              <strong>{props.isEnglish ? "Age:" : "Tuổi:"}</strong>{" "}
              {petData.age}
            </p>
            <hr />
            <p>
              <strong>{props.isEnglish ? "Weight:" : "Cân nặng:"}</strong>{" "}
              {petData.weight}
            </p>
            <hr />
            <p>
              <strong>{props.isEnglish ? "Gender:" : "Giới tính:"}</strong>{" "}
              {petData.gender}
            </p>
            <hr />
            <p>
              <strong>{props.isEnglish ? "ID:" : "Mã:"}</strong> {petData._id}
            </p>
            <div className="button">
              <button>
                {props.isEnglish ? "VIRTUAL ADOPTION" : "NHẬN NUÔI ẢO"}
              </button>
              <button>
                {props.isEnglish
                  ? "DO YOU HAVE A QUESTION?"
                  : "BẠN CÓ CÂU HỎI?"}
              </button>
            </div>
          </div>
        </div>
        <div className="more_info">
          <h1>{props.isEnglish ? "Information" : "Thông Tin"}</h1>
          <hr />
          <div>
            <div>
              {petData.neutered === petData ? (
                <CheckOutlined
                  style={{
                    backgroundColor: "#28a745",
                    borderRadius: "50%",
                    padding: "5px",
                    color: "white",
                    marginRight: "5px",
                  }}
                />
              ) : (
                <QuestionOutlined
                  style={{
                    backgroundColor: "#ffc107",
                    borderRadius: "50%",
                    padding: "5px",
                    color: "white",
                    marginRight: "5px",
                  }}
                />
              )}
              {props.isEnglish ? "Sterilized" : "Triệt sản"}
            </div>
            <div>
              {petData.friendly_with_human === true ? (
                <CheckOutlined
                  style={{
                    backgroundColor: "#28a745",
                    borderRadius: "50%",
                    padding: "5px",
                    color: "white",
                    marginRight: "5px",
                  }}
                />
              ) : (
                <QuestionOutlined
                  style={{
                    backgroundColor: "#ffc107",
                    borderRadius: "50%",
                    padding: "5px",
                    color: "white",
                    marginRight: "5px",
                  }}
                />
              )}
              {props.isEnglish
                ? "Friendly with people"
                : "Thân thiện với người"}
            </div>
            <div>
              {petData.special_diet === true ? (
                <CheckOutlined
                  style={{
                    backgroundColor: "#28a745",
                    borderRadius: "50%",
                    padding: "5px",
                    color: "white",
                    marginRight: "5px",
                  }}
                />
              ) : (
                <QuestionOutlined
                  style={{
                    backgroundColor: "#ffc107",
                    borderRadius: "50%",
                    padding: "5px",
                    color: "white",
                    marginRight: "5px",
                  }}
                />
              )}
              {props.isEnglish ? "Special diet" : "Chế độ ăn riêng"}
            </div>
            <div>
              {petData.rabies_vaccine === true ? (
                <CheckOutlined
                  style={{
                    backgroundColor: "#28a745",
                    borderRadius: "50%",
                    padding: "5px",
                    color: "white",
                    marginRight: "5px",
                  }}
                />
              ) : (
                <QuestionOutlined
                  style={{
                    backgroundColor: "#ffc107",
                    borderRadius: "50%",
                    padding: "5px",
                    color: "white",
                    marginRight: "5px",
                  }}
                />
              )}
              {props.isEnglish ? "Rabies vaccinated" : "Tiêm dại"}
            </div>
            <div>
              {petData.friendly_with_dog === true ? (
                <CheckOutlined
                  style={{
                    backgroundColor: "#28a745",
                    borderRadius: "50%",
                    padding: "5px",
                    color: "white",
                    marginRight: "5px",
                  }}
                />
              ) : (
                <QuestionOutlined
                  style={{
                    backgroundColor: "#ffc107",
                    borderRadius: "50%",
                    padding: "5px",
                    color: "white",
                    marginRight: "5px",
                  }}
                />
              )}
              {props.isEnglish ? "Friendly with dogs" : "Thân thiện với chó"}
            </div>
            <div>
              {petData.toilet_trained === petData ? (
                <CheckOutlined
                  style={{
                    backgroundColor: "#28a745",
                    borderRadius: "50%",
                    padding: "5px",
                    color: "white",
                    marginRight: "5px",
                  }}
                />
              ) : (
                <QuestionOutlined
                  style={{
                    backgroundColor: "#ffc107",
                    borderRadius: "50%",
                    padding: "5px",
                    color: "white",
                    marginRight: "5px",
                  }}
                />
              )}
              {props.isEnglish ? "Housebroken" : "Đi vệ sinh đúng chỗ"}
            </div>
            <div>
              {petData.vaccinated === petData ? (
                <CheckOutlined
                  style={{
                    backgroundColor: "#28a745",
                    borderRadius: "50%",
                    padding: "5px",
                    color: "white",
                    marginRight: "5px",
                  }}
                />
              ) : (
                <QuestionOutlined
                  style={{
                    backgroundColor: "#ffc107",
                    borderRadius: "50%",
                    padding: "5px",
                    color: "white",
                    marginRight: "5px",
                  }}
                />
              )}
              {props.isEnglish ? "Vaccinated" : "Tiêm phòng bệnh"}
            </div>
            <div>
              {petData.friendly_with_cat === petData ? (
                <CheckOutlined
                  style={{
                    backgroundColor: "#28a745",
                    borderRadius: "50%",
                    padding: "5px",
                    color: "white",
                    marginRight: "5px",
                  }}
                />
              ) : (
                <QuestionOutlined
                  style={{
                    backgroundColor: "#ffc107",
                    borderRadius: "50%",
                    padding: "5px",
                    color: "white",
                    marginRight: "5px",
                  }}
                />
              )}
              {props.isEnglish ? "Friendly with cats" : "Thân thiện với mèo"}
            </div>
          </div>
        </div>
        <div className="des">
          <h1>
            {props.isEnglish ? "Learn About Pets" : "Tìm Hiểu Về Thú Cưng"}
          </h1>
          <hr />
          <p>{petData.des}</p>
        </div>
      </div>
      <ToSupport isEnglish={props.isEnglish} />
    </div>
  );
}

export default PetInfo;
