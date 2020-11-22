import { Forms } from './components/Forms';
import { Header } from './components/Header';
import { Clima } from './components/Clima';
import { Error } from './components/Error';
import React, { useEffect, useState } from 'react';

function App() {


      // estado busqueda del formulario
      const  [busqueda, guardarBusqueda] = useState({
        pais: '',
        ciudad: ''
    });

    const {pais, ciudad} = busqueda;

    // para que al escribir en ciudad, haga la consulta solo de 1 vez y no por tecla escrita
    const [consulta, guardarConsulta] = useState(false)

    const [ resultado, guardarResultado] = useState({});

    const [error, guardarError] = useState(false);

    useEffect(() => {
        const consultaApi = async   () => {

          if (consulta) {
          const apiKey = 'c5d1d8adb4ccf9808573e7c5759ee791';
          
          const respuesta = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`);

          const resultado = await respuesta.json();
          
          console.log(resultado);
          guardarResultado(resultado);
          guardarConsulta(false);

            // detecta si hubo un error en la consulta
          if (resultado.cod === '404') {
            guardarError(true)
          }else{
            guardarError(false);
          }
          


          }

          


        }
    consultaApi();
    }, [consulta])

      // carga condicional de componente
    let componente;
    if (error) {
      componente = <Error mensaje="No hay resultados" />      
    }else{
      componente =  <Clima 
      resultado={resultado}
      />
    }


  return (
    <>
    <Header 
    titulo="Clima React"
    />
    
      <div className="container-fluid">
        <div className="row">

            <div className="col-md-6 col-12 bg-info"> 
            
                <Forms
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsulta={guardarConsulta}
                />
            </div>

            <div className="col-md-6 col-12 bg-info">              
             {componente}
            </div>





        </div>

      </div>




    </>
  );
}

export default App;
