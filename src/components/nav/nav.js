import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./nav.css";

export const Navbar = ({ clearUser, isAuthenticated }) => {

    const history = useNavigate()

    const handleLogout = () => {
        clearUser();
        history('/');
    }

    return (
        <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
            <ul className="nav nav-pills nav-fill">

                <li className="navbar__item">
                        <Link className="navbar__link" to="/"> Home </Link>
                        </li>



                <li className="nav-item">
                    <Link className="nav-link" to="/projects">Projects</Link>
                    </li>


                <li className="navbar__item">
                        <Link className="navbar__link" to="/projects/create">Add A Project</Link>
                        </li>

                <li className="navbar__item">
                        <Link className="navbar__link" to="/goals/create">Add A Goal</Link>
                        </li>

                {/* <li className="nav-item">
                    <Link className="nav-link" to="/projects/:projectId/completed">Completed Projects</Link>
                    </li> */}


                {isAuthenticated
                ? <li className="navbar__item">
                    <span className="navbar__link" onClick={handleLogout}> Logout </span>
                    </li>
                : <li className="navbar__item">
                    <Link className="navbar__link" to="/login">Login</Link>
                    </li>}

            </ul>
        </nav>
    )
}