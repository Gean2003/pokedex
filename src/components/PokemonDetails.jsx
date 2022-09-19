import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const PokemonDetails = () => {
    const [data, setData] = useState()

    const {name} =  useParams()

    useEffect(() => {
	let url = `https://pokeapi.co/api/v2/pokemon/${name}`
	axios.get(url)
	    .then(res => setData(res.data))
	    .catch(err => console.log(err))
    }, [])


    return (
	<div className='flex flex-col items-center justify-center w-full h-auto py-5 lg:h-auto'>
	<div className='lg:mx-auto  lg:max-w-7xl w-[355px] lg:w-[800px] py-5' >
	    <div className='w-full'>
		<img className='lg:w-[20%] w-[40%] sm:w-[30%] mx-auto' src={data?.sprites.other["official-artwork"]["front_default"]} alt="" />
	    </div>

	    <div className='flex justify-around px-3'>
		<div><h3 className='font-semibold'>{data?.weight}</h3> <p> Weight</p> </div>
		<div><h3 className='font-semibold'>{data?.height}</h3> <p>Height</p> </div>
	    </div>

	    <h3 className='text-4xl font-bold text-center py-7' > {data?.name}</h3>
	    <p className='py-2 mx-auto my-4 font-bold text-center'>#{data?.order}</p>
	    
	    <div className='flex flex-col items-center px-4 lg:flex-row lg:flex gap-5 lg:gap-2'>
		<div className=' w-[100%] lg:w-[50%] py-4'>
		    <h3 className='my-6 font-semibold text-center'>Type</h3>
			<div className='flex items-center justify-around px-3 gap-2'>
			    {
				data?.types.map(slot => (
				    <span className={`lg:px-3 lg:py-3 font-bold ${slot.type.name} px-1 py-2 w-[200px] text-center`} key={slot.type.url}>{slot.type.name}</span>
				))
			    }
			</div>
		</div>

		<div className='w-[100%]  lg:w-[50%] py-4'>
		    <h3 className='my-6 font-semibold text-center'>Abilities</h3>
		    <div className='flex items-center justify-around px-3 gap-2'>
			{
			    data?.abilities.map(abilitie => (
				<span className='text-[15px] lg:px-3 lg:py-3 font-bold  bg-gray-50 w-[200px] py-2 px-1 text-center'>{abilitie.ability.name}</span>
			    ))
			}
		    </div>
		</div>
	    
	    </div>

	</div>

	<div className='my-6 max-w-7xl w-[90%] px-5 py-5'>
	    <h3 className='my-3 text-center text-[30px] font-bold'>Moves</h3>
	    <div className='flex flex-wrap items-center justify-center mx-auto sm:justify-between gap-7 lg:max-w-7xl sm:gap-4'>
		{
		    data?.moves.map(move => (
			<p className='font-semibold py-2 px-2 bg-white rounded' key={move.move.name} >{move.move.name}</p>
		    ))
		}
	    </div>
	</div>
    </div>
    )
}

export default PokemonDetails
