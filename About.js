
import React from 'react'

import { useState } from 'react';

import "./index.css";

export default function About() {
  const[color,setColor]=useState({ color:'white',
    backgroundColor:'black',border:'2px solid grey',borderRadius:"8px"
})
  
  const handleDarkAndLight=()=>{
    if(color.color==="black"){
      setColor({color:'white',
    backgroundColor:'black',
    border:"2px solid white",
    borderRadius:"8px"

  })

    }
    else{
       setColor({color:'black',
    backgroundColor:'white',
     border:"2px solid grey",
     borderRadius:"8px"
  })

    }
   
  }
  return(<div class="container text-center  mt-5"   style={color}>
    <h3>The About Us page of your website is an essential source of information for all who want to know more about your business.

About Us pages are where you showcase your history, what is unique about your work, your company’s values, and who you serve.

The design, written content, and visual or video elements together tell an important story about who you are and why you do it.</h3>
    <button onClick={handleDarkAndLight} class="btn btn-primary"  >{color.color==="black"?"Dark Mode":"Light Mode"}</button>
  </div>)
   
  
}
