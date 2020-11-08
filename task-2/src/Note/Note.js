import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import editIcon from '../public/edit.png';
import deleteIcon from '../public/delete.png';
import Context from '../context';
import TagList from '../Tag/TagList';

function Note({note}) {
    const { removeNote, changeNote } = useContext(Context);

    return (
        <li>
            <div className="note">
                <span>
                    {note.text}
                </span>
                <div className="buttons-list">
                    <button onClick={() => changeNote(note.id)}><img src={editIcon} alt="edit" className="icon"></img></button>
                    <button onClick={() => removeNote(note.id)}><img src={deleteIcon} alt="delete" className="icon"></img></button>
                </div>
            </div>

            {note.tags.length ? <TagList tags={note.tags} noteId={note.id}></TagList> : ''}

        </li>
    )
}

Note.propTypes = {
    note: PropTypes.object.isRequired
}

export default Note;