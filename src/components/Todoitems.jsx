function Todoitems(props)
{
    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr

    const handledelete = (removeid)=>
    {

        var temp  = activityarr.filter(function(data){
            if(data.id === removeid)
            {
                return false
            }
            else{
                return true
            }
        })
        setactivityarr(temp)
    }
    return(
        <div className="flex justify-between">
        <p>{props.index+1}. {props.item.activity}</p>
        <button onClick={()=>{handledelete(props.id)}} className="text-red-500 font-bold">Delete</button>
        </div>

    )
}

export default Todoitems


  
