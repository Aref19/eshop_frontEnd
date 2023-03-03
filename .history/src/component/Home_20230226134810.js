import { useState } from "react";

function Home(){
  const [produckts,setProduckts]=useState({});
  const apiUrl="http://localhost:8181/endUser/getAllItem";

  const getProduckts=()=>{
    fetch(apiUrl).then((data)=>data.json()).then((data)=>Produckts(data))
  }



    return(
        <>


        </>
    )

}

export default Home;