import React, {useState,useEffect,} from 'react';
import axios from 'axios';

function Dog() {
    
    const [dogImage, setImage] = useState();
 useEffect(()=>
 {
    axios.get('https://dog.ceo/api/breeds/image/random').then((response)=>{
        console.log()
       setImage(response.data.message)
    })
 },[])
  
 const degistir=()=>
 {
    axios.get('https://dog.ceo/api/breeds/image/random').then((response)=>{
        console.log()
       setImage(response.data.message)   
    })}

    return (
    
        <div>
               
               
             <img style={{height:300}} alt="köpek resmi" src={dogImage}/>
             <br></br>
             <button onClick={degistir}>fusekin cuku</button>
        </div>
         
       );

      
  }
  export default Dog;