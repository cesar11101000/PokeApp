import React, { useState } from 'react'

export const PokedexForm = ({ state, setState, setPokemonId}) => {

    const [ pokemon, setPokemon ] = useState('')
     
    const handleSubmit = (e) => {
        e.preventDefault()

        if (pokemon !== '' && !isNaN(parseInt(pokemon))) {
        
            if(parseInt(state.id) !== parseInt(pokemon)){
               
                const pokemonID = parseInt(pokemon)
                
                // Estara cargando por que hará una petición a la API
                console.log("entra")
                setState({
                      ...state,
                      loading: true,
                      error: false
                })
                
                setPokemonId(pokemonID)

                setState({
                    ...state,
                    id: pokemonID
                })

                setPokemon('')

                }
            else{
                setState({
                    ...state,
                    loading: false,
                    error: true
                })
            }
        }
        setPokemon('')
        // setState({
        //     ...state,
        //     loading: false,
        //     error: false
        // })
        
     }
  
    return (
      <form className="pokemon-form" onSubmit={handleSubmit}>
        <input
          className="pokemon-input"
          type="text"
          name="pokemon"
          value={pokemon}
          placeholder="Busca tu pokemon"
          //Actualizas el valor del input cuando el usuario teclea
          onChange={e => setPokemon(e.target.value)}
          autoComplete="off"/>
        <input type="submit" className="pokemon-btn" value=""/>
      </form>
)}
