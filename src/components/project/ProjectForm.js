import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProject } from '../../modules/ProjectManager';
import './ProjectForm.css'

//Problem: The input text autofills for all textboxes.
//line 21
//I need my add goal button to render a new goal template
//There needs to be a function that associates the id of all of the array options in database.
// Goals form

//I can make (multiple at one) projects. 
//Save a project then render back to project list got to project list to view goals.
//Then you can view goals and add goals. Goals will show with check boxes.
//Use line Kennels/AnimalForm line 59-73 as reference - add user in object


export const ProjectForm = () => {
    // State will contain both Event data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

    const navigate = useNavigate();


    const [appProject, setProject] = useState ({
        userId: 0,
        title: "",
        description: "",
        dueDate: "",
		isCompleted: false
        //maybe add topics? Personal, professional, school, chores, cooking, hobbies, et
		

    })

    const [isLoading, setIsLoading] = useState(false);

    const handleControlledInputChange = (project) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newProject = { ...appProject }
		let selectedVal = project.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (project.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Project is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newProject[project.target.id] = selectedVal
		// update state
		setProject(newProject)
	}

    const handleClickSaveProject = (project) => {
		project.preventDefault() //Prevents the browser from submitting the form

		const user = JSON.parse(sessionStorage.getItem("TimeWizard_users"))
		const newProject = { ...appProject }
		newProject.userId = user.id
		newProject.dateTime = new Date().toLocaleString();
		// setProject(newProject)
		//invoke addProject passing project as an argument.
		//once complete, change the url and display the project list
		addProject(newProject)
			.then(() => navigate("/projects"))
		
	}

    return (
        <>
        <form className="projectForm">
      
			<section className="grove">
            <h3 className="projectForm_header">New Project Form</h3>
				<fieldset>
						<div className="form-group">
							<label htmlFor="text">Title</label>
							<input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="English Paper" value={appProject.title} />
							</div>
							</fieldset>

				<fieldset>
						<div className="form-group">
							<label htmlFor="date">Due Date</label>
							<input type="date" id="dueDate" onChange={handleControlledInputChange} required autoFocus className="form-control" value={appProject.dueDate} />
							</div>
							</fieldset>

				<fieldset>
						<div className="form-group">
							<label htmlFor="textarea">Description</label>
							<input type="textarea" id="description" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Bandura's behavior theory is the is the best approach for learning." value={appProject.description} />
							</div>
							</fieldset>

				<div className='snow'>
					<button className="btn btn-primary"
					onClick={handleClickSaveProject}>Save Project</button>
					</div>
				</section>
	    </form>
        </>
    )

}