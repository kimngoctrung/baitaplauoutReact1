import React, { Component } from "react";
import style from "./styles.module.css";
export default class Styles extends Component {
  render() {
    return (
      <div className="container">
        <p className="text-red">cybersoft</p>
        <p className={style.textGreen}>ahihihi</p>
        <p className={style["textGreen"]}>ahihihi</p>
        <p className={style.textGreen}>ahihihi</p>

        <section
          style={{
            backgroundColor: "black",
            color: "green",
            fontSize: "44px",
            textAlign: "center",
          }}
        >
          <p>tao la trum</p>
        </section>
      </div>
    );
  }
}
