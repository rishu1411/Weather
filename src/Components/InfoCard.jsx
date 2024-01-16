'use client'
import { WeatherContext } from '@/Context/WeatherContext'
import React, { useContext, useState,useEffect } from 'react'
import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { nightBG,dayBG,nightSVG,daySVG } from './data'

export default function InfoCard() {
  const { Weather, loading,error,City} = useContext(WeatherContext)
  const [BG,setBG] = useState('')
  const [SVG, setSVG] = useState('')
 
  
  
  let temp, date, city, maxTemp, minTemp, description, pressure, bg,svg
  if (Weather.list) {   
    temp = Math.round(Weather.list[0].main.temp) - 273
    date = Weather.list[0].dt_txt.split(' ')[0]
    maxTemp = Math.round(Weather.list[0].main.temp_max) - 273
    minTemp = Math.round(Weather.list[0].main.temp_min) - 273
    description = Weather.list[0].weather[0].description
    pressure = Weather.list[0].main.pressure

    if (Weather.list[0].weather[0].main === 'Clear') {
      bg = BG.Clear
      svg = SVG.Clear
    }
    if (Weather.list[0].weather[0].description === 'overcast clouds' ) {
      bg = BG.Clouds
      svg = SVG.Clouds
    }
    if (Weather.list[0].weather[0].description === 'scattered clouds' ) {
      bg = BG.FewClouds
      svg = SVG.FewClouds
    }
    if (Weather.list[0].weather[0].description === 'few clouds' ) {
      bg = BG.FewClouds
      svg = SVG.FewClouds
    }
    if (Weather.list[0].weather[0].description === 'broken clouds' ) {
      bg = BG.FewClouds
      svg = SVG.FewClouds
    }
    if (Weather.list[0].weather[0].main === 'Rain') {
      bg = BG.Rain
      svg = SVG.Rain
    }
    if (Weather.list[0].weather[0].main === 'Snow') {
      bg = BG.Snow
      svg = SVG.Snow
    }
    if (Weather.list[0].weather[0].main === 'Storm') {
      bg = BG.Storm
      svg = SVG.Storm
    }
  }


  if (Weather.city) {
    city = Weather.city.name
  }

  useEffect(() => {
    const d = new Date()
    const hour = d.getHours()
    if (hour > 6 && hour < 18) {
      setBG(dayBG)
      setSVG(daySVG)
    }
    else {
      setBG(nightBG)
      setSVG(nightSVG)
      
    }
  },[Weather])



   
  return (
<>
    
      {error?  <section className='bg-red-500 h-[75vh] rounded-md my-8 '>  <h3 className='text-2xl text-white p-4 capitalize'>{error}</h3> </section> : 
        
        loading && <Skeleton count={1} /> ||

        <section className={`${bg}  bg-no-repeat bg-center bg-cover  h-[75vh]  my-8 p-4 rounded-md flex flex-col justify-between`}>
      <div className='flex items-center justify-between text-white'>
          <div className='self-start'>
  
            {loading && <Skeleton /> ||<h3 className='text-2xl'>{city}</h3>}
            {
              loading &&  <Skeleton count={1}/>||<p className='text-gray-300 text-sm'>{date }</p>
          }
          
        </div>

        <p>Pressure: {pressure}Pa</p>
      </div>

      <div className='flex justify-between items-end'>
        <div className='text-white font-bold'>
          {loading&& <Skeleton count={1}/>|| <h3 className='text-3xl '>{temp}℃</h3>}
          
          {loading&& <Skeleton/> || <p className='text-sm '>{maxTemp}℃ / {minTemp}℃ - <span className='text-gray-200 capitalize font-semibold '>{description}</span></p> }
          
        </div>
        <Image src={svg} alt='Sun' height={200} />

      </div>

      </section>}
      </>
  )
}

