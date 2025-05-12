import { Form, Input, message, Modal, notification, Select } from "antd";
import { useEffect } from "react";
import { callUpdateUser } from "../../../../services/api";
const { Option } = Select;

function UpdateUserModal(props) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (props.updatingUserData) {
      const { name, email, phoneNumber, role } = props.updatingUserData;
      form.setFieldsValue({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        role: role,
      });
    }
  }, [props.updatingUserData]);

  const handleUpdateUser = async () => {
    const values = form.getFieldsValue();
    const { name, email, phoneNumber, role } = values;
    const id = props.updatingUserData._id;

    const res = await callUpdateUser(id, name, email, phoneNumber, role);
    if (res && res.data) {
      message.success("Cập nhật người dùng thành công");
      form.resetFields(); // Reset the form fields
    } else {
      notification.error({
        message: "Cập nhật người dùng thất bại",
        description: res.error,
      });
    }
  };

  return (
    <Modal
      title={"Thêm người dùng mới"}
      open={props.isUpdateModalVisible}
      onOk={async () => {
        await handleUpdateUser();
        props.setIsUpdateModalVisible(false);
      }}
      onCancel={() => {
        form.resetFields();
        props.setIsUpdateModalVisible(false);
      }}
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
          <Input disabled={true} />
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

export default UpdateUserModal;
