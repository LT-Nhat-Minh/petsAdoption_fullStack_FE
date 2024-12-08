import { CheckOutlined, QuestionOutlined } from "@ant-design/icons";
import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.scss";
import ToSupport from "../../../../components/ToSupport";

function PetInfo(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = useMemo(() => {
    return props.list.find((pet) => pet.id === id);
  }, [id, props.list]);

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
            <span className="current">{item.id}</span>
          </p>
        </div>
      </div>
      <div className="content">
        <div className="info">
          <div className="photo">
            <img src={item.url} alt="" />
          </div>
          <div className="descriptions">
            <h1>{item.name}</h1>
            <p>
              <strong>{props.isEnglish ? "Breed:" : "Giống:"}</strong>{" "}
              {item.breed}
            </p>
            <hr />
            <p>
              <strong>{props.isEnglish ? "Color:" : "Màu sắc:"}</strong>{" "}
              {item.color}
            </p>
            <hr />
            <p>
              <strong>{props.isEnglish ? "Age:" : "Tuổi:"}</strong> {item.age}
            </p>
            <hr />
            <p>
              <strong>{props.isEnglish ? "Weight:" : "Cân nặng:"}</strong>{" "}
              {item.weight}
            </p>
            <hr />
            <p>
              <strong>{props.isEnglish ? "Gender:" : "Giới tính:"}</strong>{" "}
              {item.gender}
            </p>
            <hr />
            <p>
              <strong>{props.isEnglish ? "ID:" : "Mã:"}</strong> {item.id}
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
              {item.a === "t" ? (
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
              {item.b === "t" ? (
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
              {item.c === "t" ? (
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
              {item.d === "t" ? (
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
              {item.e === "t" ? (
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
              {item.f === "t" ? (
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
              {item.g === "t" ? (
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
              {item.h === "t" ? (
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
          <p>{item.des}</p>
        </div>
      </div>
      <ToSupport isEnglish={props.isEnglish} />
    </div>
  );
}

export default PetInfo;
