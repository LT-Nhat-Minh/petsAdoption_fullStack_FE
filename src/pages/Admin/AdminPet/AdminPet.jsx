import { DeleteOutlined, EditOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, message, Modal, Select, Space, Switch, Table, Upload } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { callCreatePet, callDeletePet, callFetchPets, callUpdatePet } from '../../../services/api';
const { Option } = Select;
const { TextArea } = Input;

function AdminPet() {
  const [petData, setPetsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentPet, setCurrentPet] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchAllPets();
  }, []);

  const fetchAllPets = async () => {
    setLoading(true);
    try {
      const res = await callFetchPets();
      if (res && res.data) {
        const rawList = res.data || [];
        setPetsData(Array.isArray(rawList) ? rawList : []);
      }
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu thú cưng:', error);
      setPetsData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setCurrentPet(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEdit = async (pet) => {
    setCurrentPet(pet);
    let fileList = [];
    if (pet.image) {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/${pet.image}`);
        const blob = await response.blob();
        const file = new File([blob], pet.image, { type: blob.type });
        fileList = [{ uid: '-1', name: pet.image, status: 'done', originFileObj: file }];
      } catch (error) {
        console.error('Error fetching image file:', error);
      }
    }
    form.setFieldsValue({
      ...pet,
      image: fileList
    });
    setIsModalVisible(true);
  };

  const handleDelete = async (id) => {
    Modal.confirm({
      title: 'Xác nhận xóa',
      content: 'Bạn có chắc chắn muốn xóa thú cưng này?',
      okText: 'Xóa',
      cancelText: 'Hủy',
      onOk: async () => {
        try {
          console.log('id', id)
          await callDeletePet(id);
          message.success('Xóa thú cưng thành công');
          fetchAllPets();
        } catch (error) {
          message.error('Xóa thú cưng thất bại');
        }
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log('Form values:', values);

      // Chuẩn bị dữ liệu
      const petData = {
        name: values.name || '',
        breed: values.breed || '',
        color: values.color || '',
        age: values.age || '',
        weight: values.weight || '',
        gender: values.gender || '',
        neutered: values.neutered || false,
        rabies_vaccine: values.rabies_vaccine || false,
        vaccinated: values.vaccinated || false,
        friendly_with_human: values.friendly_with_human || false,
        friendly_with_dog: values.friendly_with_dog || false,
        friendly_with_cat: values.friendly_with_cat || false,
        special_diet: values.special_diet || false,
        toilet_trained: values.toilet_trained || false,
        des: values.des || '',
        petType: values.petType || '',
      };

      const formData = new FormData();

      // Thêm ID vào formData nếu là cập nhật
      if (currentPet && currentPet._id) {
        formData.append('id', currentPet._id);
      }

      // Thêm các trường dữ liệu vào formData
      for (const key in petData) {
        formData.append(key, petData[key]);
      }

      // Xử lý ảnh upload
      if (values.image && values.image[0]?.originFileObj) {
        formData.append('petAvatarImage', values.image[0].originFileObj);
      } else if (currentPet && currentPet.image) {
        // Nếu không có ảnh mới, giữ nguyên ảnh cũ
        formData.append('existingImage', currentPet.image);
      }

      // Gọi API phù hợp
      if (currentPet && currentPet._id) {
        console.log('>>>formData', formData);
        await callUpdatePet(formData);
        message.success('Cập nhật thú cưng thành công');
      } else {
        await callCreatePet(formData);
        message.success('Thêm thú cưng thành công');
      }

      setIsModalVisible(false);
      setCurrentPet(null);
      fetchAllPets();
    } catch (error) {
      console.error('Lỗi khi lưu thú cưng:', error);
      message.error(error.response?.data?.message || 'Lỗi khi lưu thú cưng');
    }
  };

  const columns = [
    {
      title: 'Ảnh',
      dataIndex: 'image',
      key: 'image',
      render: (image) => (
        image ? (
          <img
            src={`${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/${image}`}
            alt="thú cưng"
            style={{ width: 50, height: 50, objectFit: 'cover' }}
          />
        ) : 'Không có ảnh'
      ),
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name?.localeCompare(b.name),
    },
    {
      title: 'Loại',
      dataIndex: 'petType',
      key: 'petType',
      filters: [
        { text: 'Chó', value: 'dog' },
        { text: 'Mèo', value: 'cat' },
        { text: 'Khác', value: 'other' },
      ],
      onFilter: (value, record) => record.petType === value,
      render: (petType) => {
        switch (petType) {
          case 'dog':
            return 'Chó';
          case 'cat':
            return 'Mèo';
          case 'other':
            return 'Khác';
          default:
            return petType || 'N/A';
        }
      },
    },
    {
      title: 'Giống',
      dataIndex: 'breed',
      key: 'breed',
      render: (breed) => breed || 'N/A',
    },
    {
      title: 'Màu lông',
      dataIndex: 'color',
      key: 'color',
      render: (color) => color || 'N/A',
    },
    {
      title: 'Tuổi',
      dataIndex: 'age',
      key: 'age',
      render: (age) => age || 'N/A',
    },
    {
      title: 'Cân nặng (kg)',
      dataIndex: 'weight',
      key: 'weight',
      sorter: (a, b) => (a.weight || 0) - (b.weight || 0),
      render: (weight) => weight ? `${weight} kg` : 'N/A',
    },
    {
      title: 'Giới tính',
      dataIndex: 'gender',
      key: 'gender',
      filters: [
        { text: 'Đực', value: 'male' },
        { text: 'Cái', value: 'female' },
      ],
      onFilter: (value, record) => record.gender === value,
      render: (gender) => gender || 'N/A',
    },
    {
      title: 'Đã triệt sản',
      dataIndex: 'neutered',
      key: 'neutered',
      render: (neutered) => (neutered ? 'Có' : 'Không'),
    },
    {
      title: 'Đã tiêm phòng',
      dataIndex: 'vaccinated',
      key: 'vaccinated',
      render: (vaccinated) => (vaccinated ? 'Có' : 'Không'),
    },
    {
      title: 'Vắc xin dại',
      dataIndex: 'rabies_vaccine',
      key: 'rabies_vaccine',
      render: (rabies) => (rabies ? 'Có' : 'Không'),
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record._id)}
          />
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
          Thêm thú cưng
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={petData}
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
        title={currentPet ? 'Chỉnh sửa thú cưng' : 'Thêm thú cưng mới'}
        open={isModalVisible}
        onOk={handleSubmit}
        onCancel={() => setIsModalVisible(false)}
        width={700}
        okText={currentPet ? 'Cập nhật' : 'Thêm'}
        cancelText="Hủy"
      >
        <Form form={form} layout="vertical">
          {/* Các trường bắt buộc */}
          <Form.Item
            name="name"
            label="Tên"
            rules={[{ required: true, message: 'Vui lòng nhập tên thú cưng' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="petType"
            label="Loại"
            rules={[{ required: true, message: 'Vui lòng chọn loại thú cưng' }]}
          >
            <Select>
              <Option value="dog">Chó</Option>
              <Option value="cat">Mèo</Option>
              <Option value="other">Khác</Option>
            </Select>
          </Form.Item>

          {/* Các trường thông tin cơ bản */}
          <Form.Item name="breed" label="Giống">
            <Input />
          </Form.Item>

          <Form.Item name="color" label="Màu lông">
            <Input />
          </Form.Item>

          <Form.Item name="age" label="Tuổi">
            <Input />
          </Form.Item>

          <Form.Item
            name="weight"
            label="Cân nặng (kg)"

          >
            <InputNumber step="0.1" />
          </Form.Item>

          <Form.Item name="gender" label="Giới tính">
            <Select>
              <Option value="Đực">Đực</Option>
              <Option value="Cái">Cái</Option>
            </Select>
          </Form.Item>

          {/* Trường ảnh */}
          <Form.Item
            name="image"
            label="Ảnh"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              listType="picture"
              beforeUpload={() => false}
              maxCount={1}
              accept="image/*"
            >
              <Button icon={<UploadOutlined />}>Tải ảnh lên</Button>
            </Upload>
          </Form.Item>

          {/* Các trường boolean */}
          <Form.Item
            name="neutered"
            label="Đã triệt sản"
            valuePropName="checked"
            initialValue={false}
          >
            <Switch />
          </Form.Item>

          <Form.Item
            name="vaccinated"
            label="Đã tiêm phòng"
            valuePropName="checked"
            initialValue={false}
          >
            <Switch />
          </Form.Item>

          <Form.Item
            name="rabies_vaccine"
            label="Vắc xin dại"
            valuePropName="checked"
            initialValue={false}
          >
            <Switch />
          </Form.Item>

          <Form.Item
            name="friendly_with_human"
            label="Thân thiện với người"
            valuePropName="checked"
            initialValue={false}
          >
            <Switch />
          </Form.Item>

          <Form.Item
            name="friendly_with_dog"
            label="Thân thiện với chó"
            valuePropName="checked"
            initialValue={false}
          >
            <Switch />
          </Form.Item>

          <Form.Item
            name="friendly_with_cat"
            label="Thân thiện với mèo"
            valuePropName="checked"
            initialValue={false}
          >
            <Switch />
          </Form.Item>

          <Form.Item
            name="special_diet"
            label="Chế độ ăn đặc biệt"
            valuePropName="checked"
            initialValue={false}
          >
            <Switch />
          </Form.Item>

          <Form.Item
            name="toilet_trained"
            label="Đã được dạy vệ sinh"
            valuePropName="checked"
            initialValue={false}
          >
            <Switch />
          </Form.Item>

          {/* Mô tả */}
          <Form.Item name="des" label="Mô tả">
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default AdminPet;