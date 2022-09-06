import React from 'react'

export const Message = ({ error = false, loading = false}) => {
  return (
    <div className='m-auto col-auto p-5 text-center'>
        <div className={`spinner-grow ${error ? "text-danger": loading ? "text-success" : null}`} role="status">
            <span className="sr-only">Loading...</span>
        </div>

        <div className={`text-center ${error ? "text-danger": loading? "text-success" : null}`}>
            {
                error ?
                "Introduzca otro codigo"
                :
                loading ?
                "Cargando..."
                : 
                null
            }
        </div>
    </div>
   
  )
}
