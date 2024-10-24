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
      search: "",
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

  onInputSearch = (event) => {
    const searchValue = event.target.value;
    this.setState({ search: searchValue });
    this.props.onSearchNotes(searchValue);
  };

  onSubmitEventHandler = (event) => {
    event.preventDefault();
    this.props.addNotes(this.state);
  };

  render() {
    return (
      <div className="container-form">
        <div className="search-notes">
          <h1>CatatanMu📒</h1>
          <input
            className="search-input"
            type="text"
            value={this.state.search}
            onChange={this.onInputSearch}
            placeholder="cari catatan                        🔎"
          />
        </div>

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
            placeholder="judul catatan..."
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
