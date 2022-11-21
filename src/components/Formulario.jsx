import React, { Fragment,useState } from 'react'

function Formulario() {

  const[datos, setDatos]=useState({nombre: "", apellido: ""})

  const handleInputChange = (event)=>{
    setDatos({...datos,[event.target.name]: event.target.value})
  }

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(datos.nombre + " " + datos.apellido)
  }
  return (
    <Fragment>
      <h1>Formulario</h1>
      <form className="col" onSubmit={enviarDatos}>
        <div className="col-md-3" >
          <input 
          className="form-control" 
          type="text" 
          name="nombre" 
          placeholder='Ingrese nombre' 
          onChange={handleInputChange}/>
        </div>
        <div className="col-md-3" >
          <input 
          className="form-control" 
          type="text" 
          name="apellido" 
          placeholder='Ingrese apellido' 
          onChange={handleInputChange}/>
        </div>
        <button className='btn btn-primary' type='submit'>Enviar</button>
      </form>
    </Fragment>
  )
}

export default Formulario