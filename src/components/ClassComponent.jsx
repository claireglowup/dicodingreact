/** @format */

import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return <h1>Halo bang {this.state.count}</h1>;
  }
}

export default MyComponent;
