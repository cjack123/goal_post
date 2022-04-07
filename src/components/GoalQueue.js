import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DCgoal} from './DCgoal.js'
import { PTbutton } from './PTbutton'
import { getGoalUserById, getGoalById } from "../modules/GoalManager";
import { getAllProjects, deleteProject, getProjectUserById } from '../modules/ProjectManager.js';


export const GoalQueue = ( {goalId} ) => {
  const [goal, setGoal] = useState({});
  const userId = JSON.parse(sessionStorage.getItem("TimeWizard_users")).id
  

  useEffect(() => {
    getGoalById(goalId).then(goal => {
      setGoal(goal);
    });
  }, [goalId]);

  

  return (
    <>
    <h1>{goal.title}</h1>
    <h2>Due Date: {goal.dueDate}</h2>
    <p>Reason: {goal.description}</p>
    <DCgoal
      key={goal.id}
      goal={goal}/>
    <PTbutton />
    </>
  );
};
