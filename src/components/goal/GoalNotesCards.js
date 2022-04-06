import React from "react"
// import { Link } from "react-router-dom";
import "./Goal.css"

export const GoalNotesCard = ({ note, handleDeleteNote }) => {



  return (
    <>
      <div className="checkBox">
        <input id="completed" value="" type="checkbox" />
        <label>Complete</label>
        </div>
    <div className="card">
        <div className="card-content">
          <h1>Test</h1>
            <p>Goal :{note.title}</p>
            <p> {note.goalId} Minutes</p>
            <p>Due Date: {note.message}</p>
            <button type="button" onClick={() => handleDeleteNote(note.id)}>Delete Goal</button>
          </div>
      </div>
      </>
      
  );
}