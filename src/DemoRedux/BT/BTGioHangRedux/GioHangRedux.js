import React, { Component } from "react";
// Kết nối component với store từ redux
import { connect } from "react-redux";
import BaiTapGioHangRedux from "./BaiTapGioHangRedux";

class GioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHangProps.map((spGH, index) => {
      return (
        <tr key={index}>
          <td>{spGH.maSP}</td>
          <td>{spGH.tenSP}</td>
          <td>
            <img src={spGH.hinhAnh} width="50px" alt="" />
          </td>
          <td>{spGH.gia}</td>
          <td>{spGH.soLuong}</td>
          <td>
            <button
              onClick={() => {
                this.props.tangGiamSoLuong(spGH.maSP, -1);
              }}
              className="btn btn-success"
            >
              -
            </button>
            <button
              onClick={() => {
                this.props.tangGiamSoLuong(spGH.maSP, 1);
              }}
              className="btn btn-warning"
            >
              +
            </button>
          </td>
          <td>{spGH.soLuong * spGH.gia}</td>

          <td>
            <button
              onClick={() => {
                this.props.xoaGioHang(spGH.maSP);
              }}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h1 className="text-center">Giỏ Hàng (1)</h1>
        <table className="table">
          <thead>
            <tr>
              <td>Mã Sản Phẩm</td>
              <td>Tên Sản Phẩm</td>
              <td>Hình Ảnh</td>
              <td>Đơn Giá</td>
              <td>Số Lượng</td>
              <td></td>
              <td>Thành Tiền</td>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // Gui chú state chính là rootReducer (state tổng của ứng dụng )
  //Hàm này tạo ra props từ state của redux
  return { gioHangProps: state.gioHangReducer.gioHang };
};
const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSP) => {
      // Tao Ra action dua du lieu len reducer
      const action = {
        type: "XOA_GIO_HANG",
        maSP,
      };
      dispatch(action);
    },
    tangGiamSoLuong: (maSP, soLuong) => {
      const action = {
        type: "TANG_GIAM_SO_LUONG",
        soLuong,
        maSP,
      };
      dispatch(action);
    },
  };
};
// Biến đổi baitapgiohangreudx thành baitapgiohang có kết nói với reudux
export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
