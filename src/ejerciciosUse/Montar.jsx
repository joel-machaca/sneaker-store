import { useEffect } from "react"

const Montar =()=>{

    useEffect(()=>{
        console.log("componente de card MONTADO")

        return ()=>console.log("componente DESMONTANDOSE")
    },[])
    return(
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img src="https://cdn.britannica.com/95/124395-004-3B484C8B/hand-cards-trump-spades.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Cartas</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <button className="btn btn-primary">Ver Más</button>
                </div>
            </div>
        </div>
    )
}
export default Montar