import { useState } from "react";

function Home(){
  const [produckts,setProduckts]=useState({});


  const getProduckts=()=>{
    fetch(apiUrl).then((data)=>data.json()).then((data)=>Produckts(data))
  }



    return(
        <>


        </>
    )

}

export default Home;