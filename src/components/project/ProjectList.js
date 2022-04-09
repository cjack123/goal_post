import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { ProjectCard } from './ProjectCard.js';
import { getAllProjects, deleteProject, getProjectUserById } from '../../modules/ProjectManager.js';



export const ProjectList = () => {
    //The initial state is an empty array
    const [projects, setProjects] = useState([]);
    let navigate = useNavigate();
    const userId = JSON.parse(sessionStorage.getItem("TimeWizard_users")).id


    const getProjects = () => {
        //After the date comes back from the API,
        // we use the setprojects funstion to update state
        return getProjectUserById(userId).then(projectsFromAPI => {
            setProjects(projectsFromAPI)
        });
    }

    //got the customers from the API on the components's first render
    useEffect(() => {
        getProjects();
    }, []);
 
    //this is the delete customer function
    const handleDeleteProject = id => {
        deleteProject(id)
        .then(() => getProjectUserById(userId).then(setProjects));
    };

    

    // var checked = JSON.parse(localStorage.getItem('isCompleted'));
    // if (checked === true) {
    //     document.getElementById("isCompleted").checked = true;
    // } 


    //.map() loops the projects api array displaying project cards' list
    return (
        <>
            {/* <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => {navigate("/projects/create")}}>
                    Add New Project
                    </button>
            </section> */}
            <h1>My Projects</h1>
            <div className="container-cards">
                {projects.map(project =>
                    <ProjectCard 
                    key={project.id}
                    project={project}
                    handleDeleteProject={handleDeleteProject} />)}
            </div>
        </>
    )



}



// const getProjects = () => {
//     //grabs project and return from the API,
//     // use setProjects to update state
//     const user = JSON.parse(sessionStorage.getItem("TimeWizard_users"))
//     const userId = sessionStorage.setItem("TimeWizard_user", JSON.stringify(user))
//     return getProjectUserById(userId).then(projectsFromAPI => {
//         setProjects(projectsFromAPI)
//     });
// }