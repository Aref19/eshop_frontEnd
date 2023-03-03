import { useState } from "react";

function CardProduckt(props) {
    const { data, showButton } = props;
    const [url,setUrl]=useState("")
    const ImageCall=()=>{
        data.image.map((item) =>{
            console.log( data.image[0]);
            return item;
             
        });


    }
  
  
    return (
        <>
            <>
                <div className="card" >
                    <img src={data.image[0].url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{"titel:"+data.title}</h5>
                        <p className="card-text">{"description :"+data.des}</p>
                        <p className="card-text">{"price :"+data.price+"$"}</p>
                      {ImageCall()}
                    </div>
                </div>
            </>
        </>
    )
}

export default CardProduckt;