import React, { useState, useMemo } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Divider,
  notification,
  Space,
  message,
  InputNumber,
} from "antd";
import {
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from "@ant-design/icons";
import { callRegister } from "../../services/api";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);
  const onFinished = async (values) => {
    let { name, email, password, phoneNumber } = values;
    //parseString(phoneNumber);
    phoneNumber = phoneNumber.toString();

    setIsSubmit(true);
    const res = await callRegister(name, email, password, phoneNumber);
    setIsSubmit(false);
    console.log(">>>register res", res);
    if (res?.data?._id) {
      message.success({
        content: "Đăng ký thành công!",
      });
      navigate("/login");
    } else {
      notification.error({
        description:
          res.message && Array.isArray(res.message)
            ? res.message[0]
            : res.message,
        placement: "topRight",
        message: "Có lỗi xảy ra",
        showProgress: true,
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="register-page">
      <Form
        className="formContainer"
        name="basic"
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinished}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1>Đăng ký</h1>
        <Form.Item
          label="Họ và tên"
          name="name"
          rules={[
            {
              required: true,
              message: "Vui lòng điền tên!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Vui lòng điền email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            {
              required: true,
              message: "Vui lòng điền mật khẩu!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Số điện thoại"
          name="phoneNumber"
          rules={[
            {
              type: "number",
              required: true,
              message: "Vui lòng điền số điện thoại!",
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} controls={false} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 0,
            span: 24,
          }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button type="primary" htmlType="submit" loading={isSubmit}>
            Đăng ký
          </Button>
        </Form.Item>
        <Divider plain>Or</Divider>
        <div style={{ display: "flex", float: "right" }}>
          <p>Đã có tài khoản?</p>
          <Link
            to="/login"
            style={{
              marginLeft: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Đăng nhập
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default Register;
