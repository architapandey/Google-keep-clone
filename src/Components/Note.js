// components/Note.js
import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import { Button, NoteContainer, NoteFormContainer } from "../styles";

const Note = ({ note, onDelete, onUpdateColor, onEditNote }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setEditedNote(note);
  };

  const handleSaveEdit = () => {
    onEditNote(editedNote);
    setEditing(false);
  };

  return (
    <NoteContainer color={note.color}>
      {isEditing ? (
        <NoteFormContainer>
          <input
            type="text"
            value={editedNote.title}
            onChange={(e) =>
              setEditedNote({ ...editedNote, title: e.target.value })
            }
          />
          <textarea
            value={editedNote.content}
            onChange={(e) =>
              setEditedNote({ ...editedNote, content: e.target.value })
            }
          />
          <div>
            <ColorPicker
              selectedColor={editedNote.color}
              onSelectColor={(color) => setEditedNote({ ...editedNote, color })}
            />
          </div>
          <Button onClick={handleSaveEdit}>Save</Button>
          <Button onClick={handleCancelEdit}>Cancel</Button>
        </NoteFormContainer>
      ) : (
        <div>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <div>
            <ColorPicker
              selectedColor={note.color}
              onSelectColor={onUpdateColor}
            />
          </div>
          <Button onClick={handleEdit}>Edit</Button>
          <Button onClick={() => onDelete(note.id)}>Delete</Button>
        </div>
      )}
    </NoteContainer>
  );
};

export default Note;
