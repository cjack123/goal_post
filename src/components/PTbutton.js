// import { Link } from "react-router-dom";
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'
// import { ProjectCard } from './ProjectCard.js';
// import { getAllProjects, deleteProject, getProjectUserById } from '../../modules/ProjectManager.js';




// export const PTbutton = ( project) => {
//     //The initial state is an empty array
//     const [projects, setProjects] = useState([]);
//     let navigate = useNavigate();
//     const userId = JSON.parse(sessionStorage.getItem("TimeWizard_users")).id


//     const getProjects = () => {
//         //After the date comes back from the API,
//         // we use the setprojects funstion to update state
//         return getProjectUserById(userId).then(projectsFromAPI => {
//             setProjects(projectsFromAPI)
//         });
//     }

//     //got the customers from the API on the components's first render
//     useEffect(() => {
//         getProjects();
//     }, []);
 
    
//     return (
//         <>
//             <Link to={`/projects/${project.id}/task`}><button>View Project Tasks</button></Link>
//         </>
//     )
// }