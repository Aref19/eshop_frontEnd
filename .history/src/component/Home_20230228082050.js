import { useEffect, useState } from "react";
import CardProduckt from "./CardProduckt"


function Home() {
  const [produckts, setProduckts] = useState([]);
  const apiUrl = "http://localhost:8182/endUser/getAllItem";

  const getProduckts = () => {
    fetch(apiUrl).then((data) => data.json()).then((data) => setProduckts(data))
  }


  useEffect(() => {
    getProduckts();
  }, [])

  const search=(value)=>{
    const produckts= produckts.filter((p)=> p.title.includes(value));
    setProduckts(produckts);
  }

  return (
    <>

      <h2 className="text-center p-3">Our Produckts</h2>
      <div className="container">
      
       
          <input type={"text"}  onChange={}/>
      
      </div>



          <div className="container">
            <div className="row">
              {
                produckts.map((p) => {
                  return (
                    <div className="col-3" key={p.id}>
                      <CardProduckt data={p} />
                    </div>
                  )
                })

              }
            </div>

          </div>

        </>
        )

}

 export default Home;