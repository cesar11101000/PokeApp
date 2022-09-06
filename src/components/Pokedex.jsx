import React from 'react'
import { useFetchPokemon } from '../hooks/useFetchPokemon';
import { PokedexForm } from './PokedexForm'
import { PokedexScreen } from './PokedexScreen'

export const Pokedex = () => {

    const { state, pokemon, loading, error, id, setState, setPokemonId} = useFetchPokemon();
    
  return (
    
    <div className="pokedex">
        <div className="pokedex-left">

            <div className="pokedex-left-top">
                <div className='light is-sky is-big'/>
                <div className="light is-red" />
                <div className="light is-yellow" />
                <div className="light is-green" />
            </div>

            <div className="pokedex-screen-container">
                <PokedexScreen
                    pokemon={pokemon}
                    loading={loading}
                    error={error}
                />
            </div>

            <div className="pokedex-left-bottom">
                <div className="pokedex-left-bottom-lights">
                <div className="light is-blue is-medium" />
                <div className="light is-green is-large" />
                <div className="light is-orange is-large" />
                </div>
                <PokedexForm 
                    state = { state }
                    setState = { setState }
                    setPokemonId = { setPokemonId }                    
                />
            </div>

        </div>

        <div className="pokedex-right-front" />
        <div className="pokedex-right-back" />
  </div>

  )
}
