import React, { useRef, useState } from 'react';
import { Button, Table, message } from 'antd';
import Loading from '../LoadingComponent/Loading';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const TableComponent = (props) => {
  const {
    selectionType = 'checkbox',
    data = [],
    isLoading = false,
    columns = [],
    deleteAll,
    exportFileName = 'data_export',
    exportSheetName = 'Sheet1',
    paginationConfig = {
      defaultPageSize: 10,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '50', '100'],
      showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
    },
    showDeleteAll = true,
    showExport = true
  } = props;

  const [rowSeletedKeys, setRowSeletedKeys] = useState([]); // Các key của dòng đã chọn
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [pageSize, setPageSize] = useState(paginationConfig.defaultPageSize); // Kích thước trang
  const tableRef = useRef(null);

  // Cấu hình chọn dòng
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setRowSeletedKeys(selectedRowKeys);
    },
    preserveSelectedRowKeys: true,
  };

  // Xử lý khi nhấn nút "Xóa mục đã chọn"
  const handleDeleteAll = () => {
    deleteAll(rowSeletedKeys);
  };

  // Hàm xử lý xuất dữ liệu ra file Excel
  const exportToExcel = () => {
    try {
      const exportData = data.map(item => {
        const flatItem = {};

        // Hàm đệ quy để làm phẳng object, bỏ qua các trường không cần thiết
        const flatten = (obj, prefix = '') => {
          Object.entries(obj).forEach(([key, value]) => {
            const newKey = prefix ? `${prefix}.${key}` : key;

            // Bỏ qua các trường như hình ảnh, mật khẩu, v.v.
            if (['image', 'images', 'key', 'avatar', '__v', 'password'].some(
              word => newKey.toLowerCase().includes(word)
            )) return;

            // Nếu là orderItems thì format thành chuỗi mô tả
            if (key === 'orderItems' && Array.isArray(value)) {
              flatItem[newKey] = value.map(orderItem =>
                `${orderItem.name || orderItem.product?.name} (x${orderItem.amount})`
              ).join('; ');
            }

            // Nếu là shippingAddress thì lấy thông tin chi tiết
            else if (key === 'shippingAddress' && typeof value === 'object') {
              flatItem[`${newKey}.fullName`] = value.fullName;
              flatItem[`${newKey}.address`] = value.address;
              flatItem[`${newKey}.phone`] = value.phone;
              flatItem[`${newKey}.email`] = value.email;
            }

            // Nếu là mảng thì chuyển sang chuỗi
            else if (Array.isArray(value)) {
              flatItem[newKey] = value.join(', ');
            }

            // Nếu là object thì gọi đệ quy
            else if (typeof value === 'object' && value !== null) {
              flatten(value, newKey);
            }

            // Giá trị đơn giản thì gán trực tiếp
            else {
              flatItem[newKey] = value;
            }
          });
        };

        flatten(item);

        // Định dạng các trường giá cả
        if (flatItem.totalPrice) {
          flatItem.totalPrice = `${flatItem.totalPrice.toLocaleString()} ₫`;
        }
        if (flatItem.totalDiscount) {
          flatItem.totalDiscount = `${flatItem.totalDiscount.toLocaleString()} ₫`;
        }
        if (flatItem.itemsPrice) {
          flatItem.itemsPrice = `${flatItem.itemsPrice.toLocaleString()} ₫`;
        }

        return flatItem;
      });

      // Tạo workbook và sheet từ dữ liệu
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(exportData);

      // Tự động điều chỉnh độ rộng cột
      ws['!cols'] = Object.keys(exportData[0] || {}).map(() => ({ wch: 20 }));

      XLSX.utils.book_append_sheet(wb, ws, exportSheetName);

      const excelBuffer = XLSX.write(wb, {
        bookType: 'xlsx',
        type: 'array'
      });

      // Tạo blob và lưu file
      const blob = new Blob([excelBuffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });

      saveAs(blob, `${exportFileName}_${new Date().toISOString().slice(0, 10)}.xlsx`);
      message.success('Xuất file Excel thành công!');
    } catch (error) {
      console.error('Lỗi khi xuất Excel:', error);
      message.error('Xuất file Excel thất bại!');
    }
  };

  // Xử lý khi thay đổi trang hoặc pageSize
  const handleTableChange = (pagination, filters, sorter) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

  return (
    <Loading isLoading={isLoading}>
      <div style={{ width: '100%', overflowX: 'auto' }}>
        {/* Hiển thị nút export và delete nếu được bật */}
        {(showExport || (showDeleteAll && deleteAll)) && (
          <div style={{ marginBottom: 16, display: 'flex', gap: '10px' }}>
            {showExport && (
              <Button type="primary" onClick={exportToExcel}>
                Export Excel
              </Button>
            )}
            {showDeleteAll && deleteAll && rowSeletedKeys.length > 0 && (
              <Button danger onClick={handleDeleteAll}>
                Xoá mục đã chọn
              </Button>
            )}
          </div>
        )}

        {/* Hiển thị bảng dữ liệu */}
        <Table
          {...props}
          ref={tableRef}
          rowSelection={deleteAll ? { // Only enable row selection if deleteAll is provided
            type: selectionType,
            ...rowSelection,
          } : undefined}
          columns={columns}
          dataSource={data}
          scroll={{ x: 'max-content' }}
          pagination={{
            ...paginationConfig,
            current: currentPage,
            pageSize: pageSize,
          }}
          onChange={handleTableChange}
        />
      </div>
    </Loading>
  );
};

export default TableComponent;