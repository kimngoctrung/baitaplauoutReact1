import React, { Component } from "react";
import BTProduct from "./BTProduct";

export default class Productlist extends Component {
  render() {
    return (
      <div className="bg-dark">
        <h1 className="text-center display-4">BEST SMART PHONE</h1>
        <div className="row">
          <div className="col-md-3">
            <BTProduct />
          </div>
          <div className="col-md-3">
            <BTProduct />
          </div>
          <div className="col-md-3">
            <BTProduct />
          </div>
          <div className="col-md-3">
            <BTProduct />
          </div>
        </div>
      </div>
    );
  }
}
