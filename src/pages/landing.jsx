import Header from "../components/header"
import Card from "../components/card"
import Todocontainer from "../components/todocontainer"
import { useLocation } from "react-router-dom"

function Landing() {
    const data  = useLocation()
  return (
    <div className='bg-yellow-300 p-16'>
      <div className='bg-[#EFEFEF] p-10 border rounded-md'>
        <Header name ={data.state.value}/>

        <div className="flex justify-between gap-5 my-5 flex-wrap">
          <Card bgcolor={"orange"} title={"23"} subtitle={"Chennai"} />
          <Card bgcolor={"lightblue"} title={"December"} subtitle={"10:10:2024"} />
          <Card bgcolor={"lightgreen"} title={"Built using"} subtitle={"React"} />
        </div>

        <Todocontainer/>
        
      </div>
    </div>

  )
}

export default Landing
