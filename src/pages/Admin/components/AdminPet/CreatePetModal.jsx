import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  notification,
  Select,
  Switch,
  Upload,
} from "antd";
import { callCreatePet } from "../../../../services/api";
const { Option } = Select;
const { TextArea } = Input;

function CreatePetModal(props) {
  const [form] = Form.useForm();
  const { isCreateModalVisible, setIsCreateModalVisible } = props;

  const handleCreatePet = async () => {
    const values = form.getFieldsValue();

    const formData = new FormData();

    // Append all form values to the FormData object
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    // Handle the image upload
    if (values.image && values.image[0].originFileObj) {
      formData.append("petAvatar", values.image[0].originFileObj);
    }

    const res = await callCreatePet(formData);
    if (res && res.data) {
      message.success("Thêm thú cưng thành công");
      form.resetFields(); // Reset the form fields
      props.setIsCreateModalVisible(false);
    } else {
      notification.error({
        message: "Thêm thú cưng thất bại",
        description: res.error,
      });
    }
  };
  return (
    <Modal
      title={"Thêm thú cưng mới"}
      open={props.isCreateModalVisible}
      onOk={handleCreatePet}
      onCancel={() => {
        props.setIsCreateModalVisible(false);
        form.resetFields();
      }}
      width={700}
      okText={"Thêm"}
      cancelText="Hủy"
    >
      <Form form={form} layout="vertical">
        {/* Các trường bắt buộc */}
        <Form.Item
          name="name"
          label="Tên"
          rules={[{ required: true, message: "Vui lòng nhập tên thú cưng" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="petType"
          label="Loại"
          rules={[{ required: true, message: "Vui lòng chọn loại thú cưng" }]}
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

        <Form.Item name="weight" label="Cân nặng (kg)">
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
          getValueFromEvent={(e) => {
            if (Array.isArray(e)) {
              return e;
            }
            return e && e.fileList;
          }}
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
  );
}

export default CreatePetModal;
