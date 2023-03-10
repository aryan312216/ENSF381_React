import React from 'react'
const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  
  return (
    <>
     <div className="app-sidebar">
     
     
      <div className="app-sidebar-header justify-content-right text-right">
      <h4><b>Notes</b></h4>
        <button onClick={onAddNote} type="button" className="btn btn-black btn-lg"><b>&#x002B;</b></button>
      </div>
      <hr></hr>
     
     
      <div className="app-sidebar-notes">
      
        {sortedNotes.map(({ id, title, body, lastModified }, i) => (
          <div
            className={`app-sidebar-note ${id === activeNote && "active"}`}
            onClick={() => setActiveNote(id)}
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong>
             
            </div>

            <p>{body && body.substr(0, 50) + "..."}</p>
            <small className="note-meta">
              Last Modified{" "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
    </>
  );
 
};

export default Sidebar;