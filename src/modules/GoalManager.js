const remoteURL = "http://localhost:8088";

export const getGoalById = (goalId) => {
  //be sure your goals have good data and related to a location and goal
  return fetch(
    `${remoteURL}/goals/${goalId}?_expand=user&_expand=project`
  ).then((res) => res.json());
};

export const getProjectGoalById = (projectId) => {
  //be sure your goals have good data and related to a project and goal
  return fetch(`${remoteURL}/goals?projectId=${projectId}`).then((res) =>
    res.json()
  );
};

export const getAllGoals = () => {
  return fetch(`${remoteURL}/goals`).then((res) => res.json());
};

export const deleteGoal = (id) => {
  return fetch(`${remoteURL}/goals/${id}`, {
    method: "DELETE",
  }).then((result) => result.json());
};

// export const updateGoal = (editedGoal) => {
//   return fetch(`${remoteURL}/goals/${editedGoal.id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(editedGoal)
//   }).then(data => data.json());
// }

export const addGoal = (newGoal) => {
  return fetch(`${remoteURL}/goals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newGoal),
  }).then((response) => response.json());
};

export const getRandomId = (userId) => {
  return fetch(`${remoteURL}/goals?userId=${userId}`)
    .then((result) => result.json())
    .then((goals) => {
      const randomIndex = Math.floor(Math.random() * goals.length);
      const randomGoal = goals[randomIndex];
      return randomGoal.id;
    });
};
