import React from 'react'
import {useNavigate} from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import StatsPokemon from './StatsPokemon'

const PokemonCard = ({pokemon}) => {
// console.log(pokemon)

    const {url} = pokemon
    const pokeInfo = useFetch(url)
    // pokeInfo? console.log(pokeInfo.types[0].type.name) : console.log('nada')

// const typePokemon = pokeInfo?.types[0].type.name
    const navigate = useNavigate()

    const handleClick = () => {
		navigate(`/pokedex/${pokeInfo.name}`)
    }


    return (
	<div onClick={handleClick}  className= { `cursor-pointer w-[345px] bg-white lg:w-[300px] border-3 relative lg:h-[500px] h-[500px] sm:h-[650px] ${pokeInfo?.types[0].type.name}p ` }>
	    <img src={pokeInfo?.sprites.other["official-artwork"]["front_default"]} alt="pokemonimagen" className='w-[50%] absolute sm:top-[100px] sm:left-[75px] top-[60px] left-[75px] lg:top-[70px]' />
	    <div className={ ` w-full h-[35%] ${pokeInfo?.types[0].type.name} ` } ></div>
	<div className='w-full h-[65%]'>
	
	    <div className='pt'>
		<h3 className='my-4 text-center text-[18px] font-semibold'>{pokemon.name}</h3>
		
		<div className='text-center'>
		    {
		    pokeInfo?.types.map(type => (
			<span key={type.type.url}> /{type.type.name} </span>
		    ))
		}

		</div>
		
	    </div>
		
	    <div>
		<ul className='flex flex-row flex-wrap items-end justify-around py-5 mx-5 text-center gap-5 sm:justify-around sm:gap-5'>
		    {
			pokeInfo?.stats.map(stat => (
			 <StatsPokemon key={stat.stat.url}
					  stat={stat}/>
			))
		    }
		</ul>

	    </div>
	</div>
    </div>
    )
}

export default PokemonCard
