import React, { useState } from "react";
import { Button, Checkbox, Form, Input, message, notification } from "antd";
import { Divider } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { callLogin } from "../../services/api";
import { useDispatch } from "react-redux";
import { doLoginAction } from "../../redux/account/accountSlice";
import "./style.scss";

function Login() {
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);

  const dispatch = useDispatch();

  const onFinish = async (values) => {
    const { email, password } = values;
    setIsSubmit(true);
    const res = await callLogin(email, password);
    setIsSubmit(false);

    console.log(">>>login res", res);
    if (res?.data) {
      localStorage.setItem("access_token", res.data.access_token);

      dispatch(doLoginAction(res.data.user));
      message.success("Đăng nhập thành công!");
      navigate("/");
    } else {
      console.log(">>>>res lỗi", res);
      notification.error({
        message: "Có lỗi xảy ra!",
        description:
          res.message && Array.isArray(res.message)
            ? res.message[0]
            : res.message,
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login-page">
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
          maxWidth: 550,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1>Đăng nhập</h1>
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
          wrapperCol={{
            offset: 0,
            span: 24,
          }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button type="primary" htmlType="submit" loading={isSubmit}>
            Đăng nhập
          </Button>
        </Form.Item>
        <Divider plain>Or</Divider>
        <div style={{ display: "flex", float: "right" }}>
          <p>Chưa có tài khoản?</p>
          <Link
            to="/register"
            style={{
              marginLeft: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            Đăng Ký{" "}
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default Login;
