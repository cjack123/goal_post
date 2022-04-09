import React, { useState, useEffect } from "react";
import { Queue } from "./Queue";
import { getRandomId } from "../modules/ProjectManager";
import { ProjectList } from "./project/ProjectList.js"

export const HomeQueue = () => {
    const [queueId, setQueueId] = useState(0);
    const userId =JSON.parse(sessionStorage.getItem("TimeWizard_users")).id

    const refreshQueueProject = () => {
      getRandomId().then(setQueueId);
    };
  
    useEffect(() => {
      refreshQueueProject();
    }, [queueId]);

    class Hello extends React.Component {
      render() {
        return <div>ProjectList</div>;
      }
    }
    
    class Help extends React.Component {
    randomize(projects) {
        return projects[Math.floor(Math.random() * projects.length)];
    }
      render() {
        const project = [<ProjectList />]
        return <div>Hello {this.randomize(project.id)}</div>;
      }
    }
  
    return (
      <>
      <h1 className="top">Start a Project!</h1>
        {/* <div className="header">
        <h1 className="top">Start a Project!</h1>
          </div>
          < ProjectCard /> */}
        <br></br>
        <div className="bodyHome">
        <button onClick={refreshQueueProject}>Reload &#x27f3;</button>
        <br></br>
        <br></br>
          {queueId && <Queue projectId={queueId} />}
          </div>
      </>
    );
  };


  // export const HomeQueue = () => {
  //   const [queueId, setQueueId] = useState(0);
  //   const userId =JSON.parse(sessionStorage.getItem("TimeWizard_users")).id

  //   const refreshQueueProject = () => {
  //     getRandomId(userId).then(setQueueId);
  //   };
  
  //   useEffect(() => {
  //     refreshQueueProject();
  //   }, [queueId]);
  
  //   return (
  //     <>
  //       <div className="header">
  //       <h1 className="top">Start a Project!</h1>
  //         </div>
  //       <br></br>
  //       <div className="bodyHome">
  //       <button onClick={refreshQueueProject}>Reload &#x27f3;</button>
  //       <br></br>
  //       <br></br>
  //         {queueId && <Queue projectId={queueId} />}
  //         </div>
  //     </>
  //   );
  // };

