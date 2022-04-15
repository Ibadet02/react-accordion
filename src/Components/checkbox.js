import React from "react";
import '../styles/checkbox.css'
export const Checkbox=({onChange})=>{
    return (
        <div className="input-box">
            <input id="check" type={"checkbox"} onChange={onChange}/>
            <label htmlFor="check">Allow Multiple Items Open At Once?</label>
        </div>
    )
}