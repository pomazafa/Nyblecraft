import React, { useContext } from 'react';
import deleteIcon from '../public/delete.png';
import Context from '../context';
import PropTypes from 'prop-types';

function Tag({tag, noteId}) {
    const { removeTag } = useContext(Context);

    return (
        <li className="tag">
            <span>
                {tag}
            </span>
            &nbsp;
            <button onClick={() => removeTag(noteId, tag)}><img src={deleteIcon} alt="delete" className="icon-mini"></img></button>
        </li>
    )
}

Tag.propTypes = {
    tag: PropTypes.string.isRequired,
    noteId: PropTypes.number
}

export default Tag;