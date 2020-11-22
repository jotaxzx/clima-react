import React from 'react'

export const Clima = ({resultado}) => {

    const {main} = resultado;

    if (!main) return null;

    const kelvin = 273.15;

    return (
        <div className="container-fluid mt-4 col-8 offset-2">
            
                
                <div className="card text-white bg-dark mb-3" style={{maxwidth: '18rem'}}>
                <div className="card-header text-center">El Clima en:<span className="text-warning"> <b>{resultado.name}</b></span> </div>
                        <div className="card-body">
                        <p className="text-left" >Humedad: { parseInt(main.humidity)} %  </p>
                            <p className="temperatura text-center">{ parseInt(main.temp - kelvin)}<span> &#x2103;</span></p>

                            

                            <p className="text-center text-warning">Temperatura maxima: { parseInt(main.temp_max - kelvin)}<span> &#x2103;</span></p>

                            <p className="text-center ">Temperatura minima: { parseInt(main.temp - kelvin)}<span> &#x2103;</span></p>
                            
                        </div>
                    </div>
                

            
            
        </div>
    )
}
