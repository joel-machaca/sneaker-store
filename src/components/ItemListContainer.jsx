import { useParams } from "react-router-dom"
import productos from "../assets/productos.json"
import { useEffect, useState } from "react"
import ItemList from "./ItemList"
const ItemListContainer=()=>{
    const [items,setItems]=useState([])
    const {id} =useParams();
    console.log(id);
    

    
    useEffect(()=>{
        const promesa=new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(productos)
            },3000)
        })
        promesa.then((respuesta)=> {
            setItems(id?respuesta.filter((item)=>item.category==id):respuesta)
        })
    }, [id])
    return(
        <div className="container-fluid">
            <div className="row">
                    <ItemList items={items}/>
            </div>
        </div>
    )
}

export default ItemListContainer