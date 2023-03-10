//  import React, { useState, useEffect } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import  { useRef, useState  } from 'react';
// import JoditEditor from 'jodit-react';
// import { Jodit } from 'jodit-react';
import React from 'react';

const Main = ({ activeNote, onUpdateNote,  onDeleteNote  }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };
 
    // const [value, setValue] = useState('');
  
  
    // const editor = useRef(null);
    // const [content, setContent] = useState('');
  
    

  if (!activeNote) return <div className="no-active-note">Select a note, or create a new one.</div>;

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
      
        
        <input
          type="text"
          id="title"
          placeholder="Untitled"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          className="editor"
          autoFocus
         
          
        />
        <div className="button-group">
        <button>Save</button>
        <span style={{marginLeft: "30px"}} />
        <button onClick={(e) => onDeleteNote(activeNote.id)}>Delete</button>
        </div>

        
         
         
        <textarea
          id="body"
          placeholder="Your note here"
          
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
        {/* <ReactQuill 
         id="body" 
         theme="snow"
         value={activeNote.body} 
         onChange={(e) => onEditField("body", e.target.value)} 
         className="editor" /> */}
        {/* <JoditEditor
         
         ref={editor}
         value={content}
        //  config={config}
         tabIndex={1} // tabIndex of textarea
         
         onChange={newContent => {setContent(newContent)}}
		/> */}
      </div>
      
    </div>
  );
};
export default Main;  