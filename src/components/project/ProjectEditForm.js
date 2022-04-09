import React, { useState, useEffect } from "react"
import {useNavigate, useParams} from "react-router-dom";
import { getProjectById, updateProject  } from '../../modules/ProjectManager';

export const ProjectEditForm = () => {
    const [project, setProject] = useState({ name: "", dueDate: "", description: "" });
    const [isLoading, setIsLoading] = useState(false);

  const {projectId} = useParams();
  const navigate = useNavigate();

  const handleFieldChange = evt => {
    const stateToChange = { ...project };
    stateToChange[evt.target.id] = evt.target.value;
    setProject(stateToChange);
  };

  const updateExistingProject = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedProject = {
        id: projectId,
        dueDate: project.dueDate,
        decription: project.description
    };

    updateProject(editedProject)
    .then(() => navigate("/projects")
    )
  }

  useEffect(() => {
    getProjectById(projectId)
      .then(project => {
        setProject(project);
        setIsLoading(false);
      });
  }, []);


  return (
      <>
      <form>
          <h3>Edit Project Details</h3>
          <fieldset>
              <div className="form-group">
                <label htmlFor="name">Project Title</label>
                <br></br>
                  <input
                  type="text"
                  required
                  className="formcontrol"
                  onChange={handleFieldChange}
                  id="name"
                  value={project.title}
                  />
                <br></br>
                <label htmlFor="date">Due Date</label>
                <br></br>
                <input
                    type="date"
                    // required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="date"
                    value={project.dueDate}
                    />
                 <br></br>
                <label htmlFor="text">Description</label>
                <br></br>
                <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="text"
                    value={project.description}
                    />
                    </div>

                 <div className="alignRight">
                    <button
                    type="button" disabled={isLoading}
                    onClick={updateExistingProject}
                    className="btn btn-primary"
                    >Submit</button>
                    </div>
          </fieldset>
      </form>
      
      </>
  )

}