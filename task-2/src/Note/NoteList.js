import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

function NoteList(props) {
    return (
        <ul className="notes-list">
            { props.notes.map((note) => {
                return <Note note={note} key={note.id}></Note>
            })}
        </ul>
    )
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default NoteList;