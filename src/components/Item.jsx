const Item=({item})=>{
    return(
        <div className="col-3">
            <div className="card my-3 border-0 shadow">
                <img src={item.image} className="card-img-top" alt={item.title}/>
                <div className="card-body">
                    <p className="card-text text-center fs-5 text-dark fw-bold">{item.title}</p>
                </div>
            </div>
        </div>
    )
}

export default Item