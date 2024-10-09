/** @format */

import React from "react";

class FormAddProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameBoard: "",
      size: "",
    };
  }

  onInputNameBoard = (event) => {
    this.setState(() => {
      return {
        nameBoard: event.target.value,
      };
    });
  };

  onInputSizeBoard = (event) => {
    this.setState(() => {
      return {
        size: event.target.value,
      };
    });
  };

  render() {
    return (
      <div className="form-board">
        <form>
          <label htmlFor="nameBoard">Product : </label>
          <input type="text" value={this.state.nameBoard} id="nameBoard" onChange={this.onInputNameBoard} />

          <label htmlFor="sizeBoard">Size : </label>
          <input type="text" value={this.state.nameBoard} id="sizeBoard" onChange={this.onInputSizeBoard} />
        </form>
      </div>
    );
  }
}

export default FormAddProduct;
