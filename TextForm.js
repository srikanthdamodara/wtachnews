import React from 'react'

import { useState } from 'react';

import "./App.css";


export default function TextForm(props) {
    const[text,setText]=useState("");

     const handleUpClick=()=>{
        setText(text.toUpperCase())
        props.showAlert("changed to uppercase",'success')
       
     }
     const handleLoClick=()=>{
        setText(text.toLowerCase())
        props.showAlert("changed to lowercase",'success')
     }

      const handleClearClick=()=>{
        setText("")
        props.showAlert("cleared the text",'success')

     }


     const handleOnChange=(e)=>{
        setText(e.target.value)

     }

     const handleCopy=()=>{
      var text=document.getElementById("text");
      text.select()
      text.setSelectionRange(0,9999)
      navigator.clipboard.writeText(text.value)
      props.showAlert("text copied",'success')
     }


     const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("removed extra spaces",'success')
     }

    

  return (
    <>
    <div class="container" style={{color:props.darkMode==="dark"?"white":"black"}} >
        <h3 style={{color:props.darkMode==="dark"?"white":"black"}}>{props.heading}</h3>
      
      
        <label for="text" >Example textArea</label>
        <textarea id="text" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.darkMode==="dark"?"grey":"white",border:'2px solid lightgrey'}}>
           
        </textarea>
        <button className="btn btn-primary m-3" onClick={handleUpClick} >Convert To Uppercase</button>
        <button className="btn btn-primary m-3" onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn btn-primary m-3" onClick={handleClearClick}>Clear the text</button>
        <button className="btn btn-primary m-3" onClick={handleCopy}>Copy text</button>
         <button className="btn btn-primary m-3" onClick={handleExtraSpaces}>Remove extra  text</button>
 
    </div>
    <div className='container mt-3' style={{color:props.darkMode==="dark"?"white":"black"}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length+" Words"},{text.length} Characters</p>
        <p>{0.008*text.split(" ").length}Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length<=0?"Enter something new":text}</p>
    </div>
    </>
  )
}
