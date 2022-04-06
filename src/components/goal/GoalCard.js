import React from "react"
// import { Link } from "react-router-dom";
import "./Goal.css"

export const GoalCard = ({ goal, handleDeleteGoal }) => {



  return (
    <>
      {/* <div className="checkBox">
        <input id="completed" value="" type="checkbox" />
        <label>Complete</label>
        </div> */}
    <div className="card">
      <div className="card-content">
        <h1>Test</h1>
          <p>Goal :{goal.title}</p>
          <p>Due Date: {goal.dueDate}</p>
          <p> {goal.estTime} Minutes</p>
        <button type="button" onClick={() => handleDeleteGoal(goal.id)}>Delete Goal</button>
        </div>
      </div>
      </>
      
  );
}

