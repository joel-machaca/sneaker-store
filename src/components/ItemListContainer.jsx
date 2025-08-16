import productos from "../assets/productos.json"
import { useEffect, useState } from "react"
import ItemList from "./ItemList"
const ItemListContainer=()=>{
    const [items,setItems]=useState([])

    const promesa=new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        },3000)
    })

    useEffect(()=>{
        promesa.then((respuesta)=> {
            setItems(respuesta)
        })
    }, [])
    return(
        <div className="container-fluid">
            <div className="row">
                    <ItemList items={items}/>
            </div>
        </div>
    )
}

export default ItemListContainer