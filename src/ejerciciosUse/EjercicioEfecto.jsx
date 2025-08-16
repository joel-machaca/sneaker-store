import { useEffect, useState } from "react";

const EjercicioEfecto=()=>{
    const [counter,setCounter]=useState(0)
    useEffect(()=>{
        document.title=counter
    },[counter])

    const sumarTitle=()=>{
        setCounter((prev)=>{
            return prev + 1
        })
    }
    return(
        <div>
            <button className="btn btn-primary" onClick={sumarTitle}>sumar</button>
        </div>
    )
}
export default EjercicioEfecto;