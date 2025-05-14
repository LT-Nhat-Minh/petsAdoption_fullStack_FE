import React, { memo, useEffect, useState } from "react";
import { callDeletePost, callFetchPost } from "../../../../services/api";
import { Button, message, notification, Popconfirm, Space, Table } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import PostEditorjs from "./postEditorjs";

function AdminPost(props) {
  const [editingPostData, setEditingPostData] = useState({}); //store postData đã fecthData
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [postData, setPostData] = useState([]); //store postData đã fecthData
  const [post, setPost] = useState({});
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, [isSubmitting]);

  const fetchPosts = async () => {
    const res = await callFetchPost();
    if (res && res.data) {
      setPostData(res.data);
    } else {
      console.error("Failed to fetch posts");
    }
  };

  const handleDeletePostByID = async (id) => {
    const res = await callDeletePost(id);
    if (res && res.data) {
      message.success(`Xóa bài viết thành công, title: ${res.data.title}`);
      fetchPosts();
    } else {
      notification.error({
        message: "Xóa bài viết thất bại",
        description: res.error,
      });
    }
  };

  const columns = [
    {
      title: "Nội dung",
      dataIndex: "blocks",
      key: "blocks",
      render: (blocks = []) => {
        // Only render up to 4 blocks and filter for supported types
        return blocks
          .filter(
            (block) => block.type === "header" || block.type === "paragraph"
          )
          .slice(0, 4)
          .map((block, index) => {
            if (block.type === "header") {
              return <h1 key={index}>{block.data.text}</h1>;
            } else if (block.type === "paragraph") {
              return <p key={index}>{block.data.text}</p>;
            }
            return null;
          });
      },
    },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (thumbnail) => (
        <img
          src={
            thumbnail
              ? `${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/postThumbnail/${thumbnail}`
              : `${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/default/postThumbnail.png`
          }
          alt="thumbnail"
          style={{
            width: 50,
            height: 50,
            objectFit: "cover",
            onHover: { cursor: "pointer" },
          }}
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Author",
      dataIndex: "authorID",
      key: "authorID",
    },
    {
      title: "Last Modified By",
      dataIndex: "lastModifiedBy",
      key: "lastModifiedBy",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      // Sort by createdAt date by default
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      key: "updatedAt",
      defaultSortOrder: "descend",
      sorter: (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt),
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => {
              setToggle(true);
              setPost(record);
              message.info(
                `Bạn đang chỉnh sửa bài viết có tiêu đề ${record.title}`
              );
            }}
          />
          <Popconfirm
            title="Bạn có chắc chắn muốn xóa người dùng này không?"
            description="Người dùng này sẽ không thể khôi phục lại"
            okText="Xác nhận"
            cancelText="Hủy"
            onConfirm={async () => {
              handleDeletePostByID(record._id);
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
      <div style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => {
            setToggle(true);
            setPost({});
            console.log("Creating new post", post);
            message.info("Bạn đang tạo bài viết mới");
          }}
        >
          Thêm Bài Viết
        </Button>
      </div>
      <PostEditorjs
        setIsSubmitting={setIsSubmitting}
        isSubmitting={isSubmitting}
        post={post}
        setPost={setPost}
      />

      <Table
        style={{ marginTop: 16 }}
        columns={columns}
        dataSource={postData}
        rowKey="id"
        loading={isLoading}
        bordered={true}
      />
    </div>
  );
}

export default AdminPost;
