import React, { Component } from "react";

export default class DemoClass extends Component {
  //Phương thức render sẽ tự kích hoạt khi mình sử dụng thẻ component
  render() {
    return (
      <div className="container bg-dark p-5">
        <p className="display-4 pt-2">title</p>
        <p>Content</p>
      </div>
    );
  }
}
