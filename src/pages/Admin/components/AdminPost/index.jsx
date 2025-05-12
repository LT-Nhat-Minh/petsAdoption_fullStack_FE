import React, { useEffect, useState } from "react";
import { callDeletePost, callFetchPost } from "../../../../services/api";
import { Button, message, notification, Popconfirm, Table } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

function AdminPost(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [postData, setPostData] = useState([]); //store postData đã fecthData

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await callFetchPost();
    if (res && res.data) {
      setPostData(res.data);
      console.log("Fetched posts:", res.data);
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
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (thumbnail) =>
        thumbnail ? (
          <img
            src={`${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/postThumbnail/${thumbnail}`}
            alt="thumbnail"
            style={{
              width: 50,
              height: 50,
              objectFit: "cover",
              onHover: { cursor: "pointer" },
            }}
          />
        ) : (
          <img
            src={`${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/posts/default.png`}
            alt="default thumbnail"
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
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      key: "updatedAt",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
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
      ),
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => {}}>
          Thêm Bài Viết
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={postData}
        rowKey="id"
        loading={isLoading}
      />
    </div>
  );
}

export default AdminPost;
