import { NavLink } from "react-router-dom";

const CategoryImg=()=>{
    return(
    <div className="container-fluid bg-light d-flex justify-content-center gap-4 p-3">
        <div className="text-center">
            <NavLink to={"/categoria/mujer"} className="text-decoration-none">
                <img
                src="https://assets.adidas.com/images/w_600,f_auto,q_auto/b889ebc77248474ba68d106a33aacd00_9366/Zapatillas_Drop_Step_Low_2.0_Blanco_JS3242_00_plp_standard.jpg"
                alt="zapatillas drop step low 2.0"
                className="rounded-circle"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <p className="text-dark m-0">Mujer</p>
            </NavLink>
        </div>

        <div className="text-center">
            <NavLink to={"/categoria/hombre"} className="text-decoration-none">
                <img
                src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/ae9587cb634b4113b94a264aa874e125_9366/zapatillas-superstar.jpg"
                alt="zapatillas superstar"
                className="rounded-circle"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <p className="text-dark m-0">Hombre</p>
            </NavLink>
        </div>
    </div>
    )
}
export default CategoryImg;