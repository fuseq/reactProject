import React, { useState,useEffect} from 'react';
function Mahmut({sayi,yas}) {
    

    
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("Red");
    useEffect(() => 
    {   let sayac=localStorage.getItem("sayac");
        if(sayac==null)
        sayac=0;
        setCount(parseInt(sayac))
        console.log("sayi artti")
    },[]);
    const changeColor=()=>
    {
        if(color=="Black")
        {
          setColor("Red")
        
        }
        else
        {
          setColor("Black")
        
        }

    }
    return (
     <div>
        <h1>{count}</h1>
        
        <button style={{color:color}} onMouseEnter={() =>changeColor()} onMouseLeave={() =>changeColor()} onClick={() =>changeColor()} >{color}</button>
        <button onClick={() => {
            setCount(count+1);
            localStorage.setItem("sayac",count+1)
            }}>arttir  </button>

     </div>
      
    );
   
  }
  
  export default Mahmut;