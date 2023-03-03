import { useState } from "react";

function CardProduckt(props) {
    const { data, showButton } = props;
    const [url,setUrl]=useState()
    const ImageCall=()=>{
        data.image.map((item) =>{
            console.log( item.url);
            return item;
             
        });


    }
  console.log(  data.image.indexOf(0).url);
  
    return (
        <>
            <>
                <div className="card" >
                    <img src={data.image.indexOf(0).url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.description}</p>
                      {ImageCall()}
                    </div>
                </div>
            </>
        </>
    )
}

export default CardProduckt;