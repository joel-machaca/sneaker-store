import { useRef } from "react"

const CompUseRef =()=>{

    const input=useRef(null)

    const handleClick=()=>{
        input.current.focus()
    }
    return(
        <div>
            <div>
                <label>Campo de texto</label>
                <input type="text" className="form-control w-auto " ref={input}/>
                <button className="btn btn-primary" onClick={handleClick}>click</button>
            </div>
        </div>
    )
}

export default CompUseRef