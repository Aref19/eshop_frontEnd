function CardProduckt(props) {
    const { data, showButton } = props;
    const ImageCall=()=>{
        data.image.map((item) =>{
            console.log(  data.image);
            return item;
             
        });
    }
  
  
    return (
        <>
            <>
                <div className="card" >
                    <img src={data.image.map((item)=>{item.url)} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.description}</p>
                      {}
                    </div>
                </div>
            </>
        </>
    )
}

export default CardProduckt;