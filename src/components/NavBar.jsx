import { Link, NavLink } from 'react-router-dom'
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex justify-content-center align-items-center gap-4" href="#">
          <div >
            <img src="/logoPage.svg" alt="logo de la pagina" className="logo"/>
          </div>
          <span className="fw-bold fs-1">BackShop</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav fs-5 d-flex gap-5">
            <li className="nav-item">
              <NavLink
              to="/"
              className={({active})=>active?"nav-link active":"nav-link"}
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Categorias
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                  to="/categoria/mujer" 
                  className={({active})=>active?"dropdown-item active":"dropdown-item"}
                  >
                    Mujeres
                  </NavLink></li>
                <li>
                  <NavLink 
                  to={"/categoria/hombre"}
                  className={({active})=>active?"dropdown-item active":"dropdown-item"}
                  >
                    Hombres
                  </NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink 
              to={"/contacto"}
              className={({active})=>active?"nav-link active":"nav-link"}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
