import { useState } from "react";

const ItemCount = ({stock,onAddParametroDeItemCount}) => {

    const [counter,setCounter]=useState(1)

    const aumentarCounter=()=>{
        setCounter((prev)=>{
            return prev<stock?prev+1:prev
        })
    }
    const decrementarCounter=()=>{
        setCounter((prev)=>{
            return prev>1?prev-1:prev
        })
    }

  return (
    <div className="">
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-secondary shadow-lg" onClick={decrementarCounter}>
          -
        </button>
        <button type="button" className="btn btn-secondary shadow-lg" >
          {counter}
        </button>
        <button type="button" className="btn btn-secondary shadow-lg" onClick={aumentarCounter}>
          +
        </button>
      </div>
      <div className="my-3">
        <button className="btn btn-secondary shadow-lg" onClick={()=>{onAddParametroDeItemCount(counter)}}>Agregar al carrito</button>

      </div>
    </div>
  );
};

export default ItemCount;
