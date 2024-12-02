import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AdoptionOnline from "./components/AdoptionOnline";
import FindPetTable from "./components/FindPetTable";
import Requirement from "./components/Requirement";
import Rescue from "./components/Rescue";
import "./style.scss";
function Adopt(props) {
  const location = useLocation();
  return (
    <div className="adopt_content">
      {location.pathname === "/nhan-nuoi" ? ( // Use location.pathname
        <div className="adopt background">
          <div className="title">
            <h1 className="title1 fw white mlr">Nhận Nuôi</h1>
            <a className="a_tag mlr" href="/">
              <span className="trang_chu white">Trang chủ </span>{" "}
              <span className="text1"> {">"} Nhận Nuôi</span>
            </a>
          </div>
        </div>
      ) : null}
      <Outlet />
      <div className="quytrinh mlr grid gtc">
        <div className="content1">
          <h2>Quy Trình Nhận Nuôi</h2>
          <hr></hr>
          <p>
            Trước khi quyết định nhận nuôi bé chó hay mèo nào, bạn hãy tự hỏi
            bản thân rằng mình đã sẵn sàng để chịu trách nhiệm cả đời cho bé
            chưa, cả về tài chính, nơi ở cũng như tinh thần. Việc nhận nuôi cần
            được sự đồng thuận lớn từ bản thân bạn cũng như gia đình và những
            người liên quan. Xin cân nhắc kỹ trước khi liên hệ với HPA về việc
            nhận nuôi.
            <br></br>
            <br></br> Bạn đã sẵn sàng? Hãy thực hiện các bước sau đây nhé:
          </p>
          <ol>
            <li>
              Tìm hiểu về thú cưng bạn muốn nhận nuôi trên trang web của HPA.
            </li>
            <li>
              Liên hệ với Tình nguyện viên phụ trách bé để tìm hiểu thêm về bé.
            </li>
            <li>Tham gia phỏng vấn nhận nuôi.</li>
            <li>
              Chuẩn bị cơ sở vật chất, ký giấy tờ nhận nuôi và đóng tiền vía để
              đón bé về.
            </li>
            <li>
              Thường xuyên cập nhật về tình hình của bé, đặc biệt là khi có sự
              cố để được tư vấn kịp thời.
            </li>
          </ol>
          <p>Lưu ý:</p>
          <ul>
            <li>
              Chỉ inbox 01 Tình nguyện viên phỏng vấn, KHÔNG NÊN inbox tất cả
              danh sách. Trường hợp TNV chưa phản hồi lại trong vòng 1 ngày, vui
              lòng inbox cho Page.
            </li>
            <li>
              Phần phỏng vấn có thể có nhiều câu hỏi mang tính chất riêng tư, vì
              vậy mong bạn hãy kiên nhẫn nhé!
            </li>
            <li>
              Tiền vía mỗi bé sẽ khác nhau tùy thuộc vào tình trạng của bé khi
              cứu cũng như các dịch vụ y tế (tiêm phòng, triệt sản) đã thực
              hiện.
            </li>
            <li>
              Tiền vía dùng để trả các khoản chi về y tế trước đây cho bé, cũng
              như để hỗ trợ chi phí chăm sóc, nuôi dưỡng các bé khác tại nhà
              chung.
            </li>
            <li>
              Trường hợp không nuôi được tiếp cần trả lại cho Nhóm, không tự ý
              đem cho người khác.
            </li>
          </ul>
          <p>
            🐕‍🦺 Nếu bạn chỉ có thể chăm sóc tạm thời (foster), tham khảo thông
            tin tại mục Tình nguyện.
          </p>
          <p>
            🐈 Tìm hiểu thêm về chương trình Nhận nuôi Ảo ở banner cuối trang
            này.
          </p>
        </div>
        <Requirement />
      </div>
      <Rescue />
      <FindPetTable list={props.list} pageSize={4} />
      <AdoptionOnline />
    </div>
  );
}

