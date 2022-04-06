import React from "react"




export const DayCount = ({ project }) => {
    var dueDate = Date.parse(project.dueDate)
    var today = new Date();
    var dueDate = new Date (project.dueDate);
    var msSince= dueDate.getTime() -today.getTime();
    var daysSince = Math.floor(msSince/(1000*60*60*24));

    return (
        <h3>Days Left: {daysSince}</h3>
    )

}