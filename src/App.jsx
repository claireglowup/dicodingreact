/** @format */
import React from "react";
import Footer from "./components/Footer";
import FormComponent from "./components/FormComponent";
import NotesList from "./components/NotesList";
import { getInitialData, showFormattedDate } from "./utils/data";

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
            createdAt: showFormattedDate(new Date()),
          },
        ],
      };
    });
  };

  onDeleteNotesHandler = (id) => {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  };

  render() {
    return (
      <>
        <FormComponent addNotes={this.onAddNotesHandle} />
        <NotesList
          notes={this.state.notes}
          onDelete={this.onDeleteNotesHandler}
        />
        <Footer />
      </>
    );
  }
}

export default App;
