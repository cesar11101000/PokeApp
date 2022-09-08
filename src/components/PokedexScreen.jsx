import React from 'react'
import { Message } from './Message'
import { Stat } from './Stat'

export const PokedexScreen = ({pokemon, loading, error }) => {
  return (
    <div className="pokedex-screen">

    { 
    
        error ?
          <Message error={error}/>
        :
        !pokemon || loading ? // Si no hay pokemon o si esta cargando
           <Message loading={loading}/>
        : 
           // Todo cool, entonces devuelve un lindo pokemon
        <div className="pokemon-info">
            <h2 className="pokemon-name">{pokemon.name}</h2>
            
            <img
            className="pokemon-img"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            />

            <ul className="pokemon-stats">
              {pokemon.stats.map(item => <Stat key={item.stat.name} item={item}/>)}
            </ul>
        </div>
    }
  </div>
  )
}
