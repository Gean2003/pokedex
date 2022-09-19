import React from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {setNameTrainer} from '../store/slices/nameTrainer.slice'
import image from './../assets/image.svg'
import pokeball from './../assets/pokeball.png'

const Home = () => {
const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
	e.preventDefault()
	const inputValue = e.target.name.value.trim()
    
	if(inputValue.length !== 0) {
	    dispatch(setNameTrainer(inputValue))
	    navigate('/pokedex')
	}
	e.target.name.value = ""
    }


    return (
    <main className='relative h-screen'>
	<div className='flex items-center justify-center h-full mx-auto max-w-7xl'>
	    <div>
		<img src ={image}  alt="" className='mb w-[90%] mx-auto lg:w-full'/>
		<h1 className='my-6  lg:text-[45px] font-semibold text-center text-red text-[36px]'>¡Hola entrenador!</h1>
		 <p className='text-xl font-medium text-center sm:text-2xl mb'>Para poder comenzar. dame tu nombre</p>
	    
	    <div className='text-center'>
		  <form onSubmit={handleSubmit} >
		    <input type="text" id='name' placeholder='Tu nombre' className='px-3 py-3 lg:w-[400px] w-[90%] border-2 border-slate-200' />
		    <button className='px-3 py-3 my-5 font-medium text-white bg-red-button'>Comenzar</button>
		  </form>

	    </div>
	   
	    </div>
	</div>
	<div className='absolute bottom-0 left-0 right-0'>
	    <div className='relative w-full py-5 bg-red-tarjet text-red'>
		<img src={pokeball} alt="pokeball" className='absolute right-[40%] lg:right-[45%] top-3' />
	    </div>
	    <div className='w-full py-3 text-black bg-black'>ad</div>
	</div>
	
    </main>
    )
}
export default Home
