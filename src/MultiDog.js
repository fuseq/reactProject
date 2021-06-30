import React, { useState, useEffect } from "react";
import axios from "axios";

function MultiDog() {
  const [dogImage, setImage] = useState();
  const [imageSize, setimageSize] = useState();
  const [kopekler, setKopekler] = useState([]);

  const degistir = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random/" + imageSize)
      .then((response) => {
        console.log(response);
        setKopekler(response.data.message);
      });
  };

  return (
    <div>
      <input onChange={(event) => setimageSize(event.target.value)} />
      {
         kopekler.map((x)=>
         {
            return <img alt="kopekler" src={x}></img>
         })
      }
      <br></br>
      <button onClick={degistir}>fusekin cuku</button>
    </div>
  );
}
export default MultiDog;
