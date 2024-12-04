import React, { useEffect, useState } from "react";
import sticker from "../../../asset/Icon/pets.png";
import { Card, Col, Form, Input, Pagination, Row, Select } from "antd";
import { useNavigate } from "react-router-dom";
function FindPetTable(props) {
  const [current, setCurrent] = useState(1);
  const [paginatedList, setPaginatedList] = useState([]);
  const [filteredList, setFilteredList] = useState(props.list);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const pageSize = parseInt(props.pageSize);

  useEffect(() => {
    const startIndex = (current - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setPaginatedList(filteredList.slice(startIndex, endIndex));
  }, [current, filteredList]);

  const handleNavigate = (id) => {
    navigate(`/nhan-nuoi/tat-ca-cac-be/${id}`);
  };

  const handleFormSubmit = (value) => {
    console.log(value);

    let updateList = props.list;

    if (value.type !== "all") {
      updateList = updateList.filter((item) => item.type === value.type);
      setFilteredList(updateList);
    } else {
      setFilteredList(updateList);
    }

    if (value.gender !== "all") {
      updateList = updateList.filter((item) => item.gender === value.gender);
      setFilteredList(updateList);
    }

    if (value.age !== "all") {
      updateList = updateList.filter((item) => item.age === value.age);
      setFilteredList(updateList);
    }

    if (value.a !== "all") {
      updateList = updateList.filter((item) => item.a === value.a);
      setFilteredList(updateList);
    }

    if (value.g !== "all") {
      updateList = updateList.filter((item) => item.g === value.g);
      setFilteredList(updateList);
    }
  };

  return (
    <div className="find-pet-table">
      <div className="header">
        <div className="title">
          <button
            onClick={() => {
              console.log("abc", paginatedList);
            }}
          ></button>
          <h1>Tìm thú cưng</h1>
          <span>
            <img src={sticker} alt="" />
          </span>
        </div>

        <div className="selectbox-container">
          <Form onFinish={handleFormSubmit} form={form}>
            <Form.Item name="type" initialValue="all">
              <div className="options">
                <button
                  type="button"
                  onClick={() => {
                    form.setFieldsValue({ type: "all" });
                    form.submit();
                  }}
                  className={
                    form.getFieldValue("type") === "all" ? "btn-activated" : ""
                  }
                >
                  Tất cả
                </button>
                <button
                  type="button"
                  onClick={() => {
                    form.setFieldsValue({ type: "dog" });
                    form.submit();
                  }}
                  className={
                    form.getFieldValue("type") === "dog" ? "btn-activated" : ""
                  }
                >
                  Chó
                </button>
                <button
                  type="button"
                  onClick={() => {
                    form.setFieldsValue({ type: "cat" });
                    form.submit();
                  }}
                  className={
                    form.getFieldValue("type") === "cat" ? "btn-activated" : ""
                  }
                >
                  Mèo
                </button>
                <button
                  type="button"
                  onClick={() => {
                    form.setFieldsValue({ type: "another" });
                    form.submit();
                  }}
                  className={
                    form.getFieldValue("type") === "another"
                      ? "btn-activated"
                      : ""
                  }
                >
                  Khác
                </button>
              </div>
            </Form.Item>
            <Row gutter={24}>
              <Col span={8}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>Giới tính</span>
                  <Form.Item name="gender" initialValue="all">
                    <Select
                      style={{
                        width: "280px",
                        border: "2px solid #d61c62",
                        borderRadius: "8px",
                      }}
                      defaultValue="all"
                    >
                      <Select.Option value="all">Tất cả</Select.Option>
                      <Select.Option value="Đực">Đực</Select.Option>
                      <Select.Option value="Cái">Cái</Select.Option>
                    </Select>
                  </Form.Item>
                </div>
              </Col>

              <Col span={8}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>Độ tuổi</span>
                  <Form.Item name="age" initialValue="all">
                    <Select
                      style={{
                        width: "280px",
                        border: "2px solid #d61c62",
                        borderRadius: "8px",
                      }}
                      defaultValue="all"
                    >
                      <Select.Option value="all">Tất cả</Select.Option>
                      <Select.Option value="Nhí">Nhí</Select.Option>
                      <Select.Option value="Nhỡ">Nhỡ</Select.Option>
                      <Select.Option value="Thanh Niên">
                        Thanh Niên
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </div>
              </Col>

              <Col span={8}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>Triệt sản</span>
                  <Form.Item name="a" initialValue="all">
                    <Select
                      style={{
                        width: "280px",
                        border: "2px solid #d61c62",
                        borderRadius: "8px",
                      }}
                      defaultValue="all"
                    >
                      <Select.Option value="all">Tất cả</Select.Option>
                      <Select.Option value="t">Có</Select.Option>
                      <Select.Option value="f">Không</Select.Option>
                      <Select.Option value="u">Chưa rõ</Select.Option>
                    </Select>
                  </Form.Item>
                </div>
              </Col>

              <Col span={8}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>Tiêm phòng</span>
                  <Form.Item name="g" initialValue="all">
                    <Select
                      style={{
                        width: "280px",
                        border: "2px solid #d61c62",
                        borderRadius: "8px",
                      }}
                      defaultValue="all"
                    >
                      <Select.Option value="all">Tất cả</Select.Option>
                      <Select.Option value="t">Có</Select.Option>
                      <Select.Option value="f">Chưa</Select.Option>
                      <Select.Option value="u">Chưa rõ</Select.Option>
                    </Select>
                  </Form.Item>
                </div>
              </Col>
              <Col span={8}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>Tên</span>
                  <Form.Item name="name">
                    <Input
                      placeholder="Nhập tên..."
                      style={{
                        width: "280px",
                        border: "2px solid #d61c62",
                        borderRadius: "8px",
                      }}
                    />
                  </Form.Item>
                </div>
              </Col>

              {/* Submit Button */}
              <Col
                span={8}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button className="btn-search" type="submit">
                  TÌM KIẾM
                </button>
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
                        <strong>Tiêm phòng:</strong>{" "}
                        {item.g === "u"
                          ? "Chưa rõ"
                          : item.g === "t"
                          ? "Có"
                          : "Không"}
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
          total={filteredList.length}
          pageSize={pageSize}
          responsive={true}
        />
      </div>
    </div>
  );
}

export default FindPetTable;
