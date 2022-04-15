import React from "react";
import {Button} from "./Components/button";
import { Checkbox } from "./Components/checkbox";
import './styles/app.css'
const numberOfButtons=4
function App() {
  const [isOpen,setIsOpen]=React.useState([])
  const [isMultiple,setisMultiple]=React.useState(false)

  const buttons=isOpen.map((buttonState,index)=>{
    return <Button key={index} isOpen={buttonState} onClick={()=>handleOpen(index)}/>
  })
  const handleMultiple=()=>{
    setisMultiple(prev=>{
      return !prev
    })
  }
  const handleOpen=(index)=>{
    setIsOpen(prev=>{
      var copy=[...prev]
      if(isMultiple){
        copy[index]=!prev[index]
      }
      else{
        copy=copy.map((el,i)=>{
          return index!=i?false:!el
        })
      }
      return copy
    })
  }
  React.useEffect(()=>{
    const divs=[]
    for(let i=0;i<numberOfButtons;i++){
      divs[i]=false
    }
    setIsOpen(divs)
  },[])

  return (
    <div className="big-wrapper">
      <Checkbox onChange={handleMultiple} />
      <div className="wrapper">
        {buttons}
      </div>
    </div>
  )
}

export default App;
