import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function Newnote({ onAdd }) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function HandleChange(event) {
    const { name, value } = event.target;

    setNote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function HandleSubmit(event) {
    event.preventDefault();

    // Trim the title and content before submitting
    const trimmedNote = {
      title: note.title.trim(),
      content: note.content.trim()
    };

    onAdd(trimmedNote); 
    setNote({
      title: "",
      content: ""
    });    
  }

  const [isexpand, setExpand] = useState(false);

  function expand() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={HandleSubmit}>
        {isexpand && (
          <input
            onChange={HandleChange}
            type="text"
            name="title"
            placeholder="Add your Todo Title here"
            value={note.title}
          />
        )}
        <textarea
          onClick={expand}
          className="inp"
          onChange={HandleChange}
          name="content"
          placeholder="Add your content here"
          value={note.content}
          rows={isexpand ? 3 : 1}
        ></textarea>
        <Zoom in={isexpand}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default Newnote;
