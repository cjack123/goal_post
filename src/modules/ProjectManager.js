const remoteURL = "http://localhost:8088"



export const getProjectById = (projectId) => {
    //be sure your goals have good data and related to a project and goal
    return fetch(`${remoteURL}/projects/${projectId}?_expand=user`)
    .then(res => res.json())
}

export const getProjectUserById = (userId) => {
    //be sure your goals have good data and related to a project and goal
    return fetch(`${remoteURL}/projects?userId=${userId}`)
    .then(res => res.json())
}

export const getAllProjects = () => {
    return fetch (`${remoteURL}/projects`)
    .then(res => res.json())
}

export const deleteProject = (id) => {
    return fetch(`${remoteURL}/projects/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
}

export const updateProject = (editedProject) => {
    return fetch(`${remoteURL}/projects/${editedProject.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedProject)
    }).then(data => data.json());
}
  
export const addProject = (newProject) => {
    return fetch(`${remoteURL}/projects`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProject)
    }).then(response => response.json())
}

export const completedProject = (isCompleted) => {
  return fetch (`${remoteURL}/projects?_${isCompleted}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(isCompleted)
  }).then(data => data.json());
}

// export const getRandomId = () => {
//     return fetch(`${remoteURL}/projects`)
//       .then(result => result.json())
//       .then(projects => {
//         const randomIndex = Math.floor(Math.random() * projects.length);
//         const randomProject = projects[randomIndex];
//         return randomProject.id;
//     });
// }

export const getRandomId = (userId) => {
  return fetch(`${remoteURL}/projects?userId=${userId}`)
    .then(result => result.json())
    .then(projects => {
      const randomIndex = Math.floor(Math.random() * projects.length);
      const randomProject = projects[randomIndex];
      return randomProject.id;
  });
}