'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import Thermometer from '../Icon/Dark Icons SVG/Type=thermometer-simple-light.svg'
import Cloud from '../Icon/Dark Icons SVG/Type=cloud-rain-light.svg'
import Drop from '../Icon/Dark Icons SVG/Type=drop-light.svg'
import Wind from '../Icon/Dark Icons SVG/Type=wind-light.svg'
import { WeatherContext } from '@/Context/WeatherContext'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export default function DetailsCard() {
  const { Weather, loading, } = useContext(WeatherContext)
let feelsLike,POP,windSpeed,humidity
  if (Weather.list) {
    feelsLike = Math.round(Weather.list[0].main.feels_like) - 273
    POP = Weather.list[0].pop * 100
    windSpeed = Math.round(Weather.list[0].wind.speed) * 3.6 // to convert it into Km/hr
    humidity= Weather.list[0].main.humidity
  }
 
  const details = [
    {
      icon: Thermometer,
      title: 'Thermal Sensation',
      data: `${feelsLike}°C`
    },
    {
      icon: Cloud,
      title: 'Probability of rain',
      data: `${POP}%`
    },
    {
      icon: Wind,
      title: 'Wind Speed',
      data:`${ windSpeed} Km/hr`
    },
    {
      icon: Drop,
      title: 'Air Humidity',
      data: `${humidity}%`
    },
  
  ]

 



  return (
    <div className={` bg-gray-800 p-4 rounded-md mt-4 text-white`}>
      <h3 className='text-gray-400'> Todays Weather details</h3>

      {
        details.map((item, key) => {
          return (
      <div className='mt-4 border-b border-gray-700 pb-2 flex justify-between last:pb-0 last:border-0' key={key} >
              <div className=''>
                {loading&& <Skeleton count={1}/> ||

                  <span className='flex items-center text-sm gap-x-4'><Image src={item.icon} slt='Thermometer' height={25} />{ item.title}</span>
                }
              </div>
              {
                loading && <Skeleton count={1}/> || <p className='font-bold'>{item.data}</p>
              }
              
      </div>
            
          )
        })
     }

    </div>
  )
}

