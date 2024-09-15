import Addtodoform from "./Addtodoform"
import Todolist from "./Todolist"
import { useState } from "react"
function Todocontainer()
{
    const [activityarr, setactivityarr] = useState([
        {
            id: 1,
            activity: "Complete the react course"
        },
        {
            id: 2,
            activity: "Complete the backend course"
        },

        {
            id: 3,
            activity: "Complete the projects"

        }

    ])
    return(
        <div className="flex gap-5">
        <Addtodoform activityarr={activityarr} setactivityarr={setactivityarr}/>
        <Todolist activityarr={activityarr} setactivityarr={setactivityarr}/>
        
        </div>
    )

}

export default Todocontainer