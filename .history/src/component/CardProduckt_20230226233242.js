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
                    <img src={"https://media.istockphoto.com/id/479520746/de/foto/laptop-mit-leeren-bildschirm-auf-wei%C3%9F.webp?s=2048x2048&w=is&k=20&c=oMpqA8oY9d84SDnKhff-aCskn_sN3hAhxzGgXL7vy40="} className="card-img-top" alt="..." />
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