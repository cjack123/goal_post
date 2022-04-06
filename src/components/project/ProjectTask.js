import React, { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom"
// import { getProjectById, deleteProject } from "../../modules/ProjectManager";
import { getGoalById, deleteGoal } from "../../modules/GoalManager";
import { GoalList } from "../goal/GoalList";


//This component will be render on the home page.
//Format will include checkboxes for the steps and goals. 
//Once prject is completed it will either be deleted or moved to a new array of completed projects.
//I will use the ProjectCard and ProjectTask component.
//AnimalDetains in Kennels shpould be a reference for this file.


//Today's thought's
//would goal.projectid need to equal project.id for the Project's goals to render?

//I would need to use map to make a new list of the array?



export const ProjectTask = () => {
    
    const [goal, setGoal] = useState({ Title: "", Description: "", });
    const [isLoading, setIsLoading] = useState(true);

    


    return (
        <>
        <GoalList />
        </>
    )

}