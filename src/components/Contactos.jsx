const Contactos = () => {
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        {/* Encabezado */}
        <div className="text-center mb-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
            alt="Logo de Adidas"
            className="mb-4"
            style={{ width: '100px' }}
          />
          <h1 className="display-4 fw-bold">Contáctanos</h1>
          <p className="lead text-muted">
            ¿Tienes alguna pregunta, comentario o necesitas ayuda? Estamos aquí para asistirte. Rellena el siguiente formulario y nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>

        {/* Formulario de contacto */}
        <div className="card shadow mx-auto" style={{ maxWidth: '600px' }}>
          <div className="card-body p-4">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nombre completo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="tu.email@ejemplo.com"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="form-label">
                  Mensaje
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Escribe tu mensaje aquí..."
                  required
                ></textarea>
              </div>

              <div className="d-grid gap-2">
                <button
                  type="submit"
                  className="btn btn-dark btn-lg"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactos;