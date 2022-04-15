import React from "react";
import '../styles/button.css'
export const Button=({isOpen,onClick})=>{
    return (
        <div className="button-box">
            <button onClick={onClick} className={`${isOpen?`buttonopen`:`buttonclosed`}`}>{isOpen?"close":"open"}</button>
            <div className={`button-text ${isOpen?`open`:`closed`}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate at reiciendis. Perferendis, dolorem deserunt ipsa quo optio aliquam ex corrupti. Animi facere illum eos nostrum, exercitationem quod! Sapiente, iusto?</div>
        </div>
    ) 
}