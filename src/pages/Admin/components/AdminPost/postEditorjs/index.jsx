import { useState } from "react";
import EditorJS from "../../../../../components/EditorJS";
import "./style.scss";
import { callCreatePost } from "../../../../../services/api";
import {
  Input,
  Splitter,
  Form,
  Col,
  Row,
  Typography,
  Upload,
  Button,
} from "antd";
import { Label } from "@mui/icons-material";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "Nội dung bài viết",
        level: 1,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "Nhập nội dung bài viết tại đây",
      },
    },
  ],
};

function PostEditorJS(props) {
  const [data, setData] = useState(INITIAL_DATA);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data) => {
    if (!data.blocks || data.blocks.length === 0) {
      return;
    }

    props.setIsSubmitting(true);
    const { blocks } = data;
    const res = await callCreatePost({
      title: "test",
      blocks,
    });
    if (res && res.data) {
      console.log("Create post successfully", res.data);
    } else {
      console.error("Create post failed", res.error);
    }
    props.setIsSubmitting(false);
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  return (
    <>
      <Splitter
        style={{ height: "auto", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
      >
        <Splitter.Panel defaultSize="60%" min="60%" max="80%">
          <div
            style={{
              paddingLeft: "60px",
              paddingRight: "60px",
              //fitparent,
              height: "100%",
              width: "100%",
            }}
          >
            <EditorJS
              data={data}
              setData={setData}
              editorBlock="editorjs-container"
            />
          </div>
        </Splitter.Panel>
        <Splitter.Panel>
          <Col span={20} offset={2} style={{ marginBottom: "24px" }}>
            <Typography.Title
              level={3}
              style={{
                textAlign: "center",
              }}
            >
              Tạo bài viết mới
            </Typography.Title>
            <Form>
              <Row gutter={24}>
                <Col span={24}>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    label="Tiêu đề"
                    name="title"
                    rules={[
                      { required: true, message: "Vui lòng nhập tiêu đề" },
                    ]}
                  >
                    <Input placeholder="Nhập tiêu đề bài viết" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    label="Upload Thumbnail"
                    name="thumbnail"
                  >
                    <Upload
                      name="thumbnail"
                      listType="picture-card"
                      className="thumbnail-uploader"
                      maxCount={1}
                      multiple={false}
                      // customRequest={handleUploadFileSlider}
                      // beforeUpload={beforeUpload}
                      // onChange={(info) => handleChange(info, "slider")}
                      // onRemove={(file) => handleRemoveFile(file, "slider")}
                      // onPreview={handlePreview}
                      // defaultFileList={initForm?.slider ?? []}
                    >
                      <div>{uploadButton}</div>
                    </Upload>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    label="Tác giả"
                    name="authorID"
                  >
                    <Input placeholder="abc" disabled />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    label="Đang được chỉnh sửa bởi"
                    name="lastModifiedBy"
                  >
                    <Input placeholder="abc" disabled />
                  </Form.Item>
                </Col>
                <Col
                  span={24}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    type="primary"
                    // htmlType="submit"
                    // loading={isSubmit}
                    onClick={async () => {
                      await handleSubmit(data);
                    }}
                  >
                    Đăng bài
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Splitter.Panel>
      </Splitter>
    </>
  ); // cspell:ignore editorjs
}

export default PostEditorJS; // cspell:ignore Editorjs
