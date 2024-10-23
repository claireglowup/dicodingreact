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
      if (note.id === id && note.archived === false) {
        return { ...note, archived: true };
      } else if (note.id === id && note.archived === true) {
        return { ...note, archived: false };
      }
      return note;
    });

    this.setState({ notes: updatedNotes });
  };

  render() {
    return (
      <>
        <FormComponent addNotes={this.onAddNotesHandle} />
        <NotesList
          notes={this.state.notes}
          onDelete={this.onDeleteNotesHandler}
          onArchive={this.onArchiveNotesHandler}
        />
        <Footer />
      </>
    );
  }
}

export default App;
