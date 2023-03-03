import { useState } from "react";

function CardProduckt(props) {
    const { data, showButton } = props;
    const [url,setUrl]=useState("")
    const ImageCall=()=>{
        data.image.map((item) =>{
            console.log( item.url);
            return item;
             
        });


    }
  
  
    return (
        <>
            <>
                <div className="card" >
                    <img src={data} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.des}</p>
                        <p className="card-text">{data.price}</p>
                      {ImageCall()}
                    </div>
                </div>
            </>
        </>
    )
}

export default CardProduckt;