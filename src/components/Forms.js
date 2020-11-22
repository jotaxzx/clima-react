import React, { useState } from 'react';
import Error  from './Error';

export const Forms = ({busqueda, guardarBusqueda, guardarConsulta}) => {



    const {pais, ciudad} = busqueda;

    //estado de error formulario.
    const [error, guardarError] = useState(false);


    const handleChange = (e) => {
        
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });

    }

    // funcion onSumbit
    const handleSubmit = (e) => {
        
        e.preventDefault();

        if (pais.trim() === '' || ciudad.trim() === '') {
            guardarError(true)
            return;
        }

        guardarError(false)
        //pasar al componente principal lo escrito en ciudad y pais para captar lo escrito de 1 sola vez como frase completa y no por letra
        guardarConsulta(true)
    }



    return (
        
        <form onSubmit={handleSubmit} className="mb-5 col-8 offset-2">

            

            <div className="form-group ">
            {error ? <Error mensaje="Ambos campos son obligatorios"/> : null}  
                <label>Pais:</label>
                <select
                    className="form-control"
                    name="pais"
                    onChange={handleChange}
                    value={pais}
                    >
                    <option value="">--Selecciona una Ciudad--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="CL">Chile</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="PE">Perú</option>

                </select>   
            </div>

            <div className="form-group ">
                <label>Ciudad:</label>

                <input 
                type="text" 
                name="ciudad"
                className="form-control"  
                placeholder="Ej: Santiago"
                onChange={handleChange}
                value={ciudad}
                
                />
                
                <button className="btn btn-warning btn-block mt-4">Buscar</button>
            </div>

            
        </form>
        
    )
}
