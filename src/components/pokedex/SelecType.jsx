import React,{useEffect, useState} from 'react'
import axios from 'axios'

const SelecType = ({setOptionType, optionType}) => {


  const [listTypes, setListTypes] = useState()

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/type'
    axios.get(URL)
      .then(res => setListTypes(res.data.results))
      .catch(err => console.log(err))
  }, [])

  const handleChange = e => {
    setOptionType(e.target.value)
  }


    return (	
	<select className='mx-auto py-2 bg-white px-2 rounded lg:mx-0' value={optionType} onChange={handleChange}>
      <option value="All">All pokemons</option>
      {
        listTypes?.map(type => (
          <option key={type.name} value={type.name}>{type.name}</option>
        ))
      }
    </select>    
    )
}

export default SelecType
