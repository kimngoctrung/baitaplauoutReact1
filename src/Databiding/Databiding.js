import React, { Component } from "react";

export default class Databiding extends Component {
  sinhVien = {
    ma: 1,
    ten: "Nguyen Van Teo",
  };
  renderSinhVien = () => {
    let sinhVien = {
      ma: 1,
      ten: "Nguyen Van Teo",
      hinhAnh: "http://picsum.photos/100/100",
    };
    return (
      <div className="card text-left">
        <img
          className="card-img-top"
          src={sinhVien.hinhAnh}
          alt={sinhVien.hinhAnh}
        />
        <div className="card-body">
          <h4 className="card-title">{sinhVien.ten}</h4>
          <p className="card-text">Body</p>
        </div>
      </div>
    );
  };
  render() {
    let name = "Cybersoft";
    let product = {
      name: "iphoneX",
      price: 1000,
      img: "http://picsum.photos/100/100",
    };
    let rederProduct = () => {
      // Khi nội dung return là component thì phải được bao phủ bởi 1 thẻ
      return (
        <div>
          <p>{product.name}</p>
        </div>
      );
    };
    return (
      <div className="container">
        {this.renderSinhVien()}
        <ul>
          <li>Mã Số Sinh Viên: {this.sinhVien.ma}</li>
          <li>Tên Sinh Viên: {this.sinhVien.ten}</li>
        </ul>
        <p id="title">{name}</p>
        <br />
        <div className="card text-left w-25">
          <img className="card-img-top" src={product.img} alt={product.img} />
          <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
            <p className="card-text">{product.price}</p>
          </div>
        </div>
        {rederProduct()}
      </div>
    );
  }
}
