import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from "../components/Home"
import  { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register'
import { ProjectList } from './project/ProjectList';
import { ProjectForm } from './project/ProjectForm'
import { ProjectEditForm } from './project/ProjectEditForm'
import { ProjectTask } from './project/ProjectTask'
// import { ProjectCompleted } from './project/ProjectCompleted'
import { GoalList } from './goal/GoalList';
import { GoalForm } from './goal/GoalForm';
 

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {

    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
  
    const setAuthUser = (user) => {
      sessionStorage.setItem("TimeWizard_users", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("TimeWizard_users") !== null)
    }


    return (
        <>
            <Routes>

                {/* This will render the home page when http://localhost:3000/ */}
                <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />


                {/* Renders auth and login */}
                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
                <Route exact path="/register" element={<Register />} />


                <Route exact path="/projects" element={<PrivateRoute> <ProjectList /></PrivateRoute>} />
                <Route path="/projects/create" element={<ProjectForm />} /> {/*Renders a form for projects. */}
                <Route path="/projects/:projectId/edit" element={<PrivateRoute><ProjectEditForm /></PrivateRoute>} />
                <Route exact path="/projects/:projectId/task" element={<ProjectTask />} />
                {/* <Route exact path="/projects/:projectId/completed" element={<ProjectCompleted />} /> */}

                <Route exact path="/goals" element={<GoalList />} />
                <Route exact path="/goals" element={<GoalForm />} />
                <Route path="/goals/create" element={<GoalForm />} />

                
            </Routes>
        </>
    )






}