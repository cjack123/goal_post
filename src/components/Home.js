import { useNavigate } from 'react-router-dom'
import { HomeQueue } from "./HomeQueue"
// import { HGoalQueue } from "./HGoalQueue"



//make a fetch call for getMyProjects in the projects page using user id sessionStorage 
//home: getMyPrjects fetchcall. Take the first project and display project on home page. 
//get the goals for that project then use same fetch call then display the first one on the page.


export const Home = () => {
    let navigate = useNavigate();



    return (

        <>
        <div className="buttons-home">
            {/* <section className="buttonCreateProject-home">
                <button type="button"
                    className="btn"
                    onClick={() => {navigate("/projects/create")}}>
                    Add New Project
                    </button>
                    </section>   
            <section className="buttonCreateGoal-home">
                <button type="button"
                    className="btn"
                    onClick={() => {navigate("/goals/create")}}>
                    Add New goal
                    </button>        
                </section> */}
            </div>
        <HomeQueue />
        {/* <HGoalQueue /> */}
        </>
    )

}