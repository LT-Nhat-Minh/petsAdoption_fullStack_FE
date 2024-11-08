import React, { useEffect, useState } from "react";
import sticker from "../../../asset/Icon/pets.png";
import { Card, Col, Form, Input, Pagination, Row, Select } from "antd";
import { Vaccines } from "@mui/icons-material";
import thumbnail1 from "../../../asset/ListThumbnail/1.jpeg";
import thumbnail2 from "../../../asset/ListThumbnail/2.jpeg";
import thumbnail3 from "../../../asset/ListThumbnail/3.jpeg";
import thumbnail4 from "../../../asset/ListThumbnail/4.jpeg";
import thumbnail5 from "../../../asset/ListThumbnail/5.jpeg";
import thumbnail6 from "../../../asset/ListThumbnail/6.jpeg";
import thumbnail7 from "../../../asset/ListThumbnail/7.jpeg";
import thumbnail8 from "../../../asset/ListThumbnail/8.jpeg";
import Column from "antd/es/table/Column";

function FindPetTable(props) {
  const [current, setCurrent] = useState(1);
  const [paginatedList, setPaginatedList] = useState([]);
  const [category, setCategory] = useState("all");
  const pageSize = 4;
  useEffect(() => {
    const startIndex = (current - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setPaginatedList(list.slice(startIndex, endIndex));
  }, [current]);
  const list = [
    {
      id: 1,
      name: "Pepsi",
      gender: "Đực",
      age: "Trưởng thành",
      vaccined: true,
      url: thumbnail1, //Ảnh thumbnail
      current: 1, //Trang hiển thị
    },
    {
      id: 2,
      name: "Milo",
      gender: "Đực",
      age: "Trưởng thành",
      vaccined: true,
      url: thumbnail2,
      current: 1,
    },
    {
      id: 3,
      name: "Mita",
      gender: "Đực",
      age: "Trưởng thành",
      vaccined: false,
      url: thumbnail3,
      current: 1,
    },
    {
      id: 4,
      name: "Quýt",
      gender: "Đực",
      age: "Trẻ",
      vaccined: false,
      url: thumbnail4,
      current: 1,
    },
    {
      id: 5,
      name: "Bông",
      gender: "Cái",
      age: "Trưởng thành",
      vaccined: false,
      url: thumbnail5,
      current: 2,
    },
    {
      id: 6,
      name: "Dưa",
      gender: "Đực",
      age: "Trẻ",
      vaccined: false,
      url: thumbnail6,
      current: 2,
    },
    {
      id: 7,
      name: "Lucky",
      gender: "Đực",
      age: "Trẻ",
      vaccined: false,
      url: thumbnail7,
      current: 2,
    },
    {
      id: 8,
      name: "Mochi",
      gender: "Cái",
      age: "Trưởng thành",
      vaccined: false,
      url: thumbnail8,
      current: 2,
    },
  ];
  return (
    <div className="find-pet-table">
      <div className="header">
        <div className="title">
          <h1>Tìm thú cưng</h1>
          <span>
            <img src={sticker} alt="" />
          </span>
        </div>
        <div className="options">
          <button>Tất cả</button>
          <button>Chó</button>
          <button>Mèo</button>
          <button>Khác</button>
        </div>
        <div className="selectbox-container">
          <Form>
            <Row gutter={24}>
              <Col span={8}>
                <Form.Item>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>Giới tính</span>
                    <Select
                      defaultValue="all"
                      style={{
                        width: "100%",
                        border: "2px solid #d61c62",
                        borderRadius: "8px",
                      }}
                      options={[
                        { value: "all", label: "Tất cả" },
                        { value: "male", label: "Đực" },
                        { value: "female", label: "Cái" },
                        { value: "undifined", label: "Chưa rõ" },
                      ]}
                    />
                  </div>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>Độ tuổi</span>
                    <Select
                      defaultValue="all"
                      style={{
                        width: "100%",
                        border: "2px solid #d61c62",
                        borderRadius: "8px",
                      }}
                      options={[
                        { value: "all", label: "Tất cả" },
                        { value: "mature", label: "Trưởng thành" },
                        { value: "young", label: "Trẻ" },
                        { value: "old", label: "Già" },
                      ]}
                    />
                  </div>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>Triệt sản</span>
                    <Select
                      defaultValue="all"
                      style={{
                        width: "100%",
                        border: "2px solid #d61c62",
                        borderRadius: "8px",
                      }}
                      options={[
                        { value: "all", label: "Tất cả" },
                        { value: "true", label: "Có" },
                        { value: "false", label: "Không" },
                        { value: "undifined", label: "Chưa rõ" },
                      ]}
                    />
                  </div>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>Tiêm phòng</span>
                    <Select
                      defaultValue="all"
                      style={{
                        width: "100%",
                        border: "2px solid #d61c62",
                        borderRadius: "8px",
                      }}
                      options={[
                        { value: "all", label: "Tất cả" },
                        { value: "true", label: "Có" },
                        { value: "false", label: "Chưa" },
                        { value: "undifined", label: "Chưa rõ" },
                      ]}
                    />
                  </div>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>Tên</span>
                    <Input
                      placeholder="Nhập tên..."
                      style={{
                        width: "100%",
                        border: "2px solid #d61c62",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                </Form.Item>
              </Col>
              <Col
                span={8}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button className="btn-search">TÌM KIẾM</button>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="table">
          <Row gutter={[24, 24]} style={{ width: "80%" }}>
            {paginatedList.map((item) => {
              return (
                <Col span={6}>
                  <Card cover={<img src={item.url} alt="image" />} hoverable>
                    <div className="card-container">
                      <div className="title">
                        <h3>{item.name}</h3>
                      </div>
                      <hr />
                      <div className="information">
                        <p>
                          <strong>Giới tính:</strong> {item.gender}
                          <hr />
                        </p>
                        <p>
                          <strong>Tuổi:</strong> {item.age}
                          <hr />
                        </p>
                        <p>
                          <strong>Tiêm phòng:</strong> {item.vaccined}
                          <hr />
                        </p>
                      </div>
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>
          <Pagination
            current={current}
            onChange={(Page) => setCurrent(Page)}
            total={list.length}
            pageSize={pageSize}
          />
        </div>
      </div>
    </div>
  );
}

export default FindPetTable;
