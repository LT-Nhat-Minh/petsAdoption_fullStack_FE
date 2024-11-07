import React, { useState } from "react";
import "./style.scss";
import { Modal } from "antd";

function Listsponsor(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div class="list-sponsor">
      <div class="content">
        <h1>Danh sách mạnh thường quân</h1>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          XEM THÔNG TIN
        </button>
      </div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        centered
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}

export default Listsponsor;
