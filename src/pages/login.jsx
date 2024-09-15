import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login(props) {
    const user = props.user
    const navigate =useNavigate()
    
    const [ruser,setruser] =useState(true)
    const [uname,setuname] =useState("")
    const [pname,setpname] =useState("")
   

    const handleuname = (evt)=>
    {
        setuname(evt.target.value)

    }

    const handlepname = (evt)=>
    {
        setpname(evt.target.value)
    }

    const handlelogin =()=>
    {
        var userfound = false
       
        user.forEach(function(item){
            if (item.username === uname && item.password === pname)
            {
                console.log("login sucessfull")
                userfound = true
                navigate("/landing", {state:{value:uname}})

                
            }   
        })
        if(userfound === false)
            {
                console.log("login failed")
                setruser(false)
            }
        

    }

    return (
        <div className="bg-yellow-300 p-10">
            <div className="bg-white p-10 rounded-xl">
                <h1 className="text-2xl">Hey Hi</h1>
                {ruser? <p className="text-xl">I help you manage your activities after you login :)</p> : <p className="text-red-700">you are not a registered user please signup </p>}
                
                <div className="flex flex-col gap-4 my-5">

                    <input value={uname} onChange={handleuname} className=" w-52 bg-transparent p-1 border border-black rounded-md" placeholder="Username"></input>

                    <input value={pname} onChange={handlepname} className="w-52 bg-transparent p-1 border border-black rounded-md" placeholder="Password"></input>

                    <button onClick={handlelogin} className=" w-24 bg-yellow-300 p-2 font-semibold border rounded-lg">Login</button>

                    <p>Dont have an account? <Link to={"/Signup"} className="underline">Sign Up</Link></p>
                </div>
            </div>

        </div>
    )

}

export default Login
