import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addGoal } from '../../modules/GoalManager';
import { getAllProjects } from '../../modules/ProjectManager';
import './GoalForm.js'

export const GoalForm = () => {
    // State will contain both goal data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

    const [goal, setGoal] = useState({
		userId: 0,
		title: "",
		projectId: 0
	});

    const [isLoading, setIsLoading] = useState(false);

    const [projects, setProjects] = useState([]);

	const navigate = useNavigate();

    const handleControlledInputChange = (event) => {

		const newGoal = { ...goal }
		let selectedVal = event.target.value 

		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}

		newGoal[event.target.id] = selectedVal
		// update state
		setGoal(newGoal)
	}

    useEffect(() => {
		
        getAllProjects().then(setProjects)
	}, []);


    const handleClickSaveGoal = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		const projectId = goal.projectId
		const user = JSON.parse(sessionStorage.getItem("TimeWizard_users"))
		const newGoal = { ...goal }
		newGoal.userId = user.id
		newGoal.dateTime = new Date().toLocaleString();

		if ( projectId === 0 ) {
			window.alert("Please select a project")
		} else {
			
			addGoal(newGoal)
				.then(() => navigate("/goals"))
		}
	}


    return (
        <form className="GoalForm">
            <h2 className="goalForm__title">New Goal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Goal:</label>
                    <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Goal title" value={goal.title} />
                </div>
                </fieldset>

			<fieldset>
				<div className="form-group">
					<label htmlFor="date">Minutes to complete goal:</label>
					<input type="date" id="dueDate" onChange={handleControlledInputChange} required autoFocus className="form-control" value={goal.dueDate} />
					</div>
					</fieldset>


			<fieldset>
					<div className="form-group">
						<label htmlFor="number">Minutes to complete goal:</label>
						<input type="number" id="estTime" onChange={handleControlledInputChange} required autoFocus className="form-control" value={goal.estTime} />
						</div>
						</fieldset>


            <fieldset>
				<div className="form-group">
					<label htmlFor="project">Assign to project: </label>
					<select value={goal.projectId} name="project" id="projectId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a project</option>
						{projects.map(project => (
							<option key={project.id} value={project.id}>
								{project.title}
							</option>
						))}
					</select>
				</div>
			</fieldset>
            <button className="btn btn-primary"
				onClick={handleClickSaveGoal}>
				Save Goal
          </button>
        </form>
    )
}