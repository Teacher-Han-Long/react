import React, { Component } from "react";
import Coin from './Coin';
import './Cointainer.css';
import { getRandIdx } from "./helpers";

class Cointainer extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
    ]
  };

  constructor(props) {
    super(props);
    this.state = {
      currFlip: null,
      numFlips: 0,
      numHeads: 0,
      numTails: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const newFlip = getRandIdx(this.props.coins);
    this.setState(currState => {
        return {
            currFlip: newFlip,
            numFlips: currState.numFlips + 1,
            numHeads: currState.numHeads + (newFlip.side === "heads" ? 1 : 0),
            numTails: currState.numTails + (newFlip.side === "tails" ? 1 : 0)
        }
    });
  }

  handleClick(e) {
    this.flipCoin();
  }

  render() {
    return (
      <div className="Cointainer">
        <h1>Call it! Heads or Tails?</h1>
        {this.state.currFlip && <Coin data={this.state.currFlip} />}
        <button onClick={this.handleClick}>FLIP A COIN</button>
        <p>
          Out of {this.state.numFlips} flips, you've gotten{" "}
          {this.state.numHeads} heads, and {this.state.numTails} tails.
        </p>
      </div>
    );
  }
}

export default Cointainer;
