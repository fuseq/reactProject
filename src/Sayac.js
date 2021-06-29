import React, {useState,useEffect} from 'react';


function Sayac({id}) {
  const [count, setCount] = useState(0);
  useEffect(() => 
  {   let sayac=localStorage.getItem("sayac"+id);
      if(sayac==null)
      {
          sayac=0;
      }
      setCount(parseInt(sayac))
      console.log("sayi artti")
  },[id]);

    return (
        <div>
         {count}
         <button onClick={()=>{
           setCount(count+1);
           localStorage.setItem("sayac"+id,count+1)
          
          }
        }>arttir</button>
        </div>
         
       );

      
  }
  export default Sayac;