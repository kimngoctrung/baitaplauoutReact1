import React, { Component } from "react";

export default class Carts extends Component {
  renderGioHang = () => {
    //Lấy dữ liệu từ component cha truyền vào con thông qua props
    let { gioHang } = this.props;
    return gioHang.map((spGH, index) => {
      return (
        <tr key={index}>
          <td>{spGH.maSP}</td>
          <td>{spGH.tenSP}</td>
          <td>
            <img width="50px" src={spGH.hinhAnh} alt={spGH.tenSP} />
          </td>
          <td>{spGH.gia.toLocaleString()}</td>
          <td>
            {spGH.soLuong.toLocaleString()}
            <button
              onClick={() => {
                this.props.tangGiamSanPham(spGH.maSP, 1);
              }}
              className="btn btn-secondary ml-3"
            >
              +
            </button>
            <button
              onClick={() => {
                this.props.tangGiamSanPham(spGH.maSP, -1);
              }}
              className="btn btn-warning ml-3"
            >
              -
            </button>
          </td>
          <td>{(spGH.soLuong * spGH.gia).toLocaleString()}</td>
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
              <td>Thành Tiền</td>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
        </table>
      </div>
    );
  }
}
