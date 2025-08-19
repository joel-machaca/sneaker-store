const CartWidget = () => {
  return (
    <button type="button" className="btn btn-primary position-relative me-5">
      <div>
        <img src="/carrito.svg" alt="carrito de compras" className="logoShop"/>
      </div>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        1
      </span>
    </button>
  );
};

export default CartWidget;
