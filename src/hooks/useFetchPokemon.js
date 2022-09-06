import { useEffect, useState } from "react"

export const useFetchPokemon = () => {

    const [state, setState] = useState({
        error: false,
        loading: true,
        pokemon: null,
        id: null
    })

    const RandomId = Math.floor(Math.random() * 806 + 1)

    const [ pokemonID, setPokemonId ] = useState(RandomId)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
          .then(res => res.json())
          .then(data => {
            // Si todo esta cool, actualizamos el pokemón
            // Y le indicamos que no hay error
            setState({
                ...state,
                pokemon: data,
                loading: false,
                id: pokemonID
            })
          })
          .catch(err => {
            setState({
                ...state,
                loading: true,
                error: true,
                id: pokemonID
            })
          })
      }, [pokemonID])

      return {
        ...state,
        state,
        setState,
        setPokemonId
      }
}