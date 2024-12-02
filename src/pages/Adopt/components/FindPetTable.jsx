import React, { useEffect, useState } from "react";
import sticker from "../../../asset/Icon/pets.png";
import { Card, Col, Form, Input, Pagination, Row, Select } from "antd";
import { useNavigate } from "react-router-dom";
function FindPetTable(props) {
  const [current, setCurrent] = useState(1);
  const [paginatedList, setPaginatedList] = useState([]);
  const [category, setCategory] = useState("all");
  const navigate = useNavigate();
  const pageSize = parseInt(props.pageSize);
  useEffect(() => {
    const startIndex = (current - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setPaginatedList(props.list.slice(startIndex, endIndex));
  }, [current]);

  const handleNavigate = (id) => {
    navigate(`/nhan-nuoi/tat-ca-cac-be/${id}`);
  };

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
                        width: "280px",
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
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span>Độ tuổi</span>
                    <Select
                      defaultValue="all"
                      style={{
                        width: "280px",
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
                        width: "280px",
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
                        width: "280px",
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
                        width: "280px",
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
      </div>
      <div className="table" style={{ width: "1200px", maxWidth: "80%" }}>
        <Row gutter={[24, 24]} style={{ width: "100%" }}>
          {paginatedList.map((item) => {
            return (
              <Col span={6}>
                <Card
                  cover={<img src={item.url} alt="image" />}
                  hoverable
                  onClick={() => {
                    handleNavigate(item.id);
                  }}
                >
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
        <br />
        <Pagination
          current={current}
          onChange={(Page) => setCurrent(Page)}
          total={props.list.length}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}

export default FindPetTable;
