import React, { Component } from "react";

export default class ProductIteam extends Component {
  render() {
    let { productItem } = this.props;
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
