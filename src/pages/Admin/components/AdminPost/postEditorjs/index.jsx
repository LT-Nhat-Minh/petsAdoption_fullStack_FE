import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Form,
  Input,
  message,
  Modal,
  Row,
  Splitter,
  Typography,
  Upload,
} from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EditorJS from "../../../../../components/EditorJS";
import {
  callCreatePost,
  callFetchUsers,
  callUpdatePost,
  callUploadImage,
} from "../../../../../services/api";
import "./style.scss";

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
  const [outPutData, setOutPutData] = useState(INITIAL_DATA);

  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();
  const user = useSelector((state) => state.account.user);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [uploadedThumbnail, setUploadedThumbnail] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const [initForm, setInitForm] = useState({});
  const [tempImageFile, setTempImageFile] = useState({});

  useEffect(() => {
    if (props.post?._id) {
      const fetchAuthorName = async () => {
        const res = await callFetchUsers(props.post.authorID);
        let authorName = "unknown";
        if (res && res.data) {
          authorName = res.data.name;
        }
        const arrPostThumbnail = [
          props.post?.thumbnail &&
          props.post?.thumbnail !== "null" &&
          props.post?.thumbnail !== undefined
            ? {
                uid: "-1",
                name: props.post?.thumbnail,
                status: "done",
                url: `${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/postThumbnail/${props.post.thumbnail}`,
              }
            : {
                uid: "-1",
                name: "default.png",
                status: "done",
                url: `${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/default/postThumbnail.png`,
              },
        ];

        let parsedBlocks = props.post.blocks;
        if (typeof parsedBlocks === "string") {
          try {
            parsedBlocks = JSON.parse(parsedBlocks);
          } catch (e) {
            parsedBlocks = INITIAL_DATA.blocks;
          }
        }

        console.log("parsedBlocks", parsedBlocks);

        const initForm = {
          time: "null",
          title: props.post?.title,
          blocks: parsedBlocks,
          authorID: props.post?.authorID,
          authorName: authorName,
          lastModifiedBy: user._id,
          editor: user.name,
          postThumbnail: arrPostThumbnail[0],
        };

        setInitForm(initForm);
      };
      fetchAuthorName();
    } else {
      const initForm = {
        blocks: INITIAL_DATA.blocks,
        authorID: user._id,
        authorName: user.name,
        lastModifiedBy: user._id,
        editor: user.name,
      };
      setInitForm(initForm);
    }
  }, [props.post]);

  useEffect(() => {
    if (Object.keys(initForm).length > 0) {
      //if not the first time
      if (
        JSON.stringify(INITIAL_DATA.blocks) !== JSON.stringify(initForm.blocks)
      ) {
        setData({
          blocks: initForm.blocks,
        });
      }

      form.setFieldsValue(initForm);
      console.log("form.getFieldsValue()", form.getFieldsValue());
    }
    return () => {
      form.resetFields();
    };
  }, [initForm]);

  const onFinish = async (values) => {
    console.log("values onfinish", values);
    props.setIsSubmitting(true);

    // Check if the blocks are empty
    if (!values.blocks || values.blocks.length === 0) {
      message.error("Vui lòng không để trống nội dung bài viết");
    }

    // check if the thumbnail is empty and tempImageFile is not empty
    if (!values.postThumbnail && !values.postThumbnail?.name) {
      values.postThumbnail = {
        uid: "-1",
        name: "default.png",
        status: "done",
        url: `${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/default/postThumbnail.png`,
      };
      values.thumbnail = values.postThumbnail.name;
    }

    // Check if the you are editing an existing post
    if (props.post && props.post._id) {
      const formData = new FormData();

      const response = await fetch(
        values.postThumbnail && values.postThumbnail.url
          ? `${values.postThumbnail.url}`
          : `${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/default/postThumbnail.png`
      );

      const blob = await response.blob();
      const file = new File(
        [blob],
        values.postThumbnail?.name ?? "default.png",
        {
          type: response.headers.get("Content-Type"),
        }
      );
      const fileList = {
        uid: "-1",
        name: values.postThumbnail?.name ?? "default.png",
        status: "done",
        originFileObj: file,
      };

      formData.append("title", values.title);
      formData.append("blocks", JSON.stringify(outPutData.blocks));
      formData.append("authorID", values.authorID);
      formData.append("authorName", values.authorName);
      formData.append("lastModifiedBy", values.lastModifiedBy);
      formData.append("editor", values.editor);
      formData.append("thumbnail", fileList.originFileObj.name);
      formData.append("postThumbnail", fileList.originFileObj);
      formData.append("id", props.post._id);

      console.log("callUpdatePost, >>values");
      for (let pair of formData.entries()) {
        console.log(pair[0] + ":", pair[1]);
      }

      // const res = await callUpdatePost(formData);
      // if (res && res.data) {
      //   message.success("Post updated successfully");
      //   props.setIsSubmitting(false);
      // } else {
      //   message.error("Failed to update post");
      // }
    } else {
      const formData = new FormData();

      console.log("outPutData", outPutData);

      formData.append("title", values.title);
      formData.append("blocks", JSON.stringify(outPutData.blocks));
      formData.append("authorID", values.authorID);
      formData.append("authorName", values.authorName);
      formData.append("lastModifiedBy", values.lastModifiedBy);
      formData.append("editor", values.editor);
      formData.append("thumbnail", values.thumbnail);
      formData.append("postThumbnail", values.postThumbnail);

      for (let pair of formData.entries()) {
        console.log("createPost >>> formData", pair[0] + ":", pair[1]);
      }

      const res = await callCreatePost(formData);
      if (res && res.data) {
        console.log("res", res);
        props.setIsSubmitting(false);
        message.success("Post created successfully");

        // Reset the form fields
        form.resetFields();

        setInitForm({
          blocks: INITIAL_DATA.blocks,
          authorID: user._id,
          authorName: user.name,
          lastModifiedBy: user._id,
          editor: user.name,
        });
      } else {
        console.log(res);
        message.error("Failed to create post");
      }
    }
  };

  const handleUploadFileThumbnail = async ({ file, onSuccess, onError }) => {
    setIsLoading(true);

    const formData = new FormData();

    formData.append("temp", file);

    for (let pair of formData.entries()) {
      console.log("createPost >>> formData", pair[0] + ":", pair[1]);
    }

    const res = await callUploadImage(formData);
    if (res && res.data) {
      const file = res.data;
      console.log("file", file);

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/temp/${file.filename}`
      );
      const blob = await response.blob();
      const newFile = new File([blob], file.originalname, {
        type: response.headers.get("Content-Type"),
      });
      const fileList = {
        uid: "-1",
        name: newFile.name,
        status: "done",
        originFileObj: newFile,
      };

      console.log("fileList", fileList);

      // setTempImageFile(fileList.originFileObj);
      form.setFieldsValue({
        postThumbnail: fileList.originFileObj,
        thumbnail: fileList.name,
      });

      //check form values
      const formValues = form.getFieldsValue();
      console.log("formValues", formValues);

      onSuccess("ok");
      setIsLoading(false);
    } else {
      onError("đã xảy ra lỗi");
      setIsLoading(false);
      message.error("Upload file thất bại");
    }
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 5;
    if (!isLt2M) {
      message.error("Image must smaller than 5MB!");
    }
    return isJpgOrPng && isLt2M;
    // || Upload.LIST_IGNORE;
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
            <div>
              <Typography.Title
                level={3}
                style={{
                  textAlign: "center",
                  margin: 0,
                  padding: "24px 0 12px 0",
                }}
              >
                {props.post && props.post._id
                  ? "Chỉnh sửa bài viết"
                  : "Tạo bài viết mới"}
              </Typography.Title>
              <EditorJS
                data={data}
                setData={setData}
                editorBlock="editorjs"
                setOutPutData={setOutPutData}
                isSubmitting={props.isSubmitting}
              />
            </div>
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
              Thông tin bài viết
            </Typography.Title>
            <Form form={form} onFinish={onFinish}>
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
                    name="postThumbnail"
                  >
                    <Upload
                      name="thumbnail"
                      listType="picture-card"
                      className="thumbnail-uploader"
                      maxCount={1}
                      multiple={false}
                      customRequest={handleUploadFileThumbnail}
                      beforeUpload={beforeUpload}
                      onChange={() => {}}
                      onRemove={() => {}}
                      onPreview={() => {}}
                    >
                      <div>{uploadButton}</div>
                    </Upload>
                    <Modal
                      open={previewOpen}
                      title={previewTitle}
                      footer={null}
                      onCancel={() => {
                        setPreviewOpen(false);
                      }}
                    >
                      <img alt="example" style={{ width: "100%" }} src={""} />
                    </Modal>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="authorID" name="authorID">
                    <Input disabled />
                  </Form.Item>
                  <Form.Item label="lastModifiedBy" name="lastModifiedBy">
                    <Input disabled />
                  </Form.Item>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    label="Tác giả"
                    name="authorName"
                  >
                    <Input disabled />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    label="Đang được chỉnh sửa bởi"
                    name="editor"
                  >
                    <Input disabled />
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
                    htmlType="submit"
                    // loading={isSubmit}
                  >
                    Đăng bài
                  </Button>
                </Col>
              </Row>
              <Form.Item
                name="blocks"
                style={{
                  display: "none",
                }}
                initialValue={data.blocks}
                rules={[{ required: true, message: "Vui lòng nhập nội dung" }]}
              >
                <Input.TextArea
                  style={{
                    display: "none",
                  }}
                />
              </Form.Item>
              <Form.Item
                name="thumbnail"
                style={{
                  display: "none",
                }}
              ></Form.Item>
            </Form>
          </Col>
        </Splitter.Panel>
      </Splitter>
    </>
  ); // cspell:ignore editorjs
}

export default PostEditorJS; // cspell:ignore Editorjs
