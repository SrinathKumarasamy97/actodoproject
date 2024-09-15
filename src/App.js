import Login from "./pages/login"
import Signup from "./pages/signup"
import Landing from "./pages/landing"
import { Route,Routes, BrowserRouter } from "react-router-dom"
import { useState } from "react"
function App() {

  const [user, setuser] = useState([
    {
        username: "Ananya",
        password: "123"
    }

])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login user={user} setuser={setuser} />} ></Route>
        <Route path="/Signup" element={<Signup user ={user} setuser ={setuser}/>} ></Route>
        <Route path="/landing" element ={<Landing/>}></Route>
      </Routes>
    </BrowserRouter>
  )

}
export default App
