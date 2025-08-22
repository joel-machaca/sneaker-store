import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Cart=()=>{
    const {cart}=useContext(CartContext)

    return(
        <table className="table ms-2 shadow-lg rounded text-center table-hover table-light text-align-center">
            <thead className="table-dark">
                <tr >
                    <th>Id</th>
                    <th>Imagen</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map(item=>(
                        <tr key={item.id}>
                            <td className="fw-bold text-danger">{item.id}</td>
                            <td><img src={item.image} alt={item.title} width={120} /></td>
                            <td>{item.title}</td>
                            <td>S/ {item.price}</td>
                            <td>x {item.quantity}</td>
                            <td className="fw-bold text-success table-dark">S/ {(item.price*item.quantity).toFixed(2)}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default Cart;