import React from 'react';
import Note from './Note'

export default function NodeList(props) {
    return (
        <ul>
            { props.notes.map(note => {
                return <Note note={note}></Note>
            })}
        </ul>
    )
}