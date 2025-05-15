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
import { useEffect, useRef, useState } from "react";
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
  const [data, setData] = useState(INITIAL_DATA); //for saving editorjs data, controlling when create or edit post, the data is set to re-render the editorjs by using useEffect
  const [outPutData, setOutPutData] = useState(INITIAL_DATA); //for saving editorjs output data

  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();
  const user = useSelector((state) => state.account.user);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [uploadedThumbnailURL, setUploadedThumbnailURL] = useState([]); //for init form upload image when edit post
  const [previewTitle, setPreviewTitle] = useState("");

  const [initForm, setInitForm] = useState({}); //for init form data whenever edit post or create post

  const [hasRunOnce, setHasRunOnce] = useState(false); //for handle editorjs render twice

  useEffect(() => {
    console.log("i fire once");
    setHasRunOnce(true);
    if (props.post?._id) {
      const fetchAuthorName = async () => {
        const res = await callFetchUsers(props.post.authorID);
        let authorName = "unknown";
        if (res && res.data) {
          authorName = res.data.name;
        }

        console.log("props.post", props.post);

        //fetch post thumbnail
        const resFetchPostThumbnail = await fetch(
          props.post?.thumbnail
            ? `${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/postThumbnail/${props.post?.thumbnail}`
            : `${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/default/postThumbnail.png`
        );

        console.log("resFetchPostThumbnail", resFetchPostThumbnail);

        //create a new file from the blob
        const blob = await resFetchPostThumbnail.blob();
        const file = new File([blob], resFetchPostThumbnail.filename, {
          type: resFetchPostThumbnail.headers.get("Content-Type"),
        });
        const fileList = {
          uid: "-1",
          name: props.post?.thumbnail ?? "default.png",
          status: "done",
          originFileObj: file,
        };

        console.log("fileList", fileList);

        //parse blocks for upload to database
        let parsedBlocks = props.post.blocks;
        if (typeof parsedBlocks === "string") {
          try {
            parsedBlocks = JSON.parse(parsedBlocks);
          } catch (e) {
            parsedBlocks = INITIAL_DATA.blocks;
          }
        }

        const initForm = {
          time: "null",
          title: props.post?.title,
          blocks: parsedBlocks,
          authorID: props.post?.authorID,
          authorName: authorName,
          lastModifiedBy: user._id,
          editor: user.name,
          thumbnail: fileList.name,
          postThumbnail: fileList.originFileObj,
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
      setData({
        blocks: INITIAL_DATA.blocks,
      });
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

      setUploadedThumbnailURL([
        {
          url:
            initForm.thumbnail && initForm.thumbnail !== "default.png"
              ? `${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/postThumbnail/${initForm.thumbnail}`
              : `${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/default/postThumbnail.png`,
        },
      ]);

      console.log("initForm", initForm);

      form.setFieldsValue(initForm);
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

    // check if the thumbnail is empty
    if (!values.postThumbnail && !values.postThumbnail?.name) {
      const filePath = `${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/default/postThumbnail.png`;

      const res = await fetch(filePath);
      const blob = await res.blob();
      const file = new File([blob], "default.png", {
        type: res.headers.get("Content-Type"),
      });
      const fileList = {
        uid: "-1",
        name: "default.png",
        status: "done",
        originFileObj: file,
      };
      form.setFieldsValue({
        postThumbnail: fileList.originFileObj,
        thumbnail: fileList.name,
      });
    }

    // Check if the you are editing an existing post
    if (props.post && props.post._id) {
      const formData = new FormData();

      console.log("you are updating an existing post");

      //check the values
      console.log("values", values);

      formData.append("title", values.title);
      formData.append("blocks", JSON.stringify(outPutData.blocks));
      formData.append("authorID", values.authorID);
      formData.append("authorName", values.authorName);
      formData.append("lastModifiedBy", values.lastModifiedBy);
      formData.append("editor", values.editor);
      formData.append("thumbnail", values.thumbnail);
      formData.append("postThumbnail", values.postThumbnail);
      formData.append("id", props.post._id);

      console.log("callUpdatePost, >>values");
      for (let pair of formData.entries()) {
        console.log(pair[0] + ":", pair[1]);
      }

      const res = await callUpdatePost(formData);
      if (res && res.data) {
        message.success("Post updated successfully");
        props.setIsSubmitting(false);

        form.resetFields();
        setInitForm({
          title: "",
          blocks: INITIAL_DATA.blocks,
          authorID: user._id,
          authorName: user.name,
          lastModifiedBy: user._id,
          editor: user.name,
        });
        props.setPost({});
      } else {
        message.error("Failed to update post");
      }
    } else {
      const formData = new FormData();

      formData.append("title", values.title);
      formData.append("blocks", JSON.stringify(outPutData.blocks));
      formData.append("authorID", values.authorID);
      formData.append("authorName", values.authorName);
      formData.append("lastModifiedBy", values.lastModifiedBy);
      formData.append("editor", values.editor);
      formData.append("thumbnail", values.thumbnail);
      formData.append("postThumbnail", values.postThumbnail);

      // for (let pair of formData.entries()) {
      //   console.log("createPost >>> formData", pair[0] + ":", pair[1]);
      // }

      const res = await callCreatePost(formData);
      if (res && res.data) {
        props.setIsSubmitting(false);
        message.success("Post created successfully");

        // Reset the form fields
        form.resetFields();

        setInitForm({
          title: "",
          blocks: INITIAL_DATA.blocks,
          authorID: user._id,
          authorName: user.name,
          lastModifiedBy: user._id,
          editor: user.name,
        });
      } else {
        message.error("Failed to create post");
      }
    }
  };

  const handleUploadFileThumbnail = async ({ file, onSuccess, onError }) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("temp", file);

    const res = await callUploadImage(formData);
    if (res && res.data) {
      const file = res.data;

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

      // setTempImageFile(fileList.originFileObj);
      form.setFieldsValue({
        postThumbnail: fileList.originFileObj,
        thumbnail: fileList.name,
      });

      setUploadedThumbnailURL([
        {
          url: `${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/temp/${file.filename}`,
        },
      ]);
    } else {
      message.error("Upload file thất bại");
    }
    setIsLoading(false);
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
      {hasRunOnce && (
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
                  setOutPutData={setOutPutData}
                  setPreviewOpen={setPreviewOpen}
                  setPreviewTitle={setPreviewTitle}
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
                        onRemove={(file) => {
                          setUploadedThumbnailURL([]);
                          //remove file from form
                          form.setFieldsValue({
                            postThumbnail: null,
                            thumbnail: null,
                          });
                        }}
                        onPreview={() => {}}
                        fileList={uploadedThumbnailURL}
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
                  rules={[
                    { required: true, message: "Vui lòng nhập nội dung" },
                  ]}
                ></Form.Item>
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
      )}
    </>
  ); // cspell:ignore editorjs
}

export default PostEditorJS; // cspell:ignore Editorjs
