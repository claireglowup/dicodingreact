/** @format */

import React from "react";
import "../styles/form.css";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charLeft: 50,
      judul: "",
    };
  }

  onInputJudul = (event) => {
    this.setState(() => {
      return {
        judul: event.target.value,
      };
    });
  };

  render() {
    return (
      <div className="container-form">
        <h1>CatatanMu📒</h1>
        <p>made with love for dicoding</p>
        <form>
          <div className="judul-catatan">
            <input className={this.state.judul.length === this.state.charLeft ? "beRed" : ""} type="text" placeholder="judul catatan..." id="judul" onChange={this.onInputJudul} value={this.state.judul} maxLength={this.state.charLeft} />
            <p>Sisa Karakter : {this.state.charLeft - this.state.judul.length}</p>
          </div>
          <textarea rows={10} />
          <button type="submit">
            <span>Buat</span>
          </button>
        </form>
      </div>
    );
  }
}

export default FormComponent;
