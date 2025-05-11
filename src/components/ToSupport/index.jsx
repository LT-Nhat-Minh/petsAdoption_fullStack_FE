import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./style.scss";

function ToSupport(props) {
  const isEnglish = useSelector((state) => state.language.isEnglish);
  const navigate = useNavigate();
  return (
    <div className="toSupport">
      <h1>
        {isEnglish ? "Are You Ready to Help?" : "Bạn Đã Sẵn Sàng Giúp Đỡ"}
      </h1>
      <div>
        <button
          style={{ textTransform: "uppercase" }}
          onClick={() => navigate("/donation")}
        >
          {isEnglish ? "Donate Now" : "Ủng Hộ Ngay"}
        </button>
      </div>
    </div>
  );
}

export default ToSupport;
