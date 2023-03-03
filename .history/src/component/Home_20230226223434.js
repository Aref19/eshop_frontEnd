import { useEffect, useState } from "react";
import CardProduckt from "./CardProduckt"


function Home() {
  const [produckts, setProduckts] = useState({});
  const apiUrl = "http://localhost:8181/endUser/getAllItem";

  const getProduckts = () => {
    fetch(apiUrl).then((data) => data.json()).then((data) => setProduckts(data))
  }


  useEffect(  ()=>{
    getProduckts();
  
    console.log("cat"+categorie);
  },[])

  return (
    <>
      <h2 className="text-center p-3">Our Produckts</h2>
      <div className="container"></div>

      {
          produckts.map((p)=>{
            return(
              <div className="col-3" key={p.id}>
              <CardProduckt  data ={p} />
            </div>
            )
          })
          
          }

    </>
  )

}

export default Home;