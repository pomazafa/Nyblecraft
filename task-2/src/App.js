import React from 'react';
import NoteList from './Note/NoteList';
import Context from './context';
import AddNote from './Note/AddNote';

function App() {
  const [notes, setNotes] = React.useState([
    {id: 1, text: "First Note", tags: []},
    {id: 2, text: "Second #note", tags: []},
    {id: 3, text: "Third note", tags: []}
  ]);

  function removeNote(id) {
    setNotes(notes.filter(note => note.id !== id));
  }

  function addNote(text) {
    setNotes(notes.concat([{text, id:Date.now()}]));
  }

  return (
    <Context.Provider value={{removeNote}}>
      <div className="wrapper">
        <h1>Notes</h1>
        <AddNote onCreate={addNote}/>
        {notes.length ? <NoteList notes={notes}></NoteList> : (<p>No notes</p>)}
        
      </div>
    </Context.Provider>
  );
}

export default App;
