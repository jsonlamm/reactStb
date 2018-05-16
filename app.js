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
