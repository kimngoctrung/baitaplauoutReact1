import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    srcImg: "./img/car/products/black-car.jpg",
  };
  changeColoer = (newColor) => {
    this.setState({
      srcImg: `./img/car/products/${newColor}-car.jpg`,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center display-4">Bài Tập Chọn Xe</h1>
        <div className="row">
          <div className="col-md-6">
            <img className="w-100 mt-4" src={this.state.srcImg} alt="" />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-3">
                <button
                  onClick={() => {
                    this.setState({
                      srcImg: "./img/car/products/black-car.jpg",
                    });
                  }}
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    cursor: "pointer",
                  }}
                >
                  Black Car
                </button>
              </div>
              <div className="col-md-3">
                <button
                  onClick={() => {
                    this.changeColoer("red");
                  }}
                  style={{ backgroundColor: "red", cursor: "pointer" }}
                >
                  Red Car
                </button>
              </div>
              <div className="col-md-3">
                <button
                  onClick={() => {
                    this.changeColoer("silver");
                  }}
                  style={{ backgroundColor: "gray", cursor: "pointer" }}
                >
                  Gray Car
                </button>
              </div>
              <div className="col-md-3">
                <button
                  onClick={() => {
                    this.changeColoer("steel");
                  }}
                  style={{ backgroundColor: "silver", cursor: "pointer" }}
                >
                  Sliver Car
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
