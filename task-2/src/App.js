import React from 'react';
import NoteList from './Note/NoteList';

function App() {

  const notes = [
    {id: 1, text: "First Note", tags: []},
    {id: 2, text: "Second #note", tags: []},
    {id: 1, text: "Third note", tags: []}
  ]

  return (
    <div className="wrapper">
      <h1>Notes</h1>
      <NoteList notes={notes}></NoteList>
    </div>
  );
}

export default App;
