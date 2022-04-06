import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DayCount } from './DayCount.js'
import { getProjectUserById, getProjectById } from "../modules/ProjectManager";
import { ProjectCard } from "./project/ProjectCard";

export const Queue = ({projectId}) => {
  const [project, setProject] = useState({});
  const userId = JSON.parse(sessionStorage.getItem("TimeWizard_users")).id
  

  useEffect(() => {
    getProjectById(projectId).then(project => {
      setProject(project);
    });
  }, [projectId]);

  

  return (
    <>
    <h1>{project.title}</h1>
    <h2>Due Date: {project.dueDate}</h2>
    <p>Reason: {project.description}</p>
    <DayCount 
      key={project.id}
      project={project}/>
    <Link to={`/projects/${project.id}/task`}><button>View Project Tasks</button></Link>
    </>
  );
};

