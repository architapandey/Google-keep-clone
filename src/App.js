import React, { useState, useEffect } from "react";
import NoteList from "./Components/NoteList";
import NoteForm from "./Components/NoteForm";
import {
  AppContainer,
  MobileLayout,
  SearchInput,
  SearchInputContainer,
} from "./styles";
import { SearchIcon, StyledFontAwesomeIcon } from "./styles";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  const saveNotesToLocalStorage = (newNotes) => {
    // Save notes to local storage
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const handleCreateNote = (newNote) => {
    const updatedNotes = [...notes, { ...newNote, id: Date.now() }];
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  const handleDeleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  const handleUpdateColor = (noteId, color) => {
    const updatedNotes = notes.map((note) =>
      note.id === noteId ? { ...note, color } : note
    );
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };
  const handleEditNote = (editedNote) => {
    const updatedNotes = notes?.map((note) =>
      note.id === editedNote.id ? editedNote : note
    );
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <AppContainer>
      <h1>Google Keep Clone</h1>
      <SearchInputContainer>
        <SearchInput
          type="text"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <SearchIcon>
          <StyledFontAwesomeIcon icon={faSearch} />
        </SearchIcon>
      </SearchInputContainer>

      <MobileLayout>
        <NoteForm onCreateNote={handleCreateNote} />
        <NoteList
          notes={filteredNotes}
          onDelete={handleDeleteNote}
          onUpdateColor={handleUpdateColor}
          onEditNote={handleEditNote}
        />
      </MobileLayout>
    </AppContainer>
  );
};

export default App;
