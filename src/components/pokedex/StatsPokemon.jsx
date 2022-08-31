import React from 'react'
const StatsPokemon = ({stat}) => {
    return (
    <li>
	<p  className='text-[16px] w-[60px] sm:w-[50px] font-light' >{stat.stat.name}</p>
	<p className='font-semibold'>{stat.base_stat}</p> 
	</li>
    )
}

export default StatsPokemon
