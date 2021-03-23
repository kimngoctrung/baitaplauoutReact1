import React, { Component } from "react";

export default class HandleEvent extends Component {
  //callback Function ==> hàm đóng vai trò là tham số truyền vào biến hoặc hàm khác
  handleClick = () => {
    alert("hello tao la trum");
  };
  showMess = (name) => {
    alert(`hello ${name}`);
  };
  render() {
    return (
      <div>
        <button id="btnClick" onClick={this.handleClick}>
          click
        </button>
        <button
          id="btnClick"
          onClick={() => {
            {
              alert("hello tao la trum");
            }
          }}
        >
          click
        </button>
        <br />
        <button
          onClick={() => {
            this.showMess("trum MaFiA");
            this.showMess("aloalaaoalsdadsa");
          }}
          className="btn btn-success mt-2"
        >
          Show message
        </button>
      </div>
    );
  }
}
