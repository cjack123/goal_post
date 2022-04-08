import React, { useState, useEffect } from 'react';
import { GoalCard } from './GoalCard.js';
import { getAllGoals, getGoalById, deleteGoal, getProjectGoalById } from '../../modules/GoalManager.js';

import { useNavigate, useParams } from 'react-router-dom'

//goals need user info
//sort goals within projects


export const GoalList = () => {
    //The initial state is an empty array
    const [goals, setGoals] = useState([]);
    let navigate = useNavigate();
    const {projectId} = useParams();

    const getGoals = () => {
        //After the date comes back from the API,
        // we use the setGoals funstion to update state
        return getProjectGoalById (projectId).then(goalsFromAPI => {
            setGoals(goalsFromAPI)
        });
    }

    

    //got the goals from the API on the components's first render
    useEffect(() => {
        getGoals();
    }, []);

    //this is the delete customer function
    const handleDeleteGoal = id => {
        deleteGoal(id)
        .then(() => getAllGoals().then(setGoals));
    };


    var checked = JSON.parse(localStorage.getItem('completed'));
    if (checked === true) {
        document.getElementById("completed").checked = true;
    } 

    //Now we use .map() to "loop over" the goals array to show a list of goal cards
    return (
        <>
            {/* <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => {navigate("/goals/create")}}>
                    Add New goal
                    </button>
            </section> */}
             <h1>My Goals</h1>
            <div className="container-cards">
                {goals.map(goal =>
                    <GoalCard 
                    key={goal.id}
                    goal={goal}
                    handleDeleteGoal={handleDeleteGoal} />)}
            </div>
        </>
    )



}