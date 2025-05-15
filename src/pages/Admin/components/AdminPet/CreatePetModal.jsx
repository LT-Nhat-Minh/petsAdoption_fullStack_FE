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
import { callCreatePet, callUploadImage } from "../../../../services/api";
import { useEffect, useState } from "react";
const { Option } = Select;
const { TextArea } = Input;

function CreatePetModal(props) {
  const [form] = Form.useForm();
  const { isCreateModalVisible, setIsCreateModalVisible } = props;
  const [imageFile, setImageFile] = useState(null); //store image file url for "Upload" component

  useEffect(() => {
    form.resetFields(); // Reset the form fields when the modal is closed
    setImageFile(null); // Reset the image file
  }, [isCreateModalVisible]);

  const handleCreatePet = async () => {
    const values = form.getFieldsValue();

    const formData = new FormData();

    // Append all form values to the FormData object
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

    // Handle the image upload
    if (!values.petAvatar) {
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

    const res = await callCreatePet(formData);
    if (res && res.data) {
      message.success("Thêm thú cưng thành công");
      form.resetFields(); // Reset the form fields
      setImageFile(null); // Reset the image file
      props.setIsCreateModalVisible(false);
    } else {
      notification.error({
        message: "Thêm thú cưng thất bại",
        description: res.error,
      });
    }
  };

  const handleUploadFile = async (options) => {
    const { file, onSuccess, onError } = options;

    console.log("file", file);
    const formData = new FormData();
    formData.append("temp", file);

    const res = await callUploadImage(formData);
    console.log("res", res);

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

      //set ImageFile for "Upload" component to show the image
      setImageFile([
        {
          url: `${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/temp/${res.data.filename}`,
        },
      ]);

      //set ImageFile for "Upload" component to show the image
    } else {
      notification.error({
        message: "Failed to upload image",
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
        <Form.Item name="petAvatar" label="petAvatar" hidden={true} />
        <Form.Item name="image" label="Ảnh">
          <Upload
            listType="picture"
            maxCount={1}
            customRequest={handleUploadFile}
            onRemove={(file) => {
              setImageFile(null);
              form.setFieldsValue({
                image: null,
                petAvatar: null,
              });
            }}
            fileList={imageFile}
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
