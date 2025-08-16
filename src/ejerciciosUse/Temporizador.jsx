import { useEffect, useState } from "react";

const Temporizador=()=>{
    const [counter,setCounter]=useState(0)
    useEffect(()=>{
        console.log("entramos al useEffect")
        const intervalCounter=setInterval(()=>{
            setCounter((prev)=>{
                return prev + 1
            })
        },1000)

        return()=>{
            console.log("Desmontando⌛⌛")
            clearInterval(intervalCounter)
        }
    },[])

    return(
        <div className="mb-4">
            <h1>Temporizador</h1>
            <div className="bg-light shadow-lg rounded" style={{width:300, height:50}}>
                <p className="fs-3 text-center">{counter}</p>
            </div>
        </div>
    )
}
export default Temporizador;