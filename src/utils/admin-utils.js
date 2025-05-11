// Hàm tạo item menu (thường dùng cho thư viện antd Menu)
export function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
