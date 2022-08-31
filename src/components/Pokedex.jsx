import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import image from './../assets/image.svg'
import PokemonCard from './pokedex/PokemonCard'
import axios from 'axios'
import SelecType from './pokedex/SelecType'

const Pokedex = () => {
    const [search, setSearch] = useState("")
    const [pokemonData, setPokemonData] = useState([])
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const [nextPage, setNextPage] = useState()
    const [previousPage, setPreviousPage] = useState()
    const [optionType, setOptionType] = useState('All')

    const nameTrainer = useSelector(state => state.nameTrainer)


    useEffect(() => {
	pokeFetch()    
    }, [url, optionType])

    const pokeFetch = () => {
	if (optionType !== 'All') {
    	
	     axios.get(`https://pokeapi.co/api/v2/type/${optionType}/`)
	    .then(res => {
	     const arr = res.data.pokemon.map(e => e.pokemon)
	    const obj = {
		results: [{arr}]
		 }
	    setPokemonData(arr)
		console.log(arr)
        })
        .catch(err => console.log(err))
	}else{
	    axios.get(url)
		.then(res => {  setPokemonData(res.data.results), setNextPage(res.data), setPreviousPage(res.data)})
		    .catch(err => console.log(err))
	}
		

    }
console.log(pokemonData)

// console.log(nextPage)

    const changeInput = (e) => {
	setSearch(e.target.value.toLowerCase())
    }


    let pokefilter = []

	if (!search) {
	    pokefilter = pokemonData
	    
	}else{

	    pokefilter = pokemonData.filter(dato => dato.name.toLowerCase().includes(search.toLocaleLowerCase()) ) 
  }

    const next = () => {
	setUrl(nextPage.next)
    }

    const previous = () => {

	if (previousPage.previous == null) {}
	else{
	    setUrl(previousPage.previous)

	}
    }


    return (
	<div className='h-auto px-5 py-4 mx-auto max-w-7xl'>
	<img src={image} alt="" />
	    <h3 className='text-[20px] sm:text-[27px] my-5 font-medium'> <span className='text-red'> Bienvenido {nameTrainer}</span>, aqui podras encontrar tu pokemon favorito</h3>

	    <div className='flex flex-col px-3 gap-4 lg:gap-0 lg:items-baseline lg:flex lg:flex-row lg:justify-between'>
	    <form>
		    
		<input type="text" id='name'placeholder='Busca un pokemon' value={search} onChange={changeInput} className='px-3 py-2 lg:w-[400px] w-[100%] border-2 border-slate-200 rounded-md' /> 
	    </form>
		
	    <SelecType setOptionType={setOptionType}
			optionType={optionType}/>
	   
	</div>
	
	    <div className='flex flex-wrap items-center justify-center w-full py-3 mx-auto my-10 gap-3'>
		  { 
		     pokefilter?.map(pokemon => ( 
		 	<PokemonCard key={pokemon.url} 
		 		     pokemon={pokemon} 
		 		      /> 
		     ))
		}
	    </div>

	    <div className='flex justify-center py-3 text-3xl text-white gap-5'>
		<button onClick={previous} className='w-8 sm:w-10 aspect-square bg-red-tarjet rounded-[50%] flex justify-center items-center'><i className='bx bx-left-arrow-alt'></i></button>
		<button onClick={next} className='w-8 sm:w-10 aspect-square bg-red-tarjet rounded-[50%] flex justify-center items-center'><i className='bx bx-right-arrow-alt' ></i></button>
	    </div>
	</div>
    )
}

export default Pokedex
