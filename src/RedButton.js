import React, { useState,useEffect} from 'react';
import {  BrowserRouter as Router,   Switch,   Route,   Link,   useParams } from "react-router-dom";
function RedButton({buttonName,children}) {
  let {id}=useParams()  
   
  
      return (
          <div>
           
            <button style={{backgroundColor:buttonName}}>{id}</button>
          </div>
           
         );
  
        
    }
    export default RedButton;