import { useState } from "react";

const ItemCounter = (parametro) => {

    const [counter,setCounter]=useState(1)

    const aumentarCounter=()=>{
        setCounter((prev)=>{
            return prev<parametro.stockDisponible?prev+1:prev
        })
    }
    const decrementarCounter=()=>{
        setCounter((prev)=>{
            return prev>1?prev-1:prev
        })
    }

    const onAdd=()=>{
        console.log(`se guardo el producto exitosamente al carrito\nproducto:Papel Higienico\nCantidad:${counter}`)
    }

  return (
    <div className="">
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-warning" onClick={decrementarCounter}>
          -
        </button>
        <button type="button" className="btn btn-warning" >
          {counter}
        </button>
        <button type="button" className="btn btn-warning" onClick={aumentarCounter}>
          +
        </button>
      </div>
      <div className="my-3">
        <button className="btn btn-warning" onClick={onAdd}>Agregar producto al carrito</button>

      </div>
    </div>
  );
};

export default ItemCounter;
