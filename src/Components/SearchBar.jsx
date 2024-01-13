'use client'
import { WeatherContext } from '@/Context/WeatherContext'
import React, { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import logo from '../Icon/Dark Icons SVG/Logo.svg'
import Image from 'next/image'


export default function () {
    const { location, setLocation, setCity, loading,setError,Weather } = useContext(WeatherContext)
    
    const handleClick = () =>{
        let regex = /^[a-zA-Z]+$/;
        if (regex.test(location)) {
            setCity(location)
            setLocation('')
            setError('')
        }
        if (Weather.message === 'city not found') {
            setError("invalid city name")
        }
    }

    const handleKeyDown = (ev) => {
        if (ev.key === 'Enter') {
            let regex = /^[a-zA-Z]+$/;
                if (regex.test(location)) {
                    setCity(location)
                    setLocation('')
                    setError('')
                }
        }
        if (Weather.message === 'city not found') {
            setError("invalid city name")
        }
        
    }
   
    return (
      <div className='flex gap-x-2'>
      <div>
          {loading && <Skeleton count={1} /> || 
              <Image src={logo} alt='Logo' height={40} className='bg-gray-800 p-2 rounded-md' />
          }
            </div>
            <div className='flex items-center'>
                {
                    loading && <Skeleton count={1} /> || 
                    <input type="text" placeholder='Search location' value={location} onChange={(e)=> setLocation(e.target.value)} className='bg-gray-800 p-2 h-11 rounded-tl-md rounded-bl-md focus:outline-none  text-gray-400 border-none w-[50vw] sm:w-[60vw] md:w-[70vw] lg:w-[35vw]' onKeyDown={(ev)=> handleKeyDown(ev) } />
                }
                {
                    loading && <Skeleton count={1} /> || 
                    <button className='bg-gray-800 p-2 rounded-tr-md rounded-br-md h-11 hover:bg-gray-700' onClick={handleClick}><SearchIcon className='text-gray-500'/></button>
                }
            </div>
            </div>
  )
}
