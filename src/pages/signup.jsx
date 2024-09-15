import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
function Signup(props)
{
    const user = props.user
    const setuser = props.setuser
    const navigate = useNavigate()

    const [uname,setuname] = useState("")
    const [pname, setpname] = useState("")

    const handleuname =(evt)=>
    {
        setuname(evt.target.value)
    }

    const handlepname = (evt)=>
    {
        setpname(evt.target.value)
    }
    const additem=()=>
    {
        setuser([...user,{username:uname, password:pname}])
        console.log(user)
        navigate("/")
    }

    return(
        <div className="bg-yellow-300 p-10">
            <div className="bg-white p-10 border rounded-md ">
                <h1 className="text-2xl font-semibold">Hey Hi</h1>
                <p className="text-xl">I help you manage your activities after your login :)</p>

                <div className=" flex flex-col gap-4 my-2 ">

                <input value={uname} onChange={handleuname} type="text" className="w-52 bg-transparent border rounded-md border border-black p-1" placeholder="Username"></input>

                <input value={pname} onChange={handlepname} type="text" className="w-52 bg-transparent border rounded-md border border-black p-1" placeholder="Password"></input>

                <input type="text" className=" w-52 bg-transparent border rounded-md border border-black p-1" placeholder="Confirm password"></input>
                
                <button onClick={additem} className=" w-24 bg-yellow-300 border rounded-lg p-2 font-semibold">Signup</button>
                <p>Already have an account? <Link  to={"/"} className="underline">Login</Link></p>

                </div>
                
            </div>
            
            
        </div>
    )
}
export default Signup