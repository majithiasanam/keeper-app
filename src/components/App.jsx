import React from "react";
import Footer from "./Footer";
import Heading from "./Header";
import Note from "./Note";
import CreateNote from "./CreateNote";
import { useNotes } from "../NotesProvider";

function App() {
  const [{ notes }] = useNotes();
  return (
    <>
      <Heading />
      <div className="container">
        <CreateNote />
        <div className="notes_area">
          {notes.map((note, id) => {
            return (
              <Note id={id} title={note.title} description={note.description} />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
