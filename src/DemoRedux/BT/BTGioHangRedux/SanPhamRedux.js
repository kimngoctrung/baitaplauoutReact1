import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    console.log("props", this.props);
    let productItem = this.props.sanPham;
    return (
      <div className="card text-left">
        <img
          className="card-img-top w-100"
          src={productItem.hinhAnh}
          alt={productItem.tenSP}
          height="300px"
        />
        <div className="card-body">
          <h4 className="card-title">{productItem.tenSP}</h4>
          <p>{productItem.giaBan}</p>
          <button
            onClick={() => {
              document.getElementById("disPlayOn").style.display = "block";
              this.props.viewDetail(productItem);
            }}
            className="btn btn-success"
          >
            Xem Chi Tiết
          </button>
          <button
            onClick={() => {
              this.props.themGioHang(productItem);
            }}
            className="btn btn-danger ml-4"
          >
            Thêm Giỏ Hàng
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  // => dispatch nhu phuong thuc setState trong reactClass component
  return {
    themGioHang(spclick) {
      // console.log("spclick", spclick);
      /// tu spClick tao ra sp gio hang
      const spGioHang = {
          maSP: spclick.maSP,
          tenSP: spclick.tenSP,
          gia: spclick.giaBan,
          soLuong: 1,
          hinhAnh: spclick.hinhAnh,
        },
        // dong goi du lieu gui len store
        action = {
          type: "THEM_GIO_HANG", // day la thuoc tinh bat buoc de reducer nhan biet gia tri xu ly
          spGioHang: spGioHang,
        };
      // gui action len reducer
      dispatch(action);
    },
  };
};
/// Ket noi component voi store
export default connect(null, mapDispatchToProps)(SanPhamRedux);
