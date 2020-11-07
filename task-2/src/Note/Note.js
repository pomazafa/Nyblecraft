import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import editIcon from '../public/edit.png';
import deleteIcon from '../public/delete.png';
import Context from '../context';

function Note({note, index}) {
    const { removeNote } = useContext(Context);

    return (
        <li>
            <span>
                <strong>{index + 1}.</strong>
                &nbsp;
                {note.text}
            </span>
            <div className="buttons-list">
                <button><img src={editIcon} alt="edit" className="icon"></img></button>
                <button onClick={() => removeNote(note.id)}><img src={deleteIcon} alt="delete" className="icon"></img></button>
            </div>
        </li>
    )
}

Note.propTypes = {
    note: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default Note;