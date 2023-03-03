function CardProduckt(props) {
    const { data, showButton } = props;
    return (
        <>
            <>
                <div className="card" >
                    <img src={data.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.description}</p>
                        {
                            ((showButton) && <Link href="#" className="btn btn-primary" to={`/produckt/${data.id}`}>Go somewhere</Link>)

                        }


                    </div>
                </div>
            </>
        </>
    )
}