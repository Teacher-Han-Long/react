import React, { Component } from "react";
import Box from "./Box";
import "./Boxes.css";

class Boxes extends Component {
  static defaultProps = {
    numBoxes: 18,
  };
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box />
    ));
    return (
      <div>
        <div className="Boxes-title">
          <h1>Click on a box...and change it's color!</h1>
        </div>
        <div className="Boxes">{boxes}</div>
      </div>
    );
  }
}

export default Boxes;
