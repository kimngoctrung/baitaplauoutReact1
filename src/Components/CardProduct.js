import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div>
        <div classname="card text-left">
          <img
            classname="card-img-top"
            src="http://picsum.photos/180/120"
            alt="123"
          />
          <div classname="card-body">
            <h4 classname="card-title">Iphone 10</h4>
            <p classname="card-text">1000</p>
          </div>
        </div>
      </div>
    );
  }
}
