import { useState } from 'react'

import './App.css'

function App() {
  //How can i change property value by useState
const [data,setData]=useState({
  name:"Tasnia",
  id:"Tasnia Sharin",
  roll:"181793"
})
const changePropertyValue=()=>{
setData({
  ...data,id:"Lamia Tasnim"
})
}
  return (
    <>
    <div>{data.id}</div>
    <button onClick={changePropertyValue}>Change Property Value</button>
     
    </>
  )
}

export default App
