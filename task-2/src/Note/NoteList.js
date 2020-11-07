import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

function NoteList(props) {
    return (
        <ul>
            { props.notes.map((note, index) => {
                return <Note note={note} key={note.id} index={index}></Note>
            })}
        </ul>
    )
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default NoteList;