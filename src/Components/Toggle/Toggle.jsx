import React from "react";
import './Toggle.css';

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
const Toggle =({isDarkMode, setIsDarkMode})=>{

    const ttoogle=()=>{
        console.log("hello")
        setIsDarkMode(!isDarkMode);
        }
        useEffect(()=>{

            if(isDarkMode){
                document.body.classList.add("bg-dark", "home-vcard", "bg-fixed");

                document.body.style.backgroundImage =
                  "url(/assets/img/shape/banner-1.png)";
            
            }else{
                document.body.className = "bg-fixed home-vcard";
                document.body.style.backgroundImage =
                  "url(/assets/img/shape/banner.jpg)";
            }
           
        
  
        },[isDarkMode])
    return(

        <div className="toogle-container">
       <div className="toogle" id="toogle" onClick={ttoogle}>
            <FontAwesomeIcon icon={faMoon} />
            <FontAwesomeIcon icon={faSun} />

  
  <div className="t-button"  style={isDarkMode?{left:"2px"}:{right:"2px"}}>

  </div> 
  
       </div> </div>
    )
}
export default Toggle