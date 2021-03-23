import React, { Component } from "react";
import SanPhamProps from "./SanPhamProps";

export default class DanhSachSPProps extends Component {
  producList = [
    {
      id: 1,
      name: "iphoneX",
      price: 1000,
      img: "https://picsum.photos/200/200",
    },
    {
      id: 2,
      name: "iphoneXs",
      price: 2000,
      img: "https://picsum.photos/200/200",
    },
    {
      id: 3,
      name: "iphone xs max",
      price: 3000,
      img: "https://picsum.photos/200/200",
    },
  ];
  renderSanPham = () => {
    return this.producList.map((sanPham, index) => {
      return (
        <div className="col-4">
          <SanPhamProps sp={sanPham} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}
