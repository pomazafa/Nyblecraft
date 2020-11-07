import React from 'react';
import NoteList from './Note/NoteList';
import Context from './context';
import AddNote from './Note/AddNote';
import data from './data/notes.json';
import hashtagHelper from './Tag/hashtagHelper';

function App() {
  const [notes, setNotes] = React.useState(data);

  function removeNote(id) {
    setNotes(notes.filter(note => note.id !== id));
  }

  function addNote(text) {
    const tags = hashtagHelper(text);
    setNotes(notes.concat([{text, id:Date.now(), tags: tags}]));
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
