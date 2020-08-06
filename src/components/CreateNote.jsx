import React, { useState } from "react";
import { useNotes } from "../NotesProvider";

export default function CreateNote() {
  const [title, updateNoteTitle] = useState("");
  const [description, updateNoteDescription] = useState("");
  const [ , dispatch] = useNotes();

  const updateTextArea = (e) => {
    updateNoteDescription(e.target.value);
    let textarea = document.getElementById("newNote_details");

    textarea.style.height = "";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  const addNewnote = () => {
    dispatch({
      type: "ADD_NOTE",
      newNote: {
        title,
        description,
      },
    });

    updateNoteTitle("");
    updateNoteDescription("");
  };

  return (
    <div className="newNote">
      <input
        type="text"
        className="newNote_title"
        placeholder="Title"
        value={title}
        onChange={(e) => updateNoteTitle(e.target.value)}
      />
      <textarea
        rows="2"
        onChange={updateTextArea}
        id="newNote_details"
        placeholder="Take a note..."
        value={description}
      />
      <div>
        <button onClick={addNewnote}>Add</button>
      </div>
    </div>
  );
}
