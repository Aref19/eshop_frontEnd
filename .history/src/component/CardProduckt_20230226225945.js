function CardProduckt(props) {
    const { data, showButton } = props;
    return (
        <>
            <>
                <div className="card" >
                    <img src={data.image.inde} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.description}</p>

                    </div>
                </div>
            </>
        </>
    )
}

export default CardProduckt;