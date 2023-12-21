import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import { NoteFormContainer } from "../styles";

const NoteForm = ({ onCreateNote }) => {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    color: "#ffffff",
  });

  const handleCreateNote = () => {
    onCreateNote(newNote);
    setNewNote({
      title: "",
      content: "",
      color: "#ffffff",
    });
  };

  return (
    <NoteFormContainer>
      <input
        type="text"
        placeholder="Title"
        value={newNote.title}
        onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        value={newNote.content}
        onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
      />
      <ColorPicker
        selectedColor={newNote.color}
        onSelectColor={(color) => setNewNote({ ...newNote, color })}
      />
      <button onClick={handleCreateNote}>Create Note</button>
    </NoteFormContainer>
  );
};

export default NoteForm;
