import React,{ useContext } from "react"


const { data,setdata}=useContext;


const ChildComponent1 = () => {
  return (
    <div>ChildComponent1 {data}</div>
  )
}

export default ChildComponent1