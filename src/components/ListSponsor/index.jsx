import React, { useState } from "react";
import "./style.scss";
import { Modal } from "antd";

function Listsponsor(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="list-sponsor">
      <div className="content">
        <h1>
          {props.isEnglish ? "List of Donors" : "Danh sách mạnh thường quân"}
        </h1>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          {props.isEnglish ? "View Information" : "XEM THÔNG TIN"}
        </button>
      </div>
      <Modal
        title={
          props.isEnglish ? "Donor Information" : "Thông Tin Mạnh Thường Quân"
        }
        open={isModalOpen}
        onCancel={handleCancel}
        centered
        width={1200}
      >
        <p>{props.isEnglish ? "Some contents..." : "Một số nội dung..."}</p>
        <p>{props.isEnglish ? "Some contents..." : "Một số nội dung..."}</p>
        <p>{props.isEnglish ? "Some contents..." : "Một số nội dung..."}</p>
      </Modal>
    </div>
  );
}

export default Listsponsor;
