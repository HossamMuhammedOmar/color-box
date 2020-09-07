import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 18,
  };

  render() {
    let boxes = Array.from({ length: this.props.numBoxes });
    return (
      <div>
        <h1>Box Color</h1>
        <div className='BoxContainer'>
          {boxes.map((box) => (
            <Box />
          ))}
        </div>
      </div>
    );
  }
}

export default BoxContainer;
