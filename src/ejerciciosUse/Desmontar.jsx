import { useState } from "react"
import Montar from "./Montar"

const Desmontar=()=>{
  const [mostrar,setMostrar]=useState(true)
  const cambio=()=>{
    setMostrar(!mostrar)
  }
  return(
    <div>
      <button className="btn btn-danger" onClick={cambio}>{mostrar?"ocultar":"Mostrar"}</button>
      {mostrar && <Montar/>}
    </div>
  )
}
export default Desmontar