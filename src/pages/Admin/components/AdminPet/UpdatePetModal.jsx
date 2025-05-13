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
import { callCreatePet, callUpdatePet } from "../../../../services/api";
import { useEffect } from "react";
const { Option } = Select;
const { TextArea } = Input;

function UpdatePetModal(props) {
  const [form] = Form.useForm();
  const { updatingPetData, isUpdateModalVisible, setIsUpdateModalVisible } =
    props;

  useEffect(() => {
    const fetchImageAndSetForm = async () => {
      if (updatingPetData) {
        let fileList = [];

        // Fetch the image from the backend if it exists
        if (updatingPetData.image) {
          const response = await fetch(
            `${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/${updatingPetData.image}`
          );
          const blob = await response.blob();
          const file = new File([blob], updatingPetData.image, {
            type: response.headers.get("Content-Type"),
          });
          fileList = [
            {
              uid: "-1",
              name: updatingPetData.image,
              status: "done",
              originFileObj: file,
            },
          ];
        }

        // Set the form values with the fetched image
        form.setFieldsValue({
          ...updatingPetData,
          petAvatar: fileList,
        });
      }
    };

    fetchImageAndSetForm();
  }, [updatingPetData]);

  const handleUpdatePet = async () => {
    let values = form.getFieldsValue();

    // Create a FormData object to handle file uploads
    const formData = new FormData();

    // Thêm các trường dữ liệu vào formData
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    // Chú ý: id không nằm trong values
    formData.append("id", updatingPetData._id);

    // Xử lý trường ảnh
    if (values.image && values.image[0]?.originFileObj) {
      formData.append("petAvatar", values.image[0].originFileObj);
    }

    const res = await callUpdatePet(formData);
    if (res && res.data) {
      message.success("Pet updated successfully");
      form.resetFields(); // Reset the form fields
      setIsUpdateModalVisible(false);
    } else {
      notification.error({
        message: "Failed to update pet",
        description: res.error,
      });
    }
  };
  return (
    <Modal
      title={"Chỉnh sửa thú cưng"}
      open={isUpdateModalVisible}
      onOk={async () => {
        await handleUpdatePet();
      }}
      onCancel={() => {
        setIsUpdateModalVisible(false);
        form.resetFields();
      }}
      width={700}
      okText={"Cập nhật"}
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
            return e?.fileList;
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

export default UpdatePetModal;
