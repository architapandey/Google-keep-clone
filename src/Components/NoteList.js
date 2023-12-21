import React from "react";
import Note from "./Note";
import { NotesContainer } from "../styles";

const NoteList = ({ notes, onDelete, onUpdateColor, onEditNote }) => {
  return (
    <NotesContainer>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          onDelete={onDelete}
          onEditNote={onEditNote}
          onUpdateColor={onUpdateColor}
        />
      ))}
    </NotesContainer>
  );
};

export default NoteList;
