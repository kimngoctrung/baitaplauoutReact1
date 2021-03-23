import React, { Component } from "react";

export default class RenderWithMap extends Component {
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
  renderProduct = () => {
    // const arrDivProduct = [];
    // for (let i = 0; i < this.producList.length; i++) {
    //   let product = this.producList[i];
    //   const jsxDivProduct = (
    //     <div className="col-md-4">
    //       <div className="card text-left">
    //         <img className="card-img-top" src={product.img} alt />
    //         <div className="card-body">
    //           <h4 className="card-title">{product.name}</h4>
    //           <p className="card-text">{product.price}</p>
    //         </div>
    //       </div>
    //     </div>
    //   );
    //   arrDivProduct.push(jsxDivProduct);
    const contentJSX = this.producList.map((product, index) => {
      return (
        <div key={index} className="col-md-4">
          <div className="card text-left">
            <img className="card-img-top" src={product.img} alt />
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <p className="card-text">{product.price}</p>
            </div>
          </div>
        </div>
      );
    });
    return contentJSX;
  };
  renderTableProduct = () => {
    return this.producList.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.id}</td>

          <td>{product.name}</td>
          <td>
            <img src={product.img} alt="" />
          </td>
          <td>{product.price}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center display4">Danh Sach San Pham</h1>
        <div className="row">{this.renderProduct()}</div>
        <div className="mt-t">
          <table className="table">
            <thead>
              <tr>
                <td>id</td>
                <td>name</td>
                <td>img</td>
                <td>price</td>
              </tr>
            </thead>
            <tbody>{this.renderTableProduct()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
