function CardProduckt(props) {
    const { data, showButton } = props;
    const ImageCall=()=>{
        data.image.map((item) =>{
            re
            
        });
    }
  
  
    return (
        <>
            <>
                <div className="card" >
                    <img src={data.image.indexOf(0)} className="card-img-top" alt="..." />
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