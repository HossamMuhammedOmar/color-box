import React, { Component } from 'react';
import { choice } from './helper';
import './Box.css';

class Box extends Component {
  static defaultProps = {
    colorList: [
      '#1abc9c',
      '#2ecc71',
      '#3498db',
      '#9b59b6',
      '#34495e',
      '#f1c40f',
      '#e67e22',
      '#e74c3c',
      '#ecf0f1',
      '#95a5a6',
    ],
  };

  state = { color: choice(this.props.colorList) };

  changeColor() {
    let newColor;
    do {
      newColor = choice(this.props.colorList);
    } while (newColor === this.state.color);

    this.setState({ color: newColor });
  }

  handleClick = () => {
    this.changeColor();
  };

  render() {
    return (
      <div
        className='Box'
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default Box;
