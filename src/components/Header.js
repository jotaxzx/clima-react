import React from 'react'

export const Header = ({titulo}) => {
    return (
        <div className="container-fluid bg-info">
            <div className="row">
                <h1 className="col-8 offset-2 text-center text-warning"> {titulo}</h1>
                
            
            </div>
            
            
        </div>
    )
}
