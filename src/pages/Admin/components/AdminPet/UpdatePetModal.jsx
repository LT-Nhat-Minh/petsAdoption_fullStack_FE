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
import {
  callCreatePet,
  callUpdatePet,
  callUploadImage,
} from "../../../../services/api";
import { useEffect, useState } from "react";
const { Option } = Select;
const { TextArea } = Input;

function UpdatePetModal(props) {
  const [form] = Form.useForm();
  const {
    updatingPetData,
    setUpdatingPetData,
    isUpdateModalVisible,
    setIsUpdateModalVisible,
  } = props;
  const [imageFile, setImageFile] = useState([]);

  useEffect(() => {
    const fetchImageAndSetForm = async () => {
      if (updatingPetData) {
        // Fetch the image from the backend if it exists
        if (updatingPetData.image) {
          const response = await fetch(
            `${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/petAvatar/${updatingPetData.image}`
          );
          const blob = await response.blob();
          const file = new File([blob], updatingPetData.image, {
            type: response.headers.get("Content-Type"),
          });
          const fileList = {
            uid: "-1",
            name: updatingPetData.image,
            status: "done",
            originFileObj: file,
          };

          // Set the form values with the fetched image
          form.setFieldsValue({
            ...updatingPetData,
            petAvatar: fileList.originFileObj,
          });

          // Set the image file for the "Upload" component to show the image
          setImageFile([
            {
              url: `${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/petAvatar/${updatingPetData.image}`,
            },
          ]);
        }
      } else {
        setImageFile(null);
        form.resetFields();
      }
    };

    fetchImageAndSetForm();
  }, [updatingPetData]);

  const handleUploadFile = async (options) => {
    const { file, onSuccess, onError } = options;

    const formData = new FormData();
    formData.append("temp", file);

    const res = await callUploadImage(formData);

    if (res && res.data) {
      const file = res.data;

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/temp/${file.filename}`
      );
      const blob = await response.blob();
      const newFile = new File([blob], file.filename, {
        type: response.headers.get("Content-Type"),
      });
      const fileList = {
        uid: "-1",
        name: file.filename,
        status: "done",
        originFileObj: newFile,
      };

      form.setFieldsValue({
        petAvatar: fileList.originFileObj,
      });

      console.log("values", form.getFieldsValue());

      //set ImageFile for "Upload" component to show the image
      setImageFile([
        {
          url: `${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/temp/${res.data.filename}`,
        },
      ]);
    } else {
      notification.error({
        message: "Failed to upload image",
        description: res.error,
      });
    }
  };

  const handleRemoveFile = (file) => {
    setImageFile(null);
    form.setFieldsValue({ petAvatar: null, image: null });
    return true;
  };

  const handleUpdatePet = async () => {
    let values = form.getFieldsValue();

    // Create a FormData object to handle file uploads
    const formData = new FormData();

    // Thêm các trường dữ liệu vào formData
    formData.append("name", values.name);
    formData.append("breed", values.breed || "");
    formData.append("color", values.color || "");
    formData.append("age", values.age || "");
    formData.append("weight", values.weight || "");
    formData.append("gender", values.gender || "");
    formData.append("neutered", values.neutered || false);
    formData.append("vaccinated", values.vaccinated || false);
    formData.append("rabies_vaccine", values.rabies_vaccine || false);
    formData.append("friendly_with_human", values.friendly_with_human || false);
    formData.append("friendly_with_dog", values.friendly_with_dog || false);
    formData.append("friendly_with_cat", values.friendly_with_cat || false);
    formData.append("special_diet", values.special_diet || false);
    formData.append("toilet_trained", values.toilet_trained || false);
    formData.append("des", values.des || "");
    formData.append("petType", values.petType || "");

    // Chú ý: id không nằm trong values
    formData.append("id", updatingPetData._id);

    // Xử lý trường ảnh
    // Nếu không có ảnh nào được chọn, sử dụng ảnh mặc định
    if (!values.petAvatar) {
      console.log("values.petAvatar", values.petAvatar);
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/default/petAvatar.png`
      );
      const blob = await res.blob();
      const file = new File([blob], "default.png", {
        type: res.headers.get("Content-Type"),
      });
      const fileList = {
        uid: "-1",
        name: file.name,
        status: "done",
        originFileObj: file,
      };

      formData.append("petAvatar", fileList.originFileObj);
    } else {
      formData.append("petAvatar", values.petAvatar);
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
    setUpdatingPetData({});
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
        <Form.Item name="image" label="Ảnh">
          <Upload
            listType="picture"
            maxCount={1}
            customRequest={handleUploadFile}
            onRemove={handleRemoveFile}
            fileList={imageFile}
          >
            <Button icon={<UploadOutlined />}>Tải ảnh lên</Button>
          </Upload>
        </Form.Item>
        <Form.Item name="petAvatar" label="Ảnh thú cưng" hidden={true} />

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
