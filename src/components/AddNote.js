import React from 'react'
import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {

    const [noteText, setNoteText] = useState('');
    const characterLimit = 220;


    const handleChange = (event) => {
        // console.log(event.target.value);
        if (characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        }
            
    };

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }

    }


    return (
        <div className='note new'>
            <textarea cols="10" rows="8" placeholder='Type to add a note...' value={noteText} onChange={handleChange}></textarea>

            <div className="note-footer">
                <small>{characterLimit - noteText.length}</small>
                <button className='save' onClick={handleSaveClick}>Add</button>
            </div>
        </div>

    )
}

export default AddNote