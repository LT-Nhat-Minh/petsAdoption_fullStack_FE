import React, { useState } from "react";
import "./style.scss";
import { Modal, Table } from "antd";
import { useLanguageContext } from "../../context/language.provider";

function Listsponsor(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isEnglish, setIsEnglish } = useLanguageContext();

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Cột và dữ liệu cho bảng
  const columns = [
    {
      title: isEnglish ? "Date" : "Ngày",
      dataIndex: "date",
      key: "date",
    },
    {
      title: isEnglish ? "Description" : "Nội dung",
      dataIndex: "description",
      key: "description",
    },
    {
      title: isEnglish ? "Currency" : "Đồng",
      dataIndex: "currency",
      key: "currency",
    },
    {
      title: isEnglish ? "Received Amount" : "Số tiền đã nhận",
      dataIndex: "receivedAmount",
      key: "receivedAmount",
    },
    {
      title: isEnglish ? "Transaction Fee" : "Số tiền phí đã bị trừ",
      dataIndex: "transactionFee",
      key: "transactionFee",
    },
  ];

  const data = [
    {
      key: "1",
      date: "02/01/2021",
      description: "VAN VU",
      currency: "USD",
      receivedAmount: "9,26",
      transactionFee: "-0,74",
    },
    {
      key: "2",
      date: "30/12/2020",
      description: "Giang Nguyen",
      currency: "USD",
      receivedAmount: "5,86",
      transactionFee: "0,00",
    },
    {
      key: "3",
      date: "29/12/2020",
      description: "YAT LUN LAW",
      currency: "USD",
      receivedAmount: "118,06",
      transactionFee: "-5,75",
    },
    {
      key: "4",
      date: "29/12/2020",
      description: "Michelle Castillo",
      currency: "USD",
      receivedAmount: "50,00",
      transactionFee: "0,00",
    },
    {
      key: "5",
      date: "28/12/2020",
      description: "Ban Tsan",
      currency: "USD",
      receivedAmount: "9,26",
      transactionFee: "-0,74",
    },
    // Thêm các dòng dữ liệu khác tại đây
  ];

  return (
    <div className="list-sponsor">
      <div className="content">
        <h1>{isEnglish ? "List of Donors" : "Danh sách mạnh thường quân"}</h1>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          {isEnglish ? "View Information" : "XEM THÔNG TIN"}
        </button>
      </div>
      <Modal
        title={isEnglish ? "Donor Information" : "Thông Tin Mạnh Thường Quân"}
        open={isModalOpen}
        onCancel={handleCancel}
        centered
        width={1200}
      >
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
        />
      </Modal>
    </div>
  );
}

export default Listsponsor;
