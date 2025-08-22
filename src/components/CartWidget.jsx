import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const[counter,setCounter]=useState(null)
  const {cart}=useContext(CartContext)
  useEffect(()=>{
    if(cart.length ==0){
      setCounter(cart.length)
      console.log(cart.length)
    }
  },[cart])
  return (
    <Link to={"/cart"}>
      <button type="button" className="btn btn-primary position-relative me-5">
        <div>
          <img src="/carrito.svg" alt="carrito de compras" className="logoShop"/>
        </div>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {counter}
        </span>
      </button>
    </Link>
  );
};

export default CartWidget;
