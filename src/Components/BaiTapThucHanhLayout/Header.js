import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header style={{ marginTop: "5rem" }} className="jumbotron ">
        <h1 className="display-3">A Warm Welcome!</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam,
          eligendi, in quo sunt possimus non incidunt odit vero aliquid
          similique quaerat nam nobis illo aspernatur vitae fugiat numquam
          repellat.
        </p>
        <a href="#" className="btn btn-primary btn-lg">
          Call to action!
        </a>
      </header>
    );
  }
}
