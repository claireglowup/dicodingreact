/** @format */

import React from "react";
import "../styles/form.css";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charLeft: 50,
      title: "",
      body: "",
      archived: false,
      createdAt: "",
    };
  }

  onInputTitle = (event) => {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  };

  onInputBody = (event) => {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  };

  onSubmitEventHandler = (event) => {
    event.preventDefault();
    this.props.addNotes(this.state);
  };

  render() {
    return (
      <div className="container-form">
        <h1>CatatanMu📒</h1>
        <div className="title-catatan">
          <p>made with ❤ for dicoding</p>
          <p>Sisa Karakter : {this.state.charLeft - this.state.title.length}</p>
        </div>

        <form onSubmit={this.onSubmitEventHandler}>
          <input
            className={
              this.state.title.length === this.state.charLeft ? "beRed" : ""
            }
            type="text"
            placeholder=" catatan..."
            id="title"
            onChange={this.onInputTitle}
            value={this.state.title}
            maxLength={this.state.charLeft}
            required
          />

          <textarea
            rows={10}
            placeholder="isi catatan..."
            id="body"
            onChange={this.onInputBody}
            value={this.state.body}
          />
          <button type="submit">
            <span>Buat Catatan</span>
          </button>
        </form>
      </div>
    );
  }
}

export default FormComponent;
