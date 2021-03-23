import React, { Component } from "react";
import Carts from "./Carts";
import carts from "./Carts";
import ProductIteam from "./ProductIteam";

export default class Products extends Component {
  arrProduct = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },

    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  state = {
    productDetail: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    gioHang: [
      // {
      //   maSP: 1,
      //   tenSP: "Iphone x",
      //   gia: 1000,
      //   soLuong: 1,
      //   hinhAnh: "https://picsum.photos/200/200",
      // },
    ],
  };
  themGioHang = (spClick) => {
    console.log(spClick, "spclick");
    //Xử lý setState cho giỏ hàng
    // Bước 1: từ sp đc click tạo ra sp giỏ hàng
    let spGioHang = {
      maSP: spClick.maSP,
      tenSP: spClick.tenSP,
      gia: spClick.giaBan,
      soLuong: 1,
      hinhAnh: spClick.hinhAnh,
    };
    //Bước 2: xử ls thêm giỏ hàng
    let gioHangCapNhat = [...this.state.gioHang];
    //Kiểm tra xem sản phẩm đẫ tồn tại trong giỏ hàng chưa
    let index = gioHangCapNhat.findIndex(
      (item) => item.maSP === spGioHang.maSP
    );
    if (index !== -1) {
      //Nếu sản phẩm chưa có trong giỏ hàng ==> tăng số lượng
      gioHangCapNhat[index].soLuong += 1;
    } else {
      //Nếu sản phẩm chưa có trong giỏ hàng ==> đem sản phẩm thêm vào giỏ
      gioHangCapNhat.push(spGioHang);
    }
    //BƯớc 3 : setState
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  renderProduct = () => {
    return this.arrProduct.map((item, index) => {
      return (
        <div key={index} className="col-md-4">
          <ProductIteam
            productItem={item}
            viewDetail={this.viewDetail}
            themGioHang={this.themGioHang}
          />
        </div>
      );
    });
  };
  // phuong thuc thay doi state dat tai componet chua state
  xoaGioHang = (maSP) => {
    // Tạo ra biến giỏ hàng cập nhật
    let gioHangCapNhat = [...this.state.gioHang];
    //Tìm kiếm phần tử trong mảng
    let index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === maSP);
    //Nếu ta tìm thấy
    if (index !== -1) {
      gioHangCapNhat.splice(index, 1);
    }
    //Cập nhật lại state giỏ hàng say khi xóa
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
  tangGiamSanPham = (maSP, soLuong) => {
    let gioHangCapNhat = [...this.state.gioHang];
    // console.log(maSP, soLuong);
    let spGioHang = gioHangCapNhat.find((spGH) => spGH.maSP === maSP);
    //Nếu tìm thấy
    if (spGioHang) {
      spGioHang.soLuong += soLuong;
    }
    if (spGioHang.soLuong < 1) {
      alert("Số lượng tối thiểu là 1 ");
      spGioHang.soLuong -= soLuong;
    }
    // Cập Nhật lại giỏ hàng
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
  // Hàm xử lí sự kiện lúc xem chi tiết
  viewDetail = (iteamClick) => {
    console.log("iteamclick", iteamClick);
    this.setState({
      productDetail: iteamClick,
    });
  };
  render() {
    let {
      tenSP,
      hinhAnh,
      ram,
      rom,
      maSP,
      manHinh,
      cameraSau,
      cameraTruoc,
      heDieuHanh,
    } = this.state.productDetail;
    return (
      <div className="container">
        <Carts
          tangGiamSanPham={this.tangGiamSanPham}
          gioHang={this.state.gioHang}
          xoaGioHang={this.xoaGioHang}
        />
        <h3 className="text-center display-4">{}</h3>
        <div className="row">{this.renderProduct()}</div>
        <div
          id="disPlayOn"
          style={{ display: "none" }}
          className="productDetail mt-4"
        >
          <div className="row">
            <div className="col-4">
              <div className="display-4 mt-4 text-center">
                <h3>{tenSP}</h3>
              </div>
              <img width="100%" src={hinhAnh} alt="" />
            </div>
            <div className="col-8">
              <div className="display-4 mt-4 mb-4">Thông Số Kỹ Thuật</div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Màn Hình</th>
                    <th>{manHinh}</th>
                  </tr>
                  <tr>
                    <th>Hệ Điều Hành</th>
                    <th>{heDieuHanh}</th>
                  </tr>
                  <tr>
                    <th>Camera Trước</th>
                    <th>{cameraTruoc}</th>
                  </tr>
                  <tr>
                    <th>Camera Sau</th>
                    <th>{cameraSau}</th>
                  </tr>
                  <tr>
                    <th>Ram</th>
                    <th>{ram}</th>
                  </tr>
                  <tr>
                    <th>Rom</th>
                    <th>{rom}</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
