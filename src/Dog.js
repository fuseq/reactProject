import React, {useState,useEffect,} from 'react';
import axios from 'axios';

function Dog() {
    const [dogImage, setImage] = useState();
 useEffect(()=>
 {
    axios.get('https://dog.ceo/api/breeds/image/random').then((response)=>{
        console.log(response.data.message)
       setImage(response.data.message)
    })


 },[])
 const degistir=()=>
 {
     
 }

    return (
    
        <div>
               
               <button onClick={}></button>
             <img alt="köpek resmi" src={dogImage}/>
        </div>
         
       );

      
  }
  export default Dog;