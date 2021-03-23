import React, { Component } from "react";
import BT1Calousel from "./BT1Calousel";
import BT1Header from "./BT1Header";
import Productlist from "./Productlist";

export default class BaiTapLayout1 extends Component {
  render() {
    return (
      <div>
        <BT1Header />
        <BT1Calousel />
        <Productlist />
      </div>
    );
  }
}
