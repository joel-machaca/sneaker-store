import { useState } from "react"

const UseState=({num})=>{
    const [counter,setCounter]=useState(1)
    const [texto,setTexto]=useState("")

    const handleClick=(e)=>{
        setTexto(e.target.value)
    }

    const aumentar=()=>{
        setCounter((prev)=>{
            return prev<num?prev+1:prev
        })
    }

    const decrementar=()=>{
        setCounter((prev)=>{
            return prev>1?prev-1:prev
        })
    }



    return(
        <div className="d-flex flex-column gap-3">
            <div className="col-auto">
                <div class="btn-group d-inline-flex" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary" onClick={decrementar}>-</button>
                    <button type="button" className="btn btn-primary">{counter}</button>
                    <button type="button" className="btn btn-primary" onClick={aumentar}>+</button>
                </div>
            </div>
            <div>
                <label>Campo de texto</label>
                <input type="text" className="form-control w-auto " onChange={handleClick}/>
                <p className="bg-secondary" style={{width:250, height:"auto", borderRadius:15, padding:5, color:"white"}}>Valor: {texto}</p>
            </div>
        </div>
    )
}
export default UseState