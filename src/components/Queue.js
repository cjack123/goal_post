import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DayCount } from './DayCount.js'
import { getProjectUserById, getProjectById } from "../modules/ProjectManager";
import "./Queue.css";

export const Queue = ({projectId}) => {
  const [project, setProject] = useState({});
  const userId = JSON.parse(sessionStorage.getItem("TimeWizard_users")).id
  

  useEffect(() => {
    getProjectById(userId).then(project => {
      setProject(project);
    });
  }, [projectId]);

  

  return (
    <>
    <section className="all">
      <div className="cardFlex>">
        <div className="queueCard">
          <h1 className="Qtitle">{project.title}</h1>
          <h2>Due Date: {project.dueDate}</h2>
          <h2>Reason: {project.description}</h2>
          
          <DayCount 
            key={project.id}
            project={project}
            />
          <div className="end">
            <Link to={`/projects/${project.id}/task`}><button>View Project Tasks</button></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

