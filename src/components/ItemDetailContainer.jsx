import { useParams } from "react-router-dom";
import productos from "../assets/productos.json"
import { useEffect, useState } from "react"
const ItemDetailContainer=()=>{
    const [item,setItem]=useState([])
    const {id}=useParams();
    
    

    
    useEffect(()=>{
        const promesa=new Promise((resolve)=>{
            setTimeout(()=>{
                const resultado=productos.find(i=>i.id===Number(id))
                resolve(resultado)
            },3000)
        })
        promesa.then((respuesta)=> {
            setItem(respuesta)
        })
    }, [id])
    return(
        <div className="container mt-5">    
            <div className="row bg-white p-4 rounded-5 shadow-lg">
                <div className="col-4">
                    <img src={item.image} alt={item.title} className="img-fluid"/>
                </div>

                <div className="col-6 d-flex flex-column align-items-center justify-content-center gap-5">
                    <h1 className="fst-italic">{item.title}</h1>
                    <p className="fw-light">{item.description}</p>
                    <p className="fw-bold fs-2">$ {item.price}</p>
                </div>
            </div>
        </div>
    )
}
export default ItemDetailContainer
