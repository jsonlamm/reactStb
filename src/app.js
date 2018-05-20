import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Components:
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
	}
  render() {
    return (
			<div> Square
			</div>
    );
  }
}

class Dice extends React.Component {
	render() {
		return (
			<div className="dice">
				{this.props.value}
			</div>
		)
	}
}

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rollDisabled: null,
			endDisabled: null,
			sum: 45,
			dice1: null,
			dice2: null,
			diceSum: 0
		};
	}
	render() {
		return (
			<div>
				<div id="board-container">

					<div id="main" />

					<Square value={1} />
					<Square value={2} />
					<Square value={3} />
					<Square value={4} />
					<Square value={5} />
					<Square value={6} />
					<Square value={7} />
					<Square value={8} />
					<Square value={9} />
				</div>
			</div>
		)}

}

ReactDOM.render( <Main/>,
	document.getElementById('container')
);
