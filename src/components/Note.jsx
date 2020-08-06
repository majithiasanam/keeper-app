import React from "react";
import { useNotes } from "../NotesProvider";

function Note({ id, title, description }) {

    const [ , dispatch] = useNotes();

    const removeNote = () => {
        dispatch({
            type: "DELETE_NOTE",
            noteId: id
        });
    };

    return (
      <div className="note">
        <h1>{title}</h1>
        <p>{description}</p>
        <div>
          <button onClick={removeNote}>Delete</button>
        </div>
      </div>
    );
}

export default Note;
