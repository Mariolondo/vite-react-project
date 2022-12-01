import React, { Fragment, useState } from "react";

function Registro() {
  const [datos, setDatos] = useState({ Nombre: "", Apellidos: "" });
  const handleImputchange = (event) => {
    setDatos({ ...datos, [event.target.name]: event.target.value });
  };
  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(datos.Nombre + " " + datos.Apellidos);
  };

  return (
    <Fragment>
      <section class="">
        <div class="container">
          <div class="abs-center-reg">
            <form className="border p-3 form" onSubmit={enviarDatos}>
              <h2>Gestion de paquetes - Registro</h2>
              <div className="border p-3">
                <div className="form-outline mb-4">
                  <label htmlFor="">Nombre</label>
                  <input
                    className="form-control "
                    type="text"
                    name="Nombre"
                    placeholder="Ingrese su nombre"
                    onChange={handleImputchange}
                  />
                </div>

                <div className="form-outline mb-4">
                  <label htmlFor="">Usuario</label>
                  <input
                    className="form-control "
                    type="text"
                    name="Usuario"
                    placeholder="Ingrese su usuario"
                    onChange={handleImputchange}
                  />
                </div>

                <div className="form-outline mb-4">
                  <label htmlFor="">Contraseña</label>
                  <input
                    className="form-control"
                    type="password"
                    name="Contraseña"
                    placeholder="Ingrese su contraseña"
                    onChange={handleImputchange}
                  />
                </div>

                <div className="form-outline mb-4">
                  <label htmlFor="">Correo</label>
                  <input
                    className="form-control"
                    type="Email"
                    name="Contraseña"
                    placeholder="Ingrese su correo"
                    onChange={handleImputchange}
                  />
                </div>

                <button class="btn btn-primary btn-block mb-4" type="submit">
                  Crear
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Registro;
