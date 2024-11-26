import { Link, Outlet } from "react-router-dom"

function Survey (){

    return(
        <div> 
            <h1> Questionnaire</h1>
            <Link to="client" > Question Client</Link>
            <Link to="freelance">Question freelance</Link>
            <Outlet/>
        </div>
    )
}
export default Survey