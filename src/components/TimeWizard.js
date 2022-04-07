import React,  {useState} from "react";
import { Navbar } from "./nav/nav";
import { ApplicationViews } from "./ApplicationViews"
import "./TimeWizard.css"

export const TimeWizard = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("TimeWizard_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("TimeWizard_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("TimeWizard_user") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("TimeWizard_user") !== null)
    }
    
    return (
        <>
            <div className="bgImage">
            </div>

            <Navbar clearUser={clearUser} isAuthenticated={isAuthenticated}
                 />
            <ApplicationViews
            setAuthUser={setAuthUser}
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
                />
            <footer>
                <div className="made">
                    <p>Made by: NeiceyJai Studios</p>
                    </div>
                <div className="social">
                    <p>Instagram:</p>
                    </div>

            </footer>
        </>
    )
    
}