import { useState } from "react"

function Addtodoform(props) {
    const activityarr = props.activityarr
    const setactivityarr=props.setactivityarr
    const [additem, setadditem] = useState("")
    const handleadd = (evt) => {
        setadditem(evt.target.value)
    }

    const handleadditem = () => {
        setactivityarr([...activityarr,{id:activityarr.length+1, activity:additem}])
        setadditem("")

    }
    return (

        <div className="flex flex-col gap-3">
            <h1 className="font-medium text-2xl" >Manage Activities</h1>
            <div>
                <input value={additem} onChange={handleadd} placeholder="Next Activity?" className="border border-black bg-transparent" ></input>
                <button onClick={handleadditem} className="bg-black text-white border border-black">Add</button>
                <p>To Do List</p>
            </div>
        </div>
    )
}

export default Addtodoform