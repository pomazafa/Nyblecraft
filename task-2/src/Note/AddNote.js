import React, { useState, useContext } from 'react';
import Context from '../context';
import PropTypes from 'prop-types';

function AddNote({onCreate}) {
    // const [value, setValue] = useState('');
    const { searchTerm, handleChange, textareaValue, setTextareaValue } = useContext(Context);

    function submitHandler(event) {
        event.preventDefault();

        if(textareaValue.trim()) {
            onCreate(textareaValue);
            setTextareaValue('');
        }
    }

    return (<form className="add-note-form" onSubmit={submitHandler}>
        <textarea value={textareaValue} onChange={event => setTextareaValue(event.target.value)}></textarea>
        <br/>
        <input placeholder="#tag" value={searchTerm} onChange={handleChange}></input>
        <br/>
        <button type="submit">Add note</button>
    </form>)
}

AddNote.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddNote;
