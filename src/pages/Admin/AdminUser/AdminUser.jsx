import { DeleteOutlined, EditOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, message, Modal, Select, Space, Switch, Table, Upload } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { callDeleteUser, callFetchUsers, callRegister, callUpdateUser } from '../../../services/api';
const { Option } = Select;
const { TextArea } = Input;


function AdminPet() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentUser, setcurrentUser] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    setLoading(true);
    try {
      const res = await callFetchUsers();
      if (res && res.data) {
        const rawList = res.data || [];
        setUserData(Array.isArray(rawList) ? rawList : []);
      }
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu thú cưng:', error);
      setUserData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setcurrentUser(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEdit = async (user) => {
    setcurrentUser(user);
    form.setFieldsValue({
      ...user
    });
    setIsModalVisible(true);
  };

  const handleDelete = async (id) => {
    Modal.confirm({
      title: 'Xác nhận xóa',
      content: 'Bạn có chắc chắn muốn xóa người dùng này?',
      okText: 'Xóa',
      cancelText: 'Hủy',
      onOk: async () => {
        try {
          console.log('id', id)
          await callDeleteUser(id);
          message.success('Xóa người dùng thành công');
          fetchAllUsers();
        } catch (error) {
          message.error('Xóa người dùng thất bại');
        }
      }
    });
  };

  const handleSubmit = async () => {
  try {
    const values = await form.validateFields();
    const userData = {
      name: values.name || '',
      email: values.email || '',
      password: values.password || '',
      phoneNumber: values.phoneNumber || '',
      role: values.role || 'user',
    };
    if (currentUser && currentUser._id) {
      const res = await callUpdateUser(currentUser._id, userData);
      if (res && res.data) {
        message.success('Cập nhật người dùng thành công');
       }
    } else {
      const res = await callRegister(
        userData.name,
        userData.email,
        userData.password,
        userData.phoneNumber
      );
      if (res && res.data) {
        message.success('Thêm người dùng thành công');
      }
    }
    setIsModalVisible(false);
    setcurrentUser(null);
    fetchAllUsers();
  } catch (error) {
    console.error('Lỗi khi lưu người dùng:', error);
    message.error(error.response?.data?.message || 'Lỗi khi lưu người dùng');
  }
};

  const columns = [
  {
    title: 'Tên',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (name) => name || 'N/A'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (email) => email || 'N/A'
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
    render: (phone) => phone || 'N/A'
  },
  {
    title: 'Vai trò',
    dataIndex: 'role',
    key: 'role',
    filters: [
      { text: 'Người dùng', value: 'user' },
      { text: 'Quản trị', value: 'admin' }
    ],
    onFilter: (value, record) => record.role === value,
    render: (role) => {
      switch (role) {
        case 'admin':
          return 'Quản trị viên';
        case 'user':
          return 'Người dùng';
        default:
          return role || 'N/A';
      }
    }
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (date) => date ? new Date(date).toLocaleDateString() : 'N/A',
    sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  },
  {
    title: 'Ngày cập nhật',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    render: (date) => date ? new Date(date).toLocaleDateString() : 'N/A',
    sorter: (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt)
  },
  {
    title: 'Hành động',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button type="primary" icon={<EditOutlined />} onClick={() => handleEdit(record)} />
        <Button danger icon={<DeleteOutlined />} onClick={() => handleDelete(record._id)} />
      </Space>
    ),
  },
];

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleAdd}
        >
          Thêm người dùng
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={userData}
        rowKey="_id"
        loading={loading}

        expandable={{
          expandedRowRender: (record) => (
            <div style={{ margin: 0 }}>
              <p><strong>Mô tả:</strong> {record.des || 'Không có mô tả'}</p>
              <p><strong>Thân thiện với người:</strong> {record.friendly_with_human ? 'Có' : 'Không'}</p>
              <p><strong>Thân thiện với chó:</strong> {record.friendly_with_dog ? 'Có' : 'Không'}</p>
              <p><strong>Thân thiện với mèo:</strong> {record.friendly_with_cat ? 'Có' : 'Không'}</p>
              <p><strong>Chế độ ăn đặc biệt:</strong> {record.special_diet ? 'Có' : 'Không'}</p>
              <p><strong>Đã được dạy vệ sinh:</strong> {record.toilet_trained ? 'Có' : 'Không'}</p>
            </div>
          ),
          rowExpandable: (record) =>
            record.des ||
            record.friendly_with_human ||
            record.friendly_with_dog ||
            record.friendly_with_cat,
        }}
      />

     <Modal
  title={currentUser ? 'Chỉnh sửa người dùng' : 'Thêm người dùng mới'}
  open={isModalVisible}
  onOk={handleSubmit}
  onCancel={() => setIsModalVisible(false)}
  width={700}
  okText={currentUser ? 'Cập nhật' : 'Thêm'}
  cancelText="Hủy"
>
  <Form form={form} layout="vertical">
    {/* Các trường thông tin cơ bản */}
    <Form.Item
      name="name"
      label="Họ và tên"
      rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      name="email"
      label="Email"
      rules={[
        { required: true, message: 'Vui lòng nhập email' },
        { type: 'email', message: 'Email không hợp lệ' }
      ]}
    >
      <Input />
    </Form.Item>

    {!currentUser && (
      <Form.Item
        name="password"
        label="Mật khẩu"
        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
      >
        <Input.Password />
      </Form.Item>
    )}

    <Form.Item
      name="phoneNumber"
      label="Số điện thoại"
      rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
    >
      <Input />
    </Form.Item>

    {/* Trường vai trò */}
    <Form.Item
      name="role"
      label="Vai trò"
      initialValue="user"
    >
      <Select>
        <Option value="user">Người dùng</Option>
        <Option value="admin">Quản trị viên</Option>
      </Select>
    </Form.Item>

    {/* Nếu muốn thêm trường địa chỉ (khi bỏ comment trong schema) */}
    {/* <Form.Item
      name="address"
      label="Địa chỉ"
      rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
    >
      <Input />
    </Form.Item> */}
  </Form>
</Modal>
    </div>
  );
}

export default AdminPet;