import React, { useState, useEffect } from 'react';
import { GoalNotesCard } from './GoalNotesCards.js';
import { getAllNotes, getNoteById, deleteNote, getGoalNoteById } from '../../modules/NoteManager.js';

import { useNavigate, useParams } from 'react-router-dom'

export const GoalNotesList = () => {

    const [notes, setNotes] = useState([]);
    let navigate = useNavigate();
    const {goalId} = useParams();
    const userId = JSON.parse(sessionStorage.getItem("TimeWizard_users")).id

    const getNotes = () => {
        //After the date comes back from the API,
        // we use the setNotes funstion to update state
        return getGoalNoteById (goalId).then(notesFromAPI => {
            setNotes(notesFromAPI)
        });
    }

    useEffect(() => {
        getNotes();
    }, []);

    const handleDeleteNote = id => {
        deleteNote(id)
        .then(() => getAllNotes().then(setNotes));
    };



    return (
        <div className="container-cards">
                {notes.map(note =>
                    <GoalNotesCard
                    key={note.id}
                    note={note}
                    handleDeleteNote={handleDeleteNote} />)}
            </div>
    )




}