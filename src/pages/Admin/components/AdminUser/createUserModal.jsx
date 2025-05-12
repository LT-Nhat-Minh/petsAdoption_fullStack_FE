import { Form, Input, message, Modal, notification, Select } from "antd";
import { useState } from "react";
import { callCreateUser } from "../../../../services/api";
const { Option } = Select;

function CreateUserModal(props) {
  const [form] = Form.useForm();
  const { isCreateModalVisible, setIsCreateModalVisible } = props;

  const handleCreateUser = async () => {
    const values = form.getFieldsValue();
    const { name, email, password, phoneNumber, role } = values;
    const res = await callCreateUser(name, email, password, phoneNumber, role);
    if (res && res.data) {
      message.success("Thêm người dùng thành công");
      form.resetFields(); // Reset the form fields
      setIsCreateModalVisible(false);
    } else {
      notification.error({
        message: "Thêm người dùng thất bại",
        description: res.error,
      });
    }
  };

  return (
    <Modal
      title={"Thêm người dùng mới"}
      open={isCreateModalVisible}
      onOk={async () => {
        await handleCreateUser();
      }}
      onCancel={() => setIsCreateModalVisible(false)}
      width={700}
      okText={"Thêm"}
      cancelText="Hủy"
    >
      <Form form={form} layout="vertical">
        {/* Các trường thông tin cơ bản */}
        <Form.Item
          name="name"
          label="Họ và tên"
          rules={[{ required: true, message: "Vui lòng nhập họ tên" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Vui lòng nhập email" },
            { type: "email", message: "Email không hợp lệ" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Mật khẩu"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phoneNumber"
          label="Số điện thoại"
          rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}
        >
          <Input />
        </Form.Item>

        {/* Trường vai trò */}
        <Form.Item name="role" label="Vai trò" initialValue="user">
          <Select>
            <Option value="user">Người dùng</Option>
            <Option value="admin">Quản trị viên</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default CreateUserModal;
