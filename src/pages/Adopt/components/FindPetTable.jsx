import React, { useEffect, useState } from "react";
import sticker from "../../../asset/Icon/pets.png";
import { Card, Col, Form, Input, Pagination, Row, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { callFetchPets } from "../../../services/api";
function FindPetTable(props) {
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(0);
  const [paginatedList, setPaginatedList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const pageSize = parseInt(props.pageSize);

  useEffect(() => {
    const fetchAndInitPaginatedList = async () => {
      const startIndex = (current - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const res = await callFetchPets(null, startIndex, endIndex);
      if (res && res.data) {
        setTotal(res.total);
        const paginatedList = res.data;
        setPaginatedList(paginatedList);
      }
    };
    fetchAndInitPaginatedList();
  }, [current]);

  const handleNavigate = (id) => {
    navigate(`/nhan-nuoi/tat-ca-cac-be/${id}`);
  };

  const handleFormSubmit = (value) => {
    console.log(value);

    let updateList = props.list;

    if (value.type !== "all") {
      updateList = updateList.filter((item) => item.type === value.type);
    }

    if (value.gender !== "all") {
      updateList = updateList.filter((item) => item.gender === value.gender);
    }

    if (value.age !== "all") {
      updateList = updateList.filter((item) => item.age === value.age);
    }

    if (value.a !== "all") {
      updateList = updateList.filter((item) => item.a === value.a);
    }

    if (value.d !== "all") {
      updateList = updateList.filter((item) => item.d === value.d);
    }

    const nameFilter = value.name.trim().toLowerCase();
    updateList = updateList.filter((item) =>
      nameFilter === "" ? item : item.name.toLowerCase().includes(nameFilter)
    );

    setFilteredList(updateList);
  };

  const getVaccinationStatus = (isEnglish, status) => {
    if (isEnglish) {
      return status === "u" ? "No" : status === "t" ? "Yes" : "Unclear";
    } else {
      return status === "u" ? "Không" : status === "t" ? "Có" : "Chưa rõ";
    }
  };

  const getAgeStatus = (isEnglish, age) => {
    if (isEnglish) {
      return age === "Nhí" ? "Baby" : age === "Nhỡ" ? "Juvenile" : "Adult";
    } else {
      return age === "Nhí" ? "Nhí" : age === "Nhỡ" ? "Nhỡ" : "Trưởng Thành";
    }
  };

  const getGenderStatus = (isEnglish, gender) => {
    if (isEnglish) {
      return gender === "Đực" ? "Male" : "Female";
    } else {
      return gender === "Đực" ? "Đực" : "Cái";
    }
  };

  return (
    <div className="find-pet-table">
      <div className="header">
        <div className="title">
          <h1>{props.isEnglish ? "Find Pets" : "Tìm thú cưng"}</h1>
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
                  {props.isEnglish ? "All" : "Tất cả"}
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
                  {props.isEnglish ? "Dog" : "Chó"}
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
                  {props.isEnglish ? "Cat" : "Mèo"}
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
                  {props.isEnglish ? "Other" : "Khác"}
                </button>
              </div>
            </Form.Item>
            <Row gutter={24}>
              <Col span={8}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>{props.isEnglish ? "Gender" : "Giới tính"}</span>
                  <Form.Item name="gender" initialValue="all">
                    <Select
                      style={{
                        width: "280px",
                        border: "2px solid #d61c62",
                        borderRadius: "8px",
                      }}
                      defaultValue="all"
                    >
                      <Select.Option value="all">
                        {props.isEnglish ? "All" : "Tất cả"}
                      </Select.Option>
                      <Select.Option value="Đực">
                        {props.isEnglish ? "Male" : "Đực"}
                      </Select.Option>
                      <Select.Option value="Cái">
                        {props.isEnglish ? "Female" : "Cái"}
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </div>
              </Col>

              <Col span={8}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>{props.isEnglish ? "Age" : "Độ tuổi"}</span>
                  <Form.Item name="age" initialValue="all">
                    <Select
                      style={{
                        width: "280px",
                        border: "2px solid #d61c62",
                        borderRadius: "8px",
                      }}
                      defaultValue="all"
                    >
                      <Select.Option value="all">
                        {props.isEnglish ? "All" : "Tất cả"}
                      </Select.Option>
                      <Select.Option value="Nhí">
                        {props.isEnglish ? "Baby" : "Nhí"}
                      </Select.Option>
                      <Select.Option value="Nhỡ">
                        {props.isEnglish ? "Juvenile" : "Nhỡ"}
                      </Select.Option>
                      <Select.Option value="Trưởng Thành">
                        {props.isEnglish ? "Adult" : "Trưởng Thành"}
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </div>
              </Col>

              <Col span={8}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>{props.isEnglish ? "Neutered" : "Triệt sản"}</span>
                  <Form.Item name="a" initialValue="all">
                    <Select
                      style={{
                        width: "280px",
                        border: "2px solid #d61c62",
                        borderRadius: "8px",
                      }}
                      defaultValue="all"
                    >
                      <Select.Option value="all">
                        {props.isEnglish ? "All" : "Tất cả"}
                      </Select.Option>
                      <Select.Option value="t">
                        {props.isEnglish ? "Yes" : "Có"}
                      </Select.Option>
                      <Select.Option value="f">
                        {props.isEnglish ? "No" : "Không"}
                      </Select.Option>
                      <Select.Option value="u">
                        {props.isEnglish ? "Unclear" : "Chưa rõ"}
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </div>
              </Col>

              <Col span={8}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>
                    {props.isEnglish ? "Vaccinated" : "Tiêm phòng dại"}
                  </span>
                  <Form.Item name="d" initialValue="all">
                    <Select
                      style={{
                        width: "280px",
                        border: "2px solid #d61c62",
                        borderRadius: "8px",
                      }}
                      defaultValue="all"
                    >
                      <Select.Option value="all">
                        {props.isEnglish ? "All" : "Tất cả"}
                      </Select.Option>
                      <Select.Option value="t">
                        {props.isEnglish ? "Yes" : "Có"}
                      </Select.Option>
                      <Select.Option value="f">
                        {props.isEnglish ? "No" : "Chưa"}
                      </Select.Option>
                      <Select.Option value="u">
                        {props.isEnglish ? "Unclear" : "Chưa rõ"}
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </div>
              </Col>
              <Col span={8}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>{props.isEnglish ? "Name" : "Tên"}</span>
                  <Form.Item name="name" initialValue={""}>
                    <Input
                      placeholder={
                        props.isEnglish ? "Enter name..." : "Nhập tên..."
                      }
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
                  {props.isEnglish ? "SEARCH" : "TÌM KIẾM"}
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
                  cover={
                    <img
                      src={
                        `${process.env.REACT_APP_BACKEND_PUBLIC_URL}` +
                        "/images/petAvatar/" +
                        item.image
                      }
                      alt="image"
                    />
                  }
                  hoverable
                  onClick={() => {
                    handleNavigate(item._id);
                  }}
                >
                  <div className="card-container">
                    <div className="title">
                      <h3>{item.name}</h3>
                    </div>
                    <hr />
                    <div className="information">
                      <p>
                        <strong>
                          {props.isEnglish ? "Gender:" : "Giới tính:"}
                        </strong>{" "}
                        {getGenderStatus(props.isEnglish, item.gender)}
                        <hr />
                      </p>
                      <p>
                        <strong>{props.isEnglish ? "Age:" : "Tuổi:"}</strong>{" "}
                        {getAgeStatus(props.isEnglish, item.age)}
                        <hr />
                      </p>
                      <p>
                        <strong>
                          {props.isEnglish ? "Vaccinated:" : "Tiêm phòng:"}
                        </strong>{" "}
                        {getVaccinationStatus(props.isEnglish, item.d)}
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
          total={total}
          pageSize={pageSize}
          responsive={true}
        />
      </div>
    </div>
  );
}

export default FindPetTable;
