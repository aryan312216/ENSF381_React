import './index.css'
import { useEffect, useState } from "react";
import uuid from "react-uuid";

import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Navbar from './components/Navbar';

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled",
      lastModified: Date.now(),
      body: "",
     
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (noteId) => {
    const answer = window.confirm("Are you sure?");
    if (answer) {
      setNotes(notes.filter(({ id }) => id !== noteId));
}
   
  };
  

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  return (
    <>
    <Navbar/>
    <div className="App">
      
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      {activeNote ? (
          <Main
            activeNote={getActiveNote()}
            onUpdateNote={onUpdateNote}
            onDeleteNote={onDeleteNote}
          />
        ) : (
          <div className="no-active-note">Select a note, or create a new one.</div>
        )}
      </div>
    </>
  );
 
}
export default App;  