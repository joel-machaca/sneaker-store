import { Link, useParams } from "react-router-dom";
import productos from "../assets/productos.json"
import { useContext, useEffect, useState } from "react"
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";


const ItemDetailContainer=()=>{
    const [visible,setVisible]=useState(true)
    const [item,setItem]=useState([])
    const {id}=useParams();

    const {addItem}=useContext(CartContext);
    
    
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

    const estoSeEjecutaraEnLaPropsDeCountQueLoPuseComoLoQueSeEjecutaraDeLaFuncionOnClick=(quantity)=>{
        addItem(item,quantity)
        setVisible(false)
        console.log("nueva funcion")
    }

    return(
        <div className="container my-5">    
            <div className="row bg-white p-4 rounded-5 shadow-lg">
                <div className="col-4">
                    <img src={item.image} alt={item.title} className="img-fluid"/>
                </div>

                <div className="col-6 d-flex flex-column align-items-center justify-content-center gap-5">
                    <h1 className="fst-italic">{item.title}</h1>
                    <p className="fw-light">{item.description}</p>
                    <p className="fw-bold fs-2">$ {item.price}</p>
                    {visible?<ItemCount stock={item.stock} onAddParametroDeItemCount={estoSeEjecutaraEnLaPropsDeCountQueLoPuseComoLoQueSeEjecutaraDeLaFuncionOnClick} />:<Link to={"/cart"}><button className="btn btn-secondary">terminar compra</button></Link>}
                </div>
            </div>
        </div>
    )
}
export default ItemDetailContainer
