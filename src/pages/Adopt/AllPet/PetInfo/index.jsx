import { CheckOutlined, QuestionOutlined } from "@ant-design/icons";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";
import ToSupport from "../../../../components/ToSupport";
import { callFetchPets } from "../../../../services/api";

function PetInfo(props) {
  const { id } = useParams();
  const [petData, setPetData] = useState({});
  const navigate = useNavigate();
  const isEnglish = useSelector((state) => state.language.isEnglish);

  const fetchPetByID = async () => {
    if (id) {
      const res = await callFetchPets(id);
      if (res && res.data) {
        const rawList = res.data;
        setPetData(rawList);
      }
    }
  };

  useEffect(() => {
    fetchPetByID();
  }, []);

  return (
    <div className="pet_info">
      <div className="banner">
        <div className="container">
          <h1 className="title">
            {isEnglish ? "Pet Information" : "Thông Tin Từng Boss"}
          </h1>
          <p className="breadcrumbs">
            <span className="root" onClick={() => navigate("/")}>
              {isEnglish ? "Home" : "Trang Chủ"}
            </span>
            {">"}
            <span className="root" onClick={() => navigate("/nhan-nuoi")}>
              {isEnglish ? "Adopt" : "Nhận Nuôi"}
            </span>
            {">"}
            <span
              className="root"
              onClick={() => navigate("/nhan-nuoi/tat-ca-cac-be")}
            >
              {isEnglish ? "All Pets" : "Tất Cả Các Bé"}
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
              <strong>{isEnglish ? "Breed:" : "Giống:"}</strong> {petData.breed}
            </p>
            <hr />
            <p>
              <strong>{isEnglish ? "Color:" : "Màu sắc:"}</strong>{" "}
              {petData.color}
            </p>
            <hr />
            <p>
              <strong>{isEnglish ? "Age:" : "Tuổi:"}</strong> {petData.age}
            </p>
            <hr />
            <p>
              <strong>{isEnglish ? "Weight:" : "Cân nặng:"}</strong>{" "}
              {petData.weight}
            </p>
            <hr />
            <p>
              <strong>{isEnglish ? "Gender:" : "Giới tính:"}</strong>{" "}
              {petData.gender}
            </p>
            <hr />
            <p>
              <strong>{isEnglish ? "ID:" : "Mã:"}</strong> {petData._id}
            </p>
            <div className="button">
              <button>{isEnglish ? "VIRTUAL ADOPTION" : "NHẬN NUÔI ẢO"}</button>
              <button>
                {isEnglish ? "DO YOU HAVE A QUESTION?" : "BẠN CÓ CÂU HỎI?"}
              </button>
            </div>
          </div>
        </div>
        <div className="more_info">
          <h1>{isEnglish ? "Information" : "Thông Tin"}</h1>
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
              {isEnglish ? "Sterilized" : "Triệt sản"}
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
              {isEnglish ? "Friendly with people" : "Thân thiện với người"}
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
              {isEnglish ? "Special diet" : "Chế độ ăn riêng"}
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
              {isEnglish ? "Rabies vaccinated" : "Tiêm dại"}
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
              {isEnglish ? "Friendly with dogs" : "Thân thiện với chó"}
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
              {isEnglish ? "Housebroken" : "Đi vệ sinh đúng chỗ"}
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
              {isEnglish ? "Vaccinated" : "Tiêm phòng bệnh"}
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
              {isEnglish ? "Friendly with cats" : "Thân thiện với mèo"}
            </div>
          </div>
        </div>
        <div className="des">
          <h1>{isEnglish ? "Learn About Pets" : "Tìm Hiểu Về Thú Cưng"}</h1>
          <hr />
          <p>{petData.des}</p>
        </div>
      </div>
      <ToSupport isEnglish={isEnglish} />
    </div>
  );
}

export default PetInfo;
