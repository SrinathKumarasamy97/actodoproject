
import Todoitems from "./Todoitems"
function Todolist(props) {
    
    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr

    return (
        <div className="bg-emerald-300 border rounded-md flex-grow p-5">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            
            
            {activityarr.length === 0?<p>You haven't added anything yet</p>: "" }
            {
                activityarr.map(function (item, index) {
                    return <Todoitems id ={item.id} item={item} index={index} activityarr={activityarr} setactivityarr={setactivityarr} />
                })
            }

        </div>
    )
}
export default Todolist