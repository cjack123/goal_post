// import React, { useState, useEffect } from "react";
// import { GoalQueue } from "./GoalQueue";
// import { getRandomId } from "../modules/GoalManager";

// export const HGoalQueue = () => {
//     const [goalQueueId, setGoalQueueId] = useState(0);
//     const userId =JSON.parse(sessionStorage.getItem("TimeWizard_users")).id

//     const refreshQueueGoal = () => {
//       getRandomId(userId).then(setGoalQueueId);
//     };
  
//     useEffect(() => {
//       refreshQueueGoal();
//     }, [goalQueueId]);
  
//     return (
//       <>
//         <div className="header">
//         <h1>Start a Goal!</h1>
//           </div>

//         <div className="queueCard">
//         <button onClick={refreshQueueGoal}>Reload &#x27f3;</button>
//           {goalQueueId && <GoalQueue goalId={goalQueueId} />}
//           </div>
//       </>
//     );
//   };