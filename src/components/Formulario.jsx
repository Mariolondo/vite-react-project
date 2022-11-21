import React, { Fragment,useState } from 'react'

function Formulario() {

  const[datos, setDatos]=useState({fecha: "", hora: "",  ancho:"", largo:"", alto:"", peso:"", direco:"",ciureco:"", nomdes:"", cedesti:"", dientre:"", ciuentre:""})

  const handleInputChange = (event)=>{
    setDatos({...datos,[event.target.name]: event.target.value})
  }

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(datos.nombre + " " + datos.apellido)
  }
  return (
    <Fragment>
      <h1>Agregar Orden</h1>
      <form className="col" onSubmit={enviarDatos}>
        <div className="col-md-3" >
          <input 
          className="form-control" 
          type="text" 
          name="fecha" 
          placeholder='Fecha' 
          onChange={handleInputChange}/>
        </div>

        <div className="col-md-3" >
          <input 
          className="form-control" 
          type="text" 
          name="hora" 
          placeholder='Hora' 
          onChange={handleInputChange}/>
        </div>

        <div className="col-md-3" >
          <input 
          className="form-control" 
          type="text" 
          name="ancho" 
          placeholder='Ancho' 
          onChange={handleInputChange}/>
        </div>

        <div className="col-md-3" >
          <input 
          className="form-control" 
          type="text" 
          name="largo" 
          placeholder='Largo' 
          onChange={handleInputChange}/>
        </div>

        <div className="col-md-3" >
          <input 
          className="form-control" 
          type="text" 
          name="alto" 
          placeholder='Alto' 
          onChange={handleInputChange}/>
        </div>

        <div className="col-md-3" >
          <input 
          className="form-control" 
          type="text" 
          name="peso" 
          placeholder='Peso' 
          onChange={handleInputChange}/>
        </div>

        <div className="col-md-3" >
          <input 
          className="form-control" 
          type="text" 
          name="direco" 
          placeholder='Dirección de recogida' 
          onChange={handleInputChange}/>
        </div>

        <div className="col-md-3" >
          <input 
          className="form-control" 
          type="text" 
          name="ciureco" 
          placeholder='Ciudad de recogida' 
          onChange={handleInputChange}/>
        </div>

        <div className="col-md-3" >
          <input 
          className="form-control" 
          type="text" 
          name="nomdes" 
          placeholder='Nombre destinatario' 
          onChange={handleInputChange}/>
        </div>

        <div className="col-md-3" >
          <input 
          className="form-control" 
          type="text" 
          name="cedesti" 
          placeholder='Cedula destinatario' 
          onChange={handleInputChange}/>
        </div>

        <div className="col-md-3" >
          <input 
          className="form-control" 
          type="text" 
          name="direntre" 
          placeholder='Direccion de entrega' 
          onChange={handleInputChange}/>
        </div>

        <div className="col-md-3" >
          <input 
          className="form-control" 
          type="text" 
          name="ciuentre" 
          placeholder='Ciudad de entrega' 
          onChange={handleInputChange}/>
        </div>

        <button className='btn btn-primary' type='submit'>Agregar</button>
      </form>
    </Fragment>
  )
}

export default Formulario