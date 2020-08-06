import React, { Component } from "react";
import "./Box.css";
import { randIdx } from "./helpers";

class Box extends Component {
  static defaultProps = {
    colorList: [
      "firebrick","gray","lightblue","green",
      "DarkRed","aquamarine","black","chocolate",
      "crimson","darkblue","DarkGoldenRod","LawnGreen",
      "Salmon","DarkGrey", "Brown", "Aqua",
      "Orange","purple","Silver","SlateBlue",
      "SeaGreen","Teal","Tomato","Yellow",
      "Coral", "OrangeRed","Lime", "Red", "Pink","white"
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      color: randIdx(this.props.colorList),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  changeColor() {
    let nextColor;
    do {
      nextColor = randIdx(this.props.colorList);
    } while (nextColor === this.state.color);
    this.setState({ color: nextColor });
  }

  handleClick() {
    this.changeColor();
  }

  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      >
      </div>
    );
  }
}

export default Box;
