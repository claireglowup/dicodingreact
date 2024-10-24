/** @format */
import React from "react";
import Footer from "./components/Footer";
import FormComponent from "./components/FormComponent";
import NotesList from "./components/NotesList";
import { getInitialData } from "./utils/data";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchNotes: [],
      warningNotFound: "",
    };
  }

  onAddNotesHandle = ({ title, body }) => {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: +new Date(),
          },
        ],
      };
    });
  };

  onDeleteNotesHandler = (id) => {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  };

  onArchiveNotesHandler = (id) => {
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });

    this.setState({ notes: updatedNotes });
  };

  onSearchNotes = (title) => {
    if (title.length != 0) {
      const filteredNotes = this.state.notes.filter((note) =>
        note.title.toLowerCase().startsWith(title.toLowerCase())
      );

      this.setState({
        searchNotes: filteredNotes.length > 0 ? filteredNotes : [],
        warningNotFound:
          filteredNotes.length === 0 ? "*Catatan Tidak Ditemukan" : "",
      });
      return;
    }

    this.setState({ searchNotes: [], warningNotFound: "" });
  };

  render() {
    return (
      <>
        <FormComponent
          addNotes={this.onAddNotesHandle}
          onSearchNotes={this.onSearchNotes}
          warningNotFound={this.state.warningNotFound}
        />
        <NotesList
          notes={
            this.state.searchNotes.length != 0
              ? this.state.searchNotes
              : this.state.notes
          }
          onDelete={this.onDeleteNotesHandler}
          onArchive={this.onArchiveNotesHandler}
        />
        <Footer />
      </>
    );
  }
}

export default App;
