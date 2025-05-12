import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, message, notification, Popconfirm, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { callDeleteUser, callFetchUsers } from "../../../../services/api";
import CreateUserModal from "./createUserModal";
import UpdateUserModal from "./updateUserModal";

function AdminUser() {
  const [userData, setUserData] = useState([]); // Danh sách người dùng đã fecthData
  const [updatingUserData, setUpdatingUserData] = useState({}); // Dữ liệu người dùng đang cập nhật
  const [isLoading, setIsLoading] = useState(false);
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);

  useEffect(() => {
    fetchAllUsers();
  }, [isCreateModalVisible, isUpdateModalVisible]);

  const fetchAllUsers = async () => {
    setIsLoading(true);
    try {
      const res = await callFetchUsers();
      if (res && res.data) {
        const rawList = res.data || [];
        setUserData(Array.isArray(rawList) ? rawList : []);
      }
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu thú cưng:", error);
      setUserData([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteUser = async (id) => {
    const res = await callDeleteUser(id);
    if (res && res.data) {
      message.success("Xóa người dùng thành công");
      fetchAllUsers();
    } else {
      notification.error({
        message: "Xóa người dùng thất bại",
        description: res.error,
      });
    }
  };

  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (name) => name || "N/A",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (email) => email || "N/A",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      render: (phone) => phone || "N/A",
    },
    {
      title: "Vai trò",
      dataIndex: "role",
      key: "role",
      filters: [
        { text: "Người dùng", value: "user" },
        { text: "Quản trị", value: "admin" },
      ],
      onFilter: (value, record) => record.role === value,
      render: (role) => {
        switch (role) {
          case "admin":
            return "Quản trị viên";
          case "user":
            return "Người dùng";
          default:
            return role || "N/A";
        }
      },
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) => (date ? new Date(date).toLocaleDateString() : "N/A"),
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    },
    {
      title: "Ngày cập nhật",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (date) => (date ? new Date(date).toLocaleDateString() : "N/A"),
      sorter: (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => {
              setUpdatingUserData(record);
              setIsUpdateModalVisible(true);
            }}
          />
          <Popconfirm
            title="Bạn có chắc chắn muốn xóa người dùng này không?"
            description="Người dùng này sẽ không thể khôi phục lại"
            okText="Xác nhận"
            cancelText="Hủy"
            onConfirm={async () => {
              handleDeleteUser(record._id);
            }}
          >
            <Button danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => {
              setIsCreateModalVisible(!isCreateModalVisible);
            }}
          >
            Thêm người dùng
          </Button>
        </div>

        <Table
          columns={columns}
          dataSource={userData}
          rowKey="_id"
          loading={isLoading}
        />
      </div>
      <CreateUserModal
        isCreateModalVisible={isCreateModalVisible}
        setIsCreateModalVisible={setIsCreateModalVisible}
      />
      <UpdateUserModal
        updatingUserData={updatingUserData}
        isUpdateModalVisible={isUpdateModalVisible}
        setIsUpdateModalVisible={setIsUpdateModalVisible}
      />
    </div>
  );
}

export default AdminUser;