export default Adopt;
{
  /* <div className="timthucung">
        <p>TÌM THÚ CƯNG</p>
        <img src={img} alt="" className="chancho"></img>
        <div className="grid-item grid ">
          <button className="button_grid fw white">Tất cả</button>
          <button className="button_grid fw white">Chó</button>
          <button className="button_grid fw white">Mèo</button>
          <button className="button_grid fw white">Khác</button>
        </div>
        <form action="" className="grid-item1 grid_mlr grid">
          <div>
            <label htmlFor="gioitinh">Giới tính</label>
            <br></br>
            <select id="gioitinh" className="input inpt">
              <option value="">Tất cả</option>
              <option value="">Đực</option>
              <option value="">Cái</option>
              <option value="">Không rõ</option>
            </select>
          </div>
          <div>
            <label htmlFor="dotuoi">Độ tuổi</label>
            <br></br>
            <select id="dotuoi" className="input1 inpt">
              <option value="">Tất cả</option>
              <option value="">Già</option>
              <option value="">Trưởng thành</option>
              <option value="">Trẻ</option>
            </select>
          </div>
          <div>
            <label htmlFor="trietsan">Triệt sản</label>
            <br></br>
            <select id="trietsan" className="input inpt">
              <option value="">Tất cả</option>
              <option value="">Rồi</option>
              <option value="">Chưa</option>
              <option value="">Không rõ</option>
            </select>
          </div>
          <div>
            <label htmlFor="mau">Màu</label>
            <br></br>
            <select id="mau" className="input1 inpt">
              <option value="">Tất cả</option>
              <option value="">Nâu</option>
              <option value="">Đen</option>
              <option value="">Vàng</option>
              <option value="">Trắng Xám</option>
              <option value="">Trắng Nâu</option>
              <option value="">Vàng Đen</option>
            </select>
          </div>
          <div>
            <label htmlFor="text">Tên</label>
            <br></br>
            <input type="text" id="text" className="input2  inpt" />
          </div>
          <div>
            <button className="timkiem fw white">TÌM KIẾM</button>
          </div>
        </form>
        <div className="timkiem_pet grid grid_mlr">
          <div className="pet">
            <img
              src="https://www.hanoipetadoption.com/admin/user-content/Animal/98316d76-0a79-40f7-a2da-534b126b22d7.jpeg"
              alt=""
              className="petimg"
            />
            <div className="pet_content">
              <h6 className="petname fw">Tony</h6>
              <hr className="hr" />
              <p>
                <strong>Giới tính:</strong> Đực
              </p>
              <p>
                <strong>Tuổi:</strong> Trưởng thành
              </p>
              <p>
                <strong>Tiêm phòng: </strong> Chưa rõ
              </p>
            </div>
          </div>
          <div className="pet">
            <img
              src="https://www.hanoipetadoption.com/admin/user-content/Animal/98316d76-0a79-40f7-a2da-534b126b22d7.jpeg"
              alt=""
              className="petimg"
            />
            <div className="pet_content">
              <h6 className="petname fw">Tony</h6>
              <hr className="hr" />
              <p>
                <strong>Giới tính:</strong> Đực
              </p>
              <p>
                <strong>Tuổi:</strong> Trưởng thành
              </p>
              <p>
                <strong>Tiêm phòng: </strong> Chưa rõ
              </p>
            </div>
          </div>
          <div className="pet">
            <img
              src="https://www.hanoipetadoption.com/admin/user-content/Animal/98316d76-0a79-40f7-a2da-534b126b22d7.jpeg"
              alt=""
              className="petimg"
            />
            <div className="pet_content">
              <h6 className="petname fw">Tony</h6>
              <hr className="hr" />
              <p>
                <strong>Giới tính:</strong> Đực
              </p>
              <p>
                <strong>Tuổi:</strong> Trưởng thành
              </p>
              <p>
                <strong>Tiêm phòng: </strong> Chưa rõ
              </p>
            </div>
          </div>
          <div className="pet">
            <img
              src="https://www.hanoipetadoption.com/admin/user-content/Animal/98316d76-0a79-40f7-a2da-534b126b22d7.jpeg"
              alt=""
              className="petimg"
            />
            <div className="pet_content">
              <h6 className="petname fw">Tony</h6>
              <hr className="hr" />
              <p>
                <strong>Giới tính:</strong> Đực
              </p>
              <p>
                <strong>Tuổi:</strong> Trưởng thành
              </p>
              <p>
                <strong>Tiêm phòng: </strong> Chưa rõ
              </p>
            </div>
          </div>
          <div className="pet">
            <img
              src="https://www.hanoipetadoption.com/admin/user-content/Animal/98316d76-0a79-40f7-a2da-534b126b22d7.jpeg"
              alt=""
              className="petimg"
            />
            <div className="pet_content">
              <h6 className="petname fw">Tony</h6>
              <hr className="hr" />
              <p>
                <strong>Giới tính:</strong> Đực
              </p>
              <p>
                <strong>Tuổi:</strong> Trưởng thành
              </p>
              <p>
                <strong>Tiêm phòng: </strong> Chưa rõ
              </p>
            </div>
          </div>
          <div className="pet">
            <img
              src="https://www.hanoipetadoption.com/admin/user-content/Animal/98316d76-0a79-40f7-a2da-534b126b22d7.jpeg"
              alt=""
              className="petimg"
            />
            <div className="pet_content">
              <h6 className="petname fw">Tony</h6>
              <hr className="hr" />
              <p>
                <strong>Giới tính:</strong> Đực
              </p>
              <p>
                <strong>Tuổi:</strong> Trưởng thành
              </p>
              <p>
                <strong>Tiêm phòng: </strong> Chưa rõ
              </p>
            </div>
          </div>
          <div className="pet">
            <img
              src="https://www.hanoipetadoption.com/admin/user-content/Animal/98316d76-0a79-40f7-a2da-534b126b22d7.jpeg"
              alt=""
              className="petimg"
            />
            <div className="pet_content">
              <h6 className="petname fw">Tony</h6>
              <hr className="hr" />
              <p>
                <strong>Giới tính:</strong> Đực
              </p>
              <p>
                <strong>Tuổi:</strong> Trưởng thành
              </p>
              <p>
                <strong>Tiêm phòng: </strong> Chưa rõ
              </p>
            </div>
          </div>
          <div className="pet">
            <img
              src="https://www.hanoipetadoption.com/admin/user-content/Animal/98316d76-0a79-40f7-a2da-534b126b22d7.jpeg"
              alt=""
              className="petimg"
            />
            <div className="pet_content">
              <h6 className="petname fw">Tony</h6>
              <hr className="hr" />
              <p>
                <strong>Giới tính:</strong> Đực
              </p>
              <p>
                <strong>Tuổi:</strong> Trưởng thành
              </p>
              <p>
                <strong>Tiêm phòng: </strong> Chưa rõ
              </p>
            </div>
          </div>
          <div className="pet">
            <img
              src="https://www.hanoipetadoption.com/admin/user-content/Animal/98316d76-0a79-40f7-a2da-534b126b22d7.jpeg"
              alt=""
              className="petimg"
            />
            <div className="pet_content">
              <h6 className="petname fw">Tony</h6>
              <hr className="hr" />
              <p>
                <strong>Giới tính:</strong> Đực
              </p>
              <p>
                <strong>Tuổi:</strong> Trưởng thành
              </p>
              <p>
                <strong>Tiêm phòng: </strong> Chưa rõ
              </p>
            </div>
          </div>
          <div className="pet">
            <img
              src="https://www.hanoipetadoption.com/admin/user-content/Animal/98316d76-0a79-40f7-a2da-534b126b22d7.jpeg"
              alt=""
              className="petimg"
            />
            <div className="pet_content">
              <h6 className="petname fw">Tony</h6>
              <hr className="hr" />
              <p>
                <strong>Giới tính:</strong> Đực
              </p>
              <p>
                <strong>Tuổi:</strong> Trưởng thành
              </p>
              <p>
                <strong>Tiêm phòng: </strong> Chưa rõ
              </p>
            </div>
          </div>
          <div className="pet">
            <img
              src="https://www.hanoipetadoption.com/admin/user-content/Animal/98316d76-0a79-40f7-a2da-534b126b22d7.jpeg"
              alt=""
              className="petimg"
            />
            <div className="pet_content">
              <h6 className="petname fw">Tony</h6>
              <hr className="hr" />
              <p>
                <strong>Giới tính:</strong> Đực
              </p>
              <p>
                <strong>Tuổi:</strong> Trưởng thành
              </p>
              <p>
                <strong>Tiêm phòng: </strong> Chưa rõ
              </p>
            </div>
          </div>
          <div className="pet">
            <img
              src="https://www.hanoipetadoption.com/admin/user-content/Animal/98316d76-0a79-40f7-a2da-534b126b22d7.jpeg"
              alt=""
              className="petimg"
            />
            <div className="pet_content">
              <h6 className="petname fw">Tony</h6>
              <hr className="hr" />
              <p>
                <strong>Giới tính:</strong> Đực
              </p>
              <p>
                <strong>Tuổi:</strong> Trưởng thành
              </p>
              <p>
                <strong>Tiêm phòng: </strong> Chưa rõ
              </p>
            </div>
          </div>
        </div>
        <ul className="nutchuyenhuong">
          <li className="chuyenhuong disable">
            <a href=""> {"<"} </a>
          </li>
          <li className="chuyenhuong prev">
            <a href="">1</a>
          </li>
          <li className="chuyenhuong">
            <a href="">2</a>
          </li>
          <li className="chuyenhuong">
            <a href="">3</a>
          </li>
          <li className="chuyenhuong">
            <a href=""> {">"} </a>
          </li>
        </ul>
      </div> */
}
