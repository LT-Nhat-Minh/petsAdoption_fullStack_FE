import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  message,
  notification,
  Popconfirm,
  Select,
  Space,
  Table,
} from "antd";
import { useEffect, useState } from "react";
import { callDeletePet, callFetchPets } from "../../../../services/api";
import CreatePetModal from "./CreatePetModal";
import UpdatePetModal from "./UpdatePetModal";
const { Option } = Select;
const { TextArea } = Input;

function AdminPet() {
  const [petData, setPetsData] = useState([]); //store petData đã fecthData
  const [updatingPetData, setUpdatingPetData] = useState({}); // store form data
  const [isLoading, setIsLoading] = useState(false);

  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);

  const [currentPet, setCurrentPet] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchAllPets();
  }, [isCreateModalVisible, isUpdateModalVisible]);

  const fetchAllPets = async () => {
    setIsLoading(true);
    try {
      const res = await callFetchPets();
      if (res && res.data) {
        setPetsData(res.data);
      }
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu thú cưng:", error);
      setPetsData([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeletePetByID = async (id) => {
    const res = await callDeletePet(id);
    if (res && res.data) {
      message.success(`Xóa thú cưng thành công, id: ${id}`);
      fetchAllPets();
    } else {
      notification.error({
        message: "Xóa thú cưng thất bại",
        description: res.error,
      });
    }
  };

  const columns = [
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      render: (image) =>
        image ? (
          <img
            src={`${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/petAvatar/${image}`}
            alt="thú cưng"
            style={{ width: 50, height: 50, objectFit: "cover" }}
          />
        ) : (
          "Không có ảnh"
        ),
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name?.localeCompare(b.name),
    },
    {
      title: "Loại",
      dataIndex: "petType",
      key: "petType",
      filters: [
        { text: "Chó", value: "dog" },
        { text: "Mèo", value: "cat" },
        { text: "Khác", value: "other" },
      ],
      onFilter: (value, record) => record.petType === value,
      render: (petType) => {
        switch (petType) {
          case "dog":
            return "Chó";
          case "cat":
            return "Mèo";
          case "other":
            return "Khác";
          default:
            return petType || "N/A";
        }
      },
    },
    {
      title: "Giống",
      dataIndex: "breed",
      key: "breed",
      render: (breed) => breed || "N/A",
    },
    {
      title: "Màu lông",
      dataIndex: "color",
      key: "color",
      render: (color) => color || "N/A",
    },
    {
      title: "Tuổi",
      dataIndex: "age",
      key: "age",
      render: (age) => age || "N/A",
    },
    {
      title: "Cân nặng (kg)",
      dataIndex: "weight",
      key: "weight",
      sorter: (a, b) => (a.weight || 0) - (b.weight || 0),
      render: (weight) => (weight ? `${weight} kg` : "N/A"),
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
      filters: [
        { text: "Đực", value: "male" },
        { text: "Cái", value: "female" },
      ],
      onFilter: (value, record) => record.gender === value,
      render: (gender) => gender || "N/A",
    },
    {
      title: "Đã triệt sản",
      dataIndex: "neutered",
      key: "neutered",
      render: (neutered) => (neutered ? "Có" : "Không"),
    },
    {
      title: "Đã tiêm phòng",
      dataIndex: "vaccinated",
      key: "vaccinated",
      render: (vaccinated) => (vaccinated ? "Có" : "Không"),
    },
    {
      title: "Vắc xin dại",
      dataIndex: "rabies_vaccine",
      key: "rabies_vaccine",
      render: (rabies) => (rabies ? "Có" : "Không"),
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
              setUpdatingPetData(record);
              setIsUpdateModalVisible(true);
            }}
          />
          <Popconfirm
            title="Bạn có chắc chắn muốn xóa người dùng này không?"
            description="Người dùng này sẽ không thể khôi phục lại"
            okText="Xác nhận"
            cancelText="Hủy"
            onConfirm={async () => {
              handleDeletePetByID(record._id);
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
            Thêm thú cưng
          </Button>
        </div>

        <Table
          columns={columns}
          dataSource={petData}
          rowKey="id"
          loading={isLoading}
          expandable={{
            expandedRowRender: (record) => (
              <div style={{ margin: 0 }}>
                <p>
                  <strong>Mô tả:</strong> {record.des || "Không có mô tả"}
                </p>
                <p>
                  <strong>Thân thiện với người:</strong>{" "}
                  {record.friendly_with_human ? "Có" : "Không"}
                </p>
                <p>
                  <strong>Thân thiện với chó:</strong>{" "}
                  {record.friendly_with_dog ? "Có" : "Không"}
                </p>
                <p>
                  <strong>Thân thiện với mèo:</strong>{" "}
                  {record.friendly_with_cat ? "Có" : "Không"}
                </p>
                <p>
                  <strong>Chế độ ăn đặc biệt:</strong>{" "}
                  {record.special_diet ? "Có" : "Không"}
                </p>
                <p>
                  <strong>Đã được dạy vệ sinh:</strong>{" "}
                  {record.toilet_trained ? "Có" : "Không"}
                </p>
              </div>
            ),
            rowExpandable: (record) =>
              record.des ||
              record.friendly_with_human ||
              record.friendly_with_dog ||
              record.friendly_with_cat,
          }}
        />
      </div>
      <CreatePetModal
        isCreateModalVisible={isCreateModalVisible}
        setIsCreateModalVisible={setIsCreateModalVisible}
      />
      <UpdatePetModal
        updatingPetData={updatingPetData}
        isUpdateModalVisible={isUpdateModalVisible}
        setIsUpdateModalVisible={setIsUpdateModalVisible}
      />
    </div>
  );
}

export default AdminPet;
