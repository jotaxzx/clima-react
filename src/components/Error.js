import React from 'react';

export const Error = ({mensaje}) => {
    return (
        <div className="container-fluid">
            <div className="row">
                
            <p className=" alert alert-danger col-12 text-center "> {mensaje} </p>
            
            </div>
            
        </div>
    )
}
export default Error;