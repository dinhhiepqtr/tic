import React from 'react';
import Board from './Board';


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const status = "Next player is: " + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div className="game"><Board squares={this.state.squares} onClick={i => this.handleClick(i)} /></div>
        <div className="game-info">
          <p>{status}</p>
        </div>
      </div>
    );
  }
}
export default Game;
