import  React,{ createContext, useState } from "react"
const UserContext=createContext();
import ChildComponent1 from "./ChildComponent1"
const Home = () => {
    const[data,setdata]=useState("tamil")
  return (
    <UserContext provide={{data,setdata}}>
        <div>Home</div>
          <ChildComponent1/>
        
    </UserContext>
    
  )
}

export default Home