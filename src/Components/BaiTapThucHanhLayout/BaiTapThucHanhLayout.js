import React, { Component } from "react";
import FooterKNT from "./FooterKNT";
import Header from "./Header";
import Navbar from "./Navbar";
import PageFeatures from "./PageFeatures";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Header />
          <PageFeatures />
        </div>
        <FooterKNT />
      </div>
    );
  }
}
