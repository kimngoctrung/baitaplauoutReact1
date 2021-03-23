import React, { Component } from "react";
import TrangTuongLai1 from "./TrangTuongLai1";
import TrangTuongLai2 from "./TrangTuongLai2";
import TrangTuongLai3 from "./TrangTuongLai3";
import TrangTuongLai4 from "./TrangTuongLai4";

export default class PageFeatures extends Component {
  render() {
    return (
      <div className="row">
        <TrangTuongLai1 />
        <TrangTuongLai2 />
        <TrangTuongLai3 />
        <TrangTuongLai4 />
      </div>
    );
  }
}
