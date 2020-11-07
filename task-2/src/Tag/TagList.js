import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';

function TagList({tags}) {
    return (
        <ul className="tags">
        { tags.map((tag, index) => {
            return <Tag tag={tag} key={index}></Tag>
        })}
    </ul>
    )
}

TagList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default TagList;
