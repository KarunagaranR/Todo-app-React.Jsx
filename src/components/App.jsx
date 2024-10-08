import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Create from "./Newnote";


function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id){
    console.log("I was triggered by deleting");
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem,index)=> {
        return index!== id;

      }
    );
    })

  
    
  }

  // function deleteNote(id) {
  //   setNotes(prevValue => {
  //     return prevValue.filter((noteItem, index) => {
  //       return index !== id;
  //     });
  //   });
  // }

  return (
    <div>
      <Header />
      <Create onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
