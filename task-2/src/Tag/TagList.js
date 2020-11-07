import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';

function TagList({tags, noteId}) {
    return (
        <ul className="tags">
        { tags.map((tag, index) => {
            return <Tag noteId={noteId} tag={tag} key={index}></Tag>
        })}
    </ul>
    )
}

TagList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    noteId: PropTypes.number
}

export default TagList;
