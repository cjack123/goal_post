import React, { useState, useEffect } from "react";
import { Queue } from "./Queue";
import { getRandomId } from "../modules/ProjectManager";

export const HomeQueue = () => {
    const [queueId, setQueueId] = useState(0);
    const userId =JSON.parse(sessionStorage.getItem("TimeWizard_users")).id

    const refreshQueueProject = () => {
      getRandomId(userId).then(setQueueId);
    };
  
    useEffect(() => {
      refreshQueueProject();
    }, [queueId]);
  
    return (
      <>
        <div className="header">
        <h1>Start a Project!</h1>
          </div>

        <div className="queueCard">
        <button onClick={refreshQueueProject}>Reload &#x27f3;</button>
          {queueId && <Queue projectId={queueId} />}
          </div>
      </>
    );
  };