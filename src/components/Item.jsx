import { Link } from "react-router-dom"

const Item=({item})=>{
    return(
        <div className="col-3 ">
            <Link to={`/categoria/hombre/item/${item.id}`} className="text-decoration-none">
                <div className="card my-3 border-0 shadow">
                    <img src={item.image} className="card-img-top" alt={item.title}/>
                    <div className="card-body">
                        <p className="card-text text-center fs-5 text-dark fw-bold">{item.title}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item