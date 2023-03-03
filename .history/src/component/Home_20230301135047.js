import { useEffect, useState } from "react";
import CardProduckt from "./CardProduckt"


function Home(props) {
  if (false) {
    return (
    HomeUser()
    )
  } else {
    return (
      HomeProvider()
    )
  }
}

const HomeUser = () => {

  const [produckts, setProduckts] = useState([]);
  const apiUrl = "http://localhost:8182/endUser/getAllItem";

  const getProduckts = () => {
    fetch(apiUrl,{
      methode:'post',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body:JSON.stringify({
        client_id:
      })
    }
    
      
      ).then((data) => data.json()).then((data) => setProduckts(data))
  }


  useEffect(() => {
    getProduckts();
  }, [])

  const search = (value) => {
    const filterdProduckt = produckts.filter((p) => p.title.includes(value));
    console.log(filterdProduckt);
    setProduckts(filterdProduckt);
    if (value == "") {
      getProduckts();
    }
  }
  return (
    <>

      <h2 className="text-center p-3">Our Produckts</h2>
      <div className="container">


        <input type={"text"} className="mb-2" placeholder="search" onChange={(e) => {
          search(e.target.value);
        }
        } />

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

function HomeProvider() {
  return (

    <>
      <div>
        <h2>Provider</h2>
        <h2>Provider</h2>

        <h2>Provider</h2>

      </div>

    </>

  )

}

export default Home;