import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddNote({onCreate}) {
    const [value, setValue] = useState('');

    function submitHandler(event) {
        event.preventDefault();

        if(value.trim()) {
            onCreate(value);
            setValue('');
        }
    }

    return (<form className="add-note-form" onSubmit={submitHandler}>
        <textarea value={value} onChange={event => setValue(event.target.value) }></textarea>
        <br/>
        <input placeholder="#tag"></input>
        <br/>
        <button type="submit">Add note</button>
    </form>)
}

AddNote.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddNote;
