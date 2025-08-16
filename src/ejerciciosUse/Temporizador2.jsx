import { useState } from "react"
import Temporizador from "./Temporizador"

const Temporizador2=()=>{
    const [mostrar,setMostrar]=useState(true)
    const handleClick=()=> setMostrar(!mostrar)
    return(
        <div>
            {mostrar && <Temporizador/>}
            <button className="btn btn-primary" onClick={handleClick}>{mostrar?"ocultar":"mostrar"}</button>
        </div>
    )
}
export default Temporizador2