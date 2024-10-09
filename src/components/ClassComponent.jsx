/** @format */

import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  onIncreaseHandler = () => {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1,
      };
    });
  };

  onResetHandler = () => {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  };

  render() {
    return (
      <div className="cover-counter">
        <button onClick={this.onResetHandler}>reset</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.onIncreaseHandler}>Increase</button>
      </div>
    );
  }
}

export default MyComponent;
