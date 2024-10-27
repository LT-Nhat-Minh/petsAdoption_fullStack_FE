import React, { useState } from "react";
import "./style.scss";
import { Modal } from "antd";

function Listsponsor(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div class="banner4">
      <div class="overlay4">
        <h1>Danh sách mạnh thường quân</h1>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          XEM THÔNG TIN
        </button>
        <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    </div>
  );
}

export default Listsponsor;
