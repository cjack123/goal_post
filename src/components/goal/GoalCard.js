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
    <section className="call">
      <div className="CardsFlex">
        <div className="goalCard">
            <h1 className="Qtitle">{goal.title}</h1>
            <h2>Due Date: {goal.dueDate}</h2>
            <h2> {goal.estTime} Minutes</h2>
          <button type="button" onClick={() => handleDeleteGoal(goal.id)}>Delete Goal</button>
          </div>
        </div>
      </section>
      </>
      
  );
}

