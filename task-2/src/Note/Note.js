import React from 'react';
import PropTypes from 'prop-types';

function Note({note, index}) {
    return (
        <li><strong>{index + 1}</strong>{note.text}</li>
    )
}

Note.propTypes = {
    note: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default Note;