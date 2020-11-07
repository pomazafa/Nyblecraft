import React, { useEffect } from 'react';
import NoteList from './Note/NoteList';
import Context from './context';
import AddNote from './Note/AddNote';
import hashtagHelper from './Tag/hashtagHelper';
import axios from 'axios';

function App() {
  const [notes, setNotes] = React.useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/')
    .then(response => response.json())
    .then(notes => setNotes(notes))
  }, []);

  useEffect(() => {
    if(notes)
      axios.post('/api/', notes)
  }, [notes]);
  
  function removeNote(id) {
    setNotes(notes.filter(note => note.id !== id));
  }

  function addNote(text) {
    const tags = hashtagHelper(text);
    setNotes(notes.concat([{text, id:Date.now(), tags: tags}]))
  }

  return (
    <Context.Provider value={{removeNote}}>
      <div className="wrapper">
        <h1>Notes</h1>
        <AddNote onCreate={addNote}/>
        {notes && notes.length ? <NoteList notes={notes}></NoteList> : (<p>No notes</p>)}
      </div>
    </Context.Provider>
  );
}
 
export default App;
