import React from "react";
import { Link } from "react-router-dom";
import "./Project.css"
import { DayCount } from '../DayCount.js'
import "./Project.css"
// import {getAllProjects} from "../../ProjectManager"



export const ProjectCard = ({ project, handleDeleteProject }) => {

    
    return (
        <>
        <section className="tall">
            {/* <div className="CardFlex>"> */}
                <div className="projectCard">
                    <h1 className="Qtitle">{project.title}</h1>
                    <h2>Due Date: {project.dueDate}</h2>
                    <h2>Reason: {project.description}</h2>

                    <DayCount 
                    key={project.id}
                    project={project}
                        />
                    <div className="flexButton">
                        <Link to={`/projects/${project.id}/task`}><button>View Project Tasks</button></Link>
                        <Link to={`/projects/${project.id}/edit`}><button>Edit Project</button></Link>
                        <button type="button" onClick={() => handleDeleteProject(project.id)}>Delete Project</button>
                        </div>
                    </div>
                {/* </div> */}
        </section>

        </>
    )
}