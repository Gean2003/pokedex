import {useEffect, useState} from "react"
import axios from 'axios'

const useFetch = (url) => {
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
	axios.get(url)       
	    .then(res => setPokemon(res.data))
	    .catch(err => console.log(err))
    }, [url])

    
    return pokemon
}

export default useFetch
