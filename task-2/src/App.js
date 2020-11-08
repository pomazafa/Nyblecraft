import React, { useEffect } from 'react';
import NoteList from './Note/NoteList';
import Context from './context';
import AddNote from './Note/AddNote';
import hashtagHelper from './Tag/hashtagHelper';
import axios from 'axios';

function App() {
  const [notes, setNotes] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState(notes);
  const [textareaValue, setTextareaValue] = React.useState("");

  useEffect(() => {
    fetch('http://localhost:4000/api/')
    .then(response => response.json())
    .then(notes => {
      setStage(notes)
    })
  }, []);

  useEffect(() => {
    if(notes)
      axios.post('/api/', notes)
  }, [notes]);

  function setStage(value) {
    setNotes(value);
    setSearchResults(value);
  }
  
  function removeNote(id) {
    setStage(notes.filter(note => note.id !== id));
  }

  function changeNote(id) {
    const note = notes.filter(note => note.id !== id);
    setTextareaValue(notes.filter(note => note.id === id)[0].text);
    setStage(note);
  }

  function addNote(text) {
    const tags = hashtagHelper(text);
    setStage(notes.concat([{text, id:Date.now(), tags: tags}]))
  }

  function removeTag(id, tag){
          setStage(notes.map(note => {
            if(note.id === id)
            {
              note.text = note.text.slice(0, note.text.indexOf(tag)) + note.text.slice(note.text.indexOf(tag) + 1);
              note.tags = note.tags.filter((t) => t !== tag);
            }
            return note;
          }));
  }

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
      const results = searchTerm ? notes.filter(note => note.tags.includes(searchTerm)) : notes;
      setSearchResults(results);
    }, [searchTerm, notes]);

  return (
    <Context.Provider value={{removeNote, removeTag, handleChange, searchTerm, changeNote, textareaValue, setTextareaValue}}>
      <div className="wrapper">
        <h1>Notes</h1>
        <AddNote onCreate={addNote}/>
        {searchResults && searchResults.length ? <NoteList notes={searchResults}></NoteList> : (<p>No notes</p>)}
      </div>
    </Context.Provider>
  );
}
 
export default App;
